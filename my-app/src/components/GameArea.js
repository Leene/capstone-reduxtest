import React from 'react'
import styled from "styled-components"
import Store_text from "./Store_text"
import Button from "./Button"


export default function GameArea(){
    return (<Gamearea>
        <Title>Emmet Typing Game</Title>
        <h2>GameArea</h2>
        {Store_text()}
        {Button()}
 


    </Gamearea>
    )
}




const Gamearea = styled.div`
  text-align: center;
  
`;
const Title = styled.h1`

  height: 5rem;
  text-align: center;
  margin-top:-30px;
  border: 1px solid #000;
  font-size: 20px;
  
`;