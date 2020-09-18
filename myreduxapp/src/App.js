import React from 'react'
import styled from "styled-components"
import './App.css'

import Graphic from "./components/Graphic"

import { Link, Router  } from "@reach/router";



export default function App() {
  return (

   
    <Main>
 <Header>
 
   {/* <NavButton to="/">Home</NavButton>{" "} */}
  <NavButton to="start">Start</NavButton>
  <Router>
      {/* <Home path="/" /> */}
      <Start path="/start" />
    </Router>
       
      
  </Header>

  

    
 
    </Main>
  );
}

  
const Start = () => Graphic()



const Main = styled.main`
    background: linear-gradient(
        0deg,
        rgba(162, 203, 199, 1) 9%,
        rgba(205, 151, 151, 1) 100%
    );
    font-size: calc(10px + 2vmin);
    color: var(--color-h1);
`

const NavButton = styled(Link)`
background: var(--color-secondary);
color: var(--color-surface);
border-radius: 0 0 100px 100px;
padding: 20px;
box-shadow: 0px 0px 4px 3px rgba(32, 13, 94, 0.2);
`



const Header = styled.header`
display: flex;
justify-content: space-between;
padding:  0 20px;

`