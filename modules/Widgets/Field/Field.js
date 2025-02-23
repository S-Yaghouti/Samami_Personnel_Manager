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
// =============================================================== >> Module <<
export function Field(
  ID,
  IsFullField,
  LabelIcon,
  LabelText,
  IsTextArea,
  FieldID,
  FieldIconValue,
  Placeholder,
  maxLength
) {
  // ---------------------------------------------- >> Widget <<
  const FieldContainer = document.createElement("div");
  FieldContainer.classList.add("FieldContainer");
  FieldContainer.id = ID;
  // ---------------------------------------------- >> Widget <<
  //
  // ---------------------------------------------- >> Header <<
  const FieldHeader = document.createElement("div");
  FieldHeader.classList.add("FieldHeader");
  //
  // --------------------------------------- > AC <
  if (IsFullField) {
    FieldContainer.appendChild(FieldHeader);
  }
  // --------------------------------------- > AC <
  //
  // ------------------------------------- > icon <
  const FieldHeaderIcon = document.createElement("iconify-icon");
  FieldHeaderIcon.classList.add("FieldHeaderIcon");
  //
  // ---------------------------- Value >>
  FieldHeaderIcon.setAttribute("icon", LabelIcon);
  // ---------------------------- Value <<
  //
  // ------------------------------- AC >>
  FieldHeader.appendChild(FieldHeaderIcon);
  // ------------------------------- AC <<
  //
  // ------------------------------------- > icon <
  //
  // ------------------------------------ > Label <
  const FieldLabel = document.createElement("label");
  FieldLabel.classList.add("FieldLabel");
  //
  // --------------------- TextContent >>
  if (IsTextArea == false) {
    FieldLabel.setAttribute("for", FieldID);
  }
  FieldLabel.textContent = LabelText;
  // --------------------- TextContent <<
  //
  // --------------------- appendChild >>
  FieldHeader.appendChild(FieldLabel);
  // --------------------- appendChild <<
  //
  // ------------------------------------ > Label <
  //
  // ---------------------------------------------- >> Header <<
  //
  // ----------------------------------------------- >> Field <<
  const Field = document.createElement("div");
  Field.classList.add("Field");

  // -------------------------------- > Field Icon <
  const FieldIcon = document.createElement("iconify-icon");
  FieldIcon.classList.add("FieldIcon");
  //
  // ------------------ icon Value >>
  FieldIcon.setAttribute("icon", FieldIconValue);
  // ------------------ icon Value <<
  //
  // -------------------------- AP >>
  if (IsTextArea == false) {
    Field.appendChild(FieldIcon);
  }
  // -------------------------- AP <<
  //
  // -------------------------------- > Field Icon <
  //
  // ---------------------------------- > Variable <
  let TextArea;
  //
  let FieldInput;
  // ---------------------------------- > Variable <
  //
  // ---------------------------------- > TextArea <
  //
  // --------------------- Condition >>
  if (IsTextArea == true) {
    //
    FieldIcon.classList.add("remove");
    //
    // --------------------- Element >>
    TextArea = document.createElement("textarea");
    TextArea.classList.add("TextArea");
    // --------------------- Element <<
    //
    // ------------------- Attribute >>
    TextArea.setAttribute("placeholder", Placeholder);
    TextArea.style.resize = "none";
    //
    if (IsFullField) {
      TextArea.setAttribute("id", FieldID);
      TextArea.setAttribute("name", LabelText);
    }
    // ------------------- Attribute <<
    //
    // -------------------------- AP >>
    Field.appendChild(TextArea);
    // -------------------------- AP <<
    //
  }
  // --------------------- Condition <<
  //
  // ---------------------------------- > TextArea <
  //
  // ------------------------------------- > Input <
  else {
    //
    FieldInput = document.createElement("input");
    FieldInput.classList.add("FieldInput");
    FieldInput.autocomplete = "off";
    FieldInput.id = FieldID;
    //
    // ------------------- setAttribute >>
    FieldInput.setAttribute("type", "text");
    FieldInput.setAttribute("placeholder", Placeholder);
    FieldInput.setAttribute("maxlength", maxLength);
    if (IsFullField) {
      FieldInput.setAttribute("id", FieldID);
      FieldInput.setAttribute("name", LabelText);
    }
    // ------------------- setAttribute <<
    //
    // ----------------------------- AP >>
    Field.appendChild(FieldInput);
    // ----------------------------- AP <<
    //
  }
  // ------------------------------------- > Input <
  //
  // ------------------------------- > appendChild <
  FieldContainer.appendChild(Field);
  // ------------------------------- > appendChild <
  //
  // ----------------------------------------------- >> Field <<
  //
  // ---------------------------------------------- >> Return <<
  //
  // ---------------------------- > Is Full Field <
  if (IsFullField) {
    //
    // -------------- TextArea >>
    if (TextArea) {
      return {
        widget: FieldContainer,
        labelIcon: FieldHeaderIcon,
        labelText: FieldLabel,
        field: Field,
        Input: TextArea,
      };
    }
    // -------------- TextArea <<
    //
    // ------------ Full Field >>
    else {
      return {
        widget: FieldContainer,
        labelIcon: FieldHeaderIcon,
        labelText: FieldLabel,
        field: Field,
        fieldIcon: FieldIcon,
        Input: FieldInput,
      };
    }
    // ------------ Full Field <<
    //
  }
  // ---------------------------- > Is Full Field <
  //
  // -------------------------- > ! Is Full Field <
  else {
    //
    // ------- Return TextArea >>
    if (TextArea) {
      return {
        widget: Field,
        Input: TextArea,
      };
    }
    // ------- Return TextArea <<
    //
    // ---------- Return Input >>
    else {
      return {
        widget: Field,
        fieldIcon: FieldIcon,
        Input: FieldInput,
      };
    }
    // ---------- Return Input <<
    //
  }
  // -------------------------- > ! Is Full Field <
  //
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
//
