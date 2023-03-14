
import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { drawSeasons,openSeasonsModal } from "./scripts/seasons";
import { drawMoon,openMoonModal } from "./scripts/moonPhase";
import { fetchData,getData,getClock, getCurrentData } from "./scripts/data";
import { getDate,callclock } from "./scripts/timeConvert";
import { openIntroModal } from "./scripts/intro_modal";


document.addEventListener("DOMContentLoaded", () => {
   
    // (async () => {
    //     await getData()
    //     // console.log("hello")
    //     // getTime(fetchData)
    //     getDate(fetchData)
    //     drawSun(fetchData,200,10,"5px","black","#sun-path");
    //     drawMoon(fetchData,450,"30px","black","#moons");
    //     drawSeasons(fetchData,600,40,"20px","black","#seasons");
    //     openSunModal(fetchData);
    //     openMoonModal(fetchData);
    //     openSeasonsModal(fetchData);
    //     callclock()
        
    // })();
        let myZipcode;

        function getZip(){
            myZipcode = document.querySelector('#zipcode').value
        }
    
        openIntroModal()
        const start = document.querySelector('#start')

        start.addEventListener("click",getZip)
        start.addEventListener("click",()=>getCurrentData(myZipcode))
        // start.addEventListener("click",()=>console.log(myZipcode))
    
 
    // callclock();
  
   
    
    
    

});

