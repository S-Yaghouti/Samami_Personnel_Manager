// ======================================================================= >> Imports <<
//
// ------------------------------------------------------- >> Convertor <<
import { EnToFa } from "../Perisian_Convertor/perisan_convertor.js";
// ------------------------------------------------------- >> Convertor <<
//
// ------------------------------------------------------------- >> BTN <<
import { BTN } from "../BTN/BTN.js";
// ------------------------------------------------------------- >> BTN <<
//
// ======================================================================= >> Imports <<
//
// ================================================================== >> Btn Function <<
function Btn(ID, Text, Icon, Listener) {
  //
  // -------------------------------------------- >> Btn Container <<
  const PaginationBtn = document.createElement("div");
  PaginationBtn.classList.add("PaginationBtn");
  PaginationBtn.id = ID;
  // -------------------------------------------- >> Btn Container <<
  //
  // ------------------------------------------------------- >> EL <<
  PaginationBtn.addEventListener("click", () => {
    Listener();
  });
  // ------------------------------------------------------- >> EL <<
  //
  // ------------------------------------------------- >> Btn Text <<
  const PaginationBtnText = document.createElement("span");
  PaginationBtnText.classList.add("PaginationBtnText");
  PaginationBtnText.textContent = Text;
  // ------------------------------------------------- >> Btn Text <<
  //
  // ------------------------------------------------- >> Btn Icon <<
  const PaginationBtnIcon = document.createElement("iconify-icon");
  PaginationBtnIcon.classList.add("PaginationBtnIcon");
  //
  // ---------------------------------- > Icon Value <
  PaginationBtnIcon.setAttribute("icon", `${Icon}`);
  // ---------------------------------- > Icon Value <
  //
  // ------------------------------------------------- >> Btn Icon <<
  //
  // ------------------------------------------------------- >> AP <<
  PaginationBtn.appendChild(PaginationBtnText);
  //
  PaginationBtn.appendChild(PaginationBtnIcon);
  // ------------------------------------------------------- >> AP <<
  //
  // --------------------------------------------------- >> Return <<
  return PaginationBtn;
  // --------------------------------------------------- >> Return <<
}
// ================================================================== >> Btn Function <<
//
// ==================================================================== >> Pagination <<
export function paginationModule(
  FirstPageListener,
  PreviousPageListner,
  NextPageListner,
  LastPageListner,
  OnPageClick,
  TotalPage,
  PageNumber = 1
) {
  // --------------------------------------------------------- >> PC << ( Pagination Container )
  const PaginationContiner = document.createElement("div");
  PaginationContiner.classList.add("PaginationContiner");
  // --------------------------------------------------------- >> PC << ( Pagination Container )
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // ------------------------------------------------ > V <
  const FirstPageBTNId = "PaginationBtn";
  const FirstPageBtnText = "اولین";
  const FirstPageBtnIcon = "icon-park-outline:double-left";
  // ------------------------------------------------ > V <
  //
  // ----------------------------------------------- > CB <
  const FirstPageBTN = BTN(
    FirstPageBTNId,
    true,
    FirstPageBtnText,
    true,
    FirstPageBtnIcon,
    true,
    FirstPageListener
  );
  // ----------------------------------------------- > CB <
  //
  // ----------------------------------------------- > AP <
  PaginationContiner.appendChild(FirstPageBTN.widget);
  // ----------------------------------------------- > AP <
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // -------------------------------------------------------- >> P B << ( Previous Page )
  //
  // -------------------------------------------------- > V <
  const PreviousPageBTNId = "PaginationBtn";
  const PreviousPageBtnText = "قبلی";
  const PreviousPageBtnIcon = "icon-park-outline:left";
  // -------------------------------------------------- > V <
  //
  // ------------------------------------------------- > CB <
  const PreviousPageBTN = BTN(
    PreviousPageBTNId,
    true,
    PreviousPageBtnText,
    true,
    PreviousPageBtnIcon,
    true,
    PreviousPageListner
  );
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  PaginationContiner.appendChild(PreviousPageBTN.widget);
  // ------------------------------------------------- > AP <
  //
  // -------------------------------------------------------- >> P B << ( Previous Page )
  //
  // ------------------------------------------------------ >> P N C << ( Pages Number Container )
  //
  // --------------------------------- > Create Container <
  const PagesNumberContainer = document.createElement("div");
  PagesNumberContainer.classList.add("PagesNumberContainer");
  // --------------------------------- > Create Container <
  //
  // ------------------------------------------ > Builder <
  for (let pageNum = PageNumber; pageNum <= TotalPage; pageNum++) {
    //
    // --------------- Page Number Container >>
    const PageNumberContiner = document.createElement("div");
    PageNumberContiner.classList.add("PageNumberContainer");
    // --------------- Page Number Container <<
    //
    // -------------------- Page Number Text >>
    const PageNumberText = document.createElement("span");
    PageNumberText.classList.add("PageNumberText");
    //
    // -- Fill With Value >
    PageNumberText.textContent = EnToFa(`${pageNum}`);
    // -- Fill With Value <
    //
    // -------------------- Page Number Text <<
    //
    // ---------------------------- listener >>
    PageNumberContiner.addEventListener("click", () => {
      OnPageClick(pageNum, PageNumberContiner);
    });
    // ---------------------------- listener <<
    //
    // ------------------------ Append Child >>
    PageNumberContiner.appendChild(PageNumberText);
    PagesNumberContainer.appendChild(PageNumberContiner);
    // ------------------------ Append Child <<
  }
  // ------------------------------------------ > Builder <
  //
  // ------------------------------------- > Append Child <
  PaginationContiner.appendChild(PagesNumberContainer);
  // ------------------------------------- > Append Child <
  //
  // ------------------------------------------------------ >> P N C << ( Pages Number Container )
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // -------------------------------------------------- > V <
  const NextPageBTNId = "PaginationBtn";
  const NextPageBtnText = "بعدی";
  const NextPageBtnIcon = "icon-park-outline:right";
  // -------------------------------------------------- > V <
  //
  // ------------------------------------------------- > CB <
  const NextPageBTN = BTN(
    NextPageBTNId,
    true,
    NextPageBtnText,
    true,
    NextPageBtnIcon,
    true,
    NextPageListner
  );
  NextPageBTN.widget.style.flexDirection = "row-reverse";
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  PaginationContiner.appendChild(NextPageBTN.widget);
  // ------------------------------------------------- > AP <
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // -------------------------------------------------- > V <
  const LastPageBTNId = "PaginationBtn";
  const LastPageBtnText = "آخرین";
  const LastPageBtnIcon = "icon-park-outline:double-right";
  // -------------------------------------------------- > V <
  //
  // ------------------------------------------------- > CB <
  const LastPageBTN = BTN(
    LastPageBTNId,
    true,
    LastPageBtnText,
    true,
    LastPageBtnIcon,
    true,
    LastPageListner
  );
  LastPageBTN.widget.style.flexDirection = "row-reverse";
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  PaginationContiner.appendChild(LastPageBTN.widget);
  // ------------------------------------------------- > AP <
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // ----------------------------------------------------- >> retrun <<
  return PaginationContiner;
  // ----------------------------------------------------- >> retrun <<
}
// ==================================================================== >> Pagination <<
