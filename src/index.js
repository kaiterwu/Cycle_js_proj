import Example from "./scripts/example";
import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { drawSeasons,openSeasonsModal } from "./scripts/seasons";
import { drawMoon,openMoonModal } from "./scripts/moonPhase";
import { fetchData,getData } from "./scripts/data";



document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    // drawSun()
    // drawSeasons()
    // drawMoon()
    (async () => {
        await getData()
        drawSun(fetchData);
        drawMoon(fetchData);
        drawSeasons(fetchData);
        openSunModal()
        openMoonModal()
        openSeasonsModal()

        
    })();
    
    
    
    
    

});

