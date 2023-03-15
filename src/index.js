
import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { drawSeasons,openSeasonsModal } from "./scripts/seasons";
import { drawMoon,openMoonModal } from "./scripts/moonPhase";
import { fetchData,getData,getClock, getCurrentData } from "./scripts/data";
import { getDate,callclock } from "./scripts/timeConvert";
import { openIntroModal } from "./scripts/intro_modal";
import { openSelectModal } from "./scripts/select_modal";


document.addEventListener("DOMContentLoaded", () => {
    
    openIntroModal()
    openSelectModal()
   
        
    
});

