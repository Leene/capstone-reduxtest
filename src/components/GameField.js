import React from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import TextArea from "./TextArea";
import { clickedKey, getTypedText, typedText } from "./Keyboard";

export default function GameField(inputText, setInputText, hint) {
  let order = CreateOrder();

  const newText = exercises[order[0]].result.split("\n").map((item, i) => {
    // return <p key={i}>{item}</p>;
    return (
      <span key={i}>
        {item}
        <br />
      </span>
    );
  });
  //console.log(typeof newText)

  return (
    <Boxarea>
      <Box>
        <Textbox>
          <code>{newText}</code>
        </Textbox>
        {TextArea(getTypedText(), inputText, setInputText, hint)}
      </Box>
    </Boxarea>
  );
}

const Boxarea = styled.div`
 // border: solid 1px pink;
  height: auto;
  width: auto;
  margin-top: 20vh;
`;

const Box = styled.div`
  background-color: rgba(255, 255, 255, 0.338);
  height: auto;
  width: 80vw;
  margin: 0 0 20px 0;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.1);
  padding: 10px;
`;

const Textbox = styled.div`
  background-color: rgba(27, 24, 87, 0.728);
  margin: 0px 0px;
  color: rgb(152, 236, 255);
  padding: 10px 3px;
`;
