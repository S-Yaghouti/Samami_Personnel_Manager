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
// ==================================================================== >> V <<
//
// =============================================================== >> Module <<
export function NotesSections() {
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
  LoadingcallBack(BG_5, 2, Layer5);
  // ---------------------------------------- >> Remove Loading <<
  //
  // ------------------------------------------------ >> Column <<
  const NoteSection = document.createElement("div");
  NoteSection.classList.add("Column");
  //
  // ----------------------------------------- > id <
  NoteSection.id = "NoteSection";
  // ----------------------------------------- > id <
  //
  // ----------------------------------------- > AC <
  SliderContainer.appendChild(NoteSection);
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
  List(true, NoteSection);
  // ------------------------------------------- > CB <
  //
  // -------------------------------------------------- >> List <<
  //
  // ------------------------------------------------ >> Return <<
  return NoteSection;
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
  // ------------------------------------- > Feild <
  //
  // ----------------------- Varibels >
  const FeildID = "SearchInput";
  const Icon = "icon-park-outline:doc-search-two";
  const Placeholder = " Search for notes ...";
  // ----------------------- Varibels <
  //
  // ----------------------- CallBack >
  const SearchField = Field(
    "SearchField",
    false,
    "",
    "",
    false,
    FeildID,
    Icon,
    Placeholder,
    20
  );
  // ----------------------- CallBack <
  //
  // ------------------------- Set id <
  SearchField.widget.id = "SearchField";
  SearchField.fieldIcon.id = "SearchFieldIcon";
  // ------------------------- Set id <
  //
  // ----------------------- Listener <
  SearchField.Input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
    }
  });
  // ----------------------- Listener <
  //
  // ----------------------------- AP >
  Flex.appendChild(SearchField.widget);
  // ----------------------------- AP <
  //
  //
  // ------------------------------------- > Feild <
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
function List(rebuild, father) {
  //
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
