import React from "react"

export default function EmmetListButton(buttonName) {
    return (
        <div className="button">
            <a
                href="https://docs.emmet.io/cheat-sheet/"
                target="_blank"
                rel="noopener noreferrer"
            >
                {buttonName}
            </a>
        </div>
    )
}
