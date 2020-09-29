import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
//import CreateScore from "./CreateScore";

import { clickedKey, getTypedText, typedText } from "./Keyboard";

let noteText = getTypedText();
//export default function TextArea(noteText, inputText, setInputText, hint) {
export default function TextArea() {
  const noteText="";
  const inputText="";
  const setInputText="";
  const hint="";

  const btnDeleteText = "X";
  const btnInputText = "OK";
  const btnText2 = "$";

  const handleClick = () => {
    //CreateScore(inputText, hint);

    // const handleClick = () => {
    //   if (inputText === "Welcher Emmet-Befehl passt?") {
    //     setInputText(" ");
    //     setInputText(btnInputText);
    //   } else if (inputText === "Deine neue Eingabe ...") {
    //     setInputText(" ");
    //     setInputText(btnInputText);
    //   } else {
    //     setInputText(inputText + btnInputText);
    //   }

    console.log("clicked");
  };

  const handleDeleteBtnClick = () => {
    setInputText("Deine neue Eingabe ...");
    console.log("Delete is clicked");
  };

  console.log("noteText: " + noteText);

  console.log("rendering...", inputText);

  return (
    <>
      <Textarea>{inputText}</Textarea>
      <button onClick={handleDeleteBtnClick}>{btnDeleteText}</button>
      <button onClick={handleClick}>{btnInputText}</button>
    </>
  );
}

const Textarea = styled.div`
  contenteditable: true;
  overflow-wrap: break-word;
  color: white;
  font-weight: bold;
  width: 100%;
  min-height: 2em;

  background-color: #393c8060;
  margin-top: 5px;
  // resize: none;
`;
