//
// =========== >> All icons are sourced from the Iconify website << ===========
//
// ========================================================== >> Definitions <<
//
// DD => { Dropdown }
//
// V => { Variables }
//
// Cl => { CallBack }
//
// SM => { State Management }
//
// L => { Lsitener }
//
// AC => { Append Child }
//
// ========================================================== >> Definitions <<
//
// =============================================================== >> Module <<
export function DropDown(labelicon, labeltext, Data, Listener) {
  //
  // ----------------------------------------------------- >> V <<
  let IsExpand = false;
  // ----------------------------------------------------- >> V <<
  //
  // ------------------------------------------------ >> Widget <<
  const DD = document.createElement("div");
  DD.classList.add("DD");
  // ------------------------------------------------ >> Widget <<
  //
  // ------------------------------------------------- >> Label <<
  const DDHeader = document.createElement("div");
  DDHeader.classList.add("DDHeader");
  //
  // ------------------------------------------ > AC <
  DD.appendChild(DDHeader);
  // ------------------------------------------ > AC <
  //
  // ---------------------------------------- > icon <
  const DDHeaderIcon = document.createElement("iconify-icon");
  DDHeaderIcon.classList.add("DDHeaderIcon");
  //
  // ------------------------------- value >>
  DDHeaderIcon.setAttribute("icon", labelicon);
  // ------------------------------- value <<
  //
  // ---------------------------------- AC >>
  DDHeader.appendChild(DDHeaderIcon);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > icon <
  //
  // ---------------------------------------- > span <
  const DDLabel = document.createElement("span");
  DDLabel.classList.add("DDLabel");
  //
  // ------------------------------- value >>
  DDLabel.textContent = labeltext;
  // ------------------------------- value <<
  //
  // ---------------------------------- AC >>
  DDHeader.appendChild(DDLabel);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > span <
  //
  // ------------------------------------------------- >> Label <<
  //
  // ------------------------------------------------- >> Title <<
  const DDTitle = document.createElement("div");
  DDTitle.classList.add("DDTitle");
  //
  // ------------------------------------------- > L <
  DDTitle.addEventListener("click", () => {
    //
    // ----------------------------- operator >>
    IsExpand = !IsExpand;
    // ----------------------------- operator <<
    //
    // ----------------------------------- SM >>
    DDIcon.classList.toggle("turn");
    // ----------------------------------- SM <<
    //
    // --------------------------- Conditions >>
    if (IsExpand) {
      //
      // -------------------- SM >
      DDBody.classList.add("show");
      // -------------------- SM <
      //
    }
    //
    else {
      // -------------------- SM >
      DDBody.classList.remove("show");
      // -------------------- SM <
    }
    // --------------------------- Conditions <<
    //
  });
  // ------------------------------------------- > L <
  //
  // ---------------------------------------- > Text <
  const DDText = document.createElement("span");
  DDText.classList.add("DDText");
  //
  // ------------------------------- Value >>
  DDText.textContent = "Choose an Option";
  // ------------------------------- Value <<
  //
  // ---------------------------------- AC >>
  DDTitle.appendChild(DDText);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > Text <
  //
  // ---------------------------------------- > Icon <
  const DDIcon = document.createElement("iconify-icon");
  DDIcon.classList.add("DDIcon");
  //
  // ------------------------------- Value >>
  DDIcon.setAttribute("icon", "tabler:arrow-badge-down-filled");
  // ------------------------------- Value <<
  //
  // ---------------------------------- AC >>
  DDTitle.appendChild(DDIcon);
  // ---------------------------------- AC <<
  //
  // ---------------------------------------- > Icon <
  //
  // ------------------------------------------ > AC <
  DD.appendChild(DDTitle);
  // ------------------------------------------ > AC <
  //
  // ------------------------------------------------- >> Title <<
  //
  // -------------------------------------------------- >> Body <<
  const DDBody = document.createElement("div");
  DDBody.classList.add("DDBody");
  //
  // -------------------------------------- > Builder <
  for (let index = 0; index < Data.length; index++) {
    //
    // ------------------------ CallBack >>
    let DDItem = Item(Data[index]);
    // ------------------------ CallBack <<
    //
    // ------------------------ Listener >>
    DDItem.div.addEventListener("click", () => {
      //
      // SM >
      IsExpand = false;
      DDBody.classList.remove("show");
      DDIcon.classList.remove("turn");
      // SM <
      //
      // remove last active class >
      const allItems = document.querySelectorAll(".DDItem");
      allItems.forEach((item) => item.classList.remove("active"));
      // remove last active class <
      //
      // Add active class >
      DDItem.div.classList.add("active");
      // Add active class <
      //
      // CallBack >
      Listener(DDItem.span.textContent);
      // CallBack <
      //
      // Change the Title span value >
      DDText.textContent = DDItem.span.textContent;
      // Change the Title span value <
      //
    });
    // ------------------------ Listener <<
    //
    // ------------------------------ AC >>
    DDBody.appendChild(DDItem.div);
    // ------------------------------ AC <<
    //
  }
  // -------------------------------------- > Builder <
  //
  // ----------------------------------------- > Item <
  function Item(Text) {
    //
    // -------------------------------- div >>
    const DDItem = document.createElement("div");
    DDItem.classList.add("DDItem");
    // -------------------------------- div <<
    //
    // -------------------------------- span >>
    const DDItemText = document.createElement("span");
    DDItemText.classList.add("DDItemText");
    //
    // ------------------------ Value >
    DDItemText.textContent = Text;
    // ------------------------ Value <
    //
    // --------------------------- AC >
    DDItem.appendChild(DDItemText);
    // --------------------------- AC <
    //
    // -------------------------------- span <<
    //
    // ------------------------------ return >>
    return {
      div: DDItem,
      span: DDItemText,
    };
    // ------------------------------ return <<
    //
  }
  // ----------------------------------------- > Item <
  //
  // ------------------------------------------- > AC <
  DD.appendChild(DDBody);
  // ------------------------------------------- > AC <
  //
  // -------------------------------------------------- >> Body <<
  //
  // ------------------------------------------------ >> Return <<
  return {
    widget: DD,
    title: DDText,
    icon: DDIcon,
  };
  // ------------------------------------------------ >> Return <<
}
// =============================================================== >> Module <<
//
