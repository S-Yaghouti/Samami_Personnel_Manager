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
// ------------------------------------------------- >> Web Service <<
import { NotificationCallBack } from "./../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------------- >> Web Service <<
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
// ==================================================================== >> Layers <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  //
  // ---------------------------------------------------- >> Loading CB <<
  LoadingcallBack(BG_3, 1, Layer3);
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
    let Api = "https://personel.samami.co/useruser-data";
    // ------------------------------ API <<
    //
    // ------------------------------ GET >>
    GET(Api)
      .then((response) => {
        console.log(response);
        //
        // -------------------- 200 >
        if (response.status == 200) {
          //
          // ------------------------ >> Loading CB
          LoadingcallBack(BG_3, 2, Layer3);
          // ------------------------ << Loading CB
          //
          // ------------------------ >> Sidebar CB
          FillSidebar(response.data);
          AC_Sidebar();
          // ------------------------ << Sidebar CB
          //
          // ------------------------ >> SM
          Layer5.classList.add("show");
          // ------------------------ << SM
          //
        }
        // -------------------- 200 <
        //
        // ------------------ error >
        else {
        }
        // ------------------ error <
        //
      })
      .catch((error) => {
        console.log(error);
      });
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
// =================================================================== >> Layer 1 <<
//
// ----------------------------------------------------- >> Loading <<
// LoadingcallBack(1);

// setTimeout(() => {
//   LoadingcallBack(2);
// }, 2000);
// ----------------------------------------------------- >> Loading <<
//
// ------------------------------------------------- >> Check Token <<
function CheckToken() {}
// ------------------------------------------------- >> Check Token <<
//
// =================================================================== >> Layer 1 <<
//
// =================================================================== >> Layer 2 <<
//
function ContentManager(value) {
  console.log(value);
}
// =================================================================== >> Layer 2 <<
//
// =================================================================== >> Layer 3 <<
//

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
      BG_3,
      Layer3
    );
    // fa:close ph:check-fat-fill
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  BG_4.appendChild(SidebarWidget);
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
  Layer4.classList.toggle("show");
}
// ---------------------------------------------- > L <
//
// --------------------------------------------- > AC <
BG_5.appendChild(SidebarOperator);
// --------------------------------------------- > AC <
//
// ---------------------------------------------------- >> Operator <<
//
// =================================================================== >> Layer 5 <<
//
// =================================================================== >> Layer 6 <<

// =================================================================== >> Layer 6 <<
//
