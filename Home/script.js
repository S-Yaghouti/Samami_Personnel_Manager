// =================================================================== >> improts <<
//
// ----------------------------------------------------- >> Loading <<
import { LoadingcallBack } from "../modules/Widgets/Loading/loading.js";
// ----------------------------------------------------- >> Loading <<
//
// ----------------------------------------------------- >> SideBar <<
import { Sidebar, Operator } from "./../modules/Widgets/SideBar/Side_Bar.js";
// ----------------------------------------------------- >> SideBar <<
//
// ----------------------------------------------- >> Local Storage <<
import {
  setLocalStorage,
  RetrieveLocalStorage,
} from "./../modules/Local_Storage/local_storage.js";
// ----------------------------------------------- >> Local Storage <<
//
// ------------------------------------------------- >> Web Service <<
import { GET } from "../modules/Web_Service/web_service.js";
// ------------------------------------------------- >> Web Service <<
//
// ------------------------------------------------ >> Notification <<
import { NotificationCallBack } from "./../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------------ >> Notification <<
//
// ------------------------------------------------------- >> Users <<
import { UsersSection } from "./Sections/Users.js";
// ------------------------------------------------------- >> Users <<
//
// ----------------------------------------------------- >> Storage <<
import { StorageSection } from "./Sections/Storage.js";
// ----------------------------------------------------- >> Storage <<
//
// ------------------------------------------------------- >> Tasks <<
import { TasksSection } from "./Sections/Tasks.js";
// ------------------------------------------------------- >> Tasks <<
//
// ------------------------------------------------------- >> Notes <<
import { NotesSections } from "./Sections/Notes.js";
// ------------------------------------------------------- >> Notes <<
//
// =================================================================== >> improts <<
//
// =============================================================== >> Definitions <<
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
// =============================================================== >> Definitions <<
//
// ==================================================================== >> Layers <<
//
// ------------------------------------------------------ >> layer 1 <<
const Layer1 = document.querySelector(".Layer1");
const BG_1 = document.querySelector("#BG_1");
// ------------------------------------------------------ >> layer 1 <<
//
// ------------------------------------------------------ >> layer 2 <<
const Layer2 = document.querySelector(".Layer2");
const BG_2 = document.querySelector("#BG_2");
// ------------------------------------------------------ >> layer 2 <<
//
// ------------------------------------------------------ >> layer 3 <<
const Layer3 = document.querySelector(".Layer3");
const BG_3 = document.querySelector("#BG_3");
// ------------------------------------------------------ >> layer 3 <<
//
// ------------------------------------------------------ >> layer 4 <<
const Layer4 = document.querySelector(".Layer4");
const BG_4 = document.querySelector("#BG_4");
// ------------------------------------------------------ >> layer 4 <<
//
// ------------------------------------------------------ >> layer 5 <<
const Layer5 = document.querySelector(".Layer5");
const BG_5 = document.querySelector("#BG_5");
// ------------------------------------------------------ >> layer 5 <<
//
// ------------------------------------------------------ >> layer 6 <<
const Layer6 = document.querySelector(".Layer6");
const BG_6 = document.querySelector("#BG_6");
// ------------------------------------------------------ >> layer 6 <<
//
// ------------------------------------------------------ >> layer 7 <<
const Layer7 = document.querySelector(".Layer7");
const BG_7 = document.querySelector("#BG_7");
// ------------------------------------------------------ >> layer 7 <<
// 
// ==================================================================== >> Layers <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  //
  // ---------------------------------------------------- >> Loading CB <<
  LoadingcallBack(BG_6, 1, Layer6);
  // ---------------------------------------------------- >> Loading CB <<
  //
  // --------------------------------------------------- >> Check Token <<
  setTimeout(() => {
    Auth();
  }, 1000);
  // --------------------------------------------------- >> Check Token <<
});
// ======================================================================= >> DOM <<
//
// ======================================================================= >> Auth <<
function Auth() {
  //
  // ----------------------------------------------------- >> Get Token <<
  const token = RetrieveLocalStorage("token");
  // ----------------------------------------------------- >> Get Token <<
  //
  // ---------------------------------------------------- >> Validation <<
  //
  // ---------------------------------------- > Is Null <
  if (token == null) {
    window.location.assign("./../index.html");
  }
  // ---------------------------------------- > Is Null <
  //
  // --------------------------------------- > Get User <
  else {
    //
    // ------------------------------ API >>
    let Api = "https://personnel.samami.co/user/data";
    // ------------------------------ API <<
    //
    // ------------------------------ GET >>
    GET(Api)
      .then((response) => {
        //
        // ------------- Authorized >
        if (response.status == 200) {
          //
          // ------------------------ >> Page Name
          document.title = `Welcome ${response.data.username}`;
          // ------------------------ << Page Name
          //
          // ------------------------ >> Loading
          LoadingcallBack(BG_6, 2, Layer6);
          // ------------------------ << Loading
          //
          // ------------------------ >> Sidebar
          FillSidebar(response.data);
          AC_Sidebar();
          // ------------------------ << Sidebar
          //
          // ------------------------ >> SM
          Layer4.classList.add("show");
          // ------------------------ << SM
          //
          // ------------------------ >> Content Manager
          setTimeout(() => {
            const SidebarOptions = document.querySelectorAll(".SidebarOption");
            SidebarOptions[0].classList.add("active");
            ContentManager(SidebarOptions[0].children[0].textContent);
          }, 500);
          // ------------------------ << Content Manager
          //
        }
        // ------------- Authorized <
        //
        // ----------- Unauthorized >
        else {
          //
          // ------------------------ >> Loading
          LoadingcallBack(BG_6, 2, Layer6);
          // ------------------------ << Loading
          //
          // ------------------------ >> Move To Auth
          setTimeout(() => {
            window.location.replace("./../index.html");
          }, 500);
          // ------------------------ << Move To Auth
          //
        }
        // ----------- Unauthorized <
        //
      })
      .catch((error) => {
        //
        // ------------------------ > Loading
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------ < Loading
        //
        // ------------------------ > Reload
        setTimeout(() => {
          window.location.reload();
        }, 500);
        // ------------------------ < Reload
      });
    //
    // ------------------------------ GET <<

    //
  }
  // --------------------------------------- > Get User <
  //
  // ---------------------------------------------------- >> Validation <<
  //
}
// ======================================================================= >> Auth <<
//
// =================================================================== >> Layer 2 <<
//
// ----------------------------------------------- >> Create Slider <<
const SliderContainer = document.createElement("div");
SliderContainer.classList.add("SliderContainer");
//
BG_2.appendChild(SliderContainer);
// ----------------------------------------------- >> Create Slider <<
//
// ----------------------------------------------- >> SliderManager <<
function ContentManager(Value) {
  //
  // -------------------------------------- > SM <
  SliderContainer.classList.remove("show");
  // -------------------------------------- > SM <
  //
  // ------------------------------ > CB Loading <
  LoadingcallBack(BG_6, 1, Layer6);
  // ------------------------------ > CB Loading <
  //
  // ----------------------------------- > Users <
  if (Value == "Users") {
    setTimeout(() => {
      SliderContainer.innerHTML = "";
      UsersSection();
    }, 500);
  }
  // ----------------------------------- > Users <
  //
  // --------------------------------- > Storage <
  else if (Value == "Storage") {
    setTimeout(() => {
      SliderContainer.innerHTML = "";
      StorageSection();
    }, 500);
  }
  // --------------------------------- > Storage <
  //
  // ----------------------------------- > Tasks <
  else if (Value == "Tasks") {
    setTimeout(() => {
      SliderContainer.innerHTML = "";
      TasksSection();
    }, 500);
  }
  // ----------------------------------- > Tasks <
  //
  // ----------------------------------- > Notes <
  else if (Value == "Notes") {
    setTimeout(() => {
      SliderContainer.innerHTML = "";
      NotesSections();
    }, 500);
  }
  // ----------------------------------- > Notes <
  //
}
// ----------------------------------------------- >> SliderManager <<
//
// =================================================================== >> Layer 2 <<
//
// =================================================================== >> Layer 3 <<
//
// =================================================================== >> Layer 3 <<
//
// =================================================================== >> Layer 4 <<
//
// --------------------------------------------------- >> Sidebar V <<
let LogoAddress = "./../assets/svg/SAMAMI-LOGO.svg";
let SiderbarIconList = [];
let SiderbarTextList = [];
let UserInfo = {};
// --------------------------------------------------- >> Sidebar V <<
//
// ------------------------------------------------ >> Fill Sidebar <<
function FillSidebar(response) {
  //
  // ------------------------------------- > Type <
  const Type = response.user_type;
  // ------------------------------------- > Type <
  //
  // ------------------------------------- > Icon <
  //
  // -------------- User Siderbar icons >>
  if (Type == "user") {
    SiderbarIconList = [
      "streamline:cloud-share-solid",
      "clarity:tasks-solid",
      "material-symbols:note-stack",
    ];
  }
  // -------------- User Siderbar icons <<
  //
  // ------------- Admin Siderbar icons >>
  else if (Type == "admin") {
    SiderbarIconList = [
      "fa6-solid:users-gear",
      "streamline:cloud-share-solid",
      "clarity:tasks-solid",
      "material-symbols:note-stack",
    ];
  }
  // ------------- Admin Siderbar icons <<
  //
  // ------------------------------------- > Icon <
  //
  // ------------------------------------- > Text <
  //
  // -------------- User Siderbar Texts >>
  if (Type == "user") {
    SiderbarTextList = ["Storage", "Tasks", "Notes"];
  }
  // -------------- User Siderbar Texts <<
  //
  // ------------- Admin Siderbar Texts >>
  else if (Type == "admin") {
    SiderbarTextList = ["Users", "Storage", "Tasks", "Notes"];
  }
  // ------------- Admin Siderbar Texts <<
  //
  // ------------------------------------- > Text <
  //
  // ------------------------------------- > User <
  UserInfo = {
    name: response.username,
    avatar: response.avatar_image,
  };
  // ------------------------------------- > User <
  //
}
//
// ------------------------------------------------ >> Fill Sidebar <<
//
// -------------------------------------------------- >> AC Sidebar <<
function AC_Sidebar() {
  //
  // ----------------------------------------- > CB <
  const SidebarWidget = Sidebar(
    LogoAddress,
    SiderbarIconList,
    SiderbarTextList,
    (index, Widget) => {
      SidebarOptionListener(index, Widget);
    },
    UserInfo,
    SidebarExitListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function SidebarOptionListener(index, Widget) {
    //
    // ----------------------------------- V >>
    const SidebarOptions = document.querySelectorAll(".SidebarOption");
    // ----------------------------------- V <<
    //
    // ---------------------------------- SM >>
    SidebarOptions.forEach((option) => {
      option.classList.remove("active");
    });
    SidebarOptions[index].classList.add("active");
    // ---------------------------------- SM <<
    //
    // ---------------------------------- CB >>
    let OptionName = Widget.children[0].innerText;
    ContentManager(OptionName);
    // ---------------------------------- CB <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ------------------------------------------ > L <
  function SidebarExitListener() {
    //
    NotificationCallBack(
      "Request Sucssess 👍",
      "ph:check-fat-fill",
      "green",
      BG_7,
      Layer7
    );
    // fa:close ph:check-fat-fill
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  BG_3.appendChild(SidebarWidget);
  // ----------------------------------------- > AC <
  //
}
// -------------------------------------------------- >> AC Sidebar <<
//
// =================================================================== >> Layer 4 <<
//
// =================================================================== >> Layer 5 <<
//
// ---------------------------------------------------- >> Operator <<
//
// --------------------------------------------- > CB <
const SidebarOperator = Operator(SidebarOperatorListener);
// --------------------------------------------- > CB <
//
// ---------------------------------------------- > L <
function SidebarOperatorListener() {
  Layer3.classList.toggle("show");
}
// ---------------------------------------------- > L <
//
// --------------------------------------------- > AC <
BG_4.appendChild(SidebarOperator);
// --------------------------------------------- > AC <
//
// ---------------------------------------------------- >> Operator <<
//
// =================================================================== >> Layer 5 <<
//
// =================================================================== >> Layer 6 <<

// =================================================================== >> Layer 6 <<
//
