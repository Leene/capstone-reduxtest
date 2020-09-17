import React from "react";


export default function Button(buttonName) {
  //, linkedTo) {


//<button onclick="window.location.href = '+ ... + ';">Hier klicken</button>

  return (

      <div className="button" >
        <a href="https://docs.emmet.io/cheat-sheet/" target="_blank">{buttonName}</a>
      </div>

  )
}
