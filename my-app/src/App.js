import React from 'react'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'

import './App.css'
import { COLORS } from './constants';

import GameArea from './components/GameArea'
import Home from './components/Home'
import Details from './components/Details'
// import GlobalStyles from './components/GlobalStyles'

const home_icon = "https://img.icons8.com/material-rounded/24/ffffff/home.png"
const start_icon =
    "https://img.icons8.com/ios-filled/24/ffffff/circled-play.png"

export default function App() {
  return (

    <Main> 
        <Header>
         
            <LinkStyled to ="/"><NavButton><img alt="" src={home_icon} /></NavButton></LinkStyled>
            <Title>Emmet Typing Game</Title>

            <LinkStyled to ="/gamearea"><NavButton><img alt="" src={start_icon} /></NavButton></LinkStyled>
          </Header>
        
        <Router>
          
          <Home path= "/"></Home>
          <GameArea path= "/gamearea/"></GameArea>
          <Details path= "/details/"></Details>
           {/* <GameArea path= "/gamearea/:id"></GameArea> */}
        </Router>
    </Main>
  );
}


 const Main = styled.main`
 
    background: linear-gradient(
        0deg,
        rgba(162, 203, 199, 1) 9%,
        rgba(205, 151, 151, 1) 100% /* rosa*/
    );
    height: 100vh;
    font-size: calc(10px + 2vmin);
    color: #555;  

`


const Header = styled.header`
  display: flex;
justify-content: space-between;

`

// "display: flex;" bei Link verhindert das Verrutschen der NavButtons beim Ändern der Fenstergröße:
const LinkStyled = styled(Link)`
  display: flex; 
`

const Title = styled.h1`

  height: 5rem;
  text-align: center;
  margin-top:2px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.3)
 
`

const Button = styled.button`
  text-align: left;
 
`
const NavButton = styled.button`
background-color: ${COLORS.primary};
height: 3em;
border:none;
border-radius: 0 0 100px 100px;
box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
`