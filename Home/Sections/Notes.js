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
// ------------------------------------------- >> Data Builder <<
import { DataBuilder } from "../../modules/Data_Builder/Data_Builder.js";
// ------------------------------------------- >> Data Builder <<
//
// ----------------------------------------- >> Request Result <<
import { RequestResult } from "../../modules/Data_Builder/request_result.js";
// ----------------------------------------- >> Request Result <<
//
// -------------------------------------------- >> Web Service <<
import { DELETE, GET, POST } from "../../modules/Web_Service/web_service.js";
// -------------------------------------------- >> Web Service <<
//
// ------------------------------------------- >> Notification <<
import { NotificationCallBack } from "./../../modules/Widgets/Notification/notification_box.js";
// ------------------------------------------- >> Notification <<
//
// ---------------------------------------------- >> Chat Rome <<
import { ChatRome } from "../../modules/Chat_Rome/Chat_Rome.js";
// ---------------------------------------------- >> Chat Rome <<
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
export function NotesSections() {
  //
  // ----------------------------------------------------- >> V <<
  const SliderContainer = document.querySelector(".SliderContainer");
  // ----------------------------------------------------- >> V <<
  //
  // ------------------------------------------------ >> Column <<
  const NotesSection = document.createElement("div");
  NotesSection.classList.add("Column");
  //
  // ----------------------------------------- > id <
  NotesSection.id = "NotesSection";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(NotesSection);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Column <<
  //
  // -------------------------------------------------- >> List <<
  List(true);
  // -------------------------------------------------- >> List <<
  //
}
// =============================================================== >> Module <<
//
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
  // ------------------------------------------------ >> Search <<
  //
  // ----------------------------------- > Varibels <
  const SearchFeildInputID = "SearchInput";
  const Icon = "mdi:text-box-search";
  const Placeholder = " Search ...";
  // ----------------------------------- > Varibels <
  //
  // ----------------------------------- > CallBack <
  const SearchField = Field(
    "SearchField",
    false,
    "",
    "",
    false,
    SearchFeildInputID,
    Icon,
    Placeholder,
    2000
  );
  // ----------------------------------- > CallBack <
  //
  // ------------------------------------- > Set id <
  SearchField.widget.id = "SearchField";
  SearchField.fieldIcon.id = "SearchFieldIcon";
  // ------------------------------------- > Set id <
  //
  // ------------------------------------------ > L <
  SearchField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      //
      // ------------------------ Loading CB >>
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------ Loading CB <<
      //
      // -------------------------------- SM >>
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
      // -------------------------------- SM <<
      //
      // ----------------------------- Query >>
      Query = `search=${SearchField.Input.value}`;
      // ----------------------------- Query <<
      //
      // --------------------------- List CB >>
      setTimeout(() => {
        List(false);
      }, 500);
      // --------------------------- List CB <<
      //
    }
  });
  // ------------------------------------------ > L <
  //
  // ------------------------------------------ > L <
  SearchField.Input.addEventListener("input", function () {
    //
    // -------------------------------- Align >
    if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(SearchField.Input.value)) {
      SearchField.Input.style.textAlign = "end";
      SearchField.Input.placeholder = " ... جستو جو ";
    } else if (/^[A-Za-z\s]+$/.test(SearchField.Input.value)) {
      SearchField.Input.style.textAlign = "start";
      SearchField.Input.placeholder = " Search ...";
    }
    // -------------------------------- Align <
    //
  });
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AC <
  Flex.appendChild(SearchField.widget);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Search <<
  //
  // ------------------------------------------------ >> Create <<
  //
  // ------------------------------------------ > V <
  const CreateBTNId = "CreateBTN";
  const CreateBtnText = "Create";
  const CreateBtnIcon = "ic:baseline-post-add";
  // ------------------------------------------ > V <
  //
  // ----------------------------------------- > CB <
  const CreateBTN = BTN(
    CreateBTNId,
    true,
    CreateBtnText,
    true,
    CreateBtnIcon,
    true,
    CreateBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function CreateBTNListener() {
    CreateNote();
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  Flex.appendChild(CreateBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Create <<
  //
}
// =============================================================== >> Filter <<
//
// ============================================================== >> Builder <<
function List(Build) {
  //
  // --------------------------------------------- >> Selector <<
  const father = document.querySelector("#NotesSection");
  // --------------------------------------------- >> Selector <<
  //
  // ---------------------------------------------------- >> V <<
  const Id = "Notes";
  const URL = `https://personnel.samami.co/note/get`;
  const limit = 10;
  // ---------------------------------------------------- >> V <<
  //
  // --------------------------------------------------- >> CB <<
  const Notes = DataBuilder(
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
  const List = Notes.List;
  List.id = "NotesList";
  // ----------------------------------------- >> List element <<
  //
  // ----------------------------------------- >> Pagination L <<
  function PaginationBtnListener() {
    //
    // ----------------------- > Add Loading <
    LoadingcallBack(BG_6, 1, Layer6);
    // ----------------------- > Add Loading <
    //
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
    const FiltersFlex = document.getElementById("FiltersFlex");
    FiltersFlex.classList.add("show");
    setTimeout(() => {
      Notes.widget.classList.add("show");
    }, 250);
    //
    if (response.data.data.length == 1) {
      Notes.widget.classList.add("big");
      Notes.List.classList.add("big");
    }
    // ----------------------------------- > SM <
    //
    // ----------------------------------- > RM <
    RM(response, Notes.widget, List);
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
  const NotesList = document.getElementById("Notes");
  if (!NotesList) {
    father.appendChild(Notes.widget);
  }
  // --------------------------------------------------- >> AP <<
  //
  // ----------------------------------------------- >> return <<
  return Notes.widget;
  // ----------------------------------------------- >> return <<
  //
}
// ============================================================== >> Builder <<
//
// =================================================================== >> RM <<
function RM(response, Father, List) {
  //
  // --------------------------------------------------------- >> V <<
  const length = response.data.data.length;
  // --------------------------------------------------------- >> V <<
  //
  // -------------------------------------------------------- >> 👍 <<
  if (response.status == 200 && length !== 0) {
    //
    response.data.data.forEach((info) => {
      //
      const NoteWidget = NoteBox(info);
      //
      List.appendChild(NoteWidget);
      //
    });
    //
  }
  // -------------------------------------------------------- >> 👍 <<
  //
  // ----------------------------------------------------- >> Empty <<
  else if (response.status == 200 && length == 0) {
    //
    // -------------- >> SM
    List.innerHTML = "";
    setTimeout(() => {
      Father.classList.add("show");
      Father.classList.add("big");
      List.classList.add("big");
    }, 100);
    //
    Father.classList.add("big");
    Father.id = "";
    // -------------- << SM
    //
    // -------------- >> CB
    //
    // ----------------- > V <
    const SVG_URL = "./../assets/svg/Empty_Response.svg";
    // ----------------- > V <
    //
    // ----------------- > Widget <
    const Widget = RequestResult(SVG_URL, "Empty Response");
    // ----------------- > Widget <
    //
    // ----------------- > AC <
    List.appendChild(Widget);
    // ----------------- > AC <
    //
    // -------------- << CB
    //
  }
  // ----------------------------------------------------- >> Empty <<
  //
  // -------------------------------------------------------- >> 👎 <<
  else if (response.status !== 200) {
    //
    // --------------- >> SM
    List.innerHTML = "";
    setTimeout(() => {
      Father.classList.add("show");
      Father.classList.add("big");
      List.classList.add("big");
    }, 100);
    //
    Father.classList.add("big");
    Father.id = "";
    // --------------- << SM
    //
    // --------------- >> CB
    //
    // ------------------ > V <
    const SVG_URL = "./../../assets/svg/Error_Response.svg";
    // ------------------ > V <
    //
    // ------------------ > Widget <
    const Widget = RequestResult(SVG_URL, "Faild request 👎");
    // ------------------ > Widget <
    //
    // ------------------ > AC <
    List.appendChild(Widget);
    // ------------------ > AC <
    //
    // --------------- << CB
    //
  }
  // -------------------------------------------------------- >> 👎 <<
  //
}
// =================================================================== >> RM <<
//
// ============================================================= >> Note Box <<
function NoteBox(response) {
  //
  // ------------------------------------------------- >> div <<
  const NoteBox = document.createElement("div");
  NoteBox.classList.add("NoteBox");
  //
  // ------------------------------------------ > id <
  NoteBox.id = response.id;
  // ------------------------------------------ > id <
  //
  // ------------------------------------------------- >> div <<
  //
  // ---------------------------------------------- >> Label <<
  //
  // ---------------------------------------- > V <
  const NoteLabelId = "NoteLabel";
  const NoteLabelText = response.label;
  const NoteLabelIcon = "material-symbols:note-stack";
  // ---------------------------------------- > V <
  //
  // --------------------------------------- > CB <
  const NoteLabel = BTN(
    NoteLabelId,
    true,
    NoteLabelText,
    true,
    NoteLabelIcon,
    false,
    () => {}
  );
  // --------------------------------------- > CB <
  //
  // --------------------------------------- > AC <
  NoteBox.appendChild(NoteLabel.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Label <<
  //
  // ------------------------------------------------ >> Body <<
  const NoteBoxBody = document.createElement("div");
  NoteBoxBody.classList.add("NoteBoxBody");
  //
  // ----------------------------------------- > AC <
  NoteBox.appendChild(NoteBoxBody);
  // ----------------------------------------- > AC <
  //
  // --------------------------------------- > span <
  const NoteTitle = document.createElement("span");
  NoteTitle.classList.add("NoteTitle");
  //
  // ------------------------------ value >>
  NoteTitle.textContent = response.title;
  // ------------------------------ value <<
  //
  // ------------------------------ Align >>
  if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(NoteTitle.textContent)) {
    NoteTitle.style.textAlign = "end";
  } else if (/^[A-Za-z\s]+$/.test(NoteTitle.textContent)) {
    NoteTitle.style.textAlign = "start";
  }
  // ------------------------------ Align <<
  //
  // --------------------------------- AC >>
  NoteBoxBody.appendChild(NoteTitle);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > span <
  //
  // ------------------------------------ > Divider <
  const NoteHorizontalDivider1 = document.createElement("div");
  NoteHorizontalDivider1.classList.add("NoteHorizontalDivider");
  //
  // ------------------------------ AC >>
  NoteBoxBody.appendChild(NoteHorizontalDivider1);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > Divider <
  //
  // --------------------------------------- > span <
  const NoteDescription = document.createElement("span");
  NoteDescription.classList.add("NoteDescription");
  //
  // ------------------------------ value >>
  NoteDescription.textContent = response.description;
  // ------------------------------ value <<
  //
  // ------------------------------ Align >>
  if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(NoteDescription.textContent)) {
    NoteDescription.style.textAlign = "end";
  } else if (/^[A-Za-z\s]+$/.test(NoteDescription.textContent)) {
    NoteDescription.style.textAlign = "start";
  }
  // ------------------------------ Align <<
  //
  // --------------------------------- AC >>
  NoteBoxBody.appendChild(NoteDescription);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > span <
  //
  // ------------------------------------ > Divider <
  const NoteHorizontalDivider2 = document.createElement("div");
  NoteHorizontalDivider2.classList.add("NoteHorizontalDivider");
  //
  // ------------------------------ AC >>
  NoteBoxBody.appendChild(NoteHorizontalDivider2);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > Divider <
  //
  // --------------------------------------- > span <
  const NoteCreateDate = document.createElement("span");
  NoteCreateDate.classList.add("NoteCreateDate");
  //
  // ------------------------------ value >>
  NoteCreateDate.textContent = `Created at : ${response.created_at}`;
  // ------------------------------ value <<
  //
  // --------------------------------- AC >>
  NoteBoxBody.appendChild(NoteCreateDate);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > span <
  //
  // ------------------------------------------------ >> Body <<
  //
  // ------------------------------------------------ >> Flex <<
  const NoteButtonsFlex = document.createElement("div");
  NoteButtonsFlex.classList.add("NoteButtonsFlex");
  //
  // ----------------------------------------- > AC <
  NoteBox.appendChild(NoteButtonsFlex);
  // ----------------------------------------- > AC <
  //
  // -------------------------------------- > Chats <
  //
  // --------------------------------- V >>
  const NoteChatsBTNId = "NoteBTN";
  const NoteChatsBTNText = "Chats";
  const NoteChatsBTNIcon = "dashicons:format-chat";
  // --------------------------------- V <<
  //
  // -------------------------------- CB >>
  const NoteChatsBTN = BTN(
    NoteChatsBTNId,
    true,
    NoteChatsBTNText,
    true,
    NoteChatsBTNIcon,
    true,
    NoteChatsBTNListener
  );
  // -------------------------------- CB <<
  //
  // --------------------------------- L >>
  function NoteChatsBTNListener() {
    // -------------------------- CB >
    ChatRome(response.chat_room_id);
    // -------------------------- CB <
  }
  // --------------------------------- L <<
  //
  // -------------------------------- AC >>
  NoteButtonsFlex.appendChild(NoteChatsBTN.widget);
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Chats <
  //
  // -------------------------------------- > Delete <
  //
  // --------------------------------- V >>
  const NoteDeleteBTNId = "NoteBTN";
  const NoteDeleteBTNText = "Delete";
  const NoteDeleteBTNIcon = "tdesign:task-error-filled";
  // --------------------------------- V <<
  //
  // -------------------------------- CB >>
  const NoteDeleteBTN = BTN(
    NoteDeleteBTNId,
    true,
    NoteDeleteBTNText,
    true,
    NoteDeleteBTNIcon,
    true,
    NoteDeleteBTNListener
  );
  // -------------------------------- CB <<
  //
  // --------------------------------- L >>
  function NoteDeleteBTNListener() {
    DeleteNotePopup(response.title, response.id);
  }
  // --------------------------------- L <<
  //
  // -------------------------------- AC >>
  if (response.owner_access == true) {
    NoteButtonsFlex.appendChild(NoteDeleteBTN.widget);
  }
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Delete <
  //
  // ------------------------------------------------ >> Flex <<
  //
  // ---------------------------------------------- >> return <<
  return NoteBox;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> Note Box <<
//
// =============================================================== >> Create <<
function CreateNote() {
  //
  // ---------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ---------------------------------------------------- >> SM <<
  //
  // --------------------------------------------------- >> div <<
  const CreateNotePopup = document.createElement("div");
  CreateNotePopup.classList.add("Column", "show");
  //
  // -------------------------------------------- > id <
  CreateNotePopup.id = "CreateNotePopup";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  BG_5.appendChild(CreateNotePopup);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> div <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateNoteHeader = document.createElement("div");
  CreateNoteHeader.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CreateNoteHeader.id = "CreateNoteHeader";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateNotePopup.appendChild(CreateNoteHeader);
  // ------------------------------------------- > AC <
  //
  // ---------------------------------------- > Title <
  //
  // ---------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Create Note",
    false,
    "",
    false,
    () => {}
  );
  // ---------------------------------- CB <<
  //
  // ---------------------------------- AC >>
  CreateNoteHeader.appendChild(PopupTitle.widget);
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
      BG_5.removeChild(CreateNotePopup);
    }, 500);
    //
  }
  // ------------------------------------- L <<
  //
  // ------------------------------------ AC >>
  CreateNoteHeader.appendChild(ColseBTN.widget);
  // ------------------------------------ AC <<
  //
  // ------------------------------------------ > BTN <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> Body <<
  const CreateNoteBody = document.createElement("div");
  CreateNoteBody.classList.add("Column");
  //
  // ------------------------------------------- > id <
  CreateNoteBody.id = "CreateNoteBody";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateNotePopup.appendChild(CreateNoteBody);
  // ------------------------------------------- > AC <
  //
  // --------------------------------------- > Field <
  //
  // ---------------------------------- V >>
  const CreateNoteLabelID = "CreateNoteLabelFeild";
  //
  const CreateNoteLabelLabel = "Label";
  //
  const CreateNoteLabelFeildID = "CreateNoteLabelFeild";
  //
  const CreateNoteLabelInputPlaceholder = "enter your Label ...";
  //
  // ---------------------------------- V <<
  //
  // --------------------------------- CB >>
  const CreateNoteLabel = Field(
    CreateNoteLabelID,
    true,
    "ic:round-short-text",
    CreateNoteLabelLabel,
    false,
    CreateNoteLabelFeildID,
    "",
    CreateNoteLabelInputPlaceholder,
    1000
  );
  CreateNoteLabel.fieldIcon.style.display = "none";
  // --------------------------------- CB <<
  //
  // --------------------------------- id >>
  CreateNoteLabel.labelIcon.id = "CreateNoteLabelFieldLabelIcon";
  CreateNoteLabel.labelText.id = "CreateNoteLabelFieldLabelText";
  CreateNoteLabel.field.id = "CreateNoteLabelField";
  CreateNoteLabel.Input.id = "CreateNoteLabelFieldInput";
  // --------------------------------- id <<
  //
  // ---------------------------------- L >>
  CreateNoteLabel.Input.addEventListener("input", function () {
    //
    // ------------------------ Align >
    if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(CreateNoteLabel.Input.value)) {
      CreateNoteLabel.Input.style.textAlign = "end";
      CreateNoteLabel.Input.placeholder = " ... برجسب یادداشت را وارد کنید ";
    } else if (/^[A-Za-z\s]+$/.test(CreateNoteLabel.Input.value)) {
      CreateNoteLabel.Input.style.textAlign = "start";
      CreateNoteLabel.Input.placeholder = "enter your Label ...";
    }
    // ------------------------ Align <
    //
  });
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  CreateNoteBody.appendChild(CreateNoteLabel.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > Field <
  //
  // ------------------------------------- > Divider <
  const CreateNoteDivider1 = document.createElement("div");
  CreateNoteDivider1.classList.add("CreateNoteDivider");
  //
  // ------------------------------- AC >>
  CreateNoteBody.appendChild(CreateNoteDivider1);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Divider <
  //
  // --------------------------------------- > Field <
  //
  // ---------------------------------- V >>
  const CreateNoteTitleID = "CreateNoteTitleFeild";
  //
  const CreateNoteTitleLabel = "Title";
  //
  const CreateNoteTitleFeildID = "CreateNoteTitleFeild";
  //
  const CreateNoteTitleInputPlaceholder = " enter your title ...";
  //
  // ---------------------------------- V <<
  //
  // --------------------------------- CB >>
  const CreateNoteTitle = Field(
    CreateNoteTitleID,
    true,
    "ic:round-short-text",
    CreateNoteTitleLabel,
    false,
    CreateNoteTitleFeildID,
    "",
    CreateNoteTitleInputPlaceholder,
    1000
  );
  CreateNoteTitle.fieldIcon.style.display = "none";
  // --------------------------------- CB <<
  //
  // --------------------------------- id >>
  CreateNoteTitle.labelIcon.id = "CreateNoteTitleFieldLabelIcon";
  CreateNoteTitle.labelText.id = "CreateNoteTitleFieldLabelText";
  CreateNoteTitle.field.id = "CreateNoteTitleField";
  CreateNoteTitle.Input.id = "CreateNoteTitleFieldInput";
  // --------------------------------- id <<
  //
  // ---------------------------------- L >>
  CreateNoteTitle.Input.addEventListener("input", function () {
    //
    // ------------------------ Align >
    if (/[\u0600-\u06FF\uFB50-\uFDFF]/.test(CreateNoteTitle.Input.value)) {
      CreateNoteTitle.Input.style.textAlign = "end";
      CreateNoteTitle.Input.placeholder = " ... عنوان یادداشت را وارد کنید ";
    } else if (/^[A-Za-z\s]+$/.test(CreateNoteTitle.Input.value)) {
      CreateNoteTitle.Input.style.textAlign = "start";
      CreateNoteTitle.Input.placeholder = " enter your title ...";
    }
    // ------------------------ Align <
    //
  });
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  CreateNoteBody.appendChild(CreateNoteTitle.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > Field <
  //
  // ------------------------------------- > Divider <
  const CreateNoteDivider2 = document.createElement("div");
  CreateNoteDivider2.classList.add("CreateNoteDivider");
  //
  // ------------------------------- AC >>
  CreateNoteBody.appendChild(CreateNoteDivider2);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Divider <
  //
  // --------------------------------------- > Field <
  //
  // ---------------------------------- V >>
  const CreateNoteDescriptionID = "CreateNoteDescriptionFeild";
  //
  const CreateNoteDescriptionLabel = "Description";
  //
  const CreateNoteDescriptionFeildID = "CreateNoteDescriptionFeild";
  //
  const CreateNoteDescriptionInputPlaceholder = " enter your description ...";
  //
  // ---------------------------------- V <<
  //
  // --------------------------------- CB >>
  const CreateNoteDescription = Field(
    CreateNoteDescriptionID,
    true,
    "fluent:text-description-32-filled",
    CreateNoteDescriptionLabel,
    true,
    CreateNoteDescriptionFeildID,
    "",
    CreateNoteDescriptionInputPlaceholder,
    10000
  );

  // --------------------------------- CB <<
  //
  // --------------------------------- id >>
  CreateNoteDescription.labelIcon.id = "CreateNoteDescriptionFieldLabelIcon";
  CreateNoteDescription.labelText.id = "CreateNoteDescriptionFieldLabelText";
  CreateNoteDescription.field.id = "CreateNoteDescriptionField";
  CreateNoteDescription.Input.id = "CreateNoteDescriptionFieldInput";
  // --------------------------------- id <<
  //
  // ---------------------------------- L >>
  CreateNoteDescription.Input.addEventListener("input", function () {
    //
    // ------------------------ Align >
    if (
      /[\u0600-\u06FF\uFB50-\uFDFF]/.test(CreateNoteDescription.Input.value)
    ) {
      CreateNoteDescription.Input.style.textAlign = "end";
      CreateNoteDescription.Input.placeholder =
        " ... توضیحات یادداشت را وارد کنید ";
    } else if (/^[A-Za-z\s]+$/.test(CreateNoteDescription.Input.value)) {
      CreateNoteDescription.Input.style.textAlign = "start";
      CreateNoteDescription.Input.placeholder = " enter your description ...";
    }
    // ------------------------ Align <
    //
  });
  // ---------------------------------- L <<
  //
  // --------------------------------- AC >>
  CreateNoteBody.appendChild(CreateNoteDescription.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > Field <
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
    // ------------------------------------- CB >>
    let Validation = Validator(
      CreateNoteLabel.Input,
      CreateNoteTitle.Input,
      CreateNoteDescription.Input
    );
    // ------------------------------------- CB <<
    //
    // ------------------------------------- 👎 >>
    if (!Validation) {
      //
      // ------------------------------ CB >
      NotificationCallBack(
        "Enter valid inforamtion ¯_(ツ)_/¯",
        "fa:close",
        "red",
        BG_7,
        Layer7
      );
      // ------------------------------ CB <
      //
    }
    // ------------------------------------- 👎 <<
    //
    // ------------------------------------- 👍 >>
    else {
      //
      // ------------------------------ CB >
      LoadingcallBack(BG_6, 1, Layer6);
      // ------------------------------ CB <
      //
      // --------------------- Web Service >
      PostTask(
        CreateNoteLabel.Input.value,
        CreateNoteTitle.Input.value,
        CreateNoteDescription.Input.value
      );
      // --------------------- Web Service <
      //
    }
    // ------------------------------------- 👍 <<
    //
  }
  // --------------------------------------------- > L <
  //
  // -------------------------------------------- > AC <
  CreateNotePopup.appendChild(SubmitBTN.widget);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> BTN <<
  //
}
// =============================================================== >> Create <<
//
// ============================================================ >> Validator <<
function Validator(LabelInput, TitleInput, DescriptionInput) {
  //
  // -------------------------------------------------- >> V <<
  let LabelValue = LabelInput.value.trim();
  let TitleValue = TitleInput.value.trim();
  let DescriptionValue = DescriptionInput.value;
  // -------------------------------------------------- >> V <<
  //
  // --------------------------------------------- >> RegExp <<
  const regex = /^(?!\s*$)[\s\S]+$/;
  // --------------------------------------------- >> RegExp <<
  //
  // ----------------------------------------- >> Validation <<
  let LabelValid = regex.test(LabelValue);
  let TitleValid = regex.test(TitleValue);
  let DescriptionValid = regex.test(DescriptionValue);
  // ----------------------------------------- >> Validation <<
  //
  // --------------------------------------------- >> return <<
  return LabelValid && TitleValid && DescriptionValid;
  // --------------------------------------------- >> return <<
  //
}
// ============================================================ >> Validator <<
//
// ================================================================= >> POST <<
function PostTask(labelValue, titleValue, descriptionValue) {
  //
  // ----------------------------------------------------- >> API <<
  const Api = `https://personnel.samami.co/note/create`;
  // ----------------------------------------------------- >> API <<
  //
  // ---------------------------------------------------- >> DATA <<
  let Data = {
    label: labelValue,
    title: titleValue,
    description: descriptionValue,
  };
  // ---------------------------------------------------- >> DATA <<
  //
  // ---------------------------------------------------- >> POST <<
  POST(Api, Data)
    .then((response) => {
      //
      // ---------------------------------------- > 👍 <
      if (response.status == 200) {
        //
        // -------------------------------- CB >>
        LoadingcallBack(BG_6, 2, Layer6);
        //
        NotificationCallBack(
          "Note created successfully 👍",
          "ph:check-fat-fill",
          "green",
          BG_7,
          Layer7
        );
        // -------------------------------- CB <<
        //
        // -------------------------------- SM >>
        //
        setTimeout(() => {
          Layer5.classList.remove("show");
        }, 500);
        //
        setTimeout(() => {
          BG_5.innerHTML = "";
        }, 1000);
        //
        setTimeout(() => {
          //
          LoadingcallBack(BG_6, 1, Layer6);
          //
          const DataContainer = document.querySelector(".DataContainer");
          DataContainer.classList.remove("show");
          setTimeout(() => {
            const NotesSection = document.getElementById("NotesSection");
            NotesSection.removeChild(DataContainer);
          }, 500);
          //
        }, 1500);
        //
        setTimeout(() => {
          List(false);
        }, 2500);
        //
        // -------------------------------- SM <<
        //
      }
      // ---------------------------------------- > 👍 <
      //
      // ---------------------------------------- > 👎 <
      else {
        //
        // -------------------------------- CB >>
        LoadingcallBack(BG_6, 2, Layer6);
        //
        NotificationCallBack(
          "Request faild 👎",
          "fa:close",
          "red",
          BG_7,
          Layer7
        );
        // -------------------------------- CB <<
        //
      }
      // ---------------------------------------- > 👎 <
      //
    })
    //
    // ------------------------------------------ > 👎 <
    .catch((error) => {
      //
      console.log(error);
      //
      // ---------------------------------- CB >>
      LoadingcallBack(BG_6, 2, Layer6);
      //
      NotificationCallBack("Request faild 👎", "fa:close", "red", BG_7, Layer7);
      // ---------------------------------- CB <<
      //
    });
  // --------------------------------------------- > 👎 <
  //
  // ---------------------------------------------------- >> POST <<
}
// ================================================================= >> POST <<
//
// ========================================================== >> Delete Note <<
function DeleteNotePopup(NoteTitle, Noteid) {
  //
  // ----------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ----------------------------------------------- >> SM <<
  //
  // ---------------------------------------------- >> div <<
  const Column = document.createElement("div");
  Column.classList.add("Column");
  //
  // --------------------------------------- > id <
  Column.id = "DeleteNotePopup";
  // --------------------------------------- > id <
  //
  // --------------------------------------- > AC <
  BG_5.appendChild(Column);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> div <<
  //
  // --------------------------------------------- >> Flex <<
  const Flex = document.createElement("div");
  Flex.classList.add("Flex");
  //
  // -------------------------------------- > id <
  Flex.id = "DeleteNoteHeader";
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
    "PopupTitleText",
    true,
    "Delete Note",
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
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(Column);
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
  const DeleteNoteBody = document.createElement("div");
  DeleteNoteBody.classList.add("Column");
  //
  // -------------------------------------- > id <
  DeleteNoteBody.id = "DeleteNoteBody";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  Column.appendChild(DeleteNoteBody);
  // -------------------------------------- > AC <
  //
  // ------------------------------------ > span <
  const DeleteUserText = document.createElement("span");
  DeleteUserText.classList.add("DeleteUserText");
  //
  // ------------------------------ id >>
  DeleteUserText.textContent = `Are you sure you want to delete " ${NoteTitle} " Note?`;
  // ------------------------------ id <<
  //
  // ------------------------------ AC >>
  DeleteNoteBody.appendChild(DeleteUserText);
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
    "RedPopupBTN",
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
    let Api = `https://personnel.samami.co/note/delete?note_id=${Noteid}`;
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
            "Note deleted successfully 👍",
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
            Layer5.classList.remove("show");
          }, 500);
          //
          setTimeout(() => {
            BG_5.removeChild(Column);
          }, 1000);
          //
          setTimeout(() => {
            //
            LoadingcallBack(BG_6, 1, Layer6);
            //
            const DataContainer = document.querySelector(".DataContainer");
            DataContainer.classList.remove("show");
            setTimeout(() => {
              const NotesSection = document.getElementById("NotesSection");
              NotesSection.removeChild(DataContainer);
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
// ========================================================== >> Delete Note <<
