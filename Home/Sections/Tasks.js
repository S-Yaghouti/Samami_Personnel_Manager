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
// -------------------------------------------- >> Date Picker <<
import { DatePicker } from "../../modules/Widgets/Date_Picker/date_picker.js";
// -------------------------------------------- >> Date Picker <<
//
// ---------------------------------------------- >> Drop Down <<
import { DropDown } from "../../modules/Widgets/Dropdown/dropdown.js";
// ---------------------------------------------- >> Drop Down <<
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
let SelectedStartDate = "";
let SelectedEndDate = "";
let SelectedStatus = "All";
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
export function TasksSection() {
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
  TasksSection.id = "TasksSection";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(TasksSection);
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
  const Icon = "gis:search-propertie";
  const Placeholder = " Search for tasks ...";
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
    20
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
      let params = new URLSearchParams();

      if (SearchField.Input.value) params.append("search", SearchInput.value);
      if (SelectedStartDate) params.append("timestamp_from", SelectedStartDate);
      if (SelectedEndDate) params.append("timestamp_to", SelectedEndDate);
      if (SelectedStatus && SelectedStatus !== "All")
        params.append("status", SelectedStatus);

      Query = params.toString();
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
  // ----------------------------------------- > AC <
  Flex.appendChild(SearchField.widget);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Search <<
  //
  // -------------------------------------------------- >> Flex <<
  const TasksFilterFlex = document.createElement("div");
  TasksFilterFlex.classList.add("Flex");
  //
  // ------------------------------------------ > id <
  TasksFilterFlex.id = "TasksFiltersSecondFlex";
  // ------------------------------------------ > id <
  //
  // ------------------------------------------ > AC <
  Flex.appendChild(TasksFilterFlex);
  // ------------------------------------------ > AC <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // ------------------------------------------------ >> Filter <<
  //
  // ------------------------------------------ > V <
  const FilterBTNId = "FilterBTN";
  const FilterBtnText = "Filter";
  const FilterBtnIcon = "mage:filter-square-fill";
  // ------------------------------------------ > V <
  //
  // ----------------------------------------- > CB <
  const FilterBTN = BTN(
    FilterBTNId,
    true,
    FilterBtnText,
    true,
    FilterBtnIcon,
    true,
    FilterBTNListener
  );
  // ----------------------------------------- > CB <
  //
  // ------------------------------------------ > L <
  function FilterBTNListener() {
    FilterPopup();
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  TasksFilterFlex.appendChild(FilterBTN.widget);
  // ----------------------------------------- > AP <
  //
  // ------------------------------------------------ >> Filter <<
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
    CraateTask();
  }
  // ------------------------------------------ > L <
  //
  // ----------------------------------------- > AP <
  TasksFilterFlex.appendChild(CreateBTN.widget);
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
  const father = document.querySelector("#TasksSection");
  // --------------------------------------------- >> Selector <<
  //
  // ---------------------------------------------------- >> V <<
  const Id = "Tasks";
  const URL = `https://personnel.samami.co/task/get`;
  const limit = 21;
  // ---------------------------------------------------- >> V <<
  //
  // --------------------------------------------------- >> CB <<
  const Tasks = DataBuilder(
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
  const List = Tasks.List;
  List.id = "TasksList";
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
      Tasks.widget.classList.add("show");
    }, 250);
    //
    if (response.data.data.length == 1) {
      Tasks.widget.classList.add("big");
      Tasks.List.classList.add("big");
    }
    // ----------------------------------- > SM <
    //
    // ----------------------------------- > RM <
    RM(response, Tasks.widget, List);
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
  const TasksList = document.getElementById("Tasks");
  if (!TasksList) {
    father.appendChild(Tasks.widget);
  }
  // --------------------------------------------------- >> AP <<
  //
  // ----------------------------------------------- >> return <<
  return Tasks.widget;
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
      const UserWidget = TaskBox(info);
      //
      List.appendChild(UserWidget);
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
// ============================================================= >> Task Box <<
function TaskBox(response) {
  //
  // ------------------------------------------------- >> div <<
  const TaskBox = document.createElement("div");
  TaskBox.classList.add("TaskBox");
  //
  // ------------------------------------------ > id <
  TaskBox.id = response.id;
  // ------------------------------------------ > id <
  //
  // ------------------------------------------------- >> div <<
  //
  // ---------------------------------------------- >> Status <<
  //
  // ---------------------------------------- > V <
  const taskStatusId = "taskStatus";
  let taskStatusText = "";
  let taskStatusIcon = "";
  //
  if (response.status == "pending") {
    taskStatusText = "Pending";
    taskStatusIcon = "mdi:receipt-text-pending";
  }
  //
  else if (response.status == "finished") {
    taskStatusText = "Finished";
    taskStatusIcon = "material-symbols:check-box-rounded";
  }
  //
  else if (response.status == "closed") {
    taskStatusText = "Expired";
    taskStatusIcon = "fa:close";
  }
  //
  // ---------------------------------------- > V <
  //
  // --------------------------------------- > CB <
  const taskStatus = BTN(
    taskStatusId,
    true,
    taskStatusText,
    true,
    taskStatusIcon,
    false,
    () => {}
  );
  // --------------------------------------- > CB <
  //
  // --------------------------------------- > SM <
  if (response.status == "finished") {
    taskStatus.widget.classList.add("green");
  } else if (response.status == "closed") {
    taskStatus.widget.classList.add("red");
  }
  // --------------------------------------- > SM <
  //
  // --------------------------------------- > AC <
  TaskBox.appendChild(taskStatus.widget);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Status <<
  //
  // ------------------------------------------------ >> Body <<
  const TaskBoxBody = document.createElement("div");
  TaskBoxBody.classList.add("TaskBoxBody");
  //
  // ----------------------------------------- > SM <
  if (response.status == "finished") {
    TaskBoxBody.classList.add("green");
  } else if (response.status == "closed") {
    TaskBoxBody.classList.add("red");
  }
  // ----------------------------------------- > SM <
  //
  // ----------------------------------------- > AC <
  TaskBox.appendChild(TaskBoxBody);
  // ----------------------------------------- > AC <
  //
  // --------------------------------------- > span <
  const TaskTitle = document.createElement("span");
  TaskTitle.classList.add("TaskTitle");
  //
  // ------------------------------ value >>
  TaskTitle.textContent = response.title;
  // ------------------------------ value <<
  //
  // --------------------------------- AC >>
  TaskBoxBody.appendChild(TaskTitle);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > span <
  //
  // ------------------------------------ > Divider <
  const TaskHorizontalDivider1 = document.createElement("div");
  TaskHorizontalDivider1.classList.add("TaskHorizontalDivider");
  //
  // ------------------------------ AC >>
  TaskBoxBody.appendChild(TaskHorizontalDivider1);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > Divider <
  //
  // --------------------------------------- > span <
  const TaskDescription = document.createElement("span");
  TaskDescription.classList.add("TaskDescription");
  //
  // ------------------------------ value >>
  TaskDescription.textContent = response.description;
  // ------------------------------ value <<
  //
  // --------------------------------- AC >>
  TaskBoxBody.appendChild(TaskDescription);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > span <
  //
  // ------------------------------------ > Divider <
  const TaskHorizontalDivider2 = document.createElement("div");
  TaskHorizontalDivider2.classList.add("TaskHorizontalDivider");
  //
  // ------------------------------ AC >>
  TaskBoxBody.appendChild(TaskHorizontalDivider2);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > Divider <
  //
  // --------------------------------------- > Flex <
  const TaskFlex = document.createElement("div");
  TaskFlex.classList.add("TaskFlex");
  //
  // --------------------------------- AC >>
  TaskBoxBody.appendChild(TaskFlex);
  // --------------------------------- AC <<
  //
  // ------------------------------- span >>
  const TaskAtachedUsers = document.createElement("span");
  TaskAtachedUsers.classList.add("TaskAtachedUsers");
  //
  // ----------------------- value >
  TaskAtachedUsers.textContent = `Attached user's : ${response.attached_users}`;
  // ----------------------- value <
  //
  // -------------------------- AC >
  TaskFlex.appendChild(TaskAtachedUsers);
  // -------------------------- AC <
  //
  // ------------------------------- span <<
  //
  // ---------------------------- Divider >>
  const TaskVerticalDivider1 = document.createElement("div");
  TaskVerticalDivider1.classList.add("TaskVerticalDivider");
  //
  // ----------------------- AC >
  TaskFlex.appendChild(TaskVerticalDivider1);
  // ----------------------- AC <
  //
  // ---------------------------- Divider <<
  //
  // ------------------------------- span >>
  const TaskCreateDate = document.createElement("span");
  TaskCreateDate.classList.add("TaskCreateDate");
  //
  // ----------------------- value >
  TaskCreateDate.textContent = `Created at : ${response.timeline_start}`;
  // ----------------------- value <
  //
  // -------------------------- AC >
  TaskFlex.appendChild(TaskCreateDate);
  // -------------------------- AC <
  //
  // ------------------------------- span <<
  //
  // ---------------------------- Divider >>
  const TaskVerticalDivider2 = document.createElement("div");
  TaskVerticalDivider2.classList.add("TaskVerticalDivider");
  //
  // ----------------------- AC >
  TaskFlex.appendChild(TaskVerticalDivider2);
  // ----------------------- AC <
  //
  // ---------------------------- Divider <<
  //
  // ------------------------------- span >>
  const TaskExpirationDate = document.createElement("span");
  TaskExpirationDate.classList.add("TaskExpirationDate");
  //
  // ----------------------- value >
  TaskExpirationDate.textContent = `Expiration at : ${response.timeline_end}`;
  // ----------------------- value <
  //
  // -------------------------- AC >
  TaskFlex.appendChild(TaskExpirationDate);
  // -------------------------- AC <
  //
  // ------------------------------- span <<
  //
  // --------------------------------------- > Flex <
  //
  // ------------------------------------------------ >> Body <<
  //
  // ------------------------------------------------ >> Flex <<
  const TaskButtonsFlex = document.createElement("div");
  TaskButtonsFlex.classList.add("TaskButtonsFlex");
  //
  // ----------------------------------------- > AC <
  TaskBox.appendChild(TaskButtonsFlex);
  // ----------------------------------------- > AC <
  //
  // -------------------------------------- > Chats <
  //
  // --------------------------------- V >>
  const TaskChatsBTNId = "TaskBTN";
  const TaskChatsBTNText = "Chats";
  const TaskChatsBTNIcon = "dashicons:format-chat";
  // --------------------------------- V <<
  //
  // -------------------------------- CB >>
  const TaskChatsBTN = BTN(
    TaskChatsBTNId,
    true,
    TaskChatsBTNText,
    true,
    TaskChatsBTNIcon,
    true,
    TaskChatsBTNListener
  );
  // -------------------------------- CB <<
  //
  // --------------------------------- L >>
  function TaskChatsBTNListener() {}
  // --------------------------------- L <<
  //
  // -------------------------------- AC >>
  TaskButtonsFlex.appendChild(TaskChatsBTN.widget);
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Chats <
  //
  // -------------------------------------- > Check <
  //
  // --------------------------------- V >>
  const TaskCheckBTNId = "TaskBTN";
  const TaskCheckBTNText = "Check";
  const TaskCheckBTNIcon = "ri:task-fill";
  // --------------------------------- V <<
  //
  // -------------------------------- CB >>
  const TaskCheckBTN = BTN(
    TaskCheckBTNId,
    true,
    TaskCheckBTNText,
    true,
    TaskCheckBTNIcon,
    true,
    TaskCheckBTNListener
  );
  // -------------------------------- CB <<
  //
  // --------------------------------- L >>
  function TaskCheckBTNListener() {
    CheckTaskPopup(response.title, response.id);
  }
  // --------------------------------- L <<
  //
  // -------------------------------- AC >>
  if (response.status !== "finished") {
    TaskButtonsFlex.appendChild(TaskCheckBTN.widget);
  }
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Check <
  //
  // -------------------------------------- > Delete <
  //
  // --------------------------------- V >>
  const TaskDeleteBTNId = "TaskBTN";
  const TaskDeleteBTNText = "Delete";
  const TaskDeleteBTNIcon = "tdesign:task-error-filled";
  // --------------------------------- V <<
  //
  // -------------------------------- CB >>
  const TaskDeleteBTN = BTN(
    TaskDeleteBTNId,
    true,
    TaskDeleteBTNText,
    true,
    TaskDeleteBTNIcon,
    true,
    TaskDeleteBTNListener
  );
  // -------------------------------- CB <<
  //
  // --------------------------------- L >>
  function TaskDeleteBTNListener() {
    DeleteTaskPopup(response.title, response.id);
  }
  // --------------------------------- L <<
  //
  // -------------------------------- AC >>
  TaskButtonsFlex.appendChild(TaskDeleteBTN.widget);
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Delete <
  //
  // ------------------------------------------------ >> Flex <<
  //
  // ---------------------------------------------- >> return <<
  return TaskBox;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> Task Box <<
//
// =============================================================== >> Create <<
function CraateTask() {
  //
  // ---------------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ---------------------------------------------------- >> SM <<
  //
  // --------------------------------------------------- >> div <<
  const CraateTaskPopup = document.createElement("div");
  CraateTaskPopup.classList.add("Column", "show");
  //
  // -------------------------------------------- > id <
  CraateTaskPopup.id = "CraateTaskPopup";
  // -------------------------------------------- > id <
  //
  // -------------------------------------------- > AC <
  BG_5.appendChild(CraateTaskPopup);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> div <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateTaskHeader = document.createElement("div");
  CreateTaskHeader.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CreateTaskHeader.id = "CreateTaskHeader";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CraateTaskPopup.appendChild(CreateTaskHeader);
  // ------------------------------------------- > AC <
  //
  // ---------------------------------------- > Title <
  //
  // ---------------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Create task",
    false,
    "",
    false,
    () => {}
  );
  // ---------------------------------- CB <<
  //
  // ---------------------------------- AC >>
  CreateTaskHeader.appendChild(PopupTitle.widget);
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
      BG_5.removeChild(CraateTaskPopup);
    }, 500);
    //
  }
  // ------------------------------------- L <<
  //
  // ------------------------------------ AC >>
  CreateTaskHeader.appendChild(ColseBTN.widget);
  // ------------------------------------ AC <<
  //
  // ------------------------------------------ > BTN <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> Body <<
  const CreateTaskBody = document.createElement("div");
  CreateTaskBody.classList.add("Column");
  //
  // ------------------------------------------- > id <
  CreateTaskBody.id = "CreateTaskBody";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CraateTaskPopup.appendChild(CreateTaskBody);
  // ------------------------------------------- > AC <
  //
  // -------------------------------------------------- >> Body <<
  //
  // ------------------------------------------------- >> Field <<
  //
  // ------------------------------------------- > V <
  const CreateTaskTitleID = "CreateTaskTitleFeild";
  //
  const CreateTaskTitleLabel = "Title";
  //
  const CreateTaskTitleFeildID = "CreateTaskTitleFeild";
  //
  const CreateTaskTitleInputPlaceholder = "enter your title ...";
  //
  // ------------------------------------------- > V <
  //
  // ------------------------------------------ > CB <
  const CreateTaskTitle = Field(
    CreateTaskTitleID,
    true,
    "ic:round-short-text",
    CreateTaskTitleLabel,
    false,
    CreateTaskTitleFeildID,
    "",
    CreateTaskTitleInputPlaceholder,
    100
  );
  // ------------------------------------------ > CB <
  //
  // ------------------------------------------ > id <
  CreateTaskTitle.labelIcon.id = "CreateTaskTitleFieldLabelIcon";
  CreateTaskTitle.labelText.id = "CreateTaskTitleFieldLabelText";
  CreateTaskTitle.field.id = "CreateTaskTitleField";
  CreateTaskTitle.Input.id = "CreateTaskTitleFieldInput";
  // ------------------------------------------ > id <
  //
  // ------------------------------------------ > AC <
  CreateTaskBody.appendChild(CreateTaskTitle.widget);
  // ------------------------------------------ > AC <
  //
  // ------------------------------------------------- >> Field <<
  //
  // ----------------------------------------------- >> Divider <<
  const CreateTaskDivider1 = document.createElement("div");
  CreateTaskDivider1.classList.add("CreateTaskDivider");
  //
  // ---------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskDivider1);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // ------------------------------------------------- >> Field <<
  //
  // ------------------------------------------- > V <
  const CreateTaskDescriptionID = "CreateTaskDescriptionFeild";
  //
  const CreateTaskDescriptionLabel = "Description";
  //
  const CreateTaskDescriptionFeildID = "CreateTaskDescriptionFeild";
  //
  const CreateTaskDescriptionInputPlaceholder = "enter your description ...";
  //
  // ------------------------------------------- > V <
  //
  // ------------------------------------------ > CB <
  const CreateTaskDescription = Field(
    CreateTaskDescriptionID,
    true,
    "fluent:text-description-32-filled",
    CreateTaskDescriptionLabel,
    true,
    CreateTaskDescriptionFeildID,
    "",
    CreateTaskDescriptionInputPlaceholder,
    100
  );
  // ------------------------------------------ > CB <
  //
  // ------------------------------------------ > id <
  CreateTaskDescription.labelIcon.id = "CreateTaskDescriptionFieldLabelIcon";
  CreateTaskDescription.labelText.id = "CreateTaskDescriptionFieldLabelText";
  CreateTaskDescription.field.id = "CreateTaskDescriptionField";
  CreateTaskDescription.Input.id = "CreateTaskDescriptionFieldInput";
  // ------------------------------------------ > id <
  //
  // ------------------------------------------ > AC <
  CreateTaskBody.appendChild(CreateTaskDescription.widget);
  // ------------------------------------------ > AC <
  //
  // ------------------------------------------------- >> Field <<
  //
  // ----------------------------------------------- >> Divider <<
  const CreateTaskDivider2 = document.createElement("div");
  CreateTaskDivider2.classList.add("CreateTaskDivider");
  //
  // ---------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskDivider2);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateTaskDateLabel = document.createElement("div");
  CreateTaskDateLabel.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CreateTaskDateLabel.id = "CreateTaskLabel";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskDateLabel);
  // ------------------------------------------- > AC <
  //
  // ----------------------------------------- > icon <
  const CreateTaskLabelIcon = document.createElement("iconify-icon");
  CreateTaskLabelIcon.classList.add("CreateTaskLabelIcon");
  //
  // -------------------------------- value >>
  CreateTaskLabelIcon.setAttribute("icon", "clarity:date-solid-badged");
  // -------------------------------- value <<
  //
  // ----------------------------------- AC >>
  CreateTaskDateLabel.appendChild(CreateTaskLabelIcon);
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > icon <
  //
  // ----------------------------------------- > span <
  const CreateTaskLabelText = document.createElement("span");
  CreateTaskLabelText.classList.add("CreateTaskLabelText");
  //
  // -------------------------------- value >>
  CreateTaskLabelText.textContent = "Date";
  // -------------------------------- value <<
  //
  // ----------------------------------- AC >>
  CreateTaskDateLabel.appendChild(CreateTaskLabelText);
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > span <

  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> Flex <<
  const CrateTaskDatePickerFlex = document.createElement("div");
  CrateTaskDatePickerFlex.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CrateTaskDatePickerFlex.id = "CrateTaskDatePickerFlex";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateTaskBody.appendChild(CrateTaskDatePickerFlex);
  // ------------------------------------------- > AC <
  //
  // ----------------------------------- > DatePicker <
  //
  // ------------------------------ V >>
  let SelectedStartDate = "";
  // ------------------------------ V <<
  //
  // ----------------------------- CB >>
  const StartDate = DatePicker("Select start date", (selctedDate) => {
    StartDateListener(selctedDate);
  });
  // ----------------------------- CB <<
  //
  // ------------------------------ L >>
  function StartDateListener(SelectedDate) {
    SelectedStartDate = SelectedDate;
  }
  // ------------------------------ L <<
  //
  // ----------------------------- AC >>
  CrateTaskDatePickerFlex.appendChild(StartDate.widget);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > DatePicker <
  //
  // -------------------------------------- > Divider <
  const CreateTaskDatepickersDivider = document.createElement("div");
  CreateTaskDatepickersDivider.classList.add("CreateTaskDatepickersDivider");
  //
  // -------------------------------- AC >>
  CrateTaskDatePickerFlex.appendChild(CreateTaskDatepickersDivider);
  // -------------------------------- AC <<
  //
  // -------------------------------------- > Divider <
  //
  // ----------------------------------- > DatePicker <
  //
  // ------------------------------ V >>
  let SelectedEndDate = "";
  // ------------------------------ V <<
  //
  // ----------------------------- CB >>
  const EndDate = DatePicker("Select end date", (selctedDate) => {
    EndDateListener(selctedDate);
  });

  EndDate.widget.id = "EndDate";
  // ----------------------------- CB <<
  //
  // ------------------------------ L >>
  function EndDateListener(SelectedDate) {
    SelectedEndDate = SelectedDate;
  }
  // ------------------------------ L <<
  //
  // ----------------------------- AC >>
  CrateTaskDatePickerFlex.appendChild(EndDate.widget);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > DatePicker <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // ----------------------------------------------- >> Divider <<
  const CreateTaskDivider3 = document.createElement("div");
  CreateTaskDivider3.classList.add("CreateTaskDivider");
  //
  // ---------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskDivider3);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateTaskSelectedUsersLabel = document.createElement("div");
  CreateTaskSelectedUsersLabel.classList.add("Flex");
  //
  // ------------------------------------------- > id <
  CreateTaskSelectedUsersLabel.id = "CreateTaskLabel";
  // ------------------------------------------- > id <
  //
  // ------------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskSelectedUsersLabel);
  // ------------------------------------------- > AC <
  //
  // ----------------------------------------- > icon <
  const CreateTaskSelectedUsersLabelIcon =
    document.createElement("iconify-icon");
  CreateTaskSelectedUsersLabelIcon.classList.add("CreateTaskLabelIcon");
  //
  // -------------------------------- value >>
  CreateTaskSelectedUsersLabelIcon.setAttribute("icon", "mdi:users-check");
  // -------------------------------- value <<
  //
  // ----------------------------------- AC >>
  CreateTaskSelectedUsersLabel.appendChild(CreateTaskSelectedUsersLabelIcon);
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > icon <
  //
  // ----------------------------------------- > span <
  const CreateTaskSelectedUsersLabelText = document.createElement("span");
  CreateTaskSelectedUsersLabelText.classList.add("CreateTaskLabelText");
  //
  // -------------------------------- value >>
  CreateTaskSelectedUsersLabelText.textContent = "Selected Users";
  // -------------------------------- value <<
  //
  // ----------------------------------- AC >>
  CreateTaskSelectedUsersLabel.appendChild(CreateTaskSelectedUsersLabelText);
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > span <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> Flex <<
  const CreateTaskSelectedUsersList = document.createElement("div");
  CreateTaskSelectedUsersList.classList.add("Flex");
  //
  // ------------------------------------------ > id <
  CreateTaskSelectedUsersList.id = "CreateTaskSelectedUsersList";
  // ------------------------------------------ > id <
  //
  // ------------------------------------------ > AC <
  CreateTaskBody.appendChild(CreateTaskSelectedUsersList);
  // ------------------------------------------ > AC <
  //
  // -------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------- >> List <<
  const CreateTaskAllUsersList = document.createElement("div");
  CreateTaskAllUsersList.classList.add("CreateTaskAllUsersList");
  //
  // ------------------------------------------- > AC <
  CreateTaskBody.appendChild(CreateTaskAllUsersList);
  // ------------------------------------------- > AC <
  //
  // ------------------------------------------ > API <
  let Api = `https://personnel.samami.co/user/get?limit=${100000000000000}`;
  // ------------------------------------------ > API <
  //
  // ------------------------------------------ > GET <
  GET(Api)
    .then((response) => {
      //
      // ------------------------------- 200 >>
      if (response.status == 200) {
        //
        // ------------------- forEach >
        response.data.data.forEach((data) => {
          //
          // --------------------------- > CB <
          const MiniUserWidget = MiniUser(data, WidgetListener);
          // --------------------------- > CB <
          //
          // --------------------------- > L <
          function WidgetListener() {
            //
            // -------------------- V >>
            let list = CreateTaskSelectedUsersList.childNodes;
            // -------------------- V <<
            //
            // ------------------- SM >>
            if (list.length == 0) {
              CreateTaskSelectedUsersList.appendChild(MiniUserWidget);
              MiniUserWidget.classList.add("active");
            }
            //
            else {
              //
              list.forEach((element) => {
                //
                if (MiniUserWidget.id == element.id) {
                  //
                  CreateTaskSelectedUsersList.removeChild(element);
                  //
                  CreateTaskAllUsersList.appendChild(element);
                  //
                  element.classList.remove("active");
                  //
                }
                //
                else {
                  //
                  const clonedWidget = MiniUserWidget;
                  //
                  CreateTaskSelectedUsersList.appendChild(clonedWidget);
                  //
                  clonedWidget.classList.add("active");
                  //
                }
                //
              });
              //
            }
            // ------------------- SM <<
            //
          }
          // --------------------------- > L <
          //
          // -------------------------- > AC <
          setTimeout(() => {
            CreateTaskAllUsersList.appendChild(MiniUserWidget);
          }, 500);
          // -------------------------- > AC <
          //
        });
        // ------------------- forEach <
        //
      }
      // ------------------------------- 200 <<
      //
      // ------------------------------ else >>
      else {
        //
        Layer5.classList.remove("show");
        //
        setTimeout(() => {
          BG_5.innerHTML = "";
        }, 500);
        //
      }
      // ------------------------------ else <<
      //
    })
    .catch((error) => {
      //
      console.log(error);
      //
      Layer5.classList.remove("show");
      setTimeout(() => {
        BG_5.innerHTML = "";
      }, 500);
      //
    });
  // ------------------------------------------ > GET <
  //
  // -------------------------------------------------- >> List <<
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
      CreateTaskTitle.Input,
      CreateTaskDescription.Input,
      SelectedStartDate,
      SelectedEndDate,
      CreateTaskSelectedUsersList.childNodes.length
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
      // ------------------------------- V >
      let users_id_list = [];
      //
      CreateTaskSelectedUsersList.childNodes.forEach((element) => {
        users_id_list.push(+element.id);
      });
      // ------------------------------- V <
      //
      // --------------------- Web Service >
      PostTask(
        CreateTaskTitle.Input.value,
        CreateTaskDescription.Input.value,
        SelectedStartDate,
        SelectedEndDate,
        users_id_list
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
  CraateTaskPopup.appendChild(SubmitBTN.widget);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> BTN <<
  //
}
// =============================================================== >> Create <<
//
// ============================================================= >> MiniUser <<
function MiniUser(response, listener) {
  //
  // ------------------------------------------------- >> div <<
  const MiniUser = document.createElement("div");
  MiniUser.classList.add("MiniUser");
  //
  // ------------------------------------------ > id <
  MiniUser.id = response.id;
  // ------------------------------------------ > id <
  //
  // ------------------------------------------------- >> div <<
  //
  // --------------------------------------------------- >> L <<
  MiniUser.addEventListener("click", () => {
    listener();
  });
  // --------------------------------------------------- >> L <<
  //
  // ---------------------------------------------- >> Avatar <<
  const MiniUserAvatar = document.createElement("img");
  MiniUserAvatar.classList.add("MiniUserAvatar");
  MiniUserAvatar.setAttribute("loading", "lazy");
  //
  // -------------------------------------- > src <
  if (response.avatar_image == "") {
    MiniUserAvatar.src = "./../assets/svg/person icon.svg";
  } else {
    MiniUserAvatar.src = response.avatar_image;
  }
  // -------------------------------------- > src <
  //
  // --------------------------------------- > AC <
  MiniUser.appendChild(MiniUserAvatar);
  // --------------------------------------- > AC <
  //
  // ---------------------------------------------- >> Avatar <<
  //
  // ------------------------------------------------ >> Name <<
  const MiniUserName = document.createElement("span");
  MiniUserName.classList.add("MiniUserName");
  //
  // ---------------------------------------- > src <
  MiniUserName.textContent = response.username;
  // ---------------------------------------- > src <
  //
  // ----------------------------------------- > AC <
  MiniUser.appendChild(MiniUserName);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Name <<
  //
  // ---------------------------------------------- >> return <<
  return MiniUser;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> MiniUser <<
//
// ============================================================ >> Validator <<
function Validator(
  TitleInput,
  DescriptionInput,
  StartDate,
  EndDate,
  SelectedUsersList
) {
  //
  // -------------------------------------------------- >> V <<
  let TitleValue = TitleInput.value.trim();
  let DescriptionValue = DescriptionInput.value;
  // -------------------------------------------------- >> V <<
  //
  // --------------------------------------------- >> RegExp <<
  const regex = /^(?!\s*$)[\s\S]+$/;
  // --------------------------------------------- >> RegExp <<
  //
  // ----------------------------------------- >> Validation <<
  let TitleValid = regex.test(TitleValue);
  let DescriptionValid = regex.test(DescriptionValue);
  let StartDateValid = regex.test(StartDate);
  let EndDateValid = regex.test(EndDate);
  let UsersListValid = SelectedUsersList !== 0 ? true : false;
  // ----------------------------------------- >> Validation <<
  //
  // --------------------------------------------- >> return <<
  return (
    TitleValid &&
    DescriptionValid &&
    StartDateValid &&
    EndDateValid &&
    UsersListValid
  );
  // --------------------------------------------- >> return <<
  //
}
// ============================================================ >> Validator <<
//
// ================================================================= >> POST <<
function PostTask(
  titleValue,
  descriptionValue,
  startDate,
  endData,
  UsersIdList
) {
  //
  // ----------------------------------------------------- >> API <<
  const Api = `https://personnel.samami.co/task/new`;
  // ----------------------------------------------------- >> API <<
  //
  // ---------------------------------------------------- >> DATA <<
  let Data = {
    title: titleValue,
    description: descriptionValue,
    timeline_start: startDate,
    timeline_end: endData,
    user_ids: UsersIdList,
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
          "Task created successfully 👍",
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
            const TasksSection = document.getElementById("TasksSection");
            TasksSection.removeChild(DataContainer);
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
// ========================================================= >> Filter Popup <<
function FilterPopup() {
  //
  // ---------------------------------------------- >> SM <<
  Layer5.classList.add("show");
  // ---------------------------------------------- >> SM <<
  //
  // --------------------------------------------- >> div <<
  const FilterTaskPopup = document.createElement("div");
  FilterTaskPopup.classList.add("Column", "show");
  //
  // -------------------------------------- > id <
  FilterTaskPopup.id = "FilterTaskPopup";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  BG_5.appendChild(FilterTaskPopup);
  // -------------------------------------- > AC <
  //
  // --------------------------------------------- >> div <<
  //
  // -------------------------------------------- >> Flex <<
  const FilterTaskHeader = document.createElement("div");
  FilterTaskHeader.classList.add("Flex");
  //
  // ------------------------------------- > id <
  FilterTaskHeader.id = "FilterTaskHeader";
  // --------------------------------------- id <
  //
  // --------------------------------------- AC <
  FilterTaskPopup.appendChild(FilterTaskHeader);
  // --------------------------------------- AC <
  //
  // ---------------------------------- > Title <
  //
  // ---------------------------- CB >>
  const PopupTitle = BTN(
    "PopupTitleText",
    true,
    "Filter",
    false,
    "",
    false,
    () => {}
  );
  // ---------------------------- CB <<
  //
  // ---------------------------- AC >>
  FilterTaskHeader.appendChild(PopupTitle.widget);
  // ---------------------------- AC <<
  //
  // ---------------------------------- > Title <
  //
  // ------------------------------------ > BTN <
  //
  // ------------------------------ CB >>
  const ColseBTN = BTN(
    "ColsePopupBTN",
    false,
    "",
    true,
    "fa:close",
    true,
    ColseBTNListener
  );
  // ------------------------------ CB <<
  //
  // ------------------------------- L >>
  function ColseBTNListener() {
    //
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      BG_5.removeChild(FilterTaskPopup);
    }, 500);
    //
  }
  // ------------------------------- L <<
  //
  // ------------------------------ AC >>
  FilterTaskHeader.appendChild(ColseBTN.widget);
  // ------------------------------ AC <<
  //
  // ------------------------------------ > BTN <
  //
  // -------------------------------------------- >> Flex <<
  //
  // -------------------------------------------- >> Body <<
  const FilterTaskBody = document.createElement("div");
  FilterTaskBody.classList.add("Column");
  //
  // ------------------------------------- > id <
  FilterTaskBody.id = "FilterTaskBody";
  // ------------------------------------- > id <
  //
  // ------------------------------------- > AC <
  FilterTaskPopup.appendChild(FilterTaskBody);
  // ------------------------------------- > AC <
  //
  // -------------------------------------------- >> Body <<
  //
  // -------------------------------------------- >> Flex <<
  const FilterTaskDateLabel = document.createElement("div");
  FilterTaskDateLabel.classList.add("Flex");
  //
  // ------------------------------------- > id <
  FilterTaskDateLabel.id = "FilterTaskLabel";
  // ------------------------------------- > id <
  //
  // ------------------------------------- > AC <
  FilterTaskBody.appendChild(FilterTaskDateLabel);
  // ------------------------------------- > AC <
  //
  // ----------------------------------- > icon <
  const FilterTaskLabelIcon = document.createElement("iconify-icon");
  FilterTaskLabelIcon.classList.add("FilterTaskLabelIcon");
  //
  // -------------------------- value >>
  FilterTaskLabelIcon.setAttribute("icon", "clarity:date-solid-badged");
  // -------------------------- value <<
  //
  // ----------------------------- AC >>
  FilterTaskDateLabel.appendChild(FilterTaskLabelIcon);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > icon <
  //
  // ----------------------------------- > span <
  const FilterTaskLabelText = document.createElement("span");
  FilterTaskLabelText.classList.add("FilterTaskLabelText");
  //
  // -------------------------- value >>
  FilterTaskLabelText.textContent = "Date";
  // -------------------------- value <<
  //
  // ----------------------------- AC >>
  FilterTaskDateLabel.appendChild(FilterTaskLabelText);
  // ----------------------------- AC <<
  //
  // ----------------------------------- > span <
  //
  // -------------------------------------------- >> Flex <<
  //
  // -------------------------------------------- >> Flex <<
  const FilterTaskDatePickerFlex = document.createElement("div");
  FilterTaskDatePickerFlex.classList.add("Flex");
  //
  // ------------------------------------- > id <
  FilterTaskDatePickerFlex.id = "FilterTaskDatePickerFlex";
  // ------------------------------------- > id <
  //
  // ------------------------------------- > AC <
  FilterTaskBody.appendChild(FilterTaskDatePickerFlex);
  // ------------------------------------- > AC <
  //
  // ----------------------------- > DatePicker <
  //
  // ------------------------ V >>
  // ------------------------ V <<
  //
  // ----------------------- CB >>
  const StartDate = DatePicker("Select start date", (selctedDate) => {
    StartDateListener(selctedDate);
  });
  // ----------------------- CB <<
  //
  // ------------------------ L >>
  function StartDateListener(SelectedDate) {
    SelectedStartDate = SelectedDate;
  }
  // ------------------------ L <<
  //
  StartDate.widget.id = "StartDate";
  StartDate.body.id = "StartDateBody";
  //
  // ----------------------- AC >>
  FilterTaskDatePickerFlex.appendChild(StartDate.widget);
  // ----------------------- AC <<
  //
  // ----------------------------- > DatePicker <
  //
  // -------------------------------- > Divider <
  const FilterTaskDatepickersDivider = document.createElement("div");
  FilterTaskDatepickersDivider.classList.add("FilterTaskDatepickersDivider");
  //
  // -------------------------- AC >>
  FilterTaskDatePickerFlex.appendChild(FilterTaskDatepickersDivider);
  // -------------------------- AC <<
  //
  // -------------------------------- > Divider <
  //
  // ----------------------------- > DatePicker <
  //
  // ------------------------ V >>
  // ------------------------ V <<
  //
  // ----------------------- CB >>
  const EndDate = DatePicker("Select end date", (selctedDate) => {
    EndDateListener(selctedDate);
  });
  //
  EndDate.widget.id = "EndDate";
  // ----------------------- CB <<
  //
  // ------------------------ L >>
  function EndDateListener(SelectedDate) {
    SelectedEndDate = SelectedDate;
  }
  // ------------------------ L <<
  //
  // ------------------------ L >>
  EndDate.title.addEventListener("click", () => {
    FilterTaskPopup.classList.toggle("big");
    FilterTaskBody.classList.toggle("big");
  });
  // ------------------------ L <<
  //
  // ----------------------- AC >>
  FilterTaskDatePickerFlex.appendChild(EndDate.widget);
  // ----------------------- AC <<
  //
  // ----------------------------- > DatePicker <
  //
  // -------------------------------------------- >> Flex <<
  //
  // ----------------------------------------- >> Divider <<
  const FilterTaskDivider1 = document.createElement("div");
  FilterTaskDivider1.classList.add("FilterTaskDivider");
  //
  // ---------------------------------------- > AC <
  FilterTaskBody.appendChild(FilterTaskDivider1);
  // ---------------------------------------- > AC <
  //
  // -------------------------------------------- Divider <<
  //
  // --------------------------------------- >> Drop Down <<
  //
  // ---------------------------------- V >>
  // ---------------------------------- V <<
  //
  // --------------------------------- CB >>
  const DD = DropDown(
    //
    "mdi:order-bool-ascending",
    //
    "Task status",
    //
    ["All", "Open", "Closed", "Finished"],
    //
    (value) => {
      SelectedStatus = value;
    }
    //
  );
  // --------------------------------- CB <<
  //

  // --------------------------------- AC >>
  FilterTaskBody.appendChild(DD.widget);
  // --------------------------------- AC <<
  //
  // --------------------------------------- >> Drop Down <<
  //
  // -------------------------------------------- >> Flex <<
  const FilterTaskButtonFlex = document.createElement("div");
  FilterTaskButtonFlex.classList.add("Flex");
  //
  // ------------------------------------- > id <
  FilterTaskButtonFlex.id = "FilterTaskButtonFlex";
  // ------------------------------------- > id <
  //
  // ------------------------------------- > AC <
  FilterTaskPopup.appendChild(FilterTaskButtonFlex);
  // ------------------------------------- > AC <
  //
  // -------------------------------------------- >> Flex <<
  //
  // --------------------------------------------- >> BTN <<
  //
  // --------------------------------------- > V <
  const SubmitBTNId = "GreenPopupBTN";
  const SubmitBtnText = "Submit";
  const SubmitBtnIcon = "line-md:check-all";
  // --------------------------------------- > V <
  //
  // -------------------------------------- > CB <
  const SubmitBTN = BTN(
    SubmitBTNId,
    true,
    SubmitBtnText,
    true,
    SubmitBtnIcon,
    true,
    SubmitBTNListener
  );
  // -------------------------------------- > CB <
  //
  // --------------------------------------- > L <
  function SubmitBTNListener() {
    //
    // ------------------------ Loading CB >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ------------------------ Loading CB <<
    //
    // -------------------------------- SM >>
    //
    const DataContainer = document.querySelector(".DataContainer");
    const TasksSection = document.querySelector("#TasksSection");
    const SearchInput = document.querySelector("#SearchInput");
    DataContainer.classList.remove("show");
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      if (TasksSection.contains(DataContainer)) {
        TasksSection.removeChild(DataContainer);
        BG_5.innerHTML = "";
      }
    }, 500);
    //
    // -------------------------------- SM <<
    //
    // ----------------------------- Query >>
    let params = new URLSearchParams();

    if (SearchInput.value) params.append("search", SearchInput.value);
    if (SelectedStartDate) params.append("timestamp_from", SelectedStartDate);
    if (SelectedEndDate) params.append("timestamp_to", SelectedEndDate);
    if (SelectedStatus && SelectedStatus !== "All")
      params.append("status", SelectedStatus);

    Query = params.toString();
    // ----------------------------- Query <<
    //
    // --------------------------- List CB >>
    setTimeout(() => {
      List(false);
    }, 500);
    // --------------------------- List CB <<
    //
  }
  // --------------------------------------- > L <
  //
  // -------------------------------------- > AP <
  FilterTaskButtonFlex.appendChild(SubmitBTN.widget);
  // -------------------------------------- > AP <
  //
  // --------------------------------------------- >> BTN <<
  //
  // --------------------------------------------- >> BTN <<
  //
  // --------------------------------------- > V <
  const ClearBTNId = "RedPopupBTN";
  const ClearBtnText = "Clear";
  const ClearBtnIcon = "tdesign:filter-clear-filled";
  // --------------------------------------- > V <
  //
  // -------------------------------------- > CB <
  const ClearBTN = BTN(
    ClearBTNId,
    true,
    ClearBtnText,
    true,
    ClearBtnIcon,
    true,
    ClearBTNListener
  );
  // -------------------------------------- > CB <
  //
  // --------------------------------------- > L <
  function ClearBTNListener() {
    //
    // ------------------------ Loading CB >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ------------------------ Loading CB <<
    //
    // -------------------------------- SM >>
    //
    const DataContainer = document.querySelector(".DataContainer");
    const TasksSection = document.querySelector("#TasksSection");
    DataContainer.classList.remove("show");
    Layer5.classList.remove("show");
    //
    setTimeout(() => {
      if (TasksSection.contains(DataContainer)) {
        TasksSection.removeChild(DataContainer);
        BG_5.innerHTML = "";
      }
    }, 500);
    //
    // -------------------------------- SM <<
    //
    // ----------------------------- Query >>
    SelectedStartDate = "";
    SelectedEndDate = "";
    SelectedStatus = "";

    let params = new URLSearchParams();

    if (SearchInput.value) params.append("search", SearchInput.value);
    if (SelectedStartDate) params.append("timestamp_from", SelectedStartDate);
    if (SelectedEndDate) params.append("timestamp_to", SelectedEndDate);
    if (SelectedStatus && SelectedStatus !== "All")
      params.append("status", SelectedStatus);

    Query = params.toString();
    // ----------------------------- Query <<
    //
    // --------------------------- List CB >>
    setTimeout(() => {
      List(false);
    }, 500);
    // --------------------------- List CB <<
    //
  }
  // --------------------------------------- > L <
  //
  // -------------------------------------- > AP <
  FilterTaskButtonFlex.appendChild(ClearBTN.widget);
  // -------------------------------------- > AP <
  //
  // --------------------------------------------- >> BTN <<
  //
}
// ========================================================= >> Filter Popup <<
//
// =========================================================== >> Check Task <<
function CheckTaskPopup(TaskTitle, Taskid) {
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
  Column.id = "CheckTaskPopup";
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
  Flex.id = "CheckTaskHeader";
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
    "Check Task",
    true,
    "oi:task",
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
  const CheckTaskBody = document.createElement("div");
  CheckTaskBody.classList.add("Column");
  //
  // -------------------------------------- > id <
  CheckTaskBody.id = "CheckTaskBody";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  Column.appendChild(CheckTaskBody);
  // -------------------------------------- > AC <
  //
  // ------------------------------------ > span <
  const DeleteUserText = document.createElement("span");
  DeleteUserText.classList.add("DeleteUserText");
  //
  // ------------------------------ id >>
  DeleteUserText.textContent = `Are you sure you want to approve " ${TaskTitle} " task?`;
  // ------------------------------ id <<
  //
  // ------------------------------ AC >>
  CheckTaskBody.appendChild(DeleteUserText);
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
    // ----------------------- Add Loading >>
    LoadingcallBack(BG_6, 1, Layer6);
    // ----------------------- Add Loading <<
    //
    // ------------------------------- API >>
    let Api = `https://personnel.samami.co/task/check?task_id=${Taskid}`;
    // ------------------------------- API <<
    //
    // ------------------------------- GET >>
    GET(Api)
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
            "Task checked successfully 👍",
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
              const TasksSection = document.getElementById("TasksSection");
              TasksSection.removeChild(DataContainer);
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
// =========================================================== >> Check Task <<
//
// ========================================================== >> Delete Task <<
function DeleteTaskPopup(TaskTitle, Taskid) {
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
  Column.id = "DeleteTaskPopup";
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
  Flex.id = "DeleteTaskHeader";
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
    "Delete Task",
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
  const DeleteTaskBody = document.createElement("div");
  DeleteTaskBody.classList.add("Column");
  //
  // -------------------------------------- > id <
  DeleteTaskBody.id = "DeleteTaskBody";
  // -------------------------------------- > id <
  //
  // -------------------------------------- > AC <
  Column.appendChild(DeleteTaskBody);
  // -------------------------------------- > AC <
  //
  // ------------------------------------ > span <
  const DeleteUserText = document.createElement("span");
  DeleteUserText.classList.add("DeleteUserText");
  //
  // ------------------------------ id >>
  DeleteUserText.textContent = `Are you sure you want to delete " ${TaskTitle} " task?`;
  // ------------------------------ id <<
  //
  // ------------------------------ AC >>
  DeleteTaskBody.appendChild(DeleteUserText);
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
    let Api = `https://personnel.samami.co/task/delete?task_id=${Taskid}`;
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
            "Task deleted successfully 👍",
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
              const TasksSection = document.getElementById("TasksSection");
              TasksSection.removeChild(DataContainer);
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
// ========================================================== >> Delete Task <<
//
