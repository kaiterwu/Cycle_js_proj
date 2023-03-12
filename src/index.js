import Example from "./scripts/example";
import getCurrentData from "./scripts/data"
import {drawSun}  from "./scripts/sunmoves";
import { drawSeasons } from "./scripts/seasons";
import { drawMoon } from "./scripts/moonPhase";



document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    drawSun()
    drawSeasons()
    drawMoon()
    
    
    
    //silence this code before running webpack before changes to prevent extra queries 

    // getCurrentData()

    

});

