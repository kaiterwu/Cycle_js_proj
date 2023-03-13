// code will be similar to sunmoves script 
import { currentDays } from "./timeConvert";
//(queryData,diameter,inner,stroke,strokeColor,id)
export function drawSeasons(queryData,diameter,inner,stroke,strokeColor,id){

    const width = diameter,
        height = diameter,
        margin = 20;

   
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'seasons'
    const svg = d3.select(id)
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
    
    

    //dynamic data 
    let currentDay = currentDays(queryData.days[0].datetime)
    console.log(currentDay)
    const year = parseInt(queryData.days[0].datetime.slice(0,4))

    function winterTime(currentDay){
        let winter = 0 
        if (currentDay>90){
            return 0 
        }else{
            return 90 - currentDay
        }
    }

    function springTime(currentDay){
        if (currentDay > 182){
            return 0 
        }else if (currentDay > 90){
            return 182 - currentDay
        }else{
            return 92
        }
    }

    function summerTime(currentDay){
        if (currentDay > 273 ){
            return 0 
        }else if (currentDay > 182){
            return 273-currentDay
        }else{
            return 92
        }
    }
    
    function fallTime(currentDay){
        if (currentDay>273){
            return 365-currentDay
        }else{
            return 91
        }
        
    }

    // console.log(winterTime(currentDay))
    // console.log(springTime(currentDay))
    // console.log(summerTime(currentDay))
    // console.log(fallTime(currentDay))
    // console.log(queryData.days[0].datetime)

    const data = 
    {"current":currentDay,"winter":winterTime(currentDay),"spring":springTime(currentDay),
    "summer":summerTime(currentDay),"fall":fallTime(currentDay)}



    // data object
    // const data = {e:2000,a:2000,b:2000,c:2000,d:2000}
    
    

    // set color
    const color = d3.scaleOrdinal()
    .range(["#000000","#99ffe6","#065535", "#fff228",'#f77c3f'])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(radius - inner)
    .outerRadius(radius);
    
        


    const data_ready = pie(Object.entries(data))

    // compose chart, each part of the pie is a path that we build using arc function.
    svg
    .selectAll('path')
    .data(data_ready)
    .join('path')
    // .attr('d', d3.arc()
    //     .innerRadius(60)         // KEEP THIS LOGIC FOR MOON DELAY TRANSITION
    //     .outerRadius(radius))
    .transition()
    .duration(2000)
    .attrTween('d', function(d) {  // 'd' is current datum and function is "tween" function that interpolates through the circle path 
        let i = d3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
            d.endAngle = i(t);
          return arc(d);
        };
   })
    .style('fill', d => color(d.data[0]))
    .attr("stroke", strokeColor)
    .style("stroke-width", stroke)
    .style("opacity", 1)
    
    


}

export function openSeasonsModal(queryData){

    
    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openSeasons = document.querySelector("#seasons>svg")
    const closeModalBtn = document.querySelector(".close-btn")
    const svg = document.querySelector("#svg-container")
    const upper = document.querySelector("#upper-text")
    const lower = document.querySelector("#lower-text")
    

    const openModal=function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    };

    const closeModal = function(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
        svg.innerHTML=""
    }

    function createText(queryData){
        const upperHead = document.createElement("p")
        const upperSeason = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerSeason = document.createElement("h1")
        const seasonImg = document.createElement("img")

        let currentDay = currentDays(queryData.days[0].datetime) -1
        //90,92,92,91 ---- 90,181,273,364(365 === 1)
        let currently;
        let following;
        let currentSeason;
        let nextSeason;

        if(currentDay <=90){
            currently = currentDay
            following = 90 - currentDay
            currentSeason = "Winter"
            nextSeason = "Spring"
            seasonImg.src = '../../images/seasons/winter.png'
        }else if(currentDay > 90 && currentDay <= 181){
            currently = currentDay-90 
            following = 182 - currentDay
            currentSeason = "Spring"
            nextSeason = "Summer"
            seasonImg.src = '../../images/seasons/spring.png'
        }else if (currentDay >182 && currentDay <= 273){
            currently = currentDay - 182 
            following = 273 - currentDay
            currentSeason = "Summer"
            nextSeason = "Fall"
            seasonImg.src = '../../images/seasons/summer.png'
        }else {currently = currentDay-273
                following = 365 - currentDay
                currentSeason = "Fall"
                nextSeason = "Winter"
                seasonImg.src = '../../images/seasons/autumn.png'
        }
    
       

        upperHead.innerText = `${currently} day(s) into `
        lowerHead.innerText = `${following} day(s) until`
        upperSeason.innerText = `${currentSeason}`
        lowerSeason.innerText = `${nextSeason}`
//["#000000","#99ffe6","#065535", "#fff228",'#f77c3f'])
        let currentColor 
        let nextColor 
        if(currentSeason === "Winter"){
            currentColor = "#99ffe6"
            nextColor = "#065535"
        }else if (currentSeason === "Spring"){
            currentColor = "#065535"
            nextColor = "#fff228"
        }else if (currentSeason === "Summer"){
            currentColor = "#fff228"
            nextColor = "#f77c3f"
        }else{
            currentColor = "#f77c3f"
            nextColor = "#99ffe6"
        }

        upperSeason.style.color = currentColor
        upperSeason.style.border = `5px solid ${currentColor}`
        upperSeason.style.borderRadius = "20px"
        upperSeason.style.background = "black"
        upperSeason.style.boxShadow = `0px 0px 30px 10px ${currentColor} `
        upperSeason.style.padding = "15px"

        lowerSeason.style.border = `10px solid ${nextColor}`
        lowerSeason.style.borderRadius = "20px"
        lowerSeason.style.background = nextColor
        lowerSeason.style.color = "black"
        lowerSeason.style.boxShadow = `0px 0px 30px 10px ${nextColor} `

        seasonImg.style.width = "350px"
        seasonImg.style.height = "350px"

        upper.append(upperHead)
        upper.append(upperSeason)
        lower.append(lowerHead)
        lower.append(lowerSeason)
        svg.append(seasonImg)
        

    }

    function onOpen(){
        drawSeasons(queryData,600,40,"5px","white","#svg-container")
        createText(queryData)
    }
  

    openSeasons.addEventListener("click",openModal)
    openSeasons.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)
}