// ============================================================== >> Imports <<
//
// ------------------------------------------------ >> Loading <<
import { LoadingcallBack } from "../../modules/Widgets/Loading/loading.js";
// ------------------------------------------------ >> Loading <<
//
// -------------------------------------------- >> Web Service <<
import { GET } from "../../modules/Web_Service/web_service.js";
// -------------------------------------------- >> Web Service <<
//
// ------------------------------------------ >> Local Storage <<
import {
  setLocalStorage,
  RetrieveLocalStorage,
} from "./../../modules/Local_Storage/local_storage.js";
// ------------------------------------------ >> Local Storage <<
//
// ------------------------------------------- >> Notification <<
import { NotificationCallBack } from "./../../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------- >> Notification <<
//
// -------------------------------------------------- >> Feild <<
import { Field } from "./../../modules/Widgets/Field/Field.js";
// -------------------------------------------------- >> Feild <<
//
// -------------------------------------------------- >> Feild <<
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
  List(true, UsersSection);
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
    LoadingcallBack(BG_5, 1, Layer5);
  }
  // ----------------------------------------- >> Pagination L <<
  //
  // -------------------------------------------- >> P Builder <<
  function ResponseCallBack(response) {
    //
    // ---------------------------------- > 200 <
    if (response.status == 200) {
      //
      // -------------- Remove Loading >>
      LoadingcallBack(BG_5, 2, Layer5);
      // -------------- Remove Loading <<
      //
      // -------------------------- SM >>
      const FilterFlex = document.getElementById("FilterFlex");
      FilterFlex.classList.add("show");
      // -------------------------- SM <<
      //
      // -------------------------- RM >>
      RM(response.data.data, List);
      // -------------------------- RM <<
      //
    }
    // ---------------------------------- > 200 <
    //
    // -------------------------------- > error <
    else if (response.status !== 200) {
    }
    // -------------------------------- > error <
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
  //
  // -------------------------------------- > src <
  if (response.avatar_image == "") {
    UserAvatar.src = "./../../assets/svg/person icon.svg";
    UserAvatar.style.padding = "0.5rem";
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
  // ------------------------------------- > span <
  const Username = document.createElement("span");
  Username.classList.add("Username");
  //
  Username.textContent = `${response.username} - ${response.user_type}`;
  //
  Column.appendChild(Username);
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
    // ----------------------------------- CB >>
    EditUser(Layer5, BG_5, response, true);
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
  function DeleteBTNListener() {}
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
  // ----------------------------------------- > id <
  father.appendChild(FirstColumn);
  // ----------------------------------------- > id <
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
    EditUserAvatar.src = "./../../assets/svg/person icon.svg";
    EditUserAvatar.style.padding = "0.5rem";
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
    PostAvatar(file);
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
    "",
    UserNameLabel,
    false,
    UserNameFeildID,
    UserNameInputIcon,
    UserNameInputPlaceholder,
    50
  );
  // --------------------------------------- > CB <
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
    "",
    PhoneNumberLabel,
    false,
    PhoneNumberFeildID,
    PhoneNumberInputIcon,
    PhoneNumberInputPlaceholder,
    50
  );
  // --------------------------------------- > CB <
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
  // ------------------------------------------ >> Drop Down <<

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
  FirstColumn.appendChild(SubmitBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> BTN <<
  //
}
// ============================================================ >> Edit User <<
//
// ========================================================== >> Delete User <<
function DeleteUser() {}
// ========================================================== >> Delete User <<
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
// ========================================================== >> Post Avatar <<
function PostAvatar(image) {
  console.log(image);
}
// ========================================================== >> Post Avatar <<
//
