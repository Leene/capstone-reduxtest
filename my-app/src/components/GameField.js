import React from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
//import CreateOrder from "./CreateOrder";
import TextArea from "./TextArea";
import { COLORS } from '../constants';

import { clickedKey, getTypedText, typedText } from "./Keyboard";

//export default function GameField(inputText, setInputText, hint) {
  export default function GameField() {

  //let order = CreateOrder();

  const newText = exercises[2/* order[0] */].result.split("\n").map((item, i) => {
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
        {/* {TextArea(getTypedText(), inputText, setInputText, hint)} */}
       <div>{ TextArea()}</div>
      </Box>
    </Boxarea>
  );
}

const Boxarea = styled.div`
  height: auto;
  width: auto;
  margin-top: 20vh;
`;

const Box = styled.div`
  background-color: rgba(${COLORS.light}, 0.3);
  width: 80vw;
  margin: 0 0 20px 0;
  border-radius: 1rem;
  box-shadow: 2px 2px 5px 6px ${COLORS.shadow};
  padding: 10px;
`;

const Textbox = styled.div`
  background-color: rgba(${COLORS.violet}, 0.6);
  margin: 0px 0px;
  color: rgb(${COLORS.boxtext});
  padding: 10px 3px;
`;
