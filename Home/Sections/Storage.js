// ============================================================== >> Imports <<
//
// ------------------------------------------------ >> Loading <<
import { LoadingcallBack } from "../../modules/Widgets/Loading/loading.js";
// ------------------------------------------------ >> Loading <<
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
// =============================================================== >> Layers <<
//
// ------------------------------------------------- >> Layer 5 <<
const Layer5 = document.querySelector(".Layer5");
const BG_5 = document.querySelector("#BG_5");
// ------------------------------------------------- >> Layer 5 <<
//
// =============================================================== >> Layers <<
//
// =============================================================== >> Module <<
export function StorageSection() {
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
  // ------------------------------------------------ >> Widget <<
  const Container = document.createElement("div");
  Container.classList.add("Container");
  // ------------------------------------------------ >> Widget <<

  // ------------------------------------------------ >> Return <<
  return Container;
  // ------------------------------------------------ >> Return <<
}
// =============================================================== >> Module <<
//
// ============================================================== >> Widgets <<
//
// ============================================================== >> Widgets <<
//
// ============================================================ >> Operators <<
//
// ============================================================ >> Operators <<
//
