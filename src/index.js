import Example from "./scripts/example";
import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { drawSeasons,openSeasonsModal } from "./scripts/seasons";
import { drawMoon,openMoonModal } from "./scripts/moonPhase";
import { fetchData,getData } from "./scripts/data";
import { getDate,getTime } from "./scripts/timeConvert";



document.addEventListener("DOMContentLoaded", () => {
   
    (async () => {
        await getData()
        // console.log("hello")
        getTime(fetchData)
        getDate(fetchData)
        drawSun(fetchData,200,10,"5px","black","#sun-path");
        drawMoon(fetchData,450,"30px","black","#moons");
        drawSeasons(fetchData,600,40,"20px","black","#seasons");
        openSunModal(fetchData);
        openMoonModal(fetchData);
        openSeasonsModal(fetchData);

        
    })();


    
    
    
    
    

});

