export function timeToSeconds(str){
   let currentHours = parseInt(str.slice(0,2))
   let currentMinutes = parseInt(str.slice(3,5))
   let currentSeconds = parseInt(str.slice(6))

   return currentHours*60*60 + currentMinutes*60 + currentSeconds 
}


    

    
    