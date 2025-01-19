// ===================================================================== >> imports <<
//
// ---------------------------------------------------- >> pagination <<
import { paginationModule } from "./pagination.js";
// ---------------------------------------------------- >> pagination <<
//
// --------------------------------------------------------- >> fetch <<
import { fetchData } from "../Fetch_Module/fetch_module.js";
// --------------------------------------------------------- >> fetch <<
//
// ===================================================================== >> imports <<
//
// ================================================================= >> Difinations <<
//
// CB = > { Content Builder }
//
// V = > { Variables }
//
// DC = > { Data Container }
//
// P = > { Pagination }
//
// B = > { Builder }
//
// L = > { Loading }
//
// I = > { Icon }
//
// T = > { Text }
//
// E = > { Empty }
//
// A = > { Animation }
//
// I = > { Information }
//
// CM = > { Class Management }
//
// AP = > { AppendChild }
//
// ================================================================= >> Difinations <<
//
// ============================================================= >> Content Builder <<
export function DataBuilder(
  Id,
  InforamtionApi,
  Filter,
  infoLimit = 27,
  responseCallBack,
  PadginationBtnListener,
  NotFoundText
) {
  // ---------------------------------------------------- >> V << ( Varibales )
  let page = 1;
  //
  let totalPage = 1;
  // ---------------------------------------------------- >> V << ( Varibales )
  //
  // --------------------------------------------------- >> DC << ( Data Container )
  const DataContainer = document.createElement("div");
  DataContainer.classList.add("DataContainer");
  DataContainer.id = Id;
  // --------------------------------------------------- >> DC << ( Data Container )
  //
  // ---------------------------------------------------- >> P << ( Pagination )
  //
  // --------------------------------------------- > V <
  let Pagination = null;
  // --------------------------------------------- > V <
  //
  // ------------------------------------------- > P B <
  fetchData(`${InforamtionApi}?${Filter}`)
    .then((response) => {
      //
      // -------------- > Calculate Total Page <
      totalPage = Math.ceil(response.data.list_length / infoLimit);
      // -------------- > Calculate Total Page <
      //
      // --------------- > Pagination CallBack <
      const pagination = paginationModule(
        FirstIndexOnClick,
        pervBtn,
        nextBtn,
        lastIndexOnClick,
        OnPageClick,
        totalPage,
        page
      );
      // --------------- > Pagination CallBack <

      // >> handeller function <<
      ClassManagement();
      DisplayData();
      ScrollManagement();
      // >> handeller function <<

      // >> append user pagination <<
      Pagination = pagination;
      // >> append user pagination <<
    })
    .catch((error) => {
      console.log(`Fetch Data Pagination Error Is : ${error}`);
    });
  // ------------------------------------------- > P B <
  //
  // ---------------------------------------------------- >> P << ( Pagination )
  //
  // ---------------------------------------------------- >> B << ( Builder )
  //
  // -------------------------------------------- > E L <
  const EmptyList = document.createElement("div");
  EmptyList.classList.add("EmptyList");
  //
  // --------------------------------------- A >>
  const ghostLink = document.createElement("iframe");
  ghostLink.classList.add("Ghost");
  ghostLink.setAttribute(
    "src",
    "https://lottie.host/embed/e932a03c-76fe-4317-b43b-2fc7fd3f33ad/vEY73EibQ6.lottie"
  );
  // --------------------------------------- A <<
  //
  // --------------------------------------- t >>
  const EmptyText = document.createElement("span");
  EmptyText.classList.add("EmptyText");
  EmptyText.textContent = NotFoundText;
  // --------------------------------------- t <<
  //
  // -------------------------------------- AP >>
  EmptyList.appendChild(ghostLink);
  EmptyList.appendChild(EmptyText);
  // -------------------------------------- AP <<
  //
  // -------------------------------------------- > E L <
  //
  // -------------------------------------------- > B I <
  const ContentList = document.createElement("div");
  ContentList.classList.add("ContentList");
  //
  function DisplayData() {
    //
    // ------------------------------------- V >>
    let api = `${InforamtionApi}?limit=${infoLimit}&page=${page}&${Filter}`;
    // ------------------------------------- V >>
    //
    // ------------------------------------- B >>
    fetchData(api)
      // ---------------- Builder Response <
      .then((response) => {
        //
        // { Varibels }
        const length = response.data.list_length;
        // { Varibels }
        //
        // { ClassManamgent }
        ContentList.innerHTML = "";
        setTimeout(() => {
          DataContainer.classList.add("show");
        }, 100);
        // { ClassManamgent }
        //
        // { Response CallBack }
        responseCallBack(response);
        // { Response CallBack }
        //
        // { in case of empty reponse }
        if (length == 0) {
          DataContainer.classList.add("big");
          DataContainer.appendChild(EmptyList);
          DataContainer.id = "";
        }
        // { in case of empty reponse }
        //
        // { in case of full reponse }
        else if (length <= 3) {
          DataContainer.classList.add("big");
          DataContainer.appendChild(ContentList);
        } else {
          DataContainer.appendChild(ContentList);
        }
        // { in case of full reponse }
        //
        // { Pagination Append }
        if (page <= totalPage) {
          DataContainer.appendChild(Pagination);
        }
        // { Pagination Append }
        //
        // { Pagination Class Managemnt }
        if (page == totalPage) {
          Pagination.classList.add("rounded");
        } else {
          Pagination.classList.remove("rounded");
        }
        // { Pagination Class Managemnt }
        //
        // { CallBack }
        ClassManagement();
        ScrollManagement();
        // { CallBack }
        //
      })
      // ---------------- Builder Response <
      //
      // ------------------- Builder Error >
      .catch(
        (error) => {
          console.log(error);
        }
        // ----------------- Builder Error <
      );
    // ------------------------------------- B <<
  }
  // -------------------------------------------- > B I <

  // ---------------------------------------------------- >> B << ( Builder )

  // --------------------------------------------------- >> CM << ( Class Managemnet )
  function ClassManagement() {
    //
    // --------------------------- > Query Selectors <
    const PageNumberContiner =
      document.querySelectorAll(`.PageNumberContainer`);
    // --------------------------- > Query Selectors <
    //
    // --------------------------- > Class Managemnt <
    PageNumberContiner.forEach((box, index) => {
      if (index + 1 == page) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
    // --------------------------- > Class Managemnt <
  }
  // --------------------------------------------------- >> CM << ( Class Managemnet )

  // --------------------------------------------------- >> SM << ( Scroll Managment )
  function ScrollManagement() {
    //
    // ----------------------------- > Query Selectors <
    const PaginationBody = document.querySelector(".PagesNumberContainer");
    //
    const activenumberContainer = document.querySelector(
      `.PageNumberContainer.active`
    );
    //
    // ----------------------------- > Query Selectors <
    //
    // ----------------------------------- > Condition <
    if (activenumberContainer) {
      //
      // >> Varibles <<
      const containerRect = PaginationBody.getBoundingClientRect();
      const activePageBoxRect = activenumberContainer.getBoundingClientRect();
      // >> Varibles <<
      //
      // >> Calculate the selected page <<
      const scrollOffsetX =
        activePageBoxRect.left -
        containerRect.left -
        (containerRect.width - activePageBoxRect.width) / 2;
      // >> Calculate the selected page <<
      //
      // >> Scroll to >> selected page <<
      PaginationBody.scrollBy({
        left: scrollOffsetX,
      });
      // >> Scroll to >> selected page <<
    }
    // ----------------------------------- > Condition <
  }
  // --------------------------------------------------- >> SM << ( Scroll Managment )

  // --------------------------------------------------- >> SP << ( Selected Page )
  function OnPageClick(pageNum) {
    //
    // Page Controller >>
    page = pageNum;
    // Page Controller <<
    //
    // Class Managemnt >>
    DataContainer.classList.remove("show");
    // Class Managemnt <<
    //
    // CallBack >>
    setTimeout(() => {
      DisplayData();
      PadginationBtnListener();
    }, 500);
    // CallBack <<
    //
    // Scroll Controller >>
    DataContainer.scrollTo({
      top: 0,
    });
    // Scroll Controller <<
    //
  }
  // --------------------------------------------------- >> SP << ( Selected Page )

  // -------------------------------------------------- >> F P << ( First Page )
  function FirstIndexOnClick() {
    if (page !== 1) {
      //
      // Page Controller >>
      page = 1;
      // Page Controller <<
      //
      // Class Managemnt >>
      DataContainer.classList.remove("show");
      // Class Managemnt <<
      //
      // CallBack >>
      setTimeout(() => {
        DisplayData();
        PadginationBtnListener();
      }, 500);
      // CallBack >>
      //
      // Scroll Controller >>
      DataContainer.scrollTo({
        top: 0,
      });
      // Scroll Controller <<
      //
    }
  }
  // -------------------------------------------------- >> F P << ( First Page )

  // ----------------------------------------------- >> Perv P << ( Perv Page )
  function pervBtn() {
    if (page > 1) {
      //
      // Page Controller >>
      page--;
      // Page Controller <<
      //
      // Class Managemnt >>
      DataContainer.classList.remove("show");
      // Class Managemnt <<
      //
      // CallBack >>
      setTimeout(() => {
        DisplayData();
        PadginationBtnListener();
      }, 500);
      // CallBack >>
      //
      // Scroll Controller >>
      DataContainer.scrollTo({
        top: 0,
      });
      // Scroll Controller <<
      //
    }
  }
  // ----------------------------------------------- >> Perv P << ( Perv Page )

  // ----------------------------------------------- >> Next P << ( Next Page )
  function nextBtn() {
    if (page < totalPage) {
      //
      // Page Controller >>
      page++;
      // Page Controller <<
      //
      // Class Managemnt >>
      DataContainer.classList.remove("show");
      // Class Managemnt <<
      //
      // CallBack >>
      setTimeout(() => {
        DisplayData();
        PadginationBtnListener();
      }, 500);
      // CallBack >>
      //
      // Scroll Controller >>
      DataContainer.scrollTo({
        top: 0,
      });
      // Scroll Controller <<
      //
    }
  }
  // ----------------------------------------------- >> Next P << ( Next Page )

  // ----------------------------------------------- >> Last P << ( Last Page )
  function lastIndexOnClick() {
    if (page !== totalPage) {
      //
      // Page Controller >>
      page = totalPage;
      // Page Controller <<
      //
      // Class Managemnt >>
      DataContainer.classList.remove("show");
      // Class Managemnt <<
      //
      // CallBack >>
      setTimeout(() => {
        DisplayData();
        PadginationBtnListener();
      }, 500);
      // CallBack >>
      //
      // Scroll Controller >>
      DataContainer.scrollTo({
        top: 0,
      });
      // Scroll Controller <<
      //
    }
  }
  // ----------------------------------------------- >> Last P << ( Last Page )

  // ----------------------------------------------- >> retrun <<
  return {
    widget: DataContainer,
    List: ContentList,
  };
  // ----------------------------------------------- >> retrun <<
}
// ============================================================= >> Content Builder <<
