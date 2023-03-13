export function timeToSeconds(str){
   let currentHours = parseInt(str.slice(0,2))
   let currentMinutes = parseInt(str.slice(3,5))
   let currentSeconds = parseInt(str.slice(6))

   return currentHours*60*60 + currentMinutes*60 + currentSeconds 
}

const days = {"01":31,"02":28,"03":31,"04":30,"05":31,"06":30,"07":31,"08":31,"09":30,"10":31,"11":30,"12":31}
const months = [31,28,31,30,31,30,31,31,30,31,30,31]
const sumDays = [31,59,90,120,151,181,212,243,273,304,334,365]
const leapMonths = [31,29,31,30,31,30,31,31,30,31,30,31]
const sumLeap = [31,60,91,121,152,182,213,244,274,305,336,366]
//circle starts at first day of winter: 12/01!!!

export function currentDays(str){
   const sumDays = [31,59,90,120,151,181,212,243,273,304,334,365]
   const sumLeap = [31,60,91,121,152,182,213,244,274,305,336,366]
   let parsedYear = parseInt(str.slice(0,4))
   let parsedMonth = parseInt(str.slice(5,7))
   let parsedDay = parseInt(str.slice(8))
   if (parsedMonth === 12){
      return parsedDay
   }else if (parsedMonth ===1){
    return 61 + parsedDay
   }

   if(parsedDay%4===0){return sumLeap[parsedMonth-2]+parsedDay+31}
   else{return sumDays[parsedMonth-2]+parsedDay + 30}
}

export function moonPhases(data){
   let colors = ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
    const moonIndex = data.currentConditions.moonphase
   // const moonIndex = data

 

      if(moonIndex < 0.125 || moonIndex ===1){
          colors.splice(0,0,"#000000")
      }

      else if(moonIndex >= 0.125 && moonIndex<0.25){
          colors.splice(1,0,"#000000")
      }
      
      else if(moonIndex >= 0.25 && moonIndex<0.375){
          colors.splice(2,0,"#000000")
      }

      else if(moonIndex >= 0.375 && moonIndex<0.5){
          colors.splice(3,0,"#000000")
      }

      else if(moonIndex >= 0.5 && moonIndex<0.625){
          colors.splice(4,0,"#000000")
      }
      
      else if(moonIndex >= 0.625 && moonIndex<0.75){
          colors.splice(5,0,"#000000")
      }
      
      else if(moonIndex >= 0.75 && moonIndex<0.875){
          colors.splice(6,0,"#000000")
      }
      
      else if(moonIndex >= 0.875 && moonIndex<1){
          colors.splice(7,0,"#000000")
      }

      else{
          colors.splice(0,0,"#000000")
      }
         
     return colors 

}

export function moonPhaseName(data){
    const moonIndex = data.currentConditions.moonphase
    let phaseName;

    if(moonIndex < 0.125 || moonIndex ===1){
        phaseName = "New"
    }

    else if(moonIndex >= 0.125 && moonIndex<0.25){
        phaseName = "Waxing Crescent"
    }
    
    else if(moonIndex >= 0.25 && moonIndex<0.375){
        phaseName = "First Quarter"
    }

    else if(moonIndex >= 0.375 && moonIndex<0.5){
        phaseName = "Waxing Gibbous"
    }

    else if(moonIndex >= 0.5 && moonIndex<0.625){
        phaseName = "Full"
    }
    
    else if(moonIndex >= 0.625 && moonIndex<0.75){
        phaseName = "Waning Gibbous"
    }
    
    else if(moonIndex >= 0.75 && moonIndex<0.875){
        phaseName = "Last Quarter"
    }
    
    else if(moonIndex >= 0.875 && moonIndex<1){
        phaseName = "Waning Crescent"
    }

    else{
        phaseName = "New"
    }
       
   return phaseName

}

  


    

    
    