
import { moonPhases } from "./timeConvert";


export function drawMoon(queryData){

    const width = 450,
        height = 450,
        margin = 20;


    const radius = Math.min(width, height) / 2 - margin


    const svg = d3.select("#moons")
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
    .attr("stroke", "black")
    .style("stroke-width", "30px")
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

export function openMoonModal(){
    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openSun = document.querySelector("#moons>svg")
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



