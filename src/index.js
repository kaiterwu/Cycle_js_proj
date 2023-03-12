import Example from "./scripts/example";
import {drawSun}  from "./scripts/sunmoves";
import { drawSeasons } from "./scripts/seasons";
import { drawMoon } from "./scripts/moonPhase";
import { fetchData,getData } from "./scripts/data";



document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    // drawSun()
    // drawSeasons()
    // drawMoon()
    (async () => {
        await getData();
        drawSun(fetchData);
        drawMoon(fetchData);
        drawSeasons(fetchData);
    })();
    
    
    //silence this code before running webpack before changes to prevent extra queries 

    // getCurrentData()

    

});

