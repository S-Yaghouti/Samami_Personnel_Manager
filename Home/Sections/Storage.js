// ============================================================== >> Imports <<
//
// ------------------------------------------------ >> Loading <<
import { LoadingcallBack } from "../../modules/Widgets/Loading/loading.js";
// ------------------------------------------------ >> Loading <<
//
// -------------------------------------------------- >> Feild <<
import { Field } from "./../../modules/Widgets/Field/Field.js";
// -------------------------------------------------- >> Feild <<
//
// ---------------------------------------------------- >> BTN <<
import { BTN } from "./../../modules/Widgets/BTN/BTN.js";
// ---------------------------------------------------- >> BTN <<
//
// ----------------------------------------- >> Request Result <<
import { RequestResult } from "../../modules/Data_Builder/request_result.js";
// ----------------------------------------- >> Request Result <<
//
// -------------------------------------------- >> Web Service <<
import {
  PostImage,
  PUT,
  DELETE,
  GET,
  POST,
} from "../../modules/Web_Service/web_service.js";
// -------------------------------------------- >> Web Service <<
//
// ------------------------------------------- >> Notification <<
import { NotificationCallBack } from "./../../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------- >> Notification <<
//
// ============================================================== >> Imports <<
//
// ========================================================== >> Definitions <<
//
// V => { Variables }
//
// CB => { CallBack }
//
// SM => { State Management }
//
// L => { Lsitener }
//
// AC => { Append Child }
//
// RC => { Remove Child }
//
// RM => { Response Manager }
//
// GC => { GET Children }
//
// ========================================================== >> Definitions <<
//
// ==================================================================== >> V <<
//
// -------------------------------------------------------- >> Path <<
let CurrentPath = `.root`;
let NextItemsName = [];
let parentid = 1;
// -------------------------------------------------------- >> Path <<
//
// ------------------------------------------------------ >> Layer 5 <<
const Layer5 = document.querySelector(".Layer5");
const BG_5 = document.querySelector("#BG_5");
// ------------------------------------------------------ >> Layer 5 <<
//
// ------------------------------------------------------ >> Layer 6 <<
const Layer6 = document.querySelector(".Layer6");
const BG_6 = document.querySelector("#BG_6");
// ------------------------------------------------------ >> Layer 6 <<
//
// ------------------------------------------------------ >> Layer 7 <<
const Layer7 = document.querySelector(".Layer7");
const BG_7 = document.querySelector("#BG_7");
// ------------------------------------------------------ >> Layer 7 <<
//
// ==================================================================== >> V <<
//
// =============================================================== >> Module <<
export function StorageSection() {
  //
  // ----------------------------------------------------- >> V <<
  const SliderContainer = document.querySelector(".SliderContainer");
  // ----------------------------------------------------- >> V <<
  //
  // ------------------------------------------------ >> Column <<
  const TasksSection = document.createElement("div");
  TasksSection.classList.add("Column");
  //
  // ----------------------------------------- > id <
  TasksSection.id = "StorageSection";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(TasksSection);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Column <<
  //
  // ------------------------------------------------ >> Filter <<
  Filter(TasksSection);
  // ------------------------------------------------ >> Filter <<
  //
  // ----------------------------------------------- >> Content <<
  const StorageContent = document.createElement("div");
  StorageContent.classList.add("StorageContent");
  //
  // ---------------------------------------- > AC <
  TasksSection.appendChild(StorageContent);
  // ---------------------------------------- > AC <
  //
  // ----------------------------- > Close Options <
  function CloseOptions() {
    const OptionsColumn = document.querySelector("#OptionsColumn");
    if (OptionsColumn) {
      OptionsColumn.classList.remove("show");
      setTimeout(() => {
        OptionsColumn.remove();
      }, 250);
    }
  }
  // ----------------------------- > Close Options <
  //
  // ------------------------------ > Open Options <
  function OpenOptions(event, X, Y) {
    //
    event.preventDefault();
    //
    MainOptions(X, Y);
    //
  }
  // ------------------------------ > Open Options <
  //
  // ------------------------------------ > Tuch L <
  //
  // ------------------------------- V >>
  let touchTimer = null;
  // ------------------------------- V <<
  //
  // ---------------------- Tuch Start >>
  StorageContent.addEventListener("touchstart", (event) => {
    //
    event.preventDefault();
    //
    // ---------------------- V >>
    const OptionsColumn = document.querySelector("#OptionsColumn");
    const touch = event.touches[0];
    const X = touch.pageX;
    const Y = touch.pageY;
    // ---------------------- V <<
    //
    if (StorageContent.querySelector("#OptionsColumn")) {
      //
      OptionsColumn.classList.remove("show");
      //
      setTimeout(() => {
        OptionsColumn.remove();
      }, 250);
      //
    } else {
      touchTimer = setTimeout(() => {
        OpenOptions(event, X, Y);
      }, 500);
    }
    //
  });
  // ---------------------- Tuch Start <<
  //
  // ------------------------ Tuch end >>
  StorageContent.addEventListener("touchend", () => {
    if (touchTimer) {
      clearTimeout(touchTimer);
      touchTimer = null;
    }
  });
  // ------------------------ Tuch end <<
  //
  // ------------------------------------ > Tuch L <

  // ----------------------------------- > Click L <
  //
  // --------------------- left click >>
  StorageContent.addEventListener("click", (event) => {
    //
    event.preventDefault();
    //
    if (event.button === 0) {
      CloseOptions();
    }
    //
  });
  // --------------------- left click <<
  //
  // -------------------- right click >>
  StorageContent.addEventListener("contextmenu", (event) => {
    //
    // ---------------------- V >>
    const OptionsColumn = document.querySelector("#OptionsColumn");
    let X = event.clientX;
    let Y = event.clientY;
    // ---------------------- V <<
    //
    if (StorageContent.querySelector("#OptionsColumn")) {
      //
      OptionsColumn.classList.remove("show");
      //
      setTimeout(() => {
        OptionsColumn.remove();
      }, 250);
      //
    } else {
      OpenOptions(event, X, Y);
    }
    //
  });
  // -------------------- right click <<
  //
  // ----------------------------------- > Click L <
  //
  // ----------------------------------------------- >> Content <<
  //
  // ---------------------------------------------------- >> CB <<
  GetChildren(CurrentPath);
  // ---------------------------------------------------- >> CB <<
  //
}
// =============================================================== >> Module <<
//
// =============================================================== >> Filter <<
function Filter(father) {
  //
  // --------------------------------------------------- >> div <<
  const Flex = document.createElement("div");
  Flex.classList.add("Flex");
  // -------------------------------------------- > id <
  Flex.id = "FiltersFlex";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  father.appendChild(Flex);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> div <<
  //
  // --------------------------------------------------- >> BTN <<
  //
  // --------------------------------------------- > V <
  const PerviousBTNId = "PerviousBTN";
  const PerviousBtnIcon = "tabler:arrow-badge-left-filled";
  // --------------------------------------------- > V <
  //
  // -------------------------------------------- > CB <
  const PerviousBTN = BTN(
    PerviousBTNId,
    false,
    "",
    true,
    PerviousBtnIcon,
    true,
    PerviousBTNListener
  );
  // -------------------------------------------- > CB <
  //
  // --------------------------------------------- > L <
  function PerviousBTNListener() {
    //
    // -------------------------------------- V >>
    const List = document.querySelector(".StorageContent");
    const PathInput = document.querySelector("#PathInput");
    // -------------------------------------- V <<
    //
    // ----------------------------- Split Path >>
    const parts = CurrentPath.split("/");
    // ----------------------------- Split Path <<
    //
    // ------------------------------------- 👍 >>
    if (CurrentPath !== ".root") {
      //
      // --------------------- Update Path >
      const lastItem = parts[parts.length - 1];
      NextItemsName.push(lastItem);
      parts.pop();
      let NewPath = parts.join("/");
      CurrentPath = NewPath;
      // --------------------- Update Path <
      //
      // ------------------------------ CB >
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------------ CB <
      //
      // ------------------------------ SM <
      List.classList.remove("show");
      setTimeout(() => {
        PathInput.value = CurrentPath;
        List.innerHTML = "";
      }, 500);
      // ------------------------------ SM <
      //
      // ------------------------------ GC <
      setTimeout(() => {
        GetChildren(CurrentPath);
      }, 500);
      // ------------------------------ GC <
      //
    }
    // ------------------------------------- 👍 >>
    //
    // ------------------------------------- 👎 >>
    else {
      NotificationCallBack(
        "Not allowed ¯_(ツ)_/¯",
        "mdi:denied",
        "red",
        BG_7,
        Layer7
      );
    }
    // ------------------------------------- 👎 >>
    //
  }
  // --------------------------------------------- > L <
  //
  // -------------------------------------------- > AP <
  Flex.appendChild(PerviousBTN.widget);
  // -------------------------------------------- > AP <
  //
  // --------------------------------------------------- >> BTN <<
  //
  // --------------------------------------------------- >> BTN <<
  //
  // --------------------------------------------- > V <
  const NextBTNId = "NextBTN";
  const NextBtnIcon = "tabler:arrow-badge-right-filled";
  // --------------------------------------------- > V <
  //
  // -------------------------------------------- > CB <
  const NextBTN = BTN(
    NextBTNId,
    false,
    "",
    true,
    NextBtnIcon,
    true,
    NextBTNListener
  );
  // -------------------------------------------- > CB <
  //
  // --------------------------------------------- > L <
  function NextBTNListener() {
    //
    // -------------------------------------- V >>
    const List = document.querySelector(".StorageContent");
    const PathInput = document.querySelector("#PathInput");
    // -------------------------------------- V <<
    //
    // ------------------------------------- 👍 >>
    if (NextItemsName.length !== 0) {
      //
      // --------------------- Update Path >
      const lastItem = NextItemsName[NextItemsName.length - 1];
      CurrentPath += `/${lastItem}`;
      //
      NextItemsName.pop();
      //
      // --------------------- Update Path <
      //
      // ------------------------------ CB >
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------------ CB <
      //
      // ------------------------------ SM >
      List.classList.remove("show");
      setTimeout(() => {
        PathInput.value = CurrentPath;
        List.innerHTML = "";
      }, 500);
      // ------------------------------ SM <
      //
      // ------------------------------ GC >
      setTimeout(() => {
        GetChildren(CurrentPath);
      }, 500);
      // ------------------------------ GC <
      //
    }
    // ------------------------------------- 👍 >>
    //
    // ------------------------------------- 👎 >>
    else {
      NotificationCallBack(
        "Not allowed ¯_(ツ)_/¯",
        "mdi:denied",
        "red",
        BG_7,
        Layer7
      );
    }
    // ------------------------------------- 👎 >>
    //
  }
  // --------------------------------------------- > L <
  //
  // -------------------------------------------- > AP <
  Flex.appendChild(NextBTN.widget);
  // -------------------------------------------- > AP <
  //
  // --------------------------------------------------- >> BTN <<
  //
  // -------------------------------------------------- >> Path <<
  //
  // ------------------------------------- > Varibels <
  const PathFeildInputID = "PathInput";
  const Icon = "icon-park-solid:cloud-storage";
  const Placeholder = " enter a valid path ...";
  // ------------------------------------- > Varibels <
  //
  // ------------------------------------- > CallBack <
  const PathField = Field(
    "PathField",
    false,
    "",
    "",
    false,
    PathFeildInputID,
    Icon,
    Placeholder,
    1000
  );
  // ------------------------------------- > CallBack <
  //
  // ---------------------------------- > Input Value <
  PathField.Input.value = CurrentPath;
  // ---------------------------------- > Input Value <
  //
  // --------------------------------------- > Set id <
  PathField.widget.id = "PathField";
  PathField.fieldIcon.id = "PathFieldIcon";
  // --------------------------------------- > Set id <
  //
  // -------------------------------------------- > L <
  PathField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // ---------------------------------- 👍 >>
      if (PathField.Input.value !== ``) {
        //
        // ---------------------------- V >
        const List = document.querySelector(".StorageContent");
        // ---------------------------- V <
        //
        // --------------------------- CB >
        LoadingcallBack(BG_6, 1, Layer6);
        // --------------------------- CB <
        //
        // --------------------------- SM >
        List.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
        }, 500);
        // --------------------------- SM <
        //
        // --------------------------- GC >
        setTimeout(() => {
          GetChildren(PathField.Input.value);
        }, 500);
        // --------------------------- GC <
        //
      }
      // ---------------------------------- 👍 >>
      //
      // ---------------------------------- 👎 >>
      else {
        NotificationCallBack(
          "Not allowed ¯_(ツ)_/¯",
          "mdi:denied",
          "red",
          BG_7,
          Layer7
        );
      }
      // ---------------------------------- 👎 <<
      //
    }
  });
  // -------------------------------------------- > L <
  //
  // ------------------------------------------- > AC <
  Flex.appendChild(PathField.widget);
  // ------------------------------------------- > AC <
  //
  // -------------------------------------------------- >> Path <<
  //
  // ------------------------------------------------ >> Search <<
  //
  // ------------------------------------------ > V <
  const SearchBTNId = "SearchBTN";
  const SearchBtnText = "Search";
  const SearchBtnIcon = "mdi:cloud-search";
  // ------------------------------------------ > V <
  //
  // ----------------------------------------- > CB <
  const SearchBTN = BTN(
    SearchBTNId,
    true,
    SearchBtnText,
    true,
    SearchBtnIcon,
    true,
    SearchBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function SearchBTNListener() {
    //
    // ---------------------------------- CB >>
    SearchPopup();
    // ---------------------------------- CB <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  Flex.appendChild(SearchBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Search <<
  //
}
// =============================================================== >> Filter <<
//
// ========================================================= >> Search Popup <<
function SearchPopup() {
  //
  // ---------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ---------------------------------------------- >> SM <<
  //
  // --------------------------------------------- >> div <<
  const SearchPopup = document.createElement("div");
  SearchPopup.classList.add("Column", "show");
  //
  // -------------------------------------- > id <
  SearchPopup.id = "SearchPopup";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  BG_5.appendChild(SearchPopup);
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> div <<
  //
  // --------------------------------------------- >> Flex <<
  const SearchPopupHeader = document.createElement("div");
  SearchPopupHeader.classList.add("Flex");
  //
  // -------------------------------------- > id <
  SearchPopupHeader.id = "SearchPopupHeader";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  SearchPopup.appendChild(SearchPopupHeader);
  // -------------------------------------- > AC <
  //
  // ----------------------------------- > Title <
  //
  // ----------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Search",
    true,
    "mdi:cloud-search",
    false,
    () => { }
  );
  // ----------------------------- CB <<
  //
  // ----------------------------- AC >>
  SearchPopupHeader.appendChild(PopupTitle.widget);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > Title <
  //
  // ------------------------------------- > BTN <
  //
  // ------------------------------- CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // ------------------------------- CB <<
  //
  // -------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(SearchPopup);
    }, 500);
    //
  }
  // -------------------------------- L <<
  //
  // ------------------------------- AC >>
  SearchPopupHeader.appendChild(ColseBTN.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > BTN <
  //
  // --------------------------------------------- >> Flex <<
  //
  // --------------------------------------------- >> Body <<
  const SearchPopupBody = document.createElement("div");
  SearchPopupBody.classList.add("Column");
  //
  // -------------------------------------- > id <
  SearchPopupBody.id = "SearchPopupBody";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  SearchPopup.appendChild(SearchPopupBody);
  // -------------------------------------- > AC <
  //
  // ----------------------------------- > Field <
  //
  // ------------------------------ V >>
  //
  const SearchPopupFieldID = "SearchPopupField";
  //
  const SearchPopupFieldInputPlaceholder = "search ...";
  //
  // ------------------------------ V <<
  //
  // ----------------------------- CB >>
  const SearchPopupField = Field(
    "",
    false,
    "",
    "",
    false,
    SearchPopupFieldID,
    "",
    SearchPopupFieldInputPlaceholder,
    1000
  );
  // ----------------------------- CB <<
  //
  // -------------------- remove icon >>
  SearchPopupField.fieldIcon.style.display = "none"
  // -------------------- remove icon <<
  // 
  // ----------------------------- id >>
  SearchPopupField.widget.id = "SearchPopupField";
  SearchPopupField.Input.id = "SearchPopupFieldInput";
  // ----------------------------- id <<
  //
  // ----------------------------- AC >>
  SearchPopupBody.appendChild(SearchPopupField.widget);
  // ----------------------------- AC <<
  //
  SearchPopupField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // ---------------------------------- 👍 >>
      if (SearchPopupField.Input.value !== ``) {
        //
        // --------------------------- CB >
        LoadingcallBack(BG_6, 1, Layer6);
        // --------------------------- CB <
        //
        // --------------------------- SM >
        SearchPopupList.classList.remove("show");
        setTimeout(() => {
          SearchPopupList.innerHTML = "";
        }, 500);
        // --------------------------- SM <
        //
        // ------------------- WebService >
        // 
        // -------------------------------- > API <
        let Api = `https://personnel.samami.co/storage/search-${SearchPopupField.Input.value}`;
        // -------------------------------- > API <
        // 
        // -------------------------------- > GET <
        GET(Api)
          .then((response) => {
            // 
            setTimeout(() => {
              LoadingcallBack(BG_6, 2, Layer6);
              ListaManager(response);
            }, 500);
            // 
          })
          .catch((error) => {
            setTimeout(() => {
              LoadingcallBack(BG_6, 2, Layer6);
              ListaManager(response);
            }, 500);
          });
        // -------------------------------- > GET <
        // 
        // ------------------- WebService <
        //
      }
      // ---------------------------------- 👍 >>
      //
      // ---------------------------------- 👎 >>
      else {
        NotificationCallBack(
          "Not allowed ¯_(ツ)_/¯",
          "mdi:denied",
          "red",
          BG_7,
          Layer7
        );
      }
      // ---------------------------------- 👎 <<
      //
    }
  });
  // 
  // ----------------------------------- > Field <
  // 
  // --------------------------------- > Divider <
  const SearchPopupDivider = document.createElement("div");
  SearchPopupDivider.classList.add("SearchPopupDivider");
  // 
  // --------------------------- AC >>
  SearchPopupBody.appendChild(SearchPopupDivider);
  // --------------------------- AC <<
  // 
  // --------------------------------- > Divider <
  // 
  // ------------------------------------ > List <
  const SearchPopupList = document.createElement("div");
  SearchPopupList.classList.add("SearchPopupList");
  // 
  // ------------------------------ AC >> 
  SearchPopupBody.appendChild(SearchPopupList);
  // ------------------------------ AC <<
  // 
  // ------------------------------ CB >>
  // 
  const EmptyData = {
    data: [],
    status: 200,
  }
  // 
  ListaManager(EmptyData)
  // ------------------------------ CB <<
  // 
  // ------------------------------------ > List <
  // 
  // --------------------------------- > Manager <
  let selectedwidget;

  function ListaManager(response) {
    // 
    // ---------------------- empty >>
    if (response.data.length == 0) {
      //
      // ----------------------------- > SM <
      SearchPopupList.innerHTML = "";
      setTimeout(() => {
        SearchPopupList.classList.add("show");
      }, 500);
      // ----------------------------- > SM <
      //
      // ------------------------------ > V <
      const SVG_URL = "./../assets/svg/Empty_Response.svg";
      // ------------------------------ > V <
      //
      // ----------------------------- > CB <
      const Widget = RequestResult(SVG_URL, "Empty Response");
      // ----------------------------- > CB <
      //
      // ------------------------------ > AC <
      SearchPopupList.appendChild(Widget);
      // ------------------------------ > AC <
      //
    }
    // ---------------------- empty <<
    // 
    // ------------------------- 👍 >>
    else if (response.data.length !== 0 && response.status == 200) {
      // 
      SearchPopupList.innerHTML = "";
      setTimeout(() => {
        SearchPopupList.classList.add("show");
      }, 500);
      // 
      response.data.forEach(data => {
        // 
        const Widget = SearchedWidget(data, (widget) => {
          Listener(widget)
        });
        // 
        function Listener(widget) {
          // 
          // ------------------- > SM <
          const SearchedWidget = document.querySelectorAll(".SearchedWidget");
          SearchedWidget.forEach(element => {
            element.classList.remove("active");
          });
          widget.classList.add("active");
          // ------------------- > SM <
          // 
          selectedwidget = widget
          // 
        }
        // 
        SearchPopupList.appendChild(Widget);
        // 
      });
      // 
    }
    // ------------------------- 👍 <<
    // 
    // ------------------------- 👎 >>
    else if (response.status !== 200 && response.data.length !== 0) {
      //
      // ----------------------------- > SM <
      SearchPopupList.innerHTML = "";
      setTimeout(() => {
        SearchPopupList.classList.add("show");
      }, 500);
      // ----------------------------- > SM <
      //
      // ------------------------------ > V <
      const SVG_URL = "./../assets/svg/Error_Response.svg";
      // ------------------------------ > V <
      //
      // ----------------------------- > CB <
      const Widget = RequestResult(SVG_URL, "Faild request");
      // ----------------------------- > CB <
      //
      // ------------------------------ > AC <
      SearchPopupList.appendChild(Widget);
      // ------------------------------ > AC <
      //
    }
    // ------------------------- 👎 <<
    // 
  }
  // --------------------------------- > Manager <
  // 
  // --------------------------------------------- >> Body <<
  //
  // ---------------------------------------------- >> BTN <<
  //
  // --------------------------------------- > CB <
  const SubmitBTN = BTN(
    "GreenPopupBTN",
    true,
    "Submit",
    true,
    "line-md:check-all",
    true,
    SubmitBTNListener
  );
  // --------------------------------------- > CB <
  //
  // ---------------------------------------- > L <
  function SubmitBTNListener() {
    // 
    // --------------------------------- V >>
    const List = document.querySelector(".StorageContent");
    const PathInput = document.querySelector("#PathInput");
    // --------------------------------- V <<
    // 
    // -------------------------------- SM >>
    LoadingcallBack(BG_6, 1, Layer6)
    // -------------------------------- SM <<
    // 
    // -------------------------------- CB >>
    IdToPath(selectedwidget.id, (path) => {
      //  
      // ----------------------- SM >>
      // 
      List.classList.remove("show");
      Layer5.classList.remove("show");
      setTimeout(() => {
        PathInput.value = path.data;
        CurrentPath = path.data
        List.innerHTML = "";
        BG_5.innerHTML = "";
      }, 500);
      // ----------------------- SM <<
      // 
      // ----------------------- GC >>
      setTimeout(() => {
        GetChildren(path.data)
      }, 500);
      // ----------------------- GC <<
      // 
    })
    // -------------------------------- CB <<
    // 
  }
  // ---------------------------------------- > L <
  //
  // --------------------------------------- > AC <
  SearchPopup.appendChild(SubmitBTN.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> BTN <<
}
// ========================================================= >> Search Popup <<
//
// ====================================================== >> Searched Widget <<
function SearchedWidget(data, listener) {
  // 
  // ------------------------------------------ >> div <<
  const SearchedWidget = document.createElement("div");
  SearchedWidget.classList.add("SearchedWidget");
  // 
  SearchedWidget.id = data.id
  // 
  // ------------------------------------------ >> div <<
  // 
  // -------------------------------------------- >> L <<
  SearchedWidget.addEventListener("click", () => {
    listener(SearchedWidget)
  });
  // -------------------------------------------- >> L <<
  // 
  // ----------------------------------------- >> icon <<
  const SearchedWidgetIcon = document.createElement("img");
  SearchedWidgetIcon.classList.add("SearchedWidgetIcon");
  //
  // ------------------------------- > value <
  //
  // --------------------- folder >>
  if (data.is_file == false) {
    SearchedWidgetIcon.src = "./../assets/svg/folder-icon.svg";
    SearchedWidgetIcon.id = "folder";
  }
  // --------------------- folder <<
  //
  // ------------------- document >>
  else if (data.file_format == "txt") {
    SearchedWidgetIcon.src = "./../assets/svg/receipt-icon.svg";
  }
  // ------------------- document <<
  //
  // ---------------------- movie >>
  else if (data.file_format == "mp4") {
    SearchedWidgetIcon.src = "./../assets/svg/video-icon.svg";
  }
  // ---------------------- movie <<
  //
  // -------------------- picture >>
  else if (data.file_format == "jpg" || data.file_format == "jpeg") {
    SearchedWidgetIcon.src = "./../assets/svg/picture-icon.svg";
  }
  // -------------------- picture <<
  //
  // ------------------------ pdf >>
  else if (data.file_format == "pdf") {
    SearchedWidgetIcon.src = "./../assets/svg/pdf-icon.svg";
  }
  // ------------------------ pdf <<
  //
  // ----------------------- word >>
  else if (data.file_format == "word") {
    SearchedWidgetIcon.src = "./../assets/svg/word-icon.svg";
  }
  // ----------------------- word <<
  //
  // ---------------------- excel >>
  else if (data.file_format == "excel") {
    SearchedWidgetIcon.src = "./../assets/svg/excel-icon.svg";
  }
  // ---------------------- excel <<
  //
  // ---------------------- music >>
  else if (data.file_format == "mp3") {
    SearchedWidgetIcon.src = "./../assets/svg/music-icon.svg";
  }
  // ---------------------- music <<
  //
  // ----------------- powerpoint >>
  else if (data.file_format == "powerpoint") {
    SearchedWidgetIcon.src = "./../assets/svg/powerpoint-icon.svg";
  }
  // ----------------- powerpoint <<
  //
  // -------------------- unknown >>
  else {
    SearchedWidgetIcon.src = "./../assets/svg/unknown-icon.svg";
  }
  // -------------------- unknown <<
  //
  // ------------------------------- > value <
  //
  // ---------------------------------- > AC <
  SearchedWidget.appendChild(SearchedWidgetIcon);
  // ---------------------------------- > AC <
  //
  // ----------------------------------------- >> icon <<
  // 
  // ----------------------------------------- >> span <<
  const SearchedWidgetText = document.createElement("span");
  SearchedWidgetText.classList.add("SearchedWidgetText");
  // 
  // ------------------------------- > value <
  SearchedWidgetText.textContent = data.name;
  // ------------------------------- > value <
  // 
  // ---------------------------------- > AC <
  SearchedWidget.appendChild(SearchedWidgetText);
  // ---------------------------------- > AC <
  // 
  // ----------------------------------------- >> span <<
  // 
  // --------------------------------------- >> return <<
  return SearchedWidget;
  // --------------------------------------- >> return <<
  // 
}
// ====================================================== >> Searched Widget <<
// 
// ============================================================= >> IdToPath <<
function IdToPath(id, operator) {
  // 
  // ------------------------------------------------- >> API <<
  let Api = `https://personnel.samami.co/storage/id-to-path?id=${id}`;
  // ------------------------------------------------- >> API <<
  // 
  // ------------------------------------------------- >> GET <<
  GET(Api)
    .then((response) => {
      // 
      // --------------------------------------- 👍 >>
      if (response.status == 200) {
        operator(response)
      }
      // --------------------------------------- 👍 <<
      // 
      // --------------------------------------- 👎 >>
      else {
        // 
        // -------------------------------- SM >
        LoadingcallBack(BG_6, 2, Layer6)
        // 
        NotificationCallBack(
          "Failed to get the path",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // -------------------------------- SM <
        // 
      }
      // --------------------------------------- 👎 <<
      // 
    })
    .catch((error) => {
      // 
      // ---------------------------------------- SM >>
      LoadingcallBack(BG_6, 2, Layer6)
      // ---------------------------------------- SM <<
      // 
      // --------------------------------------- 👎 >>
      NotificationCallBack(
        "Failed to get the path",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // --------------------------------------- 👎 <<
      // 
    });
  // ------------------------------------------------- >> GET <<
  // 
  // ----------------------------------------- >> Web Service <<
  // 

}
// ============================================================= >> IdToPath <<
// 
// =================================================================== >> GC <<
function GetChildren(path) {
  //
  // --------------------------------------------------------- >> V <<
  const FiltersFlex = document.querySelector("#FiltersFlex");
  const List = document.querySelector(".StorageContent");
  // --------------------------------------------------------- >> V <<
  //
  // ------------------------------------------------------- >> GET <<
  //
  // ----------------------------------------------- > API <
  let Api = `https://personnel.samami.co/storage/get-children?folder=${path}`;
  // ----------------------------------------------- > API <
  //
  // ------------------------------------------------ > CB <
  GET(Api)
    .then((response) => {
      //
      // -------------------------------------- SM >>
      LoadingcallBack(BG_6, 2, Layer6);
      FiltersFlex.classList.add("show");
      List.classList.add("show");
      // -------------------------------------- SM <<
      //
      // -------------------------------------- CB >>
      ResponseManager(response);
      // -------------------------------------- CB <<
      //
    })
    .catch((error) => {
      //
      // -------------------------------------- SM >>
      LoadingcallBack(BG_6, 2, Layer6);
      List.innerHTML = "";
      List.classList.add("show");
      // -------------------------------------- SM <<
      //
      // --------------------------------------- V >>
      const SVG_URL = "./../assets/svg/Error_Response.svg";
      // --------------------------------------- V <<
      //
      // -------------------------------------- CB >>
      const Widget = RequestResult(SVG_URL, "Faild request 👎");
      // -------------------------------------- CB <<
      //
      // -------------------------------------- AC >>
      List.appendChild(Widget);
      // -------------------------------------- AC <<
      //
    });
  // ------------------------------------------------ > CB <
  //
  // ------------------------------------------------------- >> GET <<
  //
}
// =================================================================== >> GC <<
//
// =================================================================== >> RM <<
function ResponseManager(response) {
  //
  // --------------------------------------------------------- >> V <<
  const length = response.data.length;
  const List = document.querySelector(".StorageContent");
  const PathInput = document.querySelector("#PathInput");
  // --------------------------------------------------------- >> V <<
  //
  // -------------------------------------------------------- >> 👍 <<
  if (response.status == 200 && length !== 0) {
    //
    // ----------------------------------------------- > SM <
    List.classList.remove("big");
    // ----------------------------------------------- > SM <
    //
    // ------------------------------------------ > foreach <
    response.data.forEach((info) => {
      //
      // -------------------------------- item >>
      const UserWidget = ItemBox(info, (item) => {
        Listener(item);
      });
      // -------------------------------- item <<
      //
      // ----------------------------------- L >>
      function Listener(item) {
        //
        // ---------------------------- CB >
        LoadingcallBack(BG_6, 1, Layer6);
        // ---------------------------- CB <
        //
        // ----------------------------- V >
        let SelectedItemName = item.children[1].textContent;
        // ----------------------------- V <
        //
        // ------------------- Update Path >
        CurrentPath += `/${SelectedItemName}`;
        // ------------------- Update Path <
        //
        // ---------------------------- SM >
        List.classList.remove("show");
        setTimeout(() => {
          PathInput.value = CurrentPath;
          List.innerHTML = "";
        }, 500);
        // ---------------------------- SM <
        //
        // ---------------------------- CB >
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ---------------------------- CB <
        //
      }
      // ----------------------------------- L <<
      //
      // ---------------------------------- AC >>
      List.appendChild(UserWidget);
      // ---------------------------------- AC <<
      //
    });
    // ------------------------------------------ > foreach <
    //
  }
  // -------------------------------------------------------- >> 👍 <<
  //
  // ----------------------------------------------------- >> Empty <<
  else if (response.status == 200 && length == 0) {
    //
    // -------------------------------------------- > SM <
    List.innerHTML = "";
    List.classList.add("show", "big");
    // -------------------------------------------- > SM <
    //
    // --------------------------------------------- > V <
    const SVG_URL = "./../assets/svg/Empty_Response.svg";
    // --------------------------------------------- > V <
    //
    // -------------------------------------------- > CB <
    const Widget = RequestResult(SVG_URL, "Empty Response");
    // -------------------------------------------- > CB <
    //
    // --------------------------------------------- > AC <
    List.appendChild(Widget);
    // --------------------------------------------- > AC <
    //
  }
  // ----------------------------------------------------- >> Empty <<
  //
  // -------------------------------------------------------- >> 👎 <<
  else if (response.status == 404) {
    //
    // ----------------------------------------------- > SM <
    List.innerHTML = "";
    List.classList.add("show", "big");
    // ----------------------------------------------- > SM <
    //
    // ------------------------------------------------ > V <
    const SVG_URL = "./../../assets/svg/Error_Response.svg";
    // ------------------------------------------------ > V <
    //
    // ----------------------------------------------- > CB <
    const Widget = RequestResult(SVG_URL, "wrong path");
    // ----------------------------------------------- > CB <
    //
    // ------------------------------------------------ > AC <
    List.appendChild(Widget);
    // ------------------------------------------------ > AC <
    //
  }
  // -------------------------------------------------------- >> 👎 <<
  //
  // -------------------------------------------------------- >> 👎 <<
  else if (response.status !== 200) {
    //
    // ----------------------------------------------- > SM <
    List.innerHTML = "";
    List.classList.add("show", "big");
    // ----------------------------------------------- > SM <
    //
    // ------------------------------------------------ > V <
    const SVG_URL = "./../../assets/svg/Error_Response.svg";
    // ------------------------------------------------ > V <
    //
    // ----------------------------------------------- > CB <
    const Widget = RequestResult(SVG_URL, "Faild request 👎");
    // ----------------------------------------------- > CB <
    //
    // ------------------------------------------------ > AC <
    List.appendChild(Widget);
    // ------------------------------------------------ > AC <
    //
  }
  // -------------------------------------------------------- >> 👎 <<
  //
}
// =================================================================== >> RM <<
//
// ============================================================= >> Item Box <<
function ItemBox(response, listener) {
  //
  // ------------------------------------------------- >> div <<
  const StorageItem = document.createElement("div");
  StorageItem.classList.add("StorageItem");
  //
  // ------------------------------------------ > id <
  StorageItem.id = response.id;
  // ------------------------------------------ > id <
  //
  // --------------------------------------- > Tuch L <
  //
  // ---------------------------------- V >>
  let touchTimer = null;
  // ---------------------------------- V <<
  //
  // ------------------------- Tuch Start >>
  StorageItem.addEventListener("touchstart", (event) => {
    //
    event.stopPropagation();
    event.preventDefault();
    //
    // ---------------------- V >>
    const OptionsColumn = document.querySelector("#OptionsColumn");
    const touch = event.touches[0];
    const X = touch.pageX;
    const Y = touch.pageY;
    // ---------------------- V <<
    //
    if (StorageItem.querySelector("#OptionsColumn")) {
      //
      OptionsColumn.classList.remove("show");
      //
      setTimeout(() => {
        OptionsColumn.remove();
      }, 250);
      //
    } else {
      touchTimer = setTimeout(() => {
        ItemOptions(X, Y, StorageItem);
      }, 500);
    }
    //
  });
  // ------------------------- Tuch Start <<
  //
  // --------------------------- Tuch end >>
  StorageItem.addEventListener("touchend", () => {
    if (touchTimer) {
      clearTimeout(touchTimer);
      touchTimer = null;
      if (response.is_file == false) {
        listener(StorageItem);
      }
    }
  });
  // --------------------------- Tuch end <<
  //
  // --------------------------------------- > Tuch L <
  // 
  // ----------------------------------- > Click L <
  //
  // --------------------- left click >>
  StorageItem.addEventListener("click", (event) => {
    //
    event.preventDefault();
    //
    if (response.is_file == false && event.button === 0) {
      listener(StorageItem);
    }
    //
  });
  // --------------------- left click <<
  //
  // -------------------- right click >>
  StorageItem.addEventListener("contextmenu", (event) => {
    //
    event.preventDefault();
    event.stopPropagation();
    //
    // ---------------------- V >>
    const OptionsColumn = document.querySelector("#OptionsColumn");
    const X = event.clientX;
    const Y = event.clientY;
    // ---------------------- V <<
    //
    if (OptionsColumn) {
      //
      OptionsColumn.classList.remove("show");
      //
      setTimeout(() => {
        OptionsColumn.remove();
      }, 250);
      //
    } else {
      ItemOptions(X, Y, StorageItem);
    }
    //
  });
  // -------------------- right click <<
  //
  // ----------------------------------- > Click L <
  //
  // ------------------------------------------------- >> div <<
  //
  // ------------------------------------------------ >> icon <<
  const StorageItemIcon = document.createElement("img");
  StorageItemIcon.classList.add("StorageItemIcon");
  //
  // -------------------------------------- > value <
  //
  // ---------------------------- folder >>
  if (response.is_file == false) {
    StorageItemIcon.src = "./../assets/svg/folder-icon.svg";
    StorageItemIcon.id = "folder";
  }
  // ---------------------------- folder <<
  //
  // -------------------------- document >>
  else if (response.file_format == "txt") {
    StorageItemIcon.src = "./../assets/svg/receipt-icon.svg";
  }
  // -------------------------- document <<
  //
  // ----------------------------- movie >>
  else if (response.file_format == "mp4") {
    StorageItemIcon.src = "./../assets/svg/video-icon.svg";
  }
  // ----------------------------- movie <<
  //
  // --------------------------- picture >>
  else if (response.file_format == "jpg" || response.file_format == "jpeg") {
    StorageItemIcon.src = "./../assets/svg/picture-icon.svg";
  }
  // --------------------------- picture <<
  //
  // ------------------------------- pdf >>
  else if (response.file_format == "pdf") {
    StorageItemIcon.src = "./../assets/svg/pdf-icon.svg";
  }
  // ------------------------------- pdf <<
  //
  // ------------------------------ word >>
  else if (response.file_format == "word") {
    StorageItemIcon.src = "./../assets/svg/word-icon.svg";
  }
  // ------------------------------ word <<
  //
  // ----------------------------- excel >>
  else if (response.file_format == "excel") {
    StorageItemIcon.src = "./../assets/svg/excel-icon.svg";
  }
  // ----------------------------- excel <<
  //
  // ----------------------------- music >>
  else if (response.file_format == "mp3") {
    StorageItemIcon.src = "./../assets/svg/music-icon.svg";
  }
  // ----------------------------- music <<
  //
  // ------------------------ powerpoint >>
  else if (response.file_format == "powerpoint") {
    StorageItemIcon.src = "./../assets/svg/powerpoint-icon.svg";
  }
  // ------------------------ powerpoint <<
  //
  // --------------------------- unknown >>
  else {
    StorageItemIcon.src = "./../assets/svg/unknown-icon.svg";
  }
  // --------------------------- unknown <<
  //
  // -------------------------------------- > value <
  //
  // ----------------------------------------- > AC <
  StorageItem.appendChild(StorageItemIcon);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> icon <<
  //
  // ------------------------------------------------ >> span <<
  const StorageItemName = document.createElement("span");
  StorageItemName.classList.add("StorageItemName");
  //
  // -------------------------------------- > value <
  StorageItemName.textContent = response.name;
  // -------------------------------------- > value <
  //
  // ----------------------------------------- > AC <
  StorageItem.appendChild(StorageItemName);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> span <<
  //
  // ---------------------------------------------- >> return <<
  return StorageItem;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> Item Box <<
//
// ====================================================== >> Options Builder <<
function OptionsBuilder(IconList, TextList, Listener) {
  //
  // --------------------------------------------- >> div <<
  const OptionsColumn = document.createElement("div");
  OptionsColumn.classList.add("Column");
  //
  // -------------------------------------- > id <
  OptionsColumn.id = "OptionsColumn";
  // -------------------------------------- > id <
  //
  // --------------------------------------------- >> div <<
  //
  // ----------------------------------------- >> Builder <<
  for (let index = 0; index < IconList.length; index++) {
    //
    // ------------------------------- > BTN <
    //
    // ------------------------- CB >>
    const OptionBTN = BTN(
      "OptionBTN",
      true,
      TextList[index],
      true,
      IconList[index],
      true,
      OptionBTNListener
    );
    // ------------------------- CB <<
    //
    // -------------------------- L >>
    function OptionBTNListener() {
      Listener(OptionBTN.Text.textContent);
    }
    // -------------------------- L <<
    //
    // ------------------------- AP >>
    OptionsColumn.appendChild(OptionBTN.widget);
    // ------------------------- AP <<
    //
    // ------------------------------- > BTN <
    //
    // --------------------------- > Divider <
    if (index < IconList.length - 1) {
      //
      // ------------------ div >>
      const OptionsDivider = document.createElement("div");
      OptionsDivider.classList.add("OptionsDivider");
      // ------------------ div <<
      //
      // ------------------- AC >>
      OptionsColumn.appendChild(OptionsDivider);
      // ------------------- AC <<
      //
    }
    // --------------------------- > Divider <
    //
  }
  // ----------------------------------------- >> Builder <<
  //
  // ------------------------------------------ >> return <<
  return OptionsColumn;
  // ------------------------------------------ >> return <<
  //
}
// ====================================================== >> Options Builder <<
//
// ========================================================= >> Main Options <<
function MainOptions(Position_X, Position_Y) {
  //
  // ----------------------------------------------- >> V <<
  const StorageContent = document.querySelector(".StorageContent");
  //
  const IconsList = [
    "mdi:folder-plus",
    "ep:upload-filled",
    "material-symbols:folder-info-rounded",
  ];
  //
  const TextList = ["Create Folder", "Upload File", "Properties"];
  // ----------------------------------------------- >> V <<
  //
  // ---------------------------------------------- >> CB <<
  let Options = OptionsBuilder(IconsList, TextList, (value) => {
    OptionListener(value);
  });
  // ---------------------------------------------- >> CB <<
  //
  // ----------------------------------------------- >> L <<
  function OptionListener(value) {
    //
    if (value == "Create Folder") {
      CreateFolder();
    }
    //
    else if (value == "Upload File") {
      FilePicker();
    }
    //
    else if (value == "Properties") {
      GetProperties(CurrentPath);
    }
    //
  }
  Options.addEventListener("touchstart", (e) => {
    e.stopPropagation(); // Prevent the touch event from propagating to the StorageContent
  });
  //
  // ----------------------------------------------- >> L <<
  //
  // ---------------------------------------------- >> AC <<
  StorageContent.appendChild(Options);
  // ---------------------------------------------- >> AC <<
  //
  // ---------------------------------------- >> Position <<
  const rect = StorageContent.getBoundingClientRect();
  let left = Position_X - rect.left;
  let top = Position_Y - rect.top;

  // Adjust if the widget overflows the screen width
  const optionsWidth = Options.offsetWidth;
  const optionsHeight = Options.offsetHeight;
  const windowWidth = StorageContent.clientWidth;
  const windowHeight = StorageContent.clientHeight;
  // Check and adjust for overflow on the right side
  if (left + optionsWidth > windowWidth) {
    left = windowWidth - optionsWidth - 10; // Add a little margin from the right edge
  }

  // Check and adjust for overflow on the bottom side
  if (top + optionsHeight > windowHeight) {
    top = windowHeight - optionsHeight - 10; // Add a little margin from the bottom edge
  }
  //

  Options.style.left = `${left}px`;
  Options.style.top = `${top}px`;
  // ---------------------------------------- >> Position <<
  //
  // ---------------------------------------------- >> SM <<
  setTimeout(() => {
    Options.classList.add("show");
  }, 100);
  // ---------------------------------------------- >> SM <<
  //
}
// ========================================================= >> Main Options <<
//
// ========================================================= >> Item Options <<
function ItemOptions(X, Y, item) {
  //
  // ----------------------------------------------- >> V <<
  const StorageContent = document.querySelector(".StorageContent");
  //
  let IconsList = [];
  let TextList = [];
  //
  if (item.children[0].id == "folder") {
    //
    IconsList = [
      "iconoir:shortcut-square-solid",
      "mdi:rename-box",
      "mdi:cloud-remove",
      "material-symbols:folder-info-rounded",
    ];
    //
    TextList = ["Move", "Rename", "Delete", "Properties"];
    //
  }
  //
  else {
    //
    IconsList = [
      "flat-color-icons:download",
      "iconoir:shortcut-square-solid",
      "mdi:rename-box",
      "mdi:cloud-remove",
      "material-symbols:folder-info-rounded",
    ];
    //
    TextList = ["Download", "Move", "Rename", "Delete", "Properties"];
    //
  }
  // ----------------------------------------------- >> V <<
  //
  // ---------------------------------------------- >> CB <<
  let Options = OptionsBuilder(IconsList, TextList, (value) => {
    OptionListener(value);
  });
  // ---------------------------------------------- >> CB <<
  //
  // ----------------------------------------------- >> L <<
  function OptionListener(value) {
    //
    // ---------------------- Download >>
    if (value == "Download") {
      DownloadWebService(item.id);
    }
    // ---------------------- Download <<
    //
    // -------------------------- Move >>
    else if (value == "Move") {
      MovePopup(item.id);
    }
    // -------------------------- Move <<
    //
    // ------------------------ Rename >>
    else if (value == "Rename") {
      RenamePopup(item.id, item.children[1].textContent);
    }
    // ------------------------ Rename <<
    //
    // ------------------------ Delete >>
    else if (value == "Delete") {
      DeletePopup(item.children[1].textContent, item.id);
    }
    // ------------------------ Delete >>
    //
    // -------------------- Properties >>
    else if (value == "Properties") {
      GetProperties(item.id);
    }
    // -------------------- Properties <<
    //
  }
  Options.addEventListener("touchstart", (e) => {
    e.stopPropagation(); // Prevent the touch event from propagating to the StorageContent
  });
  // ----------------------------------------------- >> L <<
  //
  // ---------------------------------------------- >> AC <<
  StorageContent.appendChild(Options);
  // ---------------------------------------------- >> AC <<
  //
  // ---------------------------------------- >> Position <<
  const rect = StorageContent.getBoundingClientRect();
  let left = X - rect.left;
  let top = Y - rect.top;

  const optionsWidth = Options.offsetWidth;
  const optionsHeight = Options.offsetHeight;
  const windowWidth = StorageContent.clientWidth;
  const windowHeight = StorageContent.clientHeight;

  // Check and adjust for overflow on the right side
  if (left + optionsWidth > windowWidth) {
    left = windowWidth - optionsWidth - 10; // Add a little margin from the right edge
  }

  // Check and adjust for overflow on the bottom side
  if (top + optionsHeight > windowHeight) {
    top = windowHeight - optionsHeight - 10; // Add a little margin from the bottom edge
  }

  Options.style.left = `${left}px`;
  Options.style.top = `${top}px`;
  // ---------------------------------------- >> Position <<
  //
  // ---------------------------------------------- >> SM <<
  setTimeout(() => {
    Options.classList.add("show");
  }, 100);
  // ---------------------------------------------- >> SM <<
  //
}
// ========================================================= >> Item Options <<
//
// ======================================================== >> Create Folder <<
function CreateFolder() {
  //
  // ---------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ---------------------------------------------------- >> SM <<
  //
  // --------------------------------------------------- >> div <<
  const CreateFolderPopup = document.createElement("div");
  CreateFolderPopup.classList.add("Column", "show");
  //
  // -------------------------------------------- > id <
  CreateFolderPopup.id = "CreateFolderPopup";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  BG_5.appendChild(CreateFolderPopup);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> div <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateFolderHeader = document.createElement("div");
  CreateFolderHeader.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CreateFolderHeader.id = "CreateFolderHeader";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateFolderPopup.appendChild(CreateFolderHeader);
  // ------------------------------------------- > AC <
  //
  // ---------------------------------------- > Title <
  //
  // ---------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Create Folder",
    false,
    "",
    false,
    () => { }
  );
  // ---------------------------------- CB <<
  //
  // ---------------------------------- AC >>
  CreateFolderHeader.appendChild(PopupTitle.widget);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > Title <
  //
  // ------------------------------------------ > BTN <
  //
  // ------------------------------------ CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // ------------------------------------ CB <<
  //
  // ------------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(CreateFolderPopup);
    }, 500);
    //
  }
  // ------------------------------------- L <<
  //
  // ------------------------------------ AC >>
  CreateFolderHeader.appendChild(ColseBTN.widget);
  // ------------------------------------ AC <<
  //
  // ------------------------------------------ > BTN <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> Body <<
  const CreateFolderBody = document.createElement("div");
  CreateFolderBody.classList.add("Column");
  //
  // ------------------------------------------- > id <
  CreateFolderBody.id = "CreateFolderBody";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateFolderPopup.appendChild(CreateFolderBody);
  // ------------------------------------------- > AC <
  //
  // ---------------------------------------- > Field <
  //
  // ----------------------------------- V >>
  const CreateFolderTitleID = "CreateFolderTitleFeild";
  //
  const CreateFolderTitleLabel = "Folder name";
  //
  const CreateFolderTitleFeildID = "CreateFolderTitleFeild";
  //
  const CreateFolderTitleInputPlaceholder = "enter your folder name ...";
  //
  // ----------------------------------- V <<
  //
  // ---------------------------------- CB >>
  const CreateFolderTitle = Field(
    CreateFolderTitleID,
    true,
    "ic:round-short-text",
    CreateFolderTitleLabel,
    false,
    CreateFolderTitleFeildID,
    "",
    CreateFolderTitleInputPlaceholder,
    100
  );
  // ---------------------------------- CB <<
  //
  // ---------------------------------- id >>
  CreateFolderTitle.labelIcon.id = "CreateFolderTitleFieldLabelIcon";
  CreateFolderTitle.labelText.id = "CreateFolderTitleFieldLabelText";
  CreateFolderTitle.field.id = "CreateFolderTitleField";
  CreateFolderTitle.Input.id = "CreateFolderTitleFieldInput";
  // ---------------------------------- id <<
  //
  // ---------------------------------- AC >>
  CreateFolderBody.appendChild(CreateFolderTitle.widget);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > Field <
  //
  // -------------------------------------------------- >> Body <<
  //
  // --------------------------------------------------- >> BTN <<
  //
  // -------------------------------------------- > CB <
  const SubmitBTN = BTN(
    "GreenPopupBTN",
    true,
    "Submit",
    true,
    "line-md:check-all",
    true,
    SubmitBTNListener
  );
  // -------------------------------------------- > CB <
  //
  // --------------------------------------------- > L <
  function SubmitBTNListener() {
    //
    // ------------------------------------ 👎 >>
    if (CreateFolderTitle.Input.value.length < 2) {
      //
      // -------------------------- Notif >
      NotificationCallBack(
        "Name cannot be empty or less than 2 character",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // -------------------------- Notif <
      //
    }
    // ------------------------------------ 👎 <<
    //
    // ------------------------------------ 👍 >>
    else {
      //
      // ---------------------------------------- > remove loading <
      LoadingcallBack(BG_6, 1, Layer6);
      // ---------------------------------------- > remove loading <
      //
      // ---------------------------------------- > POST <
      setTimeout(() => {
        PostFolder(CreateFolderTitle.Input.value);
      }, 500);
      // ---------------------------------------- > POST <
      //
    }
    // ------------------------------------ 👍 <<
    //
  }
  // --------------------------------------------- > L <
  //
  // -------------------------------------------- > AC <
  CreateFolderPopup.appendChild(SubmitBTN.widget);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> BTN <<
  //
}
// ======================================================== >> Create Folder <<
//
// ========================================================== >> Post Folder <<
function PostFolder(folder_name) {
  //
  // ------------------------------------------------ >> V <<
  const List = document.querySelector(".StorageContent");
  // ------------------------------------------------ >> V <<
  //
  // ---------------------------------------------- >> API <<
  let Api = `https://personnel.samami.co/storage/new-folder?parent_path=${CurrentPath}&folder_name=${folder_name}`;
  // ---------------------------------------------- >> API <<
  //
  // ---------------------------------------------- >> GET <<
  GET(Api)
    //
    // ----------------------------------- > then <
    .then((response) => {
      //
      // -------------------------- 200 >>
      if (response.status == 200) {
        //
        // ------------------------------- >> Notif <<
        NotificationCallBack(
          "Folder created successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ------------------------------- >> Notif <<
        //
        // ---------------------------------- >> SM <<
        List.classList.remove("show");
        Layer5.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
          BG_5.innerHTML = "";
        }, 500);
        // ---------------------------------- >> SM <<
        //
        // ---------------------------------- >> CB <<
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ---------------------------------- >> CB <<
        //
      }
      // -------------------------- 200 <<
      //
      // ------------------------ error >>
      else {
        //
        // ------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------------- >> remove loading <<
        //
        // ------------------------------- >> Notif <<
        NotificationCallBack(
          "Failed to create folder 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ------------------------------- >> Notif <<
        //
      }
      // ------------------------ error <<
      //
    })
    // ----------------------------------- > then <
    //
    // --------------------- catch >
    .catch((error) => {
      //
      // --------------------------- > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // --------------------------- > remove loading <
      //
      // --------------------------- > Notif <
      NotificationCallBack(
        "Failed to create folder 👎",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // --------------------------- > Notif <
      //
    });
  // ----------------------- catch >
  //
  // ---------------------------------------------- >> GET <<
  //
}
// ========================================================== >> Post Folder <<
//
// =========================================================== >> FilePicker <<
function FilePicker() {
  //
  // ------------------------------------------------- >> V <<
  const List = document.querySelector(".StorageContent");
  // ------------------------------------------------- >> V <<
  //
  // --------------------------------------------- >> Input <<
  const FilePicker = document.createElement("input");
  FilePicker.classList.add("FilePicker");
  FilePicker.type = "file";
  // --------------------------------------------- >> Input <<
  //
  // ------------------------------------------------- >> L <<
  FilePicker.addEventListener("change", (event) => {
    //
    // -------------------------------------- > file <
    const file = event.target.files[0];
    // -------------------------------------- > file <
    //
    // ------------------------------------- > limit <
    const FILE_SIZE_LIMIT = 2 * 1024 * 1024 * 1024;
    // ------------------------------------- > limit <
    //
    // ---------------------------------------- > 👎 <
    if (!file) {
      //
      // ----------------------------- Notif >>
      NotificationCallBack(
        "No file selected",
        "ic:round-data-object",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------------- Notif <<
      //
    }
    // ---------------------------------------- > 👎 <
    //
    // ----------------------------------------- > ? <
    else {
      //
      // --------------------------------- 👎 >>
      if (file.size > FILE_SIZE_LIMIT) {
        //
        // ----------------------- Notif >
        NotificationCallBack(
          "Selected file is to large",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ----------------------- Notif <
        //
        // ----------------- clear value >
        FilePicker.value = "";
        // ----------------- clear value <
        //
      }
      // --------------------------------- 👎 <<
      //
      // --------------------------------- 👍 >>
      else {
        //
        // -------------------- Uploader >
        Upload(file);
        // -------------------- Uploader <
        //
      }
      // --------------------------------- 👍 >>
      //
    }
    // ----------------------------------------- > ? <
    //
    //
  });
  // ------------------------------------------------- >> L <<
  //
  // --------------------------------------------- >> Click <<
  FilePicker.click();
  // --------------------------------------------- >> Click <<
  //
}
// =========================================================== >> FilePicker <<
//
// =============================================================== >> Upload <<
function Upload(file) {
  //
  // ------------------------------------------- >> Add Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ------------------------------------------- >> Add Loading <<
  //
  // ------------------------------------------------------- > V <
  const List = document.querySelector(".StorageContent");
  // ------------------------------------------------------- > V <
  //
  // ------------------------------------------------ > FormData <
  const formData = new FormData();
  formData.append("file", file);
  // ------------------------------------------------ > FormData <
  //
  // ---------------------------------------------- > WebService <
  //
  // --------------------------------------- API >>
  const Api = `https://personnel.samami.co/storage/upload?parent_path=${CurrentPath}`;
  // --------------------------------------- API <<
  //
  // -------------------------------------- POST >>
  PostImage(Api, formData)
    //
    // ----------------------------- then >
    .then((response) => {
      //
      // ---------------------------------- > 200 <
      if (response.status == 200) {
        //
        // ---------------------------------------- >> Notif <<
        NotificationCallBack(
          "File uploaded successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ---------------------------------------- >> Notif <<
        //
        // ---------------------------------------- >> SM <<
        List.classList.remove("show");
        Layer5.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
          BG_5.innerHTML = "";
        }, 500);
        // ---------------------------------------- >> SM <<
        //
        // ---------------------------------------- >> CB <<
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ---------------------------------------- >> CB <<
        //
      }
      // ---------------------------------- > 200 <
      //
      // -------------------------------- > error <
      else {
        //
        // ---------------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ---------------------------------------- >> remove loading <<
        //
        // ---------------------------------------- >> Notif <<
        NotificationCallBack(
          "Upload failed 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ---------------------------------------- >> Notif <<
        //
      }
      // -------------------------------- > error <
      //
    })
    // ----------------------------- then <
    //
    // ---------------------------- catch >
    .catch((error) => {
      //
      // ---------------------------------- > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // ---------------------------------- > remove loading <
      //
      // ---------------------------------- > Notif <
      NotificationCallBack("Upload failed 👎", "fa:close", "red", BG_7, Layer7);
      // ---------------------------------- > Notif <
      //
    });
  // ------------------------------ catch <
  //
  // -------------------------------------- POST <<
  //
  // ---------------------------------------------- > WebService <
  //
}
// =============================================================== >> Upload <<
//
// ======================================================= >> GET Properties <<
function GetProperties(value) {
  //
  // --------------------------------------- >> Add Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // --------------------------------------- >> Add Loading <<
  //
  // --------------------------------------- >> Web Service <<
  //
  // ------------------------------- > API <
  let Api = `https://personnel.samami.co/storage/properties?folder=${value}`;
  // ------------------------------- > API <
  //
  // ------------------------------- > GET <
  GET(Api)
    //
    // ---------------------- then >
    .then((response) => {
      //
      // --------------------------- > 200 <
      if (response.status == 200) {
        //
        // --------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // --------------------------------- >> remove loading <<
        //
        // --------------------------------- >> CB <<
        setTimeout(() => {
          PropertiesPopup(response.data);
        }, 500);
        // --------------------------------- >> CB <<
        //
      }
      // --------------------------- > 200 <
      //
      // --------------------------- > error <
      else {
        //
        // ----------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ----------------------------------- >> remove loading <<
        //
        // ----------------------------------- >> Notif <<
        NotificationCallBack(
          "Failed to get properties 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ----------------------------------- >> Notif <<
        //
      }
      // --------------------------- > error <
      //
    })
    // ---------------------- then <
    //
    // --------------------- catch >
    .catch((error) => {
      //
      // --------------------------- > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // --------------------------- > remove loading <
      //
      // --------------------------- > Notif <
      NotificationCallBack(
        "Failed to get properties 👎",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // --------------------------- > Notif <
      //
    });
  // ----------------------- catch <
  //
  // ------------------------------- > GET <
  //
  // --------------------------------------- >> Web Service <<
  //
}
// ======================================================= >> GET Properties <<
//
// ===================================================== >> Properties Popup <<
function PropertiesPopup(response) {
  //
  // ------------------------------------------ >> SM <<
  Layer5.classList.add("show");
  // ------------------------------------------ >> SM <<
  //
  // ----------------------------------------- >> div <<
  const PropertiesPopup = document.createElement("div");
  PropertiesPopup.classList.add("Column", "show");
  //
  // ---------------------------------- > id <
  PropertiesPopup.id = "PropertiesPopup";
  // ---------------------------------- > id <
  //
  // ---------------------------------- > AC <
  BG_5.appendChild(PropertiesPopup);
  // ---------------------------------- > AC <
  //
  // ----------------------------------------- >> div <<
  //
  // ---------------------------------------- >> Flex <<
  const PropertiesHeader = document.createElement("div");
  PropertiesHeader.classList.add("Flex");
  //
  // --------------------------------- > id <
  PropertiesHeader.id = "PropertiesHeader";
  // --------------------------------- > id <
  //
  // --------------------------------- > AC <
  PropertiesPopup.appendChild(PropertiesHeader);
  // --------------------------------- > AC <
  //
  // ------------------------------ > Title <
  //
  // ------------------------ CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Properties",
    true,
    "pepicons-pop:gear-circle-filled",
    false,
    () => { }
  );
  // ------------------------ CB <<
  //
  // ------------------------ AC >>
  PropertiesHeader.appendChild(PopupTitle.widget);
  // ------------------------ AC <<
  //
  // ------------------------------ > Title <
  //
  // -------------------------------- > BTN <
  //
  // -------------------------- CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // -------------------------- CB <<
  //
  // --------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(PropertiesPopup);
    }, 500);
    //
  }
  // --------------------------- L <<
  //
  // -------------------------- AC >>
  PropertiesHeader.appendChild(ColseBTN.widget);
  // -------------------------- AC <<
  //
  // -------------------------------- > BTN <
  //
  // ---------------------------------------- >> Flex <<
  //
  // ---------------------------------------- >> Body <<
  const PropertiesBody = document.createElement("div");
  PropertiesBody.classList.add("Column");
  //
  // --------------------------------- > id <
  PropertiesBody.id = "PropertiesBody";
  // --------------------------------- > id <
  //
  // --------------------------------- > AC <
  PropertiesPopup.appendChild(PropertiesBody);
  // --------------------------------- > AC <
  //
  // ------------------------------- > Flex <
  const PropertiesItemFlex = document.createElement("div");
  PropertiesItemFlex.classList.add("PropertiesItemFlex");
  //
  // ------------------------- AC >>
  PropertiesBody.appendChild(PropertiesItemFlex);
  // ------------------------- AC <<
  //
  // ------------------------------- > Flex <
  //
  // --------------------------------- > SVG <
  const PropertiesItemSVG = document.createElement("img");
  PropertiesItemSVG.classList.add("PropertiesItemSVG");
  //
  // ------------------------ value >>
  //
  // --------------- folder >
  if (response.is_file == false) {
    PropertiesItemSVG.src = "./../assets/svg/folder-icon.svg";
  }
  // --------------- folder <
  //
  // ------------- document >
  else if (response.type == "document") {
    PropertiesItemSVG.src = "./../assets/svg/receipt-icon.svg";
  }
  // ------------- document <
  //
  // ---------------- movie >
  else if (response.type == "mp4" || response.type == "mkv") {
    PropertiesItemSVG.src = "./../assets/svg/video-icon.svg";
  }
  // ---------------- movie <
  //
  // -------------- picture >
  else if (response.type == "jpg" || response.type == "jpeg") {
    PropertiesItemSVG.src = "./../assets/svg/picture-icon.svg";
  }
  // -------------- picture <
  //
  // ------------------ pdf >
  else if (response.type == "pdf") {
    PropertiesItemSVG.src = "./../assets/svg/pdf-icon.svg";
  }
  // ------------------ pdf <
  //
  // ----------------- word >
  else if (response.type == "word") {
    PropertiesItemSVG.src = "./../assets/svg/word-icon.svg";
  }
  // ----------------- word <
  //
  // ---------------- excel >
  else if (response.type == "excel") {
    PropertiesItemSVG.src = "./../assets/svg/excel-icon.svg";
  }
  // ---------------- excel <
  //
  // ---------------- music >
  else if (response.type == "mp3") {
    PropertiesItemSVG.src = "./../assets/svg/music-icon.svg";
  }
  // ---------------- music <
  //
  // ----------- powerpoint >
  else if (response.type == "powerpoint") {
    PropertiesItemSVG.src = "./../assets/svg/powerpoint-icon.svg";
  }
  // ----------- powerpoint <
  //
  // -------------- unknown >
  else {
    PropertiesItemSVG.src = "./../assets/svg/unknown-icon.svg";
  }
  // -------------- unknown <
  //
  // ------------------------ value >>
  //
  // --------------------------- AC >>
  PropertiesItemFlex.appendChild(PropertiesItemSVG);
  // --------------------------- AC <<
  //
  // --------------------------------- > SVG <
  //
  // -------------------------------- > span <
  const PropertiesItemSpan = document.createElement("span");
  PropertiesItemSpan.classList.add("PropertiesItemSpan");
  //
  // ----------------------- value >>
  PropertiesItemSpan.textContent = response.name;
  // ----------------------- value <<
  //
  // -------------------------- AC >>
  PropertiesItemFlex.appendChild(PropertiesItemSpan);
  // -------------------------- AC <<
  //
  // -------------------------------- > span <
  //
  // ----------------------------- > Divider <
  const PropertiesDeivider = document.createElement("div");
  PropertiesDeivider.classList.add("PropertiesDeivider");
  //
  // ----------------------- AC >>
  PropertiesBody.appendChild(PropertiesDeivider);
  // ----------------------- AC <<
  //
  // ----------------------------- > Divider <
  //
  // -------------------------------- > span <
  const PropertiesItemPath = document.createElement("span");
  PropertiesItemPath.classList.add("PropertiesItemPath");
  //
  // ----------------------- value >>
  PropertiesItemPath.textContent = `Path : ${response.path}`;
  // ----------------------- value <<
  //
  // -------------------------- AC >>
  PropertiesBody.appendChild(PropertiesItemPath);
  // -------------------------- AC <<
  //
  // -------------------------------- > span <
  //
  // -------------------------------- > span <
  const PropertiesItemSize = document.createElement("span");
  PropertiesItemSize.classList.add("PropertiesItemSize");
  //
  // ------------------- convertor >>
  function formatFileSize(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    if (bytes === 0) return "0 Bytes";

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const fileSize = (bytes / Math.pow(1024, i)).toFixed(2);

    return `${fileSize} ${sizes[i]}`;
  }
  // ------------------- convertor <<
  //
  // ----------------------- value >>
  PropertiesItemSize.textContent = `Size : ${formatFileSize(response.size)}`;
  // ----------------------- value <<
  //
  // -------------------------- AC >>
  PropertiesBody.appendChild(PropertiesItemSize);
  // -------------------------- AC <<
  //
  // -------------------------------- > span <
  //
  // -------------------------------- > span <
  const PropertiesItemCreatedDate = document.createElement("span");
  PropertiesItemCreatedDate.classList.add("PropertiesItemCreatedDate");
  //
  // ----------------------- value >>
  PropertiesItemCreatedDate.textContent = `Created at : ${response.created_at}`;
  // ----------------------- value <<
  //
  // -------------------------- AC >>
  PropertiesBody.appendChild(PropertiesItemCreatedDate);
  // -------------------------- AC <<
  //
  // -------------------------------- > span <
  //
  // -------------------------------- > span <
  const PropertiesItemCreator = document.createElement("span");
  PropertiesItemCreator.classList.add("PropertiesItemCreator");
  //
  // ----------------------- value >>
  PropertiesItemCreator.textContent = `Creator : ${response.owner.username} - ${response.owner.user_type}`;
  // ----------------------- value <<
  //
  // -------------------------- AC >>
  PropertiesBody.appendChild(PropertiesItemCreator);
  // -------------------------- AC <<
  //
  // -------------------------------- > span <
  //
  // ---------------------------------------- >> Body <<
  //
}
// ===================================================== >> Properties Popup <<
//
// ============================================================= >> Download <<
function DownloadWebService(id) {
  //
  // ----------------------------------------- >> Add Loading <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ----------------------------------------- >> Add Loading <<
  //
  // ----------------------------------------- >> Web Service <<
  //
  // --------------------------------- > API <
  let Api = `https://personnel.samami.co/storage/download?id=${id}`;
  // --------------------------------- > API <
  //
  // --------------------------------- > GET <
  GET(Api)
    //
    // ------------------------ then >
    .then((response) => {
      //
      // ----------------------------- > 200 <
      if (response.status == 200) {
        //
        // ----------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ----------------------------------- >> remove loading <<
        //
        // ----------------------------------- >> download <<
        //
        // ----------------------------- > V <
        const fileUrl = response.data.link; // Use the link from the response
        const filename = fileUrl.split("/").pop(); // Get the filename (e.g., "20250217135606.mp4")
        // ----------------------------- > V <
        //
        // ----------------------------- > a <
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = filename || "samami-unnamed-file";
        // ----------------------------- > a <
        //
        // ------------------------ > images <
        if (fileUrl.match(/\.(jpg|jpeg|png|gif|bmp|tiff)$/i)) {
          fetch(fileUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const imageUrl = URL.createObjectURL(blob);
              link.href = imageUrl; // Use the Blob URL for images
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((err) => {
              console.error("Image download failed:", err);
              // Handle any errors in fetching the image
            });
        }
        // ------------------------ > images <
        //
        // -------------------------- > file <
        else {
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
        // -------------------------- > file <
        //
        // ----------------------------------- >> download <<
        //
      }
      // ----------------------------- > 200 <
      //
      // ----------------------------- > error <
      else {
        //
        // ------------------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------------------- >> remove loading <<
        //
        // ------------------------------------- >> Notif <<
        NotificationCallBack(
          "Failed to download 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ------------------------------------- >> Notif <<
        //
      }
      // ----------------------------- > error <
      //
    })
    // ------------------------ then <
    //
    // ----------------------- catch >
    .catch((error) => {
      //
      // ----------------------------- > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // ----------------------------- > remove loading <
      //
      // ----------------------------- > Notif <
      NotificationCallBack(
        "Failed to download 👎",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------------- > Notif <
      //
    });
  // ------------------------- catch <
  //
  // --------------------------------- > GET <
  //
  // ----------------------------------------- >> Web Service <<
  //
}
// ============================================================= >> Download <<
//
// ============================================================ >> Move Popup <<
function MovePopup(id) {
  //
  // ------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ------------------------------------------------- >> SM <<
  //
  // ------------------------------------------------ >> div <<
  const MovePopupPopup = document.createElement("div");
  MovePopupPopup.classList.add("Column", "show");
  //
  // ----------------------------------------- > id <
  MovePopupPopup.id = "MovePopupPopup";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  BG_5.appendChild(MovePopupPopup);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> div <<
  //
  // ----------------------------------------------- >> Flex <<
  const MovePopupHeader = document.createElement("div");
  MovePopupHeader.classList.add("Flex");
  //
  // ---------------------------------------- > id <
  MovePopupHeader.id = "MovePopupHeader";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  MovePopupPopup.appendChild(MovePopupHeader);
  // ---------------------------------------- > AC <
  //
  // ------------------------------------- > Title <
  //
  // ------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Move",
    true,
    "lucide-lab:copy-file-path",
    false,
    () => { }
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- AC >>
  MovePopupHeader.appendChild(PopupTitle.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Title <
  //
  // --------------------------------------- > BTN <
  //
  // --------------------------------- CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // --------------------------------- CB <<
  //
  // ---------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(MovePopupPopup);
    }, 500);
    //
  }
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  MovePopupHeader.appendChild(ColseBTN.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > BTN <
  //
  // ----------------------------------------------- >> Flex <<
  //
  // ----------------------------------------------- >> Body <<
  const MovePopupBody = document.createElement("div");
  MovePopupBody.classList.add("Column");
  //
  // ---------------------------------------- > id <
  MovePopupBody.id = "MovePopupBody";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  MovePopupPopup.appendChild(MovePopupBody);
  // ---------------------------------------- > AC <
  //
  // ------------------------------------- > Field <
  //
  // -------------------------------- V >>
  const MovePopupCurrentPathID = "MovePopupCurrentPathFeild";
  //
  const MovePopupCurrentPathLabel = "Current path";
  //
  const MovePopupCurrentPathFeildID = "MovePopupCurrentPathFeild";
  //
  const MovePopupCurrentPathInputPlaceholder = "";
  //
  // -------------------------------- V <<
  //
  // ------------------------------- CB >>
  const MovePopupCurrentPath = Field(
    MovePopupCurrentPathID,
    true,
    "ic:round-short-text",
    MovePopupCurrentPathLabel,
    false,
    MovePopupCurrentPathFeildID,
    "",
    MovePopupCurrentPathInputPlaceholder,
    100
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- SM >>
  MovePopupCurrentPath.widget.style.pointerEvents = "none";
  MovePopupCurrentPath.Input.value = CurrentPath;
  // ------------------------------- SM <<
  //
  // ------------------------------- id >>
  MovePopupCurrentPath.labelIcon.id = "MovePopupCurrentPathFieldLabelIcon";
  MovePopupCurrentPath.labelText.id = "MovePopupCurrentPathFieldLabelText";
  MovePopupCurrentPath.field.id = "MovePopupCurrentPathField";
  MovePopupCurrentPath.Input.id = "MovePopupCurrentPathFieldInput";
  // ------------------------------- id <<
  //
  // ------------------------------- AC >>
  MovePopupBody.appendChild(MovePopupCurrentPath.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Field <
  //
  // --------------------------------------- > div <
  const MovedPopupDivider = document.createElement("div");
  MovedPopupDivider.classList.add("MovedPopupDivider");
  //
  // --------------------------------- AC >>
  MovePopupBody.appendChild(MovedPopupDivider);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > div <
  //
  // ------------------------------------- > Field <
  //
  // -------------------------------- V >>
  const MovePopupNewPathID = "MovePopupNewPathFeild";
  //
  const MovePopupNewPathLabel = "New path";
  //
  const MovePopupNewPathFeildID = "MovePopupNewPathFeild";
  //
  const MovePopupNewPathInputPlaceholder = "enter your path ...";
  //
  // -------------------------------- V <<
  //
  // ------------------------------- CB >>
  const MovePopupNewPath = Field(
    MovePopupNewPathID,
    true,
    "ic:round-short-text",
    MovePopupNewPathLabel,
    false,
    MovePopupNewPathFeildID,
    "",
    MovePopupNewPathInputPlaceholder,
    100
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- id >>
  MovePopupNewPath.labelIcon.id = "MovePopupNewPathFieldLabelIcon";
  MovePopupNewPath.labelText.id = "MovePopupNewPathFieldLabelText";
  MovePopupNewPath.field.id = "MovePopupNewPathField";
  MovePopupNewPath.Input.id = "MovePopupNewPathFieldInput";
  // ------------------------------- id <<
  //
  // ------------------------------- AC >>
  MovePopupBody.appendChild(MovePopupNewPath.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Field <
  //
  // ----------------------------------------------- >> Body <<
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ----------------------------------------- > CB <
  const SubmitBTN = BTN(
    "GreenPopupBTN",
    true,
    "Submit",
    true,
    "line-md:check-all",
    true,
    SubmitBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function SubmitBTNListener() {
    //
    // --------------------------------- 👎 >>
    if (MovePopupNewPath.Input.value == "") {
      //
      // ----------------------- Notif >
      NotificationCallBack(
        "New path cannot be empty",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------- Notif <
      //
    }
    // --------------------------------- 👎 <<
    //
    // --------------------------------- 👍 >>
    else {
      //
      // ------------------------------------- > remove loading <
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------------------- > remove loading <
      //
      // ------------------------------------- > POST <
      setTimeout(() => {
        MoveWebService(id, MovePopupNewPath.Input.value);
      }, 500);
      // ------------------------------------- > POST <
      //
    }
    // --------------------------------- 👍 <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  MovePopupPopup.appendChild(SubmitBTN.widget);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> BTN <<
  //
}
// ============================================================ >> Move Popup <<
//
// ======================================================= >> Move WebService <<
function MoveWebService(id, new_path) {
  //
  // --------------------------------------------- >> V <<
  const List = document.querySelector(".StorageContent");
  // --------------------------------------------- >> V <<
  //
  // ------------------------------------------- >> API <<
  let Api = `https://personnel.samami.co/storage/move?id=${id}&new_path=${new_path}`;
  // ------------------------------------------- >> API <<
  //
  // ------------------------------------------- >> GET <<
  GET(Api)
    //
    // -------------------------------- > then <
    .then((response) => {
      //
      // ----------------------- 200 >>
      if (response.status == 200) {
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack(
          "Moved successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ---------------------------- >> Notif <<
        //
        // ------------------------------- >> SM <<
        List.classList.remove("show");
        Layer5.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
          BG_5.innerHTML = "";
        }, 500);
        // ------------------------------- >> SM <<
        //
        // ------------------------------- >> CB <<
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ------------------------------- >> CB <<
        //
      }
      // ----------------------- 200 <<
      //
      // --------------------- error >>
      else {
        //
        // ---------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ---------------------------- >> remove loading <<
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack("Move failed 👎", "fa:close", "red", BG_7, Layer7);
        // ---------------------------- >> Notif <<
        //
      }
      // --------------------- error <<
      //
    })
    // -------------------------------- > then <
    //
    // ------------------ catch >
    .catch((error) => {
      //
      // ------------------------ > remove loading <
      LoadingcallBack(BG_6, 2, Layer6);
      // ------------------------ > remove loading <
      //
      // ------------------------ > Notif <
      NotificationCallBack("Move failed 👎", "fa:close", "red", BG_7, Layer7);
      // ------------------------ > Notif <
      //
    });
  // -------------------- catch >
  //
  // ------------------------------------------- >> GET <<
  //
}
// ======================================================= >> Move WebService <<
//
// ========================================================== >> Rename Popup <<
function RenamePopup(id, itemname) {
  //
  // ------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ------------------------------------------------- >> SM <<
  //
  // ------------------------------------------------ >> div <<
  const RenamePopup = document.createElement("div");
  RenamePopup.classList.add("Column", "show");
  //
  // ----------------------------------------- > id <
  RenamePopup.id = "RenamePopup";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  BG_5.appendChild(RenamePopup);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> div <<
  //
  // ----------------------------------------------- >> Flex <<
  const RenamePopupHeader = document.createElement("div");
  RenamePopupHeader.classList.add("Flex");
  //
  // ---------------------------------------- > id <
  RenamePopupHeader.id = "RenamePopupHeader";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  RenamePopup.appendChild(RenamePopupHeader);
  // ---------------------------------------- > AC <
  //
  // ------------------------------------- > Title <
  //
  // ------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Rename",
    true,
    "mdi:rename",
    false,
    () => { }
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- AC >>
  RenamePopupHeader.appendChild(PopupTitle.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Title <
  //
  // --------------------------------------- > BTN <
  //
  // --------------------------------- CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // --------------------------------- CB <<
  //
  // ---------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(RenamePopup);
    }, 500);
    //
  }
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  RenamePopupHeader.appendChild(ColseBTN.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > BTN <
  //
  // ----------------------------------------------- >> Flex <<
  //
  // ----------------------------------------------- >> Body <<
  const RenamePopupBody = document.createElement("div");
  RenamePopupBody.classList.add("Column");
  //
  // ---------------------------------------- > id <
  RenamePopupBody.id = "RenamePopupBody";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  RenamePopup.appendChild(RenamePopupBody);
  // ---------------------------------------- > AC <
  //
  // ------------------------------------- > Field <
  //
  // -------------------------------- V >>
  const RenamePopupCurrentNameID = "RenamePopupCurrentNameFeild";
  //
  const RenamePopupCurrentNameLabel = "Current Name";
  //
  const RenamePopupCurrentNameFeildID = "RenamePopupCurrentNameFeild";
  //
  const RenamePopupCurrentNameInputPlaceholder = "";
  //
  // -------------------------------- V <<
  //
  // ------------------------------- CB >>
  const RenamePopupCurrentName = Field(
    RenamePopupCurrentNameID,
    true,
    "ic:round-short-text",
    RenamePopupCurrentNameLabel,
    false,
    RenamePopupCurrentNameFeildID,
    "",
    RenamePopupCurrentNameInputPlaceholder,
    100
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- SM >>
  RenamePopupCurrentName.widget.style.pointerEvents = "none";
  RenamePopupCurrentName.Input.value = itemname;
  // ------------------------------- SM <<
  //
  // ------------------------------- id >>
  RenamePopupCurrentName.labelIcon.id = "RenamePopupCurrentNameFieldLabelIcon";
  RenamePopupCurrentName.labelText.id = "RenamePopupCurrentNameFieldLabelText";
  RenamePopupCurrentName.field.id = "RenamePopupCurrentNameField";
  RenamePopupCurrentName.Input.id = "RenamePopupCurrentNameFieldInput";
  // ------------------------------- id <<
  //
  // ------------------------------- AC >>
  RenamePopupBody.appendChild(RenamePopupCurrentName.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Field <
  //
  // --------------------------------------- > div <
  const RenamedPopupDivider = document.createElement("div");
  RenamedPopupDivider.classList.add("RenamedPopupDivider");
  //
  // --------------------------------- AC >>
  RenamePopupBody.appendChild(RenamedPopupDivider);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > div <
  //
  // ------------------------------------- > Field <
  //
  // -------------------------------- V >>
  const RenamePopupNewNameID = "RenamePopupNewNameFeild";
  //
  const RenamePopupNewNameLabel = "New Name";
  //
  const RenamePopupNewNameFeildID = "RenamePopupNewNameFeild";
  //
  const RenamePopupNewNameInputPlaceholder = "enter your Name ...";
  //
  // -------------------------------- V <<
  //
  // ------------------------------- CB >>
  const RenamePopupNewName = Field(
    RenamePopupNewNameID,
    true,
    "ic:round-short-text",
    RenamePopupNewNameLabel,
    false,
    RenamePopupNewNameFeildID,
    "",
    RenamePopupNewNameInputPlaceholder,
    100
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- id >>
  RenamePopupNewName.labelIcon.id = "RenamePopupNewNameFieldLabelIcon";
  RenamePopupNewName.labelText.id = "RenamePopupNewNameFieldLabelText";
  RenamePopupNewName.field.id = "RenamePopupNewNameField";
  RenamePopupNewName.Input.id = "RenamePopupNewNameFieldInput";
  // ------------------------------- id <<
  //
  // ------------------------------- AC >>
  RenamePopupBody.appendChild(RenamePopupNewName.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Field <
  //
  // ----------------------------------------------- >> Body <<
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ----------------------------------------- > CB <
  const SubmitBTN = BTN(
    "GreenPopupBTN",
    true,
    "Submit",
    true,
    "line-md:check-all",
    true,
    SubmitBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function SubmitBTNListener() {
    //
    // --------------------------------- 👎 >>
    if (RenamePopupNewName.Input.value.length < 2) {
      //
      // ----------------------- Notif >
      NotificationCallBack(
        "New name cannot be empty or less than 2 charecter",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // ----------------------- Notif <
      //
    }
    // --------------------------------- 👎 <<
    //
    // --------------------------------- 👍 >>
    else {
      //
      // ------------------------------------- > Rename loading <
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------------------- > Rename loading <
      //
      // ------------------------------------- > POST <
      setTimeout(() => {
        RenameWebService(id, RenamePopupNewName.Input.value);
      }, 500);
      // ------------------------------------- > POST <
      //
    }
    // --------------------------------- 👍 <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  RenamePopup.appendChild(SubmitBTN.widget);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> BTN <<
  //
}
// ========================================================== >> Rename Popup <<
//
// ===================================================== >> Rename WebService <<
function RenameWebService(id, new_name) {
  //
  // --------------------------------------------- >> V <<
  const List = document.querySelector(".StorageContent");
  // --------------------------------------------- >> V <<
  //
  // ------------------------------------------- >> API <<
  let Api = `https://personnel.samami.co/storage/rename?id=${id}&new_name=${new_name}`;
  // ------------------------------------------- >> API <<
  //
  // ------------------------------------------- >> GET <<
  GET(Api)
    //
    // -------------------------------- > then <
    .then((response) => {
      //
      // ----------------------- 200 >>
      if (response.status == 200) {
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack(
          "Renamed successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ---------------------------- >> Notif <<
        //
        // ------------------------------- >> SM <<
        List.classList.remove("show");
        Layer5.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
          BG_5.innerHTML = "";
        }, 500);
        // ------------------------------- >> SM <<
        //
        // ------------------------------- >> CB <<
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ------------------------------- >> CB <<
        //
      }
      // ----------------------- 200 <<
      //
      // --------------------- error >>
      else {
        //
        // ---------------------------- >> Rename loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ---------------------------- >> Rename loading <<
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack(
          "Rename failed 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ---------------------------- >> Notif <<
        //
      }
      // --------------------- error <<
      //
    })
    // -------------------------------- > then <
    //
    // ------------------------------- > catch <
    .catch((error) => {
      //
      // --------------------------------------- >> Rename loading <<
      LoadingcallBack(BG_6, 2, Layer6);
      // --------------------------------------- >> Rename loading <<
      //
      // --------------------------------------- >> Notif <<
      NotificationCallBack("Rename failed 👎", "fa:close", "red", BG_7, Layer7);
      // --------------------------------------- >> Notif <<
      //
    });
  // --------------------------------- > catch <
  //
  // ------------------------------------------- >> GET <<
  //
}
// ===================================================== >> Rename WebService <<
//
// ========================================================== >> Delete Popup <<
function DeletePopup(item_name, id) {
  //
  // ------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ------------------------------------------------- >> SM <<
  //
  // ------------------------------------------------ >> div <<
  const DeletePopup = document.createElement("div");
  DeletePopup.classList.add("Column", "show");
  //
  // ----------------------------------------- > id <
  DeletePopup.id = "DeletePopup";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  BG_5.appendChild(DeletePopup);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> div <<
  //
  // ----------------------------------------------- >> Flex <<
  const DeletePopupHeader = document.createElement("div");
  DeletePopupHeader.classList.add("Flex");
  //
  // ---------------------------------------- > id <
  DeletePopupHeader.id = "DeletePopupHeader";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  DeletePopup.appendChild(DeletePopupHeader);
  // ---------------------------------------- > AC <
  //
  // ------------------------------------- > Title <
  //
  // ------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Delete",
    true,
    "icon-park-solid:delete-four",
    false,
    () => { }
  );
  // ------------------------------- CB <<
  //
  // ------------------------------- AC >>
  DeletePopupHeader.appendChild(PopupTitle.widget);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Title <
  //
  // --------------------------------------- > BTN <
  //
  // --------------------------------- CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // --------------------------------- CB <<
  //
  // ---------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(DeletePopup);
    }, 500);
    //
  }
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  DeletePopupHeader.appendChild(ColseBTN.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > BTN <
  //
  // ----------------------------------------------- >> Flex <<
  //
  // ----------------------------------------------- >> Body <<
  const DeletePopupBody = document.createElement("div");
  DeletePopupBody.classList.add("Column");
  //
  // ---------------------------------------- > id <
  DeletePopupBody.id = "DeletePopupBody";
  // ---------------------------------------- > id <
  //
  // ---------------------------------------- > AC <
  DeletePopup.appendChild(DeletePopupBody);
  // ---------------------------------------- > AC <
  //
  const DeletePopupText = document.createElement("span");
  DeletePopupText.classList.add("DeletePopupText");
  //
  DeletePopupText.textContent = `Are you shure about deleting " ${item_name}"`;
  //
  DeletePopupBody.appendChild(DeletePopupText);
  //
  // ----------------------------------------------- >> Body <<
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ----------------------------------------- > CB <
  const SubmitBTN = BTN(
    "RedPopupBTN",
    true,
    "Delete",
    true,
    "mdi:delete-empty",
    true,
    SubmitBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function SubmitBTNListener() {
    //
    // ---------------------- Delete loading >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ---------------------- Delete loading <<
    //
    // ------------------------------ Delete >>
    setTimeout(() => {
      DeleteWebService(id);
    }, 500);
    // ------------------------------ Delete <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  DeletePopup.appendChild(SubmitBTN.widget);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> BTN <<
  //
}
// ========================================================== >> Delete Popup <<
//
// ===================================================== >> Delete WebService <<
function DeleteWebService(id) {
  //
  // --------------------------------------------- >> V <<
  const List = document.querySelector(".StorageContent");
  // --------------------------------------------- >> V <<
  //
  // ------------------------------------------- >> API <<
  let Api = `https://personnel.samami.co/storage/delete?id=${id}`;
  // ------------------------------------------- >> API <<
  //
  // ------------------------------------------- >> GET <<
  DELETE(Api)
    //
    // -------------------------------- > then <
    .then((response) => {
      //
      // ----------------------- 200 >>
      if (response.status == 200) {
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack(
          "Deleted successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ---------------------------- >> Notif <<
        //
        // ------------------------------- >> SM <<
        List.classList.remove("show");
        Layer5.classList.remove("show");
        setTimeout(() => {
          List.innerHTML = "";
          BG_5.innerHTML = "";
        }, 500);
        // ------------------------------- >> SM <<
        //
        // ------------------------------- >> CB <<
        setTimeout(() => {
          GetChildren(CurrentPath);
        }, 500);
        // ------------------------------- >> CB <<
        //
      }
      // ----------------------- 200 <<
      //
      // --------------------- error >>
      else {
        //
        // ---------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // ---------------------------- >> remove loading <<
        //
        // ---------------------------- >> Notif <<
        NotificationCallBack(
          "Delete failed 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ---------------------------- >> Notif <<
        //
      }
      // --------------------- error <<
      //
    })
    // -------------------------------- > then <
    //
    // ------------------------------- > catch <
    .catch((error) => {
      //
      // --------------------------------------- >> remove loading <<
      LoadingcallBack(BG_6, 2, Layer6);
      // --------------------------------------- >> remove loading <<
      //
      // --------------------------------------- >> Notif <<
      NotificationCallBack("Delete failed 👎", "fa:close", "red", BG_7, Layer7);
      // --------------------------------------- >> Notif <<
      //
    });
  // --------------------------------- > catch <
  //
  // ------------------------------------------- >> GET <<
  //
}
// ===================================================== >> Delete WebService <<
//
