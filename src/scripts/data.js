import {drawSun} from "./sunmoves";
import { drawSeasons } from "./seasons";

const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
const zip = "11040"
const now = Math.floor(Date.now()/1000)

let data;

async function getCurrentData() {
    
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);
       if (response.ok) {
          data = await response.json();
          drawSun(data)
          console.log(data)
          drawSeasons(data)
         
     
       } else {
         throw response;
       }
    } catch (errorResponse) {
        console.error(errorResponse);
    }
  }

  

  export default getCurrentData
