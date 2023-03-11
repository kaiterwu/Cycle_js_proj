import Example from "./scripts/example";
import getCurrentData from "./scripts/data"
import {drawSun}  from "./scripts/sunmoves";
import { drawSeasons } from "./scripts/seasons";



document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    drawSun()
    drawSeasons()
    
    
    
    //silence this code before running webpack before changes to prevent extra queries 

    // getCurrentData()

    

});

