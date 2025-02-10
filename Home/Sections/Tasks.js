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
// ==================================================================== >> V <<
//
// =============================================================== >> Module <<
export function TasksSection() {
  //
  // ----------------------------------------------------- >> V <<
  const SliderContainer = document.querySelector(".SliderContainer");
  // ----------------------------------------------------- >> V <<
  //
  // ---------------------------------------------------- >> SM <<
  setTimeout(() => {
    SliderContainer.classList.add("show");
  }, 500);
  // ---------------------------------------------------- >> SM <<
  //
  // ---------------------------------------- >> Remove Loading <<
  LoadingcallBack(BG_6, 2, Layer6);
  // ---------------------------------------- >> Remove Loading <<
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
  //
  // -------------------------------------------- > V <

  // -------------------------------------------- > V <
  //
  // ------------------------------------------- > CB <
  List(true);
  // ------------------------------------------- > CB <
  //
  // -------------------------------------------------- >> List <<
  //
  // ------------------------------------------------ >> Return <<
  return TasksSection;
  // ------------------------------------------------ >> Return <<
}
// =============================================================== >> Module <<
//
// ============================================================== >> Widgets <<
//
// ------------------------------------------------- >> Filter <<
function Filter(father) {
  //
  // --------------------------------------- > div <
  const Flex = document.createElement("div");
  Flex.classList.add("Flex");
  // --------------------------------- id >>
  Flex.id = "FilterFlex";
  // --------------------------------- id <<
  //
  // --------------------------------- AC >>
  father.appendChild(Flex);
  // --------------------------------- AC <<
  //
  // --------------------------------------- > div <
  //
  // ------------------------------------ > Search <
  //
  // ------------------------- Varibels >
  const SearchFeildInputID = "SearchInput";
  const Icon = "gis:search-propertie";
  const Placeholder = " Search for tasks ...";
  // ------------------------- Varibels <
  //
  // ------------------------- CallBack >
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
  // ------------------------- CallBack <
  //
  // --------------------------- Set id <
  SearchField.widget.id = "SearchField";
  SearchField.fieldIcon.id = "SearchFieldIcon";
  // --------------------------- Set id <
  //
  // ------------------------- Listener <
  SearchField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
    }
  });
  // ------------------------- Listener <
  //
  // ------------------------------- AP >
  Flex.appendChild(SearchField.widget);
  // ------------------------------- AP <
  //
  // ------------------------------------ > Search <
  //
  // ------------------------------------ > Filter <
  //
  // ------------------------------ > V <
  const FilterBTNId = "FilterBTN";
  const FilterBtnText = "Filter";
  const FilterBtnIcon = "mage:filter-square-fill";
  // ------------------------------ > V <
  //
  // ----------------------------- > CB <
  const FilterBTN = BTN(
    FilterBTNId,
    true,
    FilterBtnText,
    true,
    FilterBtnIcon,
    true,
    FilterBTNListener
  );
  // ----------------------------- > CB <
  //
  // ------------------------------ > L <
  function FilterBTNListener() {}
  // ------------------------------ > L <
  //
  // ----------------------------- > AP <
  Flex.appendChild(FilterBTN.widget);
  // ----------------------------- > AP <
  //
  // ------------------------------------ > Filter <
  //
  // ------------------------------------ > Create <
  //
  // ------------------------------ > V <
  const CreateBTNId = "CreateBTN";
  const CreateBtnText = "Create";
  const CreateBtnIcon = "ic:baseline-post-add";
  // ------------------------------ > V <
  //
  // ----------------------------- > CB <
  const CreateBTN = BTN(
    CreateBTNId,
    true,
    CreateBtnText,
    true,
    CreateBtnIcon,
    true,
    CreateBTNListener
  );
  // ----------------------------- > CB <
  //
  // ------------------------------ > L <
  function CreateBTNListener() {}
  // ------------------------------ > L <
  //
  // ----------------------------- > AP <
  Flex.appendChild(CreateBTN.widget);
  // ----------------------------- > AP <
  //
  // ------------------------------------ > Create <
  //
}
// ------------------------------------------------- >> Filter <<
//
// ------------------------------------------------ >> Builder <<
function List(rebuild) {
  //
  // ---------------------------------- > Selector <
  const father = document.querySelector("#TasksSection");
  // ---------------------------------- > Selector <
  //
  setTimeout(() => {
    const FilterFlex = document.getElementById("FilterFlex");
    FilterFlex.classList.add("show");
  }, 500);
  // -------------------------------- > Condition <
  if (rebuild == true) {
    Filter(father);
  }
  // -------------------------------- > Condition <
  //
}
// ------------------------------------------------ >> Builder <<
//
// ============================================================== >> Widgets <<
//
// ============================================================ >> Operators <<
//
// ============================================================ >> Operators <<
//
