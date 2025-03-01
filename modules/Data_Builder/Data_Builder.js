// ===================================================================== >> imports <<
//
// ---------------------------------------------------- >> pagination <<
import { paginationModule } from "./pagination.js";
// ---------------------------------------------------- >> pagination <<
//
// --------------------------------------------------------- >> fetch <<
import { GET } from "./../Web_Service/web_service.js";
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
// i = > { icon }
//
// T = > { Text }
//
// E = > { Empty }
//
// A = > { Animation }
//
// SM = > { State Management }
//
// AC = > { Append Child }
//
// ================================================================= >> Difinations <<
//
// ============================================================= >> Content Builder <<
export function DataBuilder(
  Id,
  URL,
  Query,
  Limit,
  Transmitter,
  PadginationBtnListener
) {
  // ---------------------------------------------------- >> V <<
  let page = 1;
  let totalPage = 1;
  // ---------------------------------------------------- >> V <<
  //
  // -------------------------------------------------- >> div <<
  const DataContainer = document.createElement("div");
  DataContainer.classList.add("DataContainer");
  DataContainer.id = Id;
  // -------------------------------------------------- >> div <<
  //
  // ---------------------------------------------------- >> P <<
  //
  // --------------------------------------------- > V <
  let Pagination = null;
  // --------------------------------------------- > V <
  //
  // ------------------------------------------- > P B <
  GET(`${URL}?${Query}`)
    .then((response) => {
      //
      // ------------------------ > Total Page <
      totalPage = Math.ceil(response.data.pagination.total_pages);
      // ------------------------ > Total Page <
      //
      // ------------------------------ > P CB <
      const pagination = paginationModule(
        FirstIndexOnClick,
        pervBtn,
        nextBtn,
        lastIndexOnClick,
        OnPageClick,
        totalPage,
        page
      );
      // ------------------------------ > P CB <
      //
      // ------------------------ > Handellers <
      StateManagement();
      DisplayData();
      ScrollManagement();
      // ------------------------ > Handellers <

      // ---------------------------- > Save P <
      Pagination = pagination;
      // ---------------------------- > Save P <
    })
    .catch((error) => {
      console.log(`Pagination error is : ${error}`);
    });
  // ------------------------------------------- > P B <
  //
  // ---------------------------------------------------- >> P <<
  //
  // ---------------------------------------------------- >> L <<
  //
  // -------------------------------------------- > B I <
  //
  // ------------------------------------ > div <
  const ContentList = document.createElement("div");
  ContentList.classList.add("ContentList");
  // ------------------------------------ > div <
  //
  // -------------------------------------- > B <
  function DisplayData() {
    //
    // ------------------------------- V >>
    let api = `${URL}?limit=${Limit}&page=${page}&${Query}`;
    // ------------------------------- V <<
    //
    // --------------------- Web Service >>
    GET(api)
      //
      .then((response) => {
        //
        // -------- Length >
        const length = response.data.data.length;
        // -------- Length <
        //
        // ------------ SM <
        ContentList.innerHTML = "";
        // ------------ SM <
        //
        // --- Transmitter >
        Transmitter(response);
        // --- Transmitter <
        //
        // ------- List AC >
        DataContainer.appendChild(ContentList);
        // ------- List AC <
        //
        // - Pagination AC >
        if (length == 0) {
          const PaginationContiner = document.querySelector(
            ".PaginationContiner"
          );
          if (DataContainer.contains(PaginationContiner)) {
            DataContainer.removeChild(PaginationContiner);
          }
        } else {
          DataContainer.appendChild(Pagination);
        }
        // -- Pagination AC >
        //
        // ------------- CB >
        StateManagement();
        ScrollManagement();
        // ------------- CB <
        //
      })
      //
      .catch(
        (error) => {
          console.log(error);
        }
        // ----------------- Builder Error <
      );
    // --------------------- Web Service <<
  }
  // -------------------------------------- > B <
  //
  // -------------------------------------------- > B I <
  //
  // ---------------------------------------------------- >> L <<
  //
  // --------------------------------------------------- >> SM <<
  function StateManagement() {
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
  // --------------------------------------------------- >> SM <<
  //
  // --------------------------------------------------- >> SM <<
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
  // --------------------------------------------------- >> SM <<
  //
  // --------------------------------------------------- >> SP <<
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
  // --------------------------------------------------- >> SP <<
  //
  // -------------------------------------------------- >> F P <<
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
  // -------------------------------------------------- >> F P <<
  //
  // ----------------------------------------------- >> Perv P <<
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
  // ----------------------------------------------- >> Perv P <<
  //
  // ----------------------------------------------- >> Next P <<
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
  // ----------------------------------------------- >> Next P <<
  //
  // ----------------------------------------------- >> Last P <<
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
  // ----------------------------------------------- >> Last P <<
  //
  // ----------------------------------------------- >> retrun <<
  return {
    widget: DataContainer,
    List: ContentList,
  };
  // ----------------------------------------------- >> retrun <<
}
// ============================================================= >> Content Builder <<
