
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
    .outerRadius(radius);
    
        


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

    const openModal=function(){
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    };

    const closeModal = function(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
        svg.innerHTML = ""
    }

    function createText(queryData){
        const upperHead = document.createElement("p")
        const upperPhase = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerPhase = document.createElement("h1")
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

        upperPhase.style.fontSize = "60px"
        lowerPhase.style.fontSize = "60px"

        upperPhase.style.fontStyle = "italic"
        upperPhase.style.border = "5px solid black"
        upperPhase.style.borderRadius = "20px"
        upperPhase.style.background = "black"
        upperPhase.style.color = "white"
        upperPhase.style.boxShadow = "0px 0px 60px 20px rgba(255, 255, 255, 0.4) "

        lowerPhase.style.fontStyle = "italic"
        lowerPhase.style.border = "10px solid white"
        lowerPhase.style.borderRadius = "20px"
        lowerPhase.style.background = "white"
        lowerPhase.style.color = "black"
        lowerPhase.style.boxShadow = "0px 0px 60px 20px rgba(255, 255, 255, 0.4) "

        upper.append(upperHead)
        upper.append(upperPhase)
        lower.append(lowerHead)
        lower.append(lowerPhase)
        

    }

    function onOpen(){
        drawMoon(queryData,600,"30px","black","#svg-container")
        createText(queryData)
    }
  

    openMoon.addEventListener("click",openModal)
    openMoon.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)



}
