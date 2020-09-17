import React from "react"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
} from "react-router-dom"

import styled from "styled-components/macro"
import GameArea from "./components/GameArea"
import StartArea from "./components/StartArea"

const home_icon = "https://img.icons8.com/material-rounded/24/ffffff/home.png"
const start_icon =
    "https://img.icons8.com/ios-filled/24/ffffff/circled-play.png"

export default function App() {
    return (
        <Main>
            <Router>
                <NavigationStyled>
                    <NavItemHome>
                        <LinkStyled to="/">
                            <img alt="" src={home_icon} />
                        </LinkStyled>
                    </NavItemHome>
                    <NavItemMiddle></NavItemMiddle>

                    <NavItemPlay>
                        <LinkStyled2 to="/gamearea">
                            <img alt="" src={start_icon} />
                        </LinkStyled2>
                    </NavItemPlay>
                </NavigationStyled>

                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/gamearea" component={gamearea} />
                </Switch>
            </Router>
        </Main>
    )
}

const home = () => StartArea()

const gamearea = () => GameArea()

const Main = styled.main`
    background: linear-gradient(
        0deg,
        rgba(75, 192, 215, 1) 9%,
        rgba(92, 45, 253, 1) 100%
    );
    height: 100vh;
    width: 100vw;
    font-size: calc(10px + 2vmin);
    color: #555;
`

const LinkStyled2 = styled(NavLink)`
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 120%;
    border-radius: 0 0 0 100px;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 0px 4px 3px rgba(32, 13, 94, 0.2);

    &.active {
        background: purple;
    }
`
const LinkStyled = styled(NavLink)`
    flex-grow: 1;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: gray;
    height: 120%;
    border-radius: 0 0 100px 0;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0px 0px 4px 3px rgba(32, 13, 94, 0.2);

    &:active {
        background: purple;
    }
`

const NavigationStyled = styled.nav`
    display: grid;
    grid-template-areas: "home middle play";
    grid-template-rows: 40px;
    grid-template-columns: 1fr 4fr 1fr;
    text-align: center;
`
//     display: grid;
//     grid-auto-flow: column;
//     gap: 1px;

const NavItemHome = styled.div`
    grid-area: home;

    & img {
        margin: -5px 0 0 -10px;
    }
`

const NavItemMiddle = styled.div`
    grid-area: title;
`

const NavItemPlay = styled.div`
    grid-area: play;

    & img {
        margin: -5px -10px 0 0;
    }
`
