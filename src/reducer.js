import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from './actionTypes'

import { exercises } from "./data/exercises.json"
import CreateOrder from "./components/CreateOrder"
//oder bei sehr vielen ActionTypes:
// import * as actions from './actionTypes'

let lastId = 0

export default function reducer (state =[], action) { // =[] leeres Array dient als initial State damit der store anfangs nicht undefiend ist 
    
    let order = CreateOrder();
    let hint = exercises[order[0]].emmet;
  //console.log("order:" + order)

    if (action.type === BUG_ADDED)
    return [
        ...state,
        {
            score: 111,
            life: 2,
            description: action.payload.description,
            input: action.payload.input,
            rightAnswer: hint 
            
            //id: ++lastId,
            
           // resolved:false 
        }
    ];
 else if (action.type === BUG_REMOVED)
    return state.filter(bug => bug.id !==action.payload.id)

else if (action.type === BUG_RESOLVED)
    return state.map(bug => 
        bug.id !==action.payload.id ? bug : {...bug, resolved: true}) // alle bug außer der mit gegebener Id 

    return state // aktueller State falls filtern nicht klappt, ohne diese Zeile würde app bei filterproblem haken

}