// =================================================================== >> improts <<
//
// --------------------------------------------------------- >> BTN <<
import { BTN } from "./modules/BTN.js";
// --------------------------------------------------------- >> BTN <<
//
// ------------------------------------------------------- >> Field <<
import { Field } from "./modules/Field.js";
// ------------------------------------------------------- >> Field <<
//
// ------------------------------------------------------- >> Fetch <<
import { postData } from "./modules/fetch_module.js";
// ------------------------------------------------------- >> Fetch <<
//
// =================================================================== >> improts <<
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
// ==================================================================== >> Layers <<
//
// ================================================================ >> Background <<
//
// ------------------------------------------------------ >> Img <<
const HexagonWallpaper = document.createElement("img");
HexagonWallpaper.classList.add("HexagonWallpaper");
//
// ---------------------------------------------- > src <
HexagonWallpaper.src = "./assets/img/Hexagon-wallpaper.jpg";
// ---------------------------------------------- > src <
//
// ------------------------------------------- > Append <
BG_1.appendChild(HexagonWallpaper);
// ------------------------------------------- > Append <
//
// ------------------------------------------------------ >> Img <<
//
// ================================================================ >> Background <<
//
// ================================================================= >> Live Hand <<
const LiveHandContainer = document.createElement("div");
LiveHandContainer.classList.add("LiveHandContainer");
//
// ---------------------------------------------------- >> Append <<
BG_2.appendChild(LiveHandContainer);
// ---------------------------------------------------- >> Append <<
//
// ---------------------------------------------------- >> Cricle <<
const Circle = document.createElement("div");
Circle.classList.add("Circle");
//
// ----------------------------------------- > Append <
LiveHandContainer.appendChild(Circle);
// ----------------------------------------- > Append <
//
// ---------------------------------------------------- >> Cricle <<
//
// ------------------------------------------------------- >> Img <<
const LiveHand = document.createElement("img");
LiveHand.classList.add("LiveHand");
//
// ----------------------------------------------- > src <
LiveHand.src = "./assets/img/auth.png";
// ----------------------------------------------- > src <
//
// -------------------------------------------- > Append <
LiveHandContainer.appendChild(LiveHand);
// -------------------------------------------- > Append <
//
// ------------------------------------------------------- >> Img <<
//
// ================================================================= >> Live Hand <<
//
// ============================================================ >> Authentication <<
const Authentication = document.createElement("div");
Authentication.classList.add("Authentication");
//
// ----------------------------------------------- >> Append <<
BG_2.appendChild(Authentication);
// ----------------------------------------------- >> Append <<
//
// ------------------------------------------------ >> Title <<
const AuthenticationTitle = document.createElement("div");
AuthenticationTitle.classList.add("AuthenticationTitle");
//
// ------------------------------------- > Append <
Authentication.appendChild(AuthenticationTitle);
// ------------------------------------- > Append <
//
// ------------------------------------ > Heading <
const AuthenticationHeading = document.createElement("span");
AuthenticationHeading.classList.add("AuthenticationHeading");
//
// ----------------------------- src >>
AuthenticationHeading.textContent = "SAMAMI";
// ----------------------------- src <<
//
// -------------------------- Append >>
AuthenticationTitle.appendChild(AuthenticationHeading);
// -------------------------- Append <<
//
// ------------------------------------ > Heading <
//
// -------------------------------- > Sub Heading <
const AuthenticationSubHeading = document.createElement("span");
AuthenticationSubHeading.classList.add("AuthenticationSubHeading");
//
// ------------------------- src >>
AuthenticationSubHeading.textContent = "personnel";
// ------------------------- src <<
//
// ---------------------- Append >>
AuthenticationTitle.appendChild(AuthenticationSubHeading);
// ---------------------- Append <<
//
// -------------------------------- > Sub Heading <
//
// ------------------------------------------------ >> Title <<
//
// ----------------------------------------------- >> Number <<
let phonenumber = "";
// ----------------------------------------------- >> Number <<
//
// --------------------------------------------- >> Step One <<
function StepOne() {
  //
  // ----------------------------------- > div <
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // ----------------------------- id >>
  Column.id = "StepOne";
  // ----------------------------- id >>
  //
  // ------------------------- Append >>
  Authentication.appendChild(Column);
  // ------------------------- Append <<
  //
  // ----------------------------- SM >>
  setTimeout(() => {
    Column.classList.add("show");
  }, 1);
  // ----------------------------- SM <<
  //
  // ----------------------------------- > div <
  //
  // --------------------------------- > Feild <
  //
  // ---------------------- Varibels >
  const FeildID = "";
  const Icon = "";
  const Placeholder = "enter phone number";
  // ---------------------- Varibels <
  //
  // ---------------------- CallBack >
  const PhoneFeild = Field(
    "",
    false,
    "",
    false,
    FeildID,
    Icon,
    Placeholder,
    11
  );
  // ---------------------- CallBack <
  //
  // ---------------------- Listener <
  PhoneFeild.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      // Validator >>
      //   phoneValidator(PhoneFeild);
      // Validator <<
    }
  });
  // ---------------------- Listener <
  //
  // ---------------------------- AP >
  Column.appendChild(PhoneFeild.widget);
  // ---------------------------- AP <
  //
  // --------------------------------- > Feild <
  //
  // ----------------------------------- > BTN <
  //
  // ------------------------ Varibels >
  const BtnId = "PhoneSubmit";
  const BtnText = "Next";
  const BtnIcon = "akar-icons:check-box-fill";
  // ------------------------ Varibels <
  //
  // ------------------------ CallBack >
  const Submit = BTN(BtnId, true, BtnText, true, BtnIcon, true, SubmitListener);
  // ------------------------ CallBack <
  //
  // ------------------------ Listener >
  function SubmitListener() {
    //
    // -------- Validator >>
    // phoneValidator(PhoneFeild);
    // -------- Validator <<
  }
  // ------------------------ Listener <
  //
  // ------------------------------ AP >
  Column.appendChild(Submit.widget);
  // ------------------------------ AP <
  //
  // ----------------------------------- > BTN <
  //
  // ------------------------------- Validator >>
  function phoneValidator(Feild) {
    //
    // ------------------- variables >>
    const feildinput = Feild.Input.value.trim();
    // ------------------- variables <<
    //
    // ------------------- Post Info >>
    const PhoneNumberApi = "https://samami.co/auth/send-otp";
    //
    let data = {
      phone_number: FaToEn(`${feildinput}`),
    };
    // ------------------- Post Info >>
    //
    // ---------------- fill a value >>
    phonenumber = FaToEn(`${feildinput}`);
    // ---------------- fill a value <<
    //
    // --------------- Words Pattern >>
    const regex = /^\d+$/;
    // --------------- Words Pattern <<
    //
    // ------------ Validation False >>
    if (!regex.test(feildinput) || feildinput.length < 11) {
      //
      // ClassMangemnt >
      Feild.widget.classList.add("error");
      Submit.classList.add("error");
      //
      setTimeout(() => {
        Feild.widget.classList.remove("error");
        Submit.classList.remove("error");
      }, 2500);
      // ClassMangemnt <
      //
      // notif callback >
      const NotifClassName = "error";
      const NotifText = `! شماره وارد شده صحیح نمیباشد`;
      const NotifIcon = "icon-park-solid:error";
      NotificationCallBack(NotifClassName, NotifText, NotifIcon);
      // notif callback <
      //
    }
    // ------------ Validation False <<
    //
    // ------------------------ Post >>
    else {
      //
      // ------------ Loading >
      Loading(0);
      // ------------ Loading <
      //
      // --------------- Post >
      postData(PhoneNumberApi, data)
        .then((response) => {
          //
          // status 200 >>
          if (response.status == 200) {
            //
            // StateManagement >
            Loading(1);
            Column.classList.remove("show");
            //
            setTimeout(() => {
              FormContainer.removeChild(Column);
              Step_Two();
            }, 500);
            // StateManagement <
          }
          // status 200 <<
          //
          // status 409 >>
          else if (response.status == 409) {
            //
            // notif callback >
            const NotifClassName = "error";
            const NotifText = `! سیستم پیامکی قاصدک با مشکلی مواجه شده است`;
            const NotifIcon = "icon-park-solid:error";
            NotificationCallBack(NotifClassName, NotifText, NotifIcon);
            // notif callback <
            //
          }
          // status 409 <<
          //
          // else >>
          else {
            //
            // notif callback >
            const NotifClassName = "error";
            const NotifText = `! سیستم با مشکلی مواجه شده است`;
            const NotifIcon = "icon-park-solid:error";
            NotificationCallBack(NotifClassName, NotifText, NotifIcon);
            // notif callback <
            //
          }
          // else <<
        })
        .catch((error) => {
          console.log(error);
        });
      // --------------- Post <
      //
    }
    // ------------------------ Post <<
  }
  // ------------------------------- Validator <<
  //
}
// --------------------------------------------- >> Step One <<
//
// --------------------------------------------- >> Step Two <<
function StepTwo() {}
// --------------------------------------------- >> Step Two <<
//
// ------------------------------------------- >> Step Three <<
function StepThree() {}
// ------------------------------------------- >> Step Three <<
//
// ============================================================ >> Authentication <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  //
  // ---------------------------------------------- >> State Management <<
  setTimeout(() => {
    BG_1.classList.add("show");
    BG_2.classList.add("show");
  }, 100);
  // ---------------------------------------------- >> State Management <<
  //
  // ------------------------------------------------------ >> CallBack <<
  setTimeout(() => {
    StepOne();
  }, 600);
  // ------------------------------------------------------ >> CallBack <<
  //
});
// ======================================================================= >> DOM <<
