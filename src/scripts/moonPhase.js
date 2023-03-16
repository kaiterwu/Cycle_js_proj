
import { moonPhases } from "./timeConvert";
import { moonPhaseName } from "./timeConvert";

export function drawMoon(queryData,diameter,stroke,strokeColor,id){

    const width = diameter,
        height = diameter,
        margin = 20;


    const radius = Math.min(width, height) / 2 - margin


    const svg = d3.select(id)
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
    
    

    // data object
    const data = {"🌑":8,"🌒":8,"🌓":8,"🌔":8,"🌕":8,"🌖":8,"🌗":8,"🌘":8}
    

    // set color
    const color = d3.scaleOrdinal()
    // .range(["#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"])
    //dynamic color
    .range(moonPhases(queryData))
    

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(radius-80)
    .outerRadius(radius)
   
        


    const data_ready = pie(Object.entries(data))

    // compose chart, each part of the pie is a path that we build using arc function.
    svg
    .selectAll('slice')
    .data(data_ready)
    .join('path')
    .attr('d', arc)
        .transition().delay(function(d, i) { return i/8 * 1000; })
        .duration(1000)
    .style('fill', d => color(d.data[0]))
    .attr("stroke", strokeColor)        //"black"
    .style("stroke-width",stroke )    //"30px"
    .style("opacity", 1)


    //logic for annotating moons

    svg
  .selectAll('slices')
  .data(data_ready)
  .join('text')
  .text(function(d){return d.data[0]})
  .transition()
  .duration(2000)
  .attr("transform", function(d) { return `translate(${arc.centroid(d)})`})
  
  .style("text-anchor", "middle")
//   .style("font-size", 20)
  


}

export function openMoonModal(queryData){
    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openMoon = document.querySelector("#moons>svg")
    const closeModalBtn = document.querySelector(".close-btn")
    const svg = document.querySelector("#svg-container")
    const upper = document.querySelector("#upper-text")
    const lower = document.querySelector("#lower-text")
    const background = document.querySelector(".moon_background")

    const openModal=function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
        background.classList.remove("hidden")
    };

    const closeModal = function(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
        background.classList.add("hidden")
        svg.innerHTML = ""
    }

    function createText(queryData){
        const upperHead = document.createElement("p")
        const upperPhase = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerPhase = document.createElement("h1")
        const moonImg = document.createElement("img")
        const phases = ["New","Waxing Crescent","First Quarter","Waxing Gibbous",
                        "Full","Waning Gibbous","Last Quarter","Waning Crescent"]
        
        const currentPhase = moonPhaseName(queryData)

        upperHead.innerText = "Current Phase"
        upperPhase.innerText = currentPhase

        lowerHead.innerText = "Next Phase"
        
        const currentIndex = phases.indexOf(currentPhase)
        if(currentIndex !== 7){
            lowerPhase.innerText = phases[currentIndex+1]
        }else{
            lowerPhase.innerText = phases[0]
        }

        switch(currentPhase){
            case "New":
                moonImg.src = 'images/moons/new_moon.png'
                break;
            case "Waxing Crescent":
                moonImg.src = 'images/moons/waxing_crescent.png'
                break;
            case "First Quarter":
                moonImg.src = 'images/moons/first_quarter.png'
                break;
            case "Waxing Gibbous":
                moonImg.src = 'images/moons/waxing_gibbous.png'
                break;
            case "Full":
                moonImg.src = 'images/moons/Full_moon.png'
                break;
            case "Waning Gibbous":
                moonImg.src = 'images/moons/waning_gibbous.png'
                break;
            case "Last Quarter":
                moonImg.src = 'images/moons/last_quarter.png'
                break;
            case "Waning Crescent":
                moonImg.src = 'images/moons/waning_crescent.png'
                break;
        }

        upperPhase.style.fontSize = "60px"
        lowerPhase.style.fontSize = "60px"

        upperPhase.style.fontStyle = "italic"
        upperPhase.style.border = "5px solid black"
        upperPhase.style.borderRadius = "20px"
        upperPhase.style.background = "black"
        upperPhase.style.color = "white"
        upperPhase.style.boxShadow = "0px 0px 60px 20px rgba(255, 255, 255, 0.4) "
        upperPhase.style.textShadow = "1px 1px 10px white "

        lowerPhase.style.fontStyle = "italic"
        lowerPhase.style.border = "10px solid white"
        lowerPhase.style.borderRadius = "20px"
        lowerPhase.style.background = "white"
        lowerPhase.style.color = "black"
        lowerPhase.style.boxShadow = "0px 0px 60px 20px rgba(255, 255, 255, 0.4) "
        lowerPhase.style.textShadow = "1px 1px 5px black "
        lowerPhase.style.width = '80%'


        moonImg.style.width = "350"
        moonImg.style.height = "350"
        moonImg.style.zIndex = "10"

        upper.append(upperHead)
        upper.append(upperPhase)
        lower.append(lowerHead)
        lower.append(lowerPhase)
        svg.append(moonImg)
        

    }

    function onOpen(){
        drawMoon(queryData,600,"30px","black","#svg-container")
        createText(queryData)
    }
  

    openMoon.addEventListener("click",openModal)
    openMoon.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)



}
