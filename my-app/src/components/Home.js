import React from 'react'
import styled from "styled-components"
import { COLORS } from '../constants';

export default function Home(){
    return (
    <Main>
        <h1>Emmet Typing Game</h1>
        <Text>Ein Spiel zum Erlernen von Emmet-Befehlen.</Text>
        <URLBtn
                href="https://docs.emmet.io/cheat-sheet/"
                target="_blank"
                rel="noopener noreferrer">Emmet-Befehle
       </URLBtn>
       <Text><small>(zur offiziellen Dokumentation der Emmet-Befehle)</small></Text>
    </Main>
    )
}

const Main = styled.section`
  text-align: center;
`

const URLBtn = styled.a`
box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
border-radius:3px;
padding: 10px;
background-color: ${COLORS.secondary};
color: ${COLORS.lightText};
text-decoration:none;
`


const Text = styled.p`
font-size:1em;
margin-bottom: 10em;
`