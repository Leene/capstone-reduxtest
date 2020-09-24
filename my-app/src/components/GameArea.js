import React from 'react'
import styled from "styled-components"
import Store_text from "./Store_text"
import Button from "./Button"


export default function GameArea(){
    return (<Gamearea>
        <h2>GameArea</h2>
        {Store_text()}
        {Button()}
 


    </Gamearea>
    )
}

const Gamearea = styled.div`
  text-align: center;
top: 0;  
`;
const Title = styled.h1`
  height: 5rem;
  text-align: center;
  margin-top:-30px;
  font-size: 20px;
  
`;