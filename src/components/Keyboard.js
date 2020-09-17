import React, { useState } from "react";
import "../css/Style.css";
import { signs } from "../data/keyboard_symbols.json";
import { exercises } from "../data/exercises.json";
import styled from "styled-components";

export default function Keyboard(inputText, setInputText, order) {
  //const [counter, setCounter] = useState("0");

  function renderLeftKeys() {
    const leftSide = signs.slice(0, 12);

    return leftSide.map((key) => (
      <KeysSideDiv onClick={() => handleClick(key.symbol)} key={key.symbol}>
        {key.symbol}
      </KeysSideDiv>
    ));
  }
  function renderRightKeys() {
    const rightSide = signs.slice(12, 24);
    console.log("rightSide: " + rightSide);
    return rightSide.map((key) => (
      // <KeysSideDiv onClick={() => clickedKey(key.symbol)} key={key.symbol}>
      <KeysSideDiv onClick={() => handleClick(key.symbol)} key={key.symbol}>
        {key.symbol}
      </KeysSideDiv>
    ));
  }

  //let btnTextArray = exercises[order[0]].btntext;
  let btnTextArray = exercises[4].btntext;
  console.log("btnTextArray" + btnTextArray);
  //const [middleBtnText, setMiddleBtnText] = useState(false);

  function renderMiddleKeys() {
    console.log("exercises: " + exercises[4].btntext);

    const middleSide = exercises[order[0]].btntext;
    console.log("middleSide: " + middleSide);

    return middleSide.map((key) => (
      <KeysMiddleDiv onClick={() => handleClick(key)} key={key}>
        {key}
      </KeysMiddleDiv>
    ));
  }

  const handleClick = (symbol) => {
    if (inputText === "Welcher Emmet-Befehl passt?") {
      setInputText(" ");
      setInputText(symbol);
    } else if (inputText === "Deine neue Eingabe ...") {
      setInputText(" ");
      setInputText(symbol);
    } else {
      setInputText(inputText + symbol);
    }
    console.log("clicked");
  };
  return (
    <>
      <KeysSide>{renderLeftKeys()}</KeysSide>
      <KeysMiddle>{renderMiddleKeys()}</KeysMiddle>
      <KeysSide>{renderRightKeys()}</KeysSide>
    </>
  );
}
export const typedText = [];
export function clickedKey(symbol) {
  // e.preventDefault()
  typedText.push(symbol);
  console.log("symbol: " + symbol + "typedText: ");
  console.log(typedText);
  //symbol muss verglichen werden mit dem
  //was auf gamefield angezeigt wird

  // return typedText;

  //TextArea()
}

export function getTypedText() {
  console.log("getTypedText: " + typedText);
  return typedText;
}

const KeysSide = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35vw;
  height: 30vh;
  font-weight: bold;
  font-size: 1.5em;
  color: #566fad;
  text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
`;
const KeysSideDiv = styled.button`
  cursor: pointer;
  width: 33%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    color: #f2fcfd;
    background: linear-gradient(
      45deg,
      rgb(75, 192, 215) 100%,
      rgb(220, 236, 255) 10%
    );
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    // margin-top: -2em;
  }
`;

//  color: #f2fcfd;
const KeysMiddle = styled.div`
  width: 30%;
  overflow: scroll;
  overscroll-behavior: none;
`;

const KeysMiddleDiv = styled.button`
  height: 25%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    color: #f2fcfd;
    background: linear-gradient(
      45deg,
      rgb(75, 192, 215) 100%,
      rgb(220, 236, 255) 10%
    );
    box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
  }
`;
