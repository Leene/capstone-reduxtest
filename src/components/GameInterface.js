import React, { useState } from "react";
import styled from "styled-components";
import { exercises } from "../data/exercises.json";
import CreateOrder from "./CreateOrder";
import CreateScore from "./CreateScore";

const life = "https://img.icons8.com/material/20/ffffff/hearts--v1.png";
// const life = "https://img.icons8.com/material/20/800080/hearts--v1.png"

export default function GameInterface(hint, inputText, setInputText, score) {
  // let order = CreateOrder();
  // let hint = exercises[order[0]].emmet;
  console.log("HINT" + hint);
  const [showText, setShowText] = useState(false);

  //const hint = JSON.stringyfy(test)
  // style = "visibility: collapse;";
  return (
    <>
      <Score>
        <p>{score}</p>
      </Score>
      <Hint>
        <HintButton onClick={() => setShowText(!showText)}>HINT:</HintButton>
        <HintTextDiv>{showText && <HintText>{hint}</HintText>}</HintTextDiv>
      </Hint>
      <Life>
        <LifeIcon alt="" src={life} />
        <LifeIcon alt="" src={life} />
        <LifeIcon alt="" src={life} />
      </Life>
    </>
  );
}

const HintTextDiv = styled.div`
  width: 75%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0 20px 20px 0;
`;

const HintText = styled.p`
  margin: 0;
  padding: 0;
`;

const HintButton = styled.button`
  cursor: pointer;

  width: 25%;
  height: 100%;
  border: none;
  border-radius: 20px 0 0 20px;

  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  background-color: #566fad;

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

const Score = styled.div`
  grid-area: score;
  letter-spacing: 1px;
  font-size: 1.1em;
  color: white;
  font-weight: bold;
  min-width: 3em;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: black solid 1px;
`;
const Hint = styled.div`
  grid-area: middle;
  letter-spacing: 1px;
  font-size: 1.1em;
  color: white;
  font-weight: bold;
  min-width: 4em;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Life = styled.div`
  grid-area: life;
  color: white;
  font-weight: bold;
  min-width: 4em;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LifeIcon = styled.img`
  padding: 2px;
`;
