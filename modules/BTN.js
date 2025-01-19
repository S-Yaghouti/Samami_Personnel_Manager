//
// ========================================================== >> Definitions <<
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
// RC => { Remove Child }
//
// ========================================================== >> Definitions <<
//
// =============================================================== >> Module <<
export function BTN(
  //
  ID, // To can change the button style in different cases
  //
  HaveText, // For times when Text is needed
  //
  Text, // Button Text
  //
  HaveIcon, // For when you need an icon
  //
  Icon, // Button Icon
  //
  HaveListener, // For times when an operator is needed
  //
  Listener // Operator
  //
) {
  //
  // ---------------------------------------------- >> Widget <<
  const BTN = document.createElement("div");
  BTN.classList.add("BTN");
  BTN.id = ID;
  // ---------------------------------------------- >> Widget <<
  //
  // --------------------------------------------------- >> L <<
  if (HaveListener) {
    BTN.addEventListener("click", () => {
      Listener();
    });
  }
  // --------------------------------------------------- >> L <<
  //
  // ------------------------------------------------ >> Text <<
  const BTNTEXT = document.createElement("span");
  //
  // -------------------------------- > TextContent <
  BTNTEXT.textContent = Text;
  // -------------------------------- > TextContent <
  //
  // ----------------------------------------- > AC <
  if (HaveText) {
    BTN.appendChild(BTNTEXT);
  }
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Text <<
  //
  // ------------------------------------------------ >> Icon <<
  const BTNICON = document.createElement("iconify-icon");
  //
  // --------------------------------- > Icon Value <
  BTNICON.setAttribute("icon", Icon);
  // --------------------------------- > Icon Value <
  //
  // ----------------------------------------- > AC <
  if (HaveIcon) {
    BTN.appendChild(BTNICON);
  }
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Icon <<
  //
  // ---------------------------------------------- >> Return <<
  return {
    widget: BTN,
    Icon: BTNICON,
    Text: BTNTEXT,
  };
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
