
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
        // let myZipcode;

        // function getZip(){
        //     myZipcode = document.querySelector('#zipcode').value
        //     getCurrentData(myZipcode)
        // }

        // function getSelectValues(){
        //     // myNewZip = document.querySelector("#selectZip").value
        //     myNewDate = document.querySelector("#input-date").value 
        //     //have to reformat output of date input to match YYYY-MM-DD
        //     //logic to get day/night from radio buttons??


        // }


    
        
        // const start = document.querySelector('#start')
        // start.addEventListener("click",getZip)
        // // start.addEventListener("click",()=>getCurrentData(myZipcode))

        
        
        
        

  
   
    
    
    

});

