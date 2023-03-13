import { timeToSeconds } from "./timeConvert"

export function sunPath(data){
    let sunrise = document.createElement("li")
    let sunset = document.createElement("li")
    sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`
    sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`
    const homeData = document.getElementsByClassName("astro-data")[0]
    homeData.append(sunrise)
    homeData.append(sunset)
};

    //set the dimensions and margins of the graph
export function drawSun(queryData){

    const width = 200,
        height = 200,
        margin = 20;

    // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted 
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'sun-path'
    const svg = d3.select("#sun-path")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
    
    // dynamic querydata , javascript time is in UTC, need to convert to EST 
    let currentSeconds = timeToSeconds(queryData.currentConditions.datetime)
    let sunriseSeconds = timeToSeconds(queryData.currentConditions.sunrise)
    let sunsetSeconds = timeToSeconds(queryData.currentConditions.sunset)
    const totalTime = 24*60*60;

    function nightTime(currentSeconds,sunriseSeconds,sunsetSeconds){
        if(currentSeconds > sunsetSeconds){
            return totalTime - currentSeconds + sunriseSeconds
        }else if (currentSeconds < sunriseSeconds){
           return sunriseSeconds - currentSeconds
        }
         else{
           return totalTime - sunsetSeconds + sunriseSeconds
        }
    }

    function dayTime(currentSeconds,sunriseSeconds,sunsetSeconds){
        if (currentSeconds >sunriseSeconds && currentSeconds < sunsetSeconds){
            return  sunsetSeconds - currentSeconds
        }else {
            return 0 
        }
    }

    function timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds){
        if (currentSeconds > sunriseSeconds){
           return  currentSeconds - sunriseSeconds
        }else if (currentSeconds < sunsetSeconds){
            return  totalTime - sunsetSeconds + currentSeconds
        }
    }

    console.log(currentSeconds);
    console.log(sunriseSeconds);
    console.log(sunsetSeconds);
    console.log(nightTime(currentSeconds,sunriseSeconds,sunsetSeconds))
    console.log(dayTime(currentSeconds,sunriseSeconds,sunsetSeconds))
    console.log(timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds))

    let nightSeconds = nightTime(currentSeconds,sunriseSeconds,sunsetSeconds)
    let daySeconds = dayTime(currentSeconds,sunriseSeconds,sunsetSeconds)
    let nowSeconds = timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds)
    
    

    

    // data object
    // const data = {a:2000,b:2000,c:2000}
    
    // //dynamic data 
    const data = {elapse:nowSeconds,day:daySeconds,night:nightSeconds}

    // set color
    const color = d3.scaleOrdinal()
    .range(["#000000","#ff0660", "#416fec",])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(radius-10)
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
    .attrTween('d', function(d) {                   // 'd' is current datum and function is "tween" function that interpolates through the circle path 
        let i = d3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
            d.endAngle = i(t);
          return arc(d);
        };
   })
    .style('fill', d => color(d.data[0]))
    .attr("stroke", "black")
    .style("stroke-width", "5px")
    .style("opacity", 1)
    
    
    


}

export function openSunModal(){
    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openSun = document.querySelector("#sun-path>svg")
    const closeModalBtn = document.querySelector(".close-btn")

    const openModal=function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    };

    const closeModal = function(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }
  

    openSun.addEventListener("click",openModal)
    closeModalBtn.addEventListener("click",closeModal)
}




