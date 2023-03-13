import {drawSun} from "./sunmoves";
import { drawSeasons } from "./seasons";
import { drawMoon } from "./moonPhase";
import { timeNow } from "./timeConvert";

const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
const zip = "11040"
const now = Math.floor(Date.now()/1000)

export let fetchData;

export const getData = async function getCurrentData() {
    
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);
        //day/spring
        //  const response = await fetch(`../project_docs/2023-03-12.json`);
        //  night/winter
        //  const response = await fetch(`../project_docs/night_data.json`)
        // const response = await fetch(`../project_docs/summer.json`)
        // const response = await fetch(`../project_docs/fall.json`)
       if (response.ok) {
          const data = await response.json();
         //  drawSun(data)
         //  setTimeout(drawMoon(data),1000)
         //  setTimeout(drawSeasons(data),1000)
          console.log(data)
         fetchData = data
         return data
     
       } else {
         throw response;
       }
    } catch (errorResponse) {
        console.error(errorResponse);
    }
  }

  

//   export default getCurrentData
