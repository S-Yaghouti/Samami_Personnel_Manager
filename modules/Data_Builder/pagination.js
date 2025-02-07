// ======================================================================= >> Imports <<
//
// ------------------------------------------------------------- >> BTN <<
import { BTN } from "../Widgets/BTN/BTN.js";
// ------------------------------------------------------------- >> BTN <<
//
// ======================================================================= >> Imports <<
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
  // ------------------------------------------------------- >> Flex <<
  const FirstPaginationFlex = document.createElement("div");
  FirstPaginationFlex.classList.add("PaginationFlex");
  //
  PaginationContiner.appendChild(FirstPaginationFlex);
  //
  // ------------------------------------------------------- >> Flex <<
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // ------------------------------------------------ > V <
  const FirstPageBTNId = "PaginationBtn";
  const FirstPageBtnText = "First";
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
  FirstPageBTN.widget.style.flexDirection = "row-reverse";
  // ----------------------------------------------- > CB <
  //
  // ----------------------------------------------- > AP <
  FirstPaginationFlex.appendChild(FirstPageBTN.widget);
  // ----------------------------------------------- > AP <
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // -------------------------------------------------------- >> P B << ( Previous Page )
  //
  // -------------------------------------------------- > V <
  const PreviousPageBTNId = "PaginationBtn";
  const PreviousPageBtnText = "Prev";
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
  PreviousPageBTN.widget.style.flexDirection = "row-reverse";
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  FirstPaginationFlex.appendChild(PreviousPageBTN.widget);
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
    PageNumberText.textContent = pageNum;
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
  // ------------------------------------------------------- >> Flex <<
  const SecondPaginationFlex = document.createElement("div");
  SecondPaginationFlex.classList.add("PaginationFlex");
  //
  PaginationContiner.appendChild(SecondPaginationFlex);
  //
  // ------------------------------------------------------- >> Flex <<
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // -------------------------------------------------- > V <
  const NextPageBTNId = "PaginationBtn";
  const NextPageBtnText = "Next";
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
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  SecondPaginationFlex.appendChild(NextPageBTN.widget);
  // ------------------------------------------------- > AP <
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // -------------------------------------------------- > V <
  const LastPageBTNId = "PaginationBtn";
  const LastPageBtnText = "Last";
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
  // ------------------------------------------------- > CB <
  //
  // ------------------------------------------------- > AP <
  SecondPaginationFlex.appendChild(LastPageBTN.widget);
  // ------------------------------------------------- > AP <
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // ----------------------------------------------------- >> retrun <<
  return PaginationContiner;
  // ----------------------------------------------------- >> retrun <<
}
// ==================================================================== >> Pagination <<
