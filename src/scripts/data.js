// import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { getDate,callclock,getlocation,getTime } from "./timeConvert";
import { drawSun,openSunModal} from "./sunmoves";
import { drawMoon,openMoonModal } from "./moonPhase";
import { drawSeasons,openSeasonsModal } from "./seasons";
import { makeTempWidget,openTempModal } from "./temperature";
import { makeHumidWidget,openHumidModal } from "./humidity";
import { makeUvWidget,openUvModal } from "./uv";
import { makePrecipWidget, openPrecipModal } from "./precipitation";





const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
const now = Math.floor(Date.now()/1000)

function drawData(data){
  getDate(data)
  drawSun(data,200,10,"5px","black","#sun-path");
  drawMoon(data,450,"30px","black","#moons");
  drawSeasons(data,600,40,"20px","black","#seasons");
  openSunModal(data);
  openMoonModal(data);
  openSeasonsModal(data);
  getlocation(data);
  makeTempWidget(data);
  makeHumidWidget(data);
  makeUvWidget(data);
  makePrecipWidget(data);
  openTempModal(data);
  openHumidModal(data);
  openPrecipModal(data);
  openUvModal(data);

}
export async function getCurrentData(zipcode) {
    
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${now}?key=${apiKey}`);
       if (response.ok) {
         const data = await response.json();
         drawData(data)
         callclock()
         document.querySelector("#location").append(document.createElement('br'))
         document.querySelector("#location").append("Current Time")
         // console.log(data)
        } else {
          throw response;
        }
      } catch (errorResponse) {
        console.error(errorResponse);
      }
    }
    
    export async function getPastData(zipcode,date,dayTime) {
      
      try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${date}T${dayTime}?key=${apiKey}&include=current`);
        if (response.ok) {
          const data = await response.json();
          drawData(data)
          getTime(data)
          // console.log(data)
        } else {
          throw response;
        }
      } catch (errorResponse) {
        console.error(errorResponse);
      }
    }
    
    
    //DUMMY DATA ------------------------------------------------
     //day/spring
     //  const response = await fetch(`../project_docs/2023-03-12.json`);
     //  night/winter
     //  const response = await fetch(`../project_docs/night_data.json`)
     // const response = await fetch(`../project_docs/summer.json`)
     // const response = await fetch(`../project_docs/fall.json`)
     //------------------------------------------------------
    
    
    
    //DUMMY DATA----------------------------------------------------------
      //day/spring
      //  const response = await fetch(`../project_docs/2023-03-12.json`);
      //  night/winter
      //  const response = await fetch(`../project_docs/night_data.json`)
      // const response = await fetch(`../project_docs/summer.json`)
      // const response = await fetch(`../project_docs/fall.json`)
    //DUMMY DATA-----------------------------------------------------------
    