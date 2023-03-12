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
   }

   if(parsedDay%4===0){return sumLeap[parsedMonth-2]+parsedDay+31}
   else{return sumDays[parsedMonth-2]+parsedDay + 30}
}


    

    
    