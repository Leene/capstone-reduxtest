import React from 'react'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'

import './App.css'

import GameArea from './components/GameArea'
import Home from './components/Home'
import Details from './components/Details'


export default function App() {
  return (

    <Main> 

        <Header>
          <Link to ="/"><NavButton>Home</NavButton></Link>
          <Link to ="/gamearea"><NavButton>Start</NavButton></Link>
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
        rgba(205, 151, 151, 1) 100%
    );
    height: 100vh;
    
    font-size: calc(10px + 2vmin);
    color: #555;  
`

const Header = styled.header`

  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
`
const Button = styled.button`
  text-align: center;
`;
const NavButton = styled.button`

background-color: pink;
height: 2rem;
width:5rem;
color: #fff;
border:none;
border-radius: 0 0 100px 100px;
box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
`