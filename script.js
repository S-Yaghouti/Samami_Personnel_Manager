// =================================================================== >> improts <<
//
// --------------------------------------------------------- >> BTN <<
import { BTN } from "./modules/Widgets/BTN/BTN.js";
// --------------------------------------------------------- >> BTN <<
//
// ------------------------------------------------------- >> Field <<
import { Field } from "./modules/Widgets/Field/Field.js";
// ------------------------------------------------------- >> Field <<
//
// ------------------------------------------------------- >> Fetch <<
import { postData } from "./modules/Web_Service/web_service.js";
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
// ----------------------------------------------- >> Circle <<
const ShadowCircle = document.createElement("div");
ShadowCircle.classList.add("ShadowCircle");
//
// ------------------------------------- Append >>
Authentication.appendChild(ShadowCircle);
// ------------------------------------- Append <<
//
// ----------------------------------------------- >> Circle <<
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
  // ------------------------- Append >>
  Authentication.appendChild(Column);
  // ------------------------- Append <<
  //
  // ----------------------------- SM >>
  setTimeout(() => {
    Column.classList.add("show");
  }, 100);
  // ----------------------------- SM <<
  //
  // ----------------------------------- > div <
  //
  // --------------------------------- > Feild <
  //
  // ---------------------- Varibels >
  const FeildID = "PhoneNumberFeild";
  const Icon = "";
  const Placeholder = "0900 000 0000";
  // ---------------------- Varibels <
  //
  // ---------------------- CallBack >
  const PhoneFeild = Field(
    "PhoneNumber",
    true,
    "Phone Number",
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
      //
      // --------- Validator >>
      let Validation = Validator(PhoneFeild, 1);
      // --------- Validator <<
      //
      // ----- State Manager >>
      StateManager(Validation, PhoneFeild.widget, Submit.widget, 1, Column);
      // ----- State Manager <<
      //
      // ------- Web Service >>
      //
      // ------- Web Service <<
      //
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
  const BtnId = "SubmitBTN";
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
    // --------- Validator >>
    let Validation = Validator(PhoneFeild, 1);
    // --------- Validator <<
    //
    // ----- State Manager >>
    StateManager(Validation, PhoneFeild.widget, Submit.widget, 1, Column);
    // ----- State Manager <<
    //
    // ------- Web Service >>
    //
    // ------- Web Service <<
    //
  }
  // ------------------------ Listener <
  //
  // ------------------------------ AP >
  Column.appendChild(Submit.widget);
  // ------------------------------ AP <
  //
  // ----------------------------------- > BTN <
  //
}
// --------------------------------------------- >> Step One <<
//
// --------------------------------------------- >> Step Two <<
function StepTwo() {
  //
  // ----------------------------------- > div <
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // ------------------------- Append >>
  Authentication.appendChild(Column);
  // ------------------------- Append <<
  //
  // ----------------------------- SM >>
  setTimeout(() => {
    Column.classList.add("show");
  }, 50);
  // ----------------------------- SM <<
  //
  // ----------------------------------- > div <
  //
  // --------------------------------- > Field <
  //
  // ---------------------- Varibels >
  const FieldID = "OTPField";
  const Icon = "";
  const Placeholder = "enter code";
  // ---------------------- Varibels <
  //
  // ---------------------- CallBack >
  const PhoneField = Field(
    "OTP",
    true,
    "OTP Verifaction",
    false,
    FieldID,
    Icon,
    Placeholder,
    4
  );
  // ---------------------- CallBack <
  //
  // ---------------------- Listener <
  PhoneField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // Validator
      let Validation = Validator(PhoneField, 2);
      // Validator
      //
      // State Manager
      StateManager(Validation, PhoneField.widget, Verify.widget, 2, Column);
      // State Manager
      //
      // Web Service
      //
      // Web Service
      //
    }
  });
  // ---------------------- Listener <
  //
  // ---------------------------- AP >
  Column.appendChild(PhoneField.widget);
  // ---------------------------- AP <
  //
  // --------------------------------- > Field <
  //
  // ----------------------------------- > Row <
  const Row = document.createElement("Row");
  Row.classList.add("Row");
  //
  // ------------------------- Append >>
  Column.appendChild(Row);
  // ------------------------- Append <<
  //
  // --------------------------- Back >>
  //
  // ---------------- Varibels >
  const BackId = "BackBTN";
  const BackText = "back";
  const BackIcon = "icon-park-solid:back";
  // ---------------- Varibels <
  //
  // ---------------- CallBack >
  const Back = BTN(BackId, true, BackText, true, BackIcon, true, BackListener);
  // ---------------- CallBack <
  //
  // ---------------- Listener >
  function BackListener() {
    //
    // State Management
    Column.classList.remove("show");
    //
    setTimeout(() => {
      Column.parentNode.removeChild(Column);
    }, 500);
    //
    setTimeout(() => {
      StepOne();
    }, 600);
    // State Management
    //
  }
  // ---------------- Listener <
  //
  // ---------------------- AP >
  Row.appendChild(Back.widget);
  // ---------------------- AP <
  //
  // --------------------------- Back <<
  //
  // ------------------------- Verify >>
  //
  // -------------- Varibels >
  const verifyId = "SubmitBTN";
  const VerifyText = "Verify";
  const VerifyIcon = "mynaui:check-octagon-solid";
  // -------------- Varibels <
  //
  // -------------- CallBack >
  const Verify = BTN(
    verifyId,
    true,
    VerifyText,
    true,
    VerifyIcon,
    true,
    VerifyListener
  );
  // -------------- CallBack <
  //
  // -------------- Listener >
  function VerifyListener() {
    //
    // Validator
    let Validation = Validator(PhoneField, 2);
    // Validator
    //
    // State Manager
    StateManager(Validation, PhoneField.widget, Verify.widget, 2, Column);
    // State Manager
    //
    // Web Service
    //
    // Web Service
    //
  }
  // -------------- Listener <
  //
  // -------------------- AP >
  Row.appendChild(Verify.widget);
  // -------------------- AP <
  //
  // ------------------------- Verify <<
  //
  // ----------------------------------- > Row <
  //
}
// --------------------------------------------- >> Step Two <<
//
// ------------------------------------------- >> Step Three <<
function StepThree() {
  //
  // ----------------------------------- > div <
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // ------------------------- Append >>
  Authentication.appendChild(Column);
  // ------------------------- Append <<
  //
  // ----------------------------- SM >>
  setTimeout(() => {
    Column.classList.add("show");
  }, 100);
  // ----------------------------- SM <<
  //
  // ----------------------------------- > div <
  //
  // --------------------------------- > Feild <
  //
  // ---------------------- Varibels >
  const FeildID = "UserNameFeild";
  const Icon = "";
  const Placeholder = "enter your name";
  // ---------------------- Varibels <
  //
  // ---------------------- CallBack >
  const UserNameFeild = Field(
    "UserName",
    true,
    "User Name",
    false,
    FeildID,
    Icon,
    Placeholder,
    20
  );
  // ---------------------- CallBack <
  //
  // ---------------------- Listener <
  UserNameFeild.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // Validator
      let Validation = Validator(UserNameFeild, 3);
      // Validator
      //
      // State Manager
      StateManager(Validation, UserNameFeild.widget, Verify.widget, 3, Column);
      // State Manager
      //
      // Web Service
      //
      // Web Service
      //
    }
  });
  // ---------------------- Listener <
  //
  // ---------------------------- AP >
  Column.appendChild(UserNameFeild.widget);
  // ---------------------------- AP <
  //
  // --------------------------------- > Feild <
  //
  // ----------------------------------- > Row <
  const Row = document.createElement("Row");
  Row.classList.add("Row");
  //
  // ------------------------- Append >>
  Column.appendChild(Row);
  // ------------------------- Append <<
  //
  // --------------------------- Back >>
  //
  // ---------------- Varibels >
  const BackId = "BackBTN";
  const BackText = "back";
  const BackIcon = "icon-park-solid:back";
  // ---------------- Varibels <
  //
  // ---------------- CallBack >
  const Back = BTN(BackId, true, BackText, true, BackIcon, true, BackListener);
  // ---------------- CallBack <
  //
  // ---------------- Listener >
  function BackListener() {
    //
    // State Management
    Column.classList.remove("show");
    //
    setTimeout(() => {
      Column.parentNode.removeChild(Column);
    }, 500);
    //
    setTimeout(() => {
      StepTwo();
    }, 600);
    // State Management
    //
  }
  // ---------------- Listener <
  //
  // ---------------------- AP >
  Row.appendChild(Back.widget);
  // ---------------------- AP <
  //
  // --------------------------- Back <<
  //
  // ------------------------- Verify >>
  //
  // -------------- Varibels >
  const verifyId = "SubmitBTN";
  const VerifyText = "Signup";
  const VerifyIcon = "fluent:person-add-20-filled";
  // -------------- Varibels <
  //
  // -------------- CallBack >
  const Verify = BTN(
    verifyId,
    true,
    VerifyText,
    true,
    VerifyIcon,
    true,
    VerifyListener
  );
  // -------------- CallBack <
  //
  // -------------- Listener >
  function VerifyListener() {
    //
    // Validator
    let Validation = Validator(UserNameFeild, 3);
    // Validator
    //
    // State Manager
    StateManager(Validation, UserNameFeild.widget, Verify.widget, 3, Column);
    // State Manager
    //
    // Web Service
    //
    // Web Service
    //
  }
  // -------------- Listener <
  //
  // -------------------- AP >
  Row.appendChild(Verify.widget);
  // -------------------- AP <
  //
  // ------------------------- Verify <<
  //
  // ----------------------------------- > Row <
  //
}
// ------------------------------------------- >> Step Three <<
//
// -------------------------------------------- >> Validator <<
function Validator(Field, State) {
  //
  // -------------------- Variable >>
  let IsValid = false;
  // -------------------- Variable <<
  //
  // ----------------------- Input >>
  const fieldinput = Field.Input.value.trim();
  // ----------------------- Input <<
  //
  // -------------------- Patterns >>
  const phoneRegex = /^[0-9]{11}$/;
  const numberRegex = /^[0-9]{4}$/;
  const englishWordsRegex = /^[A-Za-z]+$/;
  // -------------------- Patterns <<
  //
  switch (State) {
    //
    // --------------------- Phone >>
    case 1:
      //
      // Validation >
      IsValid = phoneRegex.test(fieldinput);
      // Validation <
      //
      // fill a value >
      phonenumber = fieldinput;
      // fill a value <
      //
      break;
    // --------------------- Phone <<
    //
    // ----------------------- OTP >>
    case 2:
      //
      // Validation >
      IsValid = numberRegex.test(fieldinput);
      // Validation <
      //
      break;
    // ----------------------- OTP <<
    //
    // -------------------- Signup >>
    case 3:
      //
      // Validation >
      IsValid = englishWordsRegex.test(fieldinput);
      // Validation <
      //
      break;
    // -------------------- Signup <<
    //
  }
  //
  // ---------------------- Return >>
  return IsValid;
  // ---------------------- Return <<
  //
}
// -------------------------------------------- >> Validator <<
//
// ---------------------------------------- >> State Manager <<
function StateManager(IsValid, Field, BTN, Status, Column) {
  //
  // -------------------------- > Correct <
  if (IsValid == true) {
    //
    //---------- add Classes >>
    ShadowCircle.classList.add("green");
    Field.classList.add("green");
    BTN.classList.add("green");
    //---------- add Classes <<
    //
    // - Remove column Class >>
    setTimeout(() => {
      Column.classList.remove("show");
    }, 500);
    // - Remove column Class <<
    //
    // ------- Remove Column >>
    setTimeout(() => {
      Column.parentNode.removeChild(Column);
    }, 1000);
    // ------- Remove Column <<
    //
    // ----- Call Next Feild >>
    setTimeout(() => {
      //
      // Remove Shadow Class
      ShadowCircle.classList.remove("green");
      // Remove Shadow Class
      //
      // Manage Next Stage
      if (Status == 1) {
        StepTwo();
      }
      //
      else if (Status == 2) {
        StepThree();
      }
      //
      else if (Status == 3) {
        //
      }
      // Manage Next Stage
      //
    }, 1100);
    // ----- Call Next Feild <<
    //
  }
  // -------------------------- > Correct <
  //
  // ---------------------------- > False <
  else {
    //
    ShadowCircle.classList.add("red");
    Field.classList.add("red");
    BTN.classList.add("red");
    //
    setTimeout(() => {
      ShadowCircle.classList.remove("red");
      Field.classList.remove("red");
      BTN.classList.remove("red");
    }, 2000);
    //
  }
  // ---------------------------- > False <
  //
}
// ---------------------------------------- >> State Manager <<
//
// ------------------------------------------ >> Web Service <<
function WebSerive(Status, Field) {
  //
  // -------------------------- > Variables <
  let FeildValue = Field.value.trim();
  const ApiAddress = "";
  let Data = [];
  // -------------------------- > Variables <
  //
  // -------------------------- > Fill Data <
  //
  // -------------  >>
  if (Status == 1) {
    Data = {
      phone_number: FeildValue,
    };
  } else if (Status == 2) {
    Data = {
      phone_number: phonenumber,
      code: FeildValue,
    };
  } else if (Status == 3) {
    Data = {
      phone_number: phonenumber,
      user_name: FeildValue,
    };
  }
  // -------------------------- > Fill Data <
  //
  // -------------------------- > Post Data <
  // postData("", Data)
  //   .then((response) => {
  //     //
  //     // status 200 >>
  //     if (response.status == 200) {
  //     }
  //     // status 200 <<
  //     //
  //     // status 409 >>
  //     else if (response.status == 409) {
  //     }
  //     // status 409 <<
  //     //
  //     // else >>
  //     else {
  //     }
  //     // else <<
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // -------------------------- > Post Data <
  //
}
// ------------------------------------------ >> Web Service <<
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
