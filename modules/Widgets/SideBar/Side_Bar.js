// ============================================================== >> Imports <<
//
// ---------------------------------------------------- >> BTN <<
import { BTN } from "./../BTN/BTN.js";
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
// CB => { Call Back }
//
// L => { Lsitener }
//
// AC => { Append Child }
//
// RC => { Remove Child }
//
// ========================================================== >> Definitions <<
//
// =============================================================== >> Widget <<
export function Sidebar(
  Logo,
  OptionIcons,
  OptionTexts,
  OptionListeners,
  UserInfo,
  ExitListener
) {
  //
  // --------------------------------------------------- >> div <<
  const Sidebar = document.createElement("div");
  Sidebar.classList.add("Sidebar");
  // --------------------------------------------------- >> div <<
  //
  // -------------------------------------------------- >> Logo <<
  const SidebarLogo = document.createElement("div");
  SidebarLogo.classList.add("SidebarLogo");
  //
  // ------------------------------------------- > AC <
  Sidebar.appendChild(SidebarLogo);
  // ------------------------------------------- > AC <
  //
  // ------------------------------------------ > img <
  const SiderbarLogoImage = document.createElement("img");
  SiderbarLogoImage.classList.add("SiderbarLogoImage");
  //
  // ----------------------------------- src >>
  SiderbarLogoImage.src = Logo;
  // ----------------------------------- src <<
  //
  // ------------------------------------ AC >>
  SidebarLogo.appendChild(SiderbarLogoImage);
  // ------------------------------------ AC <<
  //
  // ------------------------------------------ > img <
  //
  // -------------------------------------------------- >> Logo <<
  //
  // ----------------------------------------------- >> Divider <<
  const SidebarDivider1 = document.createElement("div");
  SidebarDivider1.classList.add("SidebarDivider");
  //
  // ---------------------------------------- > AC <
  Sidebar.appendChild(SidebarDivider1);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // ----------------------------------------------- >> Options <<
  for (let index = 0; index < OptionIcons.length; index++) {
    //
    // -------------------------------------- > CB <
    const SidebarOption = SidebarOptionWidget(
      () => {
        OptionListeners(index, SidebarOption);
      },
      OptionIcons[index],
      OptionTexts[index]
    );
    // -------------------------------------- > CB <
    //
    // -------------------------------------- > AC <
    Sidebar.appendChild(SidebarOption);
    // -------------------------------------- > AC <
    //
  }
  // ----------------------------------------------- >> Options <<
  //
  // ----------------------------------------------- >> Divider <<
  const SidebarDivider2 = document.createElement("div");
  SidebarDivider2.classList.add("SidebarDivider");
  //
  // ---------------------------------------- > AC <
  Sidebar.appendChild(SidebarDivider2);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // -------------------------------------------------- >> User <<
  const SidebarUserInfo = document.createElement("div");
  SidebarUserInfo.classList.add("SidebarUserInfo");
  //
  // ------------------------------------------- > AC <
  Sidebar.appendChild(SidebarUserInfo);
  // ------------------------------------------- > AC <
  //
  // --------------------------------------- > Avatar <
  const SidebarUserAvatar = document.createElement("img");
  SidebarUserAvatar.classList.add("SidebarUserAvatar");
  //
  // -------------------------------- src >>
  SidebarUserAvatar.src = UserInfo.avatar;
  // -------------------------------- src <<
  //
  // --------------------------------- AC >>
  if (UserInfo.avatar !== "") {
    SidebarUserInfo.appendChild(SidebarUserAvatar);
  }
  // --------------------------------- AC <<
  //
  // --------------------------------------- > Avatar <
  //
  // ----------------------------------------- > Icon <
  const SidebarUserAvatarIcon = document.createElement("iconify-icon");
  SidebarUserAvatarIcon.classList.add("SidebarUserAvatarIcon");
  //
  // -------------------------------- value >>
  SidebarUserAvatarIcon.setAttribute("icon", "fluent-color:person-28");
  // -------------------------------- value <<
  //
  // ----------------------------------- AC >>
  if (UserInfo.avatar == "") {
    SidebarUserInfo.appendChild(SidebarUserAvatarIcon);
  }
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > Icon <
  //
  // ----------------------------------------- > Name <
  const SidebarUserName = document.createElement("span");
  SidebarUserName.classList.add("SidebarUserName");
  //
  // -------------------------------- Value >>
  SidebarUserName.textContent = UserInfo.name;
  // -------------------------------- Value <<
  //
  // ----------------------------------- AC >>
  SidebarUserInfo.appendChild(SidebarUserName);
  // ----------------------------------- AC <<
  //
  // ----------------------------------------- > Name <
  //
  // -------------------------------------------------- >> User <<
  //
  // ----------------------------------------------- >> Divider <<
  const SidebarDivider3 = document.createElement("div");
  SidebarDivider3.classList.add("SidebarDivider");
  //
  // ---------------------------------------- > AC <
  Sidebar.appendChild(SidebarDivider3);
  // ---------------------------------------- > AC <
  //
  // ----------------------------------------------- >> Divider <<
  //
  // -------------------------------------------------- >> Exit <<
  //
  // -------------------------------------------- > V <
  const ExitIcon = "ri:door-open-fill";
  const ExitText = "Exit";
  // -------------------------------------------- > V <
  //
  // ------------------------------------------- > CB <
  const ExitBTN = SidebarOptionWidget(exitListener, ExitIcon, ExitText);
  // ------------------------------------------- > CB <
  //
  // -------------------------------------------- > L <
  function exitListener() {
    ExitListener();
  }
  // -------------------------------------------- > L <
  //
  // ------------------------------------------- > AC <
  Sidebar.appendChild(ExitBTN);
  // ------------------------------------------- > AC <
  //
  // -------------------------------------------------- >> Exit <<
  //
  // ------------------------------------------------ >> return <<
  return Sidebar;
  // ------------------------------------------------ >> return <<
  //
}
// =============================================================== >> Widget <<
//
// ====================================================== >> Siderbar Option <<
function SidebarOptionWidget(Listener, Icon, Text) {
  //
  // ------------------------------------------ >> div <<
  const SidebarOption = document.createElement("div");
  SidebarOption.classList.add("SidebarOption");
  // ------------------------------------------ >> div <<
  //
  // -------------------------------------------- >> L <<
  SidebarOption.addEventListener("click", () => {
    Listener();
  });
  // -------------------------------------------- >> L <<
  //
  // ----------------------------------------- >> Text <<
  const SidebarOptionText = document.createElement("span");
  //
  // --------------------------------- > src <
  SidebarOptionText.textContent = Text;
  // --------------------------------- > src <
  //
  // ---------------------------------- > AC <
  SidebarOption.appendChild(SidebarOptionText);
  // ---------------------------------- > AC <
  //
  // ----------------------------------------- >> Text <<
  //
  // ----------------------------------------- >> Icon <<
  const SidebarOptionIcon = document.createElement("iconify-icon");
  //
  // ------------------------------- > value <
  SidebarOptionIcon.setAttribute("icon", Icon);
  // ------------------------------- > value <
  //
  // ---------------------------------- > AC <
  SidebarOption.appendChild(SidebarOptionIcon);
  // ---------------------------------- > AC <
  //
  // ----------------------------------------- >> Icon <<
  //
  // --------------------------------------- >> Marker <<
  const SiderbarOptionMarker = document.createElement("div");
  SiderbarOptionMarker.classList.add("SiderbarOptionMarker");
  //
  // -------------------------------- > AC <
  SidebarOption.appendChild(SiderbarOptionMarker);
  // -------------------------------- > AC <
  //
  // --------------------------------------- >> Marker <<
  //
  // --------------------------------------- >> return <<
  return SidebarOption;
  // --------------------------------------- >> return <<
  //
}
// ====================================================== >> Siderbar Option <<
//
// ============================================================= >> Operator <<
export function Operator(listener) {
  //
  // ------------------------------------------------- >> div <<
  const SidebarOperator = document.createElement("div");
  SidebarOperator.classList.add("SidebarOperator");
  // ------------------------------------------------- >> div <<
  //
  // --------------------------------------------------- >> L <<
  SidebarOperator.addEventListener("click", () => {
    //
    // ------------------------------------------ > SM <
    //
    // ----------------------------------- div >>
    SidebarOperator.classList.toggle("active");
    // ----------------------------------- div <<
    //
    // ---------------------------------- Text >>
    SidebarOperatorText.classList.toggle("show");
    // ---------------------------------- Text <<
    //
    // ---------------------------------- Icon >>
    SidebarOperatorIcon.classList.toggle("change");
    SidebarOperatorIconLine1.classList.toggle("change");
    SidebarOperatorIconLine2.classList.toggle("change");
    SidebarOperatorIconLine3.classList.toggle("change");
    // ---------------------------------- Icon <<
    //
    // ------------------------------------------ > SM <
    //
    // ------------------------------------------ > CB <
    listener();
    // ------------------------------------------ > CB <
    //
  });
  // --------------------------------------------------- >> L <<
  //
  // ------------------------------------------------ >> Text <<
  const SidebarOperatorText = document.createElement("span");
  SidebarOperatorText.classList.add("SidebarOperatorText");
  //
  // -------------------------------------- > Value <
  SidebarOperatorText.textContent = "Close";
  // -------------------------------------- > Value <
  //
  // ----------------------------------------- > AC <
  SidebarOperator.appendChild(SidebarOperatorText);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------------------ >> Text <<
  //
  // ------------------------------------------------ >> Icon <<
  const SidebarOperatorIcon = document.createElement("div");
  SidebarOperatorIcon.classList.add("SidebarOperatorIcon");
  //
  // ----------------------------------------- > AC <
  SidebarOperator.appendChild(SidebarOperatorIcon);
  // ----------------------------------------- > AC <
  //
  // ------------------------------------- > Line 1 <
  const SidebarOperatorIconLine1 = document.createElement("div");
  SidebarOperatorIconLine1.classList.add("SidebarOperatorIconLine1");
  //
  // ------------------------------- AC >>
  SidebarOperatorIcon.appendChild(SidebarOperatorIconLine1);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Line 1 <
  //
  // ------------------------------------- > Line 2 <
  const SidebarOperatorIconLine2 = document.createElement("div");
  SidebarOperatorIconLine2.classList.add("SidebarOperatorIconLine2");
  //
  // ------------------------------- AC >>
  SidebarOperatorIcon.appendChild(SidebarOperatorIconLine2);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Line 2 <
  //
  // ------------------------------------- > Line 3 <
  const SidebarOperatorIconLine3 = document.createElement("div");
  SidebarOperatorIconLine3.classList.add("SidebarOperatorIconLine3");
  //
  // ------------------------------- AC >>
  SidebarOperatorIcon.appendChild(SidebarOperatorIconLine3);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > Line 3 <
  //
  // ------------------------------------------------ >> Icon <<
  //
  // ---------------------------------------------- >> return <<
  return SidebarOperator;
  // ---------------------------------------------- >> return <<
  //
}
// ============================================================= >> Operator <<
//
