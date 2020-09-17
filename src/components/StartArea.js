import React from "react"
import EmmetButton from "./EmmetListButton"
import styled from "styled-components/macro"

const logo = "https://img.icons8.com/windows/128/453267/ant.png"

export default function Startarea() {
    return (
        <StartareaMain>
            <FirstHeadline>Emmet Typing Game</FirstHeadline>
            <div className="logo__startarea">
                <img alt="" src={logo} />
            </div>
            {EmmetButton("Emmetbefehle")}
        </StartareaMain>
    )
}

const FirstHeadline = styled.h1`
    font-size: 1em;
    color: white;
`

const StartareaMain = styled.div`
    text-align: center;
    width: 80%;
    margin: 30% auto;
`
