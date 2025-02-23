// ================================================================ >> Error <<
export function RequestResult(URL, TextValue) {
  //
  // ---------------------------------------------------- >> div <<
  const RequestResult = document.createElement("div");
  RequestResult.classList.add("RequestResult");
  // ---------------------------------------------------- >> div <<
  //
  // ---------------------------------------------------- >> SVG <<
  const RequestResultSVG = document.createElement("img");
  RequestResultSVG.classList.add("RequestResultSVG");
  //
  // -------------------------------------------- > src <
  RequestResultSVG.src = URL;
  // -------------------------------------------- > src <
  //
  // --------------------------------------------- > AC <
  RequestResult.appendChild(RequestResultSVG);
  // --------------------------------------------- > AC <
  //
  // ---------------------------------------------------- >> SVG <<
  //
  // --------------------------------------------------- >> span <<
  const RequestResultText = document.createElement("span");
  RequestResultText.classList.add("RequestResultText");
  //
  // ----------------------------------------- > value <
  RequestResultText.textContent = TextValue;
  // ----------------------------------------- > value <
  //
  // -------------------------------------------- > AC <
  RequestResult.appendChild(RequestResultText);
  // -------------------------------------------- > AC <
  //
  // --------------------------------------------------- >> span <<
  //
  // ------------------------------------------------- >> return <<
  return RequestResult;
  // ------------------------------------------------- >> return <<
  //
}
// ================================================================ >> Error <<
