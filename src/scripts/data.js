// import {drawSun,openSunModal}  from "./scripts/sunmoves";
import { getDate,callclock,getlocation,getTime } from "./timeConvert";
import { drawSun,openSunModal} from "./sunmoves";
import { drawMoon,openMoonModal } from "./moonPhase";
import { drawSeasons,openSeasonsModal } from "./seasons";
import { drawTemp } from "./temperature";
import { drawHumid } from "./humidity";
import { drawUv } from "./uv";
import { drawPrecip } from "./precipitation";





const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
// const zip = "11040"
const now = Math.floor(Date.now()/1000)

// export let fetchData;

export async function getCurrentData(zipcode) {
    
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zipcode}/${now}?key=${apiKey}`);
        //day/spring
        //  const response = await fetch(`../project_docs/2023-03-12.json`);
        //  night/winter
        //  const response = await fetch(`../project_docs/night_data.json`)
        // const response = await fetch(`../project_docs/summer.json`)
        // const response = await fetch(`../project_docs/fall.json`)
       if (response.ok) {
          const data = await response.json();
          getDate(data)
          drawSun(data,200,10,"5px","black","#sun-path");
          drawMoon(data,450,"30px","black","#moons");
          drawSeasons(data,600,40,"20px","black","#seasons");
          openSunModal(data);
          openMoonModal(data);
          openSeasonsModal(data);
          getlocation(data)
          drawTemp(data,150,15,"5px","black","#temp-widget")
          drawHumid(data,150,15,"5px","black","#humid-widget")
          drawUv(data,150,15,"5px","black","#uv-widget")
          drawPrecip(data,150,15,"5px","black","#precip-widget")
          callclock()
  

        
         
          console.log(data)
        
     
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
        //day/spring
        //  const response = await fetch(`../project_docs/2023-03-12.json`);
        //  night/winter
        //  const response = await fetch(`../project_docs/night_data.json`)
        // const response = await fetch(`../project_docs/summer.json`)
        // const response = await fetch(`../project_docs/fall.json`)
       if (response.ok) {
          const data = await response.json();
          // callclock();
          getDate(data)
          drawSun(data,200,10,"5px","black","#sun-path");
          drawMoon(data,450,"30px","black","#moons");
          drawSeasons(data,600,40,"20px","black","#seasons");
          openSunModal(data);
          openMoonModal(data);
          openSeasonsModal(data);
          getlocation(data)
          getTime(data)
          // callclock()
         
          console.log(data)
        //  fetchData = data
        //  return data
     
       } else {
         throw response;
       }
    } catch (errorResponse) {
        console.error(errorResponse);
    }
  }

  
  

//   export default getCurrentData
