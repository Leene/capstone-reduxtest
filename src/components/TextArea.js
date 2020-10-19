import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
//import CreateScore from "./CreateScore";

import { bugAdded, bugResolved } from '../actions'
import store from '../store' 

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

    store.dispatch(bugAdded("Bug 1"))
    console.log ("Store changed!", store.getState());

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
