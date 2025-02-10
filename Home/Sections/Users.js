// ============================================================== >> Imports <<
//
// ------------------------------------------------ >> Loading <<
import { LoadingcallBack } from "../../modules/Widgets/Loading/loading.js";
// ------------------------------------------------ >> Loading <<
//
// -------------------------------------------- >> Web Service <<
import {
  PostImage,
  PUT,
  DELETE,
} from "../../modules/Web_Service/web_service.js";
// -------------------------------------------- >> Web Service <<
//
//
// ------------------------------------------- >> Notification <<
import { NotificationCallBack } from "./../../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------- >> Notification <<
//
// -------------------------------------------------- >> Feild <<
import { Field } from "./../../modules/Widgets/Field/Field.js";
// -------------------------------------------------- >> Feild <<
//
// ----------------------------------------------- >> Dropdown <<
import { DropDown } from "./../../modules/Widgets/Dropdown/dropdown.js";
// ----------------------------------------------- >> Dropdown <<
//
// ------------------------------------------- >> Data Builder <<
import { DataBuilder } from "./../../modules/Data_Builder/Data_Builder.js";
// ------------------------------------------- >> Data Builder <<
//
// ------------------------------------------- >> Data Builder <<
import { BTN } from "./../../modules/Widgets/BTN/BTN.js";
// ------------------------------------------- >> Data Builder <<
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
// ========================================================== >> Definitions <<
//
// ==================================================================== >> V <<
//
// -------------------------------------------------------- >> Query <<
let Query = ``;
// -------------------------------------------------------- >> Query <<
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
export function UsersSection() {
  //
  // ----------------------------------------------------- >> V <<
  const SliderContainer = document.querySelector(".SliderContainer");
  // ----------------------------------------------------- >> V <<
  //
  // ------------------------------------------------ >> Column <<
  const UsersSection = document.createElement("div");
  UsersSection.classList.add("Column");
  //
  // ----------------------------------------- > id <
  UsersSection.id = "UsersSection";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(UsersSection);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Column <<
  //
  // -------------------------------------------------- >> List <<
  List(true);
  // -------------------------------------------------- >> List <<
  //
  // ------------------------------------------------ >> Return <<
  return UsersSection;
  // ------------------------------------------------ >> Return <<
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
  Flex.id = "FilterFlex";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  father.appendChild(Flex);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> div <<
  //
  // ------------------------------------------------- >> Feild <<
  //
  // ------------------------------------ > Varibels <
  const FeildID = "SearchInput";
  const Icon = "mingcute:user-search-fill";
  const Placeholder = " Search for users ...";
  // ------------------------------------ > Varibels <
  //
  // ------------------------------------ > CallBack <
  const SearchField = Field(
    "SearchField",
    false,
    "",
    "",
    false,
    FeildID,
    Icon,
    Placeholder,
    200
  );
  // ------------------------------------ > CallBack <
  //
  // -------------------------------------- > Set id <
  SearchField.widget.id = "SearchField";
  SearchField.fieldIcon.id = "SearchFieldIcon";
  // -------------------------------------- > Set id <
  //
  // ------------------------------------ > Listener <
  SearchField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // ------------------ Loading CB >>
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------ Loading CB <<
      //
      // ------------------ Loading CB <<
      //
      const DataContainer = document.querySelector(".DataContainer");
      DataContainer.classList.remove("show");
      //
      setTimeout(() => {
        if (father.contains(DataContainer)) {
          father.removeChild(DataContainer);
        }
      }, 500);
      //
      // ------------------ Loading CB <<
      //
      // ----------------------- Query >>
      Query = `search_text=${SearchField.Input.value}`;
      // ----------------------- Query <<
      //
      // --------------------- List CB >>
      setTimeout(() => {
        List(false);
      }, 500);
      // --------------------- List CB <<
      //
    }
  });
  // ------------------------------------ > Listener <
  //
  // ------------------------------------------ > AP <
  Flex.appendChild(SearchField.widget);
  // ------------------------------------------ > AP <
  //
  // ------------------------------------------------- >> Feild <<
  //
}
// =============================================================== >> Filter <<
//
// ============================================================== >> Builder <<
function List(Build) {
  //
  // --------------------------------------------- >> Selector <<
  const father = document.querySelector("#UsersSection");
  // --------------------------------------------- >> Selector <<
  //
  // ---------------------------------------------------- >> V <<
  const Id = "Users";
  const URL = `https://personnel.samami.co/user/get`;
  const limit = 21;
  // ---------------------------------------------------- >> V <<
  //
  // --------------------------------------------------- >> CB <<
  const Users = DataBuilder(
    Id,
    URL,
    Query,
    limit,
    ResponseCallBack,
    PaginationBtnListener
  );
  // --------------------------------------------------- >> CB <<
  //
  // ----------------------------------------- >> List element <<
  const List = Users.List;
  List.id = "UsersList";
  // ----------------------------------------- >> List element <<
  //
  // ----------------------------------------- >> Pagination L <<
  function PaginationBtnListener() {
    LoadingcallBack(BG_6, 1, Layer6);
  }
  // ----------------------------------------- >> Pagination L <<
  //
  // -------------------------------------------- >> P Builder <<
  function ResponseCallBack(response) {
    //
    // ----------------------- > Remove Loading <
    LoadingcallBack(BG_6, 2, Layer6);
    // ----------------------- > Remove Loading <
    //
    // ----------------------------------- > SM <
    const FilterFlex = document.getElementById("FilterFlex");
    FilterFlex.classList.add("show");
    setTimeout(() => {
      Users.widget.classList.add("show");
    }, 250);
    // ----------------------------------- > SM <
    //
    // ----------------------------------- > RM <
    RM(response.data.data, List);
    // ----------------------------------- > RM <
    //
  }
  // -------------------------------------------- >> P Builder <<
  //
  // --------------------------------------------- >> Build ?! <<
  if (Build == true) {
    Filter(father);
  }
  // --------------------------------------------- >> Build ?! <<
  //
  // --------------------------------------------------- >> AP <<
  const UsersList = document.getElementById("Users");
  if (!UsersList) {
    father.appendChild(Users.widget);
  }
  // --------------------------------------------------- >> AP <<
  //
  // ----------------------------------------------- >> return <<
  return Users.widget;
  // ----------------------------------------------- >> return <<
}
// ============================================================== >> Builder <<
//
// =================================================================== >> RM <<
function RM(response, father) {
  //
  response.forEach((info) => {
    //
    const UserWidget = UserBox(info);
    //
    father.appendChild(UserWidget);
    //
  });
  //
}
// =================================================================== >> RM <<
//
// ============================================================= >> User Box <<
function UserBox(response) {
  //
  // ------------------------------------------------- >> div <<
  const UserBox = document.createElement("div");
  UserBox.classList.add("UserBox");
  //
  // ------------------------------------------ > id <
  UserBox.id = response.id;
  // ------------------------------------------ > id <
  //
  // ------------------------------------------------- >> div <<
  //
  // ------------------------------------------------ >> Flex <<
  const FirstFlex = document.createElement("div");
  FirstFlex.classList.add("Flex");
  //
  // ----------------------------------------- > id <
  FirstFlex.id = "UserFirstFlex";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  UserBox.appendChild(FirstFlex);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Flex <<
  //
  // ---------------------------------------------- >> Avatar <<
  const UserAvatar = document.createElement("img");
  UserAvatar.classList.add("UserAvatar");
  UserAvatar.setAttribute("loading", "lazy");
  //
  // -------------------------------------- > src <
  if (response.avatar_image == "") {
    UserAvatar.src = "./../assets/svg/person icon.svg";
  } else {
    UserAvatar.src = response.avatar_image;
  }
  // -------------------------------------- > src <
  //
  // --------------------------------------- > AC <
  FirstFlex.appendChild(UserAvatar);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Avatar <<
  //
  // ---------------------------------------------- >> Column <<
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // --------------------------------------- > id <
  Column.id = "UserColumn";
  // --------------------------------------- > id <
  //
  // --------------------------------------- > AC <
  FirstFlex.appendChild(Column);
  // --------------------------------------- > AC <
  //
  // ------------------------------------- > Flex <
  const UsernameFlex = document.createElement("div");
  UsernameFlex.classList.add("Flex");
  //
  UsernameFlex.id = "UsernameFlex";
  //
  Column.appendChild(UsernameFlex);
  //
  // ------------------------------------- > Flex <
  //
  // ------------------------------------- > span <
  const Username = document.createElement("span");
  Username.classList.add("Username");
  //
  Username.textContent = response.username;
  //
  UsernameFlex.appendChild(Username);
  //
  // ------------------------------------- > span <
  //
  // ------------------------------------- > span <
  const UsernameDivider = document.createElement("span");
  UsernameDivider.classList.add("UsernameDivider");
  //
  UsernameDivider.textContent = " - ";
  //
  UsernameFlex.appendChild(UsernameDivider);
  //
  // ------------------------------------- > span <
  //
  // ------------------------------------- > span <
  const UserType = document.createElement("span");
  UserType.classList.add("UserType");
  //
  UserType.textContent = response.user_type;
  //
  UsernameFlex.appendChild(UserType);
  //
  // ------------------------------------- > span <
  //
  // ------------------------------------- > span <
  const UserPhoneNumber = document.createElement("span");
  UserPhoneNumber.classList.add("UserPhoneNumber");
  //
  UserPhoneNumber.textContent = response.phone_number;
  //
  Column.appendChild(UserPhoneNumber);
  //
  // ------------------------------------- > span <
  //
  // ---------------------------------------------- >> Column <<
  //
  // ------------------------------------------------ >> Flex <<
  const SecondFlex = document.createElement("div");
  SecondFlex.classList.add("Flex");
  //
  // ----------------------------------------- > id <
  SecondFlex.id = "UserSecondFlex";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  UserBox.appendChild(SecondFlex);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Flex <<
  //
  // ------------------------------------------------- >> BTN <<
  //
  // ------------------------------------------- > V <
  const EditBTNId = "UserEditBTN";
  const EditBtnText = "Edit";
  const EditBtnIcon = "mingcute:user-edit-fill";
  // ------------------------------------------- > V <
  //
  // ------------------------------------------ > CB <
  const EditBTN = BTN(
    EditBTNId,
    true,
    EditBtnText,
    true,
    EditBtnIcon,
    true,
    EditBTNListener
  );
  // ------------------------------------------ > CB <
  //
  // ------------------------------------------- > L <
  function EditBTNListener() {
    //
    // ------------------------------------ V >>
    let Data = {
      id: UserBox.id,
      avatar_image: UserAvatar.src,
      username: Username.textContent,
      phone_number: UserPhoneNumber.textContent,
      user_type: UserType.textContent,
    };
    // ------------------------------------ V <<
    //
    // ----------------------------------- CB >>
    EditUser(Layer5, BG_5, Data, true);
    // ----------------------------------- CB <<
    //
  }
  // ------------------------------------------- > L <
  //
  // ------------------------------------------ > AP <
  SecondFlex.appendChild(EditBTN.widget);
  // ------------------------------------------ > AP <
  //
  // ------------------------------------------------- >> BTN <<
  //
  // ------------------------------------------------- >> BTN <<
  //
  // ------------------------------------------- > V <
  const DeleteBTNId = "UserDeleteBTN";
  const DeleteBtnText = "Delete";
  const DeleteBtnIcon = "fluent:person-delete-20-filled";
  // ------------------------------------------- > V <
  //
  // ------------------------------------------ > CB <
  const DeleteBTN = BTN(
    DeleteBTNId,
    true,
    DeleteBtnText,
    true,
    DeleteBtnIcon,
    true,
    DeleteBTNListener
  );
  // ------------------------------------------ > CB <
  //
  // ------------------------------------------- > L <
  function DeleteBTNListener() {
    //
    DeleteUser(Layer5, BG_5, Username.textContent, response.id);
    //
  }
  // ------------------------------------------- > L <
  //
  // ------------------------------------------ > AP <
  SecondFlex.appendChild(DeleteBTN.widget);
  // ------------------------------------------ > AP <
  //
  // ------------------------------------------------- >> BTN <<
  //
  // ---------------------------------------------- >> return <<
  return UserBox;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> User Box <<
//
// ============================================================ >> Edit User <<
export function EditUser(layer, father, response, editable) {
  //
  // ------------------------------------------------- >> SM <<
  layer.classList.add("show");
  // ------------------------------------------------- >> SM <<
  //
  // ------------------------------------------------ >> div <<
  const FirstColumn = document.createElement("div");
  FirstColumn.classList.add("Column", "show");
  //
  // ----------------------------------------- > id <
  FirstColumn.id = "EditUserColumn";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  father.appendChild(FirstColumn);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> div <<
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ------------------------------------------ > V <
  const ColseBTNId = "ColsePopupBTN";
  const ColseBtnIcon = "fa:close";
  // ------------------------------------------ > V <
  //
  // ----------------------------------------- > CB <
  const ColseBTN = BTN(
    ColseBTNId,
    false,
    "",
    true,
    ColseBtnIcon,
    true,
    ColseBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ---------------------------------------- > CSS <
  ColseBTN.widget.style.marginLeft = "auto";
  // ---------------------------------------- > CSS <
  //
  // ------------------------------------------ > L <
  function ColseBTNListener() {
    //
    layer.classList.remove("show");
    //
    setTimeout(() => {
      father.removeChild(FirstColumn);
    }, 500);
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  FirstColumn.appendChild(ColseBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ------------------------------------------------ >> Box <<
  const SecondColumn = document.createElement("div");
  SecondColumn.classList.add("Column");
  //
  // ----------------------------------------- > id <
  SecondColumn.id = "EditUserBox";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  FirstColumn.appendChild(SecondColumn);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Box <<
  //
  // ----------------------------------------------- >> Flex <<
  const Flex = document.createElement("div");
  Flex.classList.add("Flex");
  //
  // ----------------------------------------- > id <
  Flex.id = "EditUserFlex";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SecondColumn.appendChild(Flex);
  // ----------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Flex <<
  //
  // --------------------------------------------- >> Avatar <<
  const EditUserAvatarContainer = document.createElement("div");
  EditUserAvatarContainer.classList.add("EditUserAvatarContainer");
  //
  // -------------------------------------- > AC <
  Flex.appendChild(EditUserAvatarContainer);
  // -------------------------------------- > AC <
  //
  // ------------------------------------- > img <
  const EditUserAvatar = document.createElement("img");
  EditUserAvatar.classList.add("EditUserAvatar");
  //
  // ------------------------------ src >>
  if (response.avatar_image == "") {
    EditUserAvatar.src = "./../assets/svg/person icon.svg";
  } else {
    EditUserAvatar.src = response.avatar_image;
  }
  // ------------------------------ src <<
  //
  // ------------------------------- AC >>
  EditUserAvatarContainer.appendChild(EditUserAvatar);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > img <
  //
  // ----------------------------- > File Picker <
  const EditUserImagePicker = document.createElement("input");
  EditUserImagePicker.classList.add("EditUserImagePicker");
  EditUserImagePicker.setAttribute("accept", ".jpg, .jpeg");
  //
  // --------------------- type >>
  EditUserImagePicker.type = "file";
  // --------------------- type <<
  //
  // ------------------------ L >>
  EditUserImagePicker.addEventListener("change", function (event) {
    //
    // --------------------------- > File <
    const file = event.target.files[0];
    // --------------------------- > File <
    //
    // --------------------------- > Web Service <
    if (file) {
      PostAvatar(file, response.id, EditUserAvatar);
    }
    // --------------------------- > Web Service <
    //
  });
  // ------------------------ L <<
  //
  // ----------------------- AC >>
  EditUserAvatarContainer.appendChild(EditUserImagePicker);
  // ----------------------- AC <<
  //
  // ----------------------------- > File Picker <
  //
  // ------------------------------------ > Icon <
  const EditUserAvatarImagePickerIcon = document.createElement("iconify-icon");
  EditUserAvatarImagePickerIcon.classList.add("EditUserAvatarImagePickerIcon");
  //
  // --------------------------- value >>
  EditUserAvatarImagePickerIcon.setAttribute(
    "icon",
    "fluent:image-edit-20-filled"
  );
  // --------------------------- value <<
  //
  // ------------------------------ AC >>
  EditUserAvatarContainer.appendChild(EditUserAvatarImagePickerIcon);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > Icon <
  //
  // --------------------------------------------- >> Avatar <<
  //
  // --------------------------------------------- >> Column <<
  const ThreedColumn = document.createElement("div");
  ThreedColumn.classList.add("Column");
  //
  // ----------------------------------------- > id <
  ThreedColumn.id = "EditUserThreedColumn";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  Flex.appendChild(ThreedColumn);
  // ----------------------------------------- > AC <
  //
  // --------------------------------------------- >> Column <<
  //
  // ---------------------------------------------- >> Field <<
  //
  // ---------------------------------------- > V <
  const UserNameID = "UserNameFeild";
  //
  const UserNameLabel = "Name";
  //
  const UserNameFeildID = "UserNameFeild";
  //
  const UserNameInputIcon = "mynaui:edit-solid";
  //
  const UserNameInputPlaceholder = "enter your name ...";
  //
  // ---------------------------------------- > V <
  //
  // --------------------------------------- > CB <
  const UserName = Field(
    UserNameID,
    true,
    "mingcute:user-edit-fill",
    UserNameLabel,
    false,
    UserNameFeildID,
    UserNameInputIcon,
    UserNameInputPlaceholder,
    50
  );
  // --------------------------------------- > CB <
  //
  // --------------------------------------- > id <
  UserName.labelIcon.id = "EditUserFieldLabelIcon";
  UserName.labelText.id = "EditUserFieldLabelText";
  UserName.field.id = "EditUserField";
  UserName.Input.id = "EditUserFieldInput";
  UserName.fieldIcon.id = "EditUserFieldInputIcon";
  // --------------------------------------- > id <
  //
  // ------------------------------ > Input Value <
  UserName.Input.value = response.username;
  // ------------------------------ > Input Value <
  //
  // --------------------------------------- > AC <
  ThreedColumn.appendChild(UserName.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Field <<
  //
  // ---------------------------------------------- >> Field <<
  //
  // ---------------------------------------- > V <
  const PhoneNumberID = "PhoneNumberFeild";
  //
  const PhoneNumberLabel = "Phone Number";
  //
  const PhoneNumberFeildID = "PhoneNumberFeild";
  //
  let PhoneNumberInputIcon = "";
  if (editable == true) {
    PhoneNumberInputIcon = "mynaui:edit-solid";
  }
  //
  const PhoneNumberInputPlaceholder = "enter your number ...";
  //
  // ---------------------------------------- > V <
  //
  // --------------------------------------- > CB <
  const PhoneNumber = Field(
    PhoneNumberID,
    true,
    "fluent:video-person-call-32-filled",
    PhoneNumberLabel,
    false,
    PhoneNumberFeildID,
    PhoneNumberInputIcon,
    PhoneNumberInputPlaceholder,
    50
  );
  // --------------------------------------- > CB <
  //
  // --------------------------------------- > id <
  PhoneNumber.labelIcon.id = "EditUserFieldLabelIcon";
  PhoneNumber.labelText.id = "EditUserFieldLabelText";
  PhoneNumber.field.id = "EditUserField";
  PhoneNumber.Input.id = "EditUserFieldInput";
  PhoneNumber.fieldIcon.id = "EditUserFieldInputIcon";
  // --------------------------------------- > id <
  //
  // ---------------------------- > Accessibility <
  if (editable == false) {
    PhoneNumber.widget.pointerEvents = "none";
  }
  // ---------------------------- > Accessibility <
  //
  // ------------------------------ > Input Value <
  PhoneNumber.Input.value = response.phone_number;
  // ------------------------------ > Input Value <
  //
  // --------------------------------------- > AC <
  ThreedColumn.appendChild(PhoneNumber.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Field <<
  //
  // -------------------------------------------- >> Divider <<
  const EditUserDivider = document.createElement("div");
  EditUserDivider.classList.add("EditUserDivider");
  //
  // ------------------------------------- > AC <
  SecondColumn.appendChild(EditUserDivider);
  // ------------------------------------- > AC <
  //
  // -------------------------------------------- >> Divider <<
  //
  // ------------------------------------------ >> Drop Down <<
  //
  // ------------------------------------ CB >>
  const DD = DropDown(
    //
    "mingcute:user-setting-fill",
    //
    "Type",
    //
    ["user", "admin"],
    //
    (value) => {}
    //
  );
  // ------------------------------------ CB <<
  //
  // ------------------------------------ CB <<
  DD.title.textContent = response.user_type;
  // ------------------------------------ CB <<
  //
  // ------------------------------------ AC >>
  SecondColumn.appendChild(DD.widget);
  // ------------------------------------ AC <<
  //
  // ------------------------------------------ >> Drop Down <<
  //
  // ------------------------------------------------ >> BTN <<
  //
  // ------------------------------------------ > V <
  const SubmitBTNId = "SubmitPopupBTN";
  const SubmitBtnText = "Submit";
  const SubmitBtnIcon = "line-md:check-all";
  // ------------------------------------------ > V <
  //
  // ----------------------------------------- > CB <
  const SubmitBTN = BTN(
    SubmitBTNId,
    true,
    SubmitBtnText,
    true,
    SubmitBtnIcon,
    true,
    SubmitBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ---------------------------------------- > CSS <
  SubmitBTN.widget.style.margin = "0px auto";
  // ---------------------------------------- > CSS <
  //
  // ------------------------------------------ > L <
  function SubmitBTNListener() {
    //
    // ----------------------------------- V >>
    let Name = UserName.Input;
    let Number = PhoneNumber.Input;
    let UserType = DD.title.textContent;
    // ----------------------------------- V <<
    //
    // ---------------------------------- CB >>
    PutData(Name, Number, UserType, response.id);
    // ---------------------------------- CB <<
    //
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  FirstColumn.appendChild(SubmitBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> BTN <<
  //
}
// ============================================================ >> Edit User <<
//
// ========================================================== >> Post Avatar <<
function PostAvatar(image, id, widget) {
  //
  // ------------------------------------------- > FormData <
  const formData = new FormData();
  formData.append("avatar_image", image);
  // ------------------------------------------- > FormData <
  //
  // ------------------------------------------- > locading <
  LoadingcallBack(BG_6, 1, Layer6);
  // ------------------------------------------- > locading <
  //
  // ----------------------------------------------- > POST <
  //
  // ------------------------------------------ V >>
  const Api = `https://personnel.samami.co/user/update-avatar?id=${id}`;
  // ------------------------------------------ V <<
  //
  // --------------------------------------- POST >>
  PostImage(Api, formData)
    .then((response) => {
      //
      // ----------------------------- 200 >
      if (response.status == 200) {
        //
        // ------------------------------- > CB <
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------------- > CB <
        //
        // ------------------------------- > CB <
        NotificationCallBack(
          "Request Sucssess 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // ------------------------------- > CB <
        //
        // ------------------------------- > SM <
        const SelectedUserImageWidget = document.getElementById(`${id}`);
        const reader = new FileReader();
        reader.onload = function (e) {
          SelectedUserImageWidget.children[0].children[0].src = e.target.result;
          widget.src = e.target.result;
        };
        reader.readAsDataURL(image);
        // ------------------------------- > SM <
        //
      }
      // ----------------------------- 200 <
      //
      // --------------------------- error >
      else {
        //
        // ------------------------------- > CB <
        LoadingcallBack(BG_6, 2, Layer6);
        // ------------------------------- > CB <
        //
        // ------------------------------- > CB <
        NotificationCallBack(
          "Request faild 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // ------------------------------- > CB <
        //
      }
      // --------------------------- error <
      //
    })
    .catch((error) => {
      //
      // ------------------------------ CB >
      LoadingcallBack(BG_6, 2, Layer6);
      // ------------------------------ CB <
      //
      // ------------------------------ CB >
      NotificationCallBack("Request faild 👎", "fa:close", "red", BG_7, Layer7);
      // ------------------------------ CB <
      //
    });
  // --------------------------------------- POST <<
  //
  // ----------------------------------------------- > POST <
  //
}
// ========================================================== >> Post Avatar <<
//
// ============================================================ >> Post Data <<
function PutData(nameinput, numberinput, type, id) {
  //
  // ----------------------------------------- >> Validation <<
  //
  // ----------------------------------- > V <
  let Name = nameinput.value;
  let Number = numberinput.value;
  console.log(Name);
  console.log(Number);
  // ----------------------------------- > V <
  //
  // ---------------------------------- > CB <
  let IsValid = Validator(Name, Number, type);
  // ---------------------------------- > CB <
  //
  // ------------------------------- > Error <
  if (!IsValid) {
    //
    // ----------------------- CB >>
    NotificationCallBack(
      "Enter valid inforamtion ¯_(ツ)_/¯",
      "fa:close",
      "red",
      BG_7,
      Layer7
    );
    // ----------------------- CB <<
    //
  }
  // ------------------------------- > Error <
  //
  // -------------------------- > WebService <
  else {
    //
    // ------------------ CB >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ------------------ CB <<
    //
    // ------------------- V >>
    const URL = "https://personnel.samami.co/user/edit";
    //
    let Data = {
      id: id,
      username: Name,
      user_type: type,
      phone_number: Number,
    };
    // ------------------- V <<
    //
    // ----------------- PUT >>
    PUT(URL, Data)
      .then((response) => {
        //
        // -------------------- > 200 <
        if (response.status == 200) {
          //
          // -------------------------- >> remove loading <<
          LoadingcallBack(BG_6, 2, Layer6);
          // -------------------------- >> remove loading <<
          //
          // -------------------------- >> Notif <<
          NotificationCallBack(
            "User updated successfully 👍",
            "ph:check-fat-fill",
            "green",
            BG_7,
            Layer7
          );
          // -------------------------- >> Notif <<
          //
          // -------------------------- >> V <<
          const EditedUserBox = document.getElementById(id);
          const Username =
            EditedUserBox.children[0].children[1].children[0].children[0];
          const Usertype =
            EditedUserBox.children[0].children[1].children[0].children[2];
          const Usernumber = EditedUserBox.children[0].children[1].children[1];
          // -------------------------- >> V <<
          //
          // -------------------------- >> SM <<
          Username.textContent = Name;
          Usertype.textContent = type;
          Usernumber.textContent = Number;
          // -------------------------- >> SM <<
          //
        }
        // -------------------- > 200 <
        //
        // ------------------ > error <
        else {
          //
          // ------------------------- >> remove loading <<
          LoadingcallBack(BG_6, 2, Layer6);
          // ------------------------- >> remove loading <<
          //
          // ------------------------- >> Notif <<
          NotificationCallBack(
            "Request faild 👎",
            "fa:close",
            "red",
            BG_7,
            Layer7
          );
          // ------------------------- >> Notif <<
          //
        }
        // ------------------ > error <
        //
      })
      //
      // -------------------- > catch <
      .catch((error) => {
        //
        // --------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // --------------------------- >> remove loading <<
        //
        // --------------------------- >> Notif <<
        NotificationCallBack(
          "Request faild 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // --------------------------- >> Notif <<
        //
      });
    // ---------------------- > catch <
    //
    // ----------------- PUT <<
  }
  // -------------------------- > WebService <
  //
  // ----------------------------------------- >> Validation <<
  //
}
// ============================================================ >> Post Data <<
//
// ============================================================ >> Validator <<
function Validator(name, number, type) {
  //
  // --------------------------------------------- >> RegExp <<
  const NameRegExp = /^[A-Za-z0-9 ]+$/;
  const NumberRegExp = /^\d{11}$/;
  const TypeRegExp = /^(user|admin)$/;
  // --------------------------------------------- >> RegExp <<
  //
  // ----------------------------------------- >> Validation <<
  let nameValid = NameRegExp.test(name);
  let numberValid = NumberRegExp.test(number);
  let typeValid = TypeRegExp.test(type);
  // ----------------------------------------- >> Validation <<
  //
  // --------------------------------------------- >> return <<
  return nameValid && numberValid && typeValid;
  // --------------------------------------------- >> return <<
  //
}
// ============================================================ >> Validator <<
//
// ========================================================== >> Delete User <<
function DeleteUser(layer, father, username, id) {
  //
  // ----------------------------------------------- >> SM <<
  layer.classList.add("show");
  // ----------------------------------------------- >> SM <<
  //
  // ---------------------------------------------- >> div <<
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // --------------------------------------- > id <
  Column.id = "DeleteUserPopup";
  // --------------------------------------- > id <
  //
  // --------------------------------------- > AC <
  father.appendChild(Column);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> div <<
  //
  // --------------------------------------------- >> Flex <<
  const Flex = document.createElement("div");
  Flex.classList.add("Flex");
  //
  // -------------------------------------- > id <
  Flex.id = "DeleteUserHeader";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  Column.appendChild(Flex);
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> Flex <<
  //
  // -------------------------------------------- >> Title <<
  //
  // --------------------------------------- > CB <
  const Title = BTN(
    "DeleteUserTitle",
    true,
    "Delete",
    true,
    "icon-park-solid:delete-four",
    false,
    () => {}
  );
  // ------------------------------------- > CB <
  //
  // ------------------------------------- > AC <
  Flex.appendChild(Title.widget);
  // ------------------------------------- > AC <
  //
  // -------------------------------------------- >> Title <<
  //
  // ---------------------------------------------- >> BTN <<
  //
  // --------------------------------------- > CB <
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // --------------------------------------- > CB <
  //
  // ---------------------------------------- > L <
  function ColseBTNListener() {
    //
    layer.classList.remove("show");
    //
    setTimeout(() => {
      father.removeChild(Column);
    }, 500);
    //
  }
  // ---------------------------------------- > L <
  //
  // --------------------------------------- > AC <
  Flex.appendChild(ColseBTN.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> BTN <<
  //
  // --------------------------------------------- >> Body <<
  const DeleteUserBody = document.createElement("div");
  DeleteUserBody.classList.add("Column");
  //
  // -------------------------------------- > id <
  DeleteUserBody.id = "DeleteUserBody";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  Column.appendChild(DeleteUserBody);
  // -------------------------------------- > AC <
  //
  // ------------------------------------ > span <
  const DeleteUserText = document.createElement("span");
  DeleteUserText.classList.add("DeleteUserText");
  //
  // ------------------------------ id >>
  DeleteUserText.textContent = `Are you sure about removing (${username}) ?`;
  // ------------------------------ id <<
  //
  // ------------------------------ AC >>
  DeleteUserBody.appendChild(DeleteUserText);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > span <
  //
  // --------------------------------------------- >> Body <<
  //
  // ---------------------------------------------- >> BTN <<
  //
  // --------------------------------------- > CB <
  const SubmitBTN = BTN(
    "DeletePopupBTN",
    true,
    "Delete",
    true,
    "mdi:delete-empty",
    true,
    SubmitBTNListener
  );
  // --------------------------------------- > CB <
  //
  // ---------------------------------------- > L <
  function SubmitBTNListener() {
    //
    // ----------------------- Add Loading >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ----------------------- Add Loading <<
    //
    // ------------------------------- API >>
    let Api = `https://personnel.samami.co/user/delete?id=${id}`;
    // ------------------------------- API <<
    //
    // ------------------------------- GET >>
    DELETE(Api)
      .then((response) => {
        //
        // --------------------- 200 >
        if (response.status == 200) {
          //
          // ------------------------- >> remove loading <<
          LoadingcallBack(BG_6, 2, Layer6);
          // ------------------------- >> remove loading <<
          //
          // ------------------------- >> Notif <<
          NotificationCallBack(
            "User deleted successfully 👍",
            "ph:check-fat-fill",
            "green",
            BG_7,
            Layer7
          );
          // ------------------------- >> Notif <<
          //
          // ------------------------- >> SM <<
          //
          setTimeout(() => {
            layer.classList.remove("show");
          }, 500);
          //
          setTimeout(() => {
            father.removeChild(Column);
          }, 1000);
          //
          setTimeout(() => {
            //
            LoadingcallBack(BG_6, 1, Layer6);
            //
            const DataContainer = document.querySelector(".DataContainer");
            DataContainer.classList.remove("show");
            setTimeout(() => {
              const UsersSection = document.getElementById("UsersSection");
              UsersSection.removeChild(DataContainer);
            }, 500);
            //
          }, 1500);
          //
          setTimeout(() => {
            List(false);
          }, 2500);
          //
          // ------------------------- >> SM <<
          //
        }
        // --------------------- 200 <
        //
        // ------------------- error >
        else {
          //
          // ------------------------- >> remove loading <<
          LoadingcallBack(BG_6, 2, Layer6);
          // ------------------------- >> remove loading <<
          //
          // ------------------------- >> Notif <<
          NotificationCallBack(
            "request faild 👎",
            "fa:close",
            "red",
            BG_7,
            Layer7
          );
          // ------------------------- >> Notif <<
          //
        }
        // ------------------- error <
        //
      })
      // --------------------- catch >
      .catch((error) => {
        //
        // --------------------------- >> remove loading <<
        LoadingcallBack(BG_6, 2, Layer6);
        // --------------------------- >> remove loading <<
        //
        // --------------------------- >> Notif <<
        NotificationCallBack(
          "request faild 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // --------------------------- >> Notif <<
        //
      });
    // ----------------------- catch <
    //
    // ------------------------------- GET <<
    //
  }
  // ---------------------------------------- > L <
  //
  // --------------------------------------- > AC <
  Column.appendChild(SubmitBTN.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> BTN <<
  //
}
// ========================================================== >> Delete User <<
//
