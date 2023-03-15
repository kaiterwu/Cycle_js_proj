 function drawPrecip(queryData,diameter,inner,stroke,strokeColor,delay=0,id){
    //set the dimensions and margins of the graph
    
    const width = diameter,
        height = diameter,
        margin = 20;

    // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted 
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'sun-path'
    const svg = d3.select(id)
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
    
    const currentPrecip = queryData.days[0].precipprob

    let left = currentPrecip
    let right = 100 - currentPrecip

    const data = {"🌧️":left,"":right}

    // set color
    const color = d3.scaleOrdinal()
    .range(["#2900ff", "#3a3a3a",])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)
    .startAngle(-5* Math.PI / 6)
    .endAngle(5*Math.PI / 6)

    const arc =  d3.arc()
    .innerRadius(radius-inner)
    .outerRadius(radius)
    
    
    
        


    const data_ready = pie(Object.entries(data))

    // compose chart, each part of the pie is a path that we build using arc function.
    svg
    .selectAll('slice')
    .data(data_ready)
    .join('path')
    .transition()
    .duration(2000)
    .attrTween('d', function(d) {                   // 'd' is current datum and function is "tween" function that interpolates through the circle path 
        let i = d3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
            d.endAngle = i(t);
          return arc(d);
        };
   }).delay(delay)
    .style('fill', d => color(d.data[0]))
    .attr("stroke", strokeColor) //"black"
    .style("stroke-width", stroke) //5px
    .style("opacity", 1)

    svg
    .selectAll('slices')
    .data(data_ready)
    .join('text')
    .text(function(d){return d.data[0]})
    .transition()
    .duration(2000)
    .delay(delay)
    .attr("transform", function(d) { return `translate(${arc.centroid(d)})`})
    .style("text-anchor", "middle")
}

export function makePrecipWidget(data){
    drawPrecip(data,150,30,"5px","black",1000,"#precip-widget")

    const currentPrecip = data.days[0].precipprob

    const precipContainer = document.querySelector("#precip-widget")
    const precipDiv = document.createElement("div")
    precipDiv.innerText = `${Math.round(currentPrecip)}` + `%`
    precipContainer.append(precipDiv)

}

export function openPrecipModal(data){

    const currentPrecip = data.days[0].precipprob
    const precipType = data.days[0].preciptype

    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openPrecip = document.querySelector("#precip-widget>svg")
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
        upper.innerHTML = ""
        lower.innerHTML = ""
    };

    function createText(data){
        const upperHead = document.createElement("p")
        const upperPrecip = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerPrecip = document.createElement("h1")
        const PrecipImg = document.createElement("img")

        upperHead.innerText = "Precipitation Chance"
        upperPrecip.innerText = `${Math.round(currentPrecip)}` + `%`

        upperPrecip.style.color = "#000000"
        upperPrecip.style.border = "5px solid #2900ff"
        upperPrecip.style.borderRadius = "20px"
        upperPrecip.style.background = "#2900ff"
        upperPrecip.style.boxShadow = "0px 0px 20px 20px #2900ff"
        upperPrecip.style.textShadow = "1px 1px 10px black"

        lowerHead.innerText = "Precipitation Type"
        
        if (precipType){
            for (let i = 0; i < precipType.length; i++) {
                precipType[i] = precipType[i][0].toUpperCase() + precipType[i].slice(1);
            }
            
        
            lowerPrecip.innerText = precipType.join(" ")
        }else{
            lowerPrecip.innerText = "None"
        }

        lowerPrecip.style.color = "#2900ff"
        lowerPrecip.style.textShadow = "1px 1px 10px #2900ff"
        lowerPrecip.style.fontSize = '35px'
        lowerPrecip.style.border = "5px solid #2900ff"
        lowerPrecip.style.borderRadius = "20px"
        lowerPrecip.style.boxShadow = "0px 0px 20px 20px #2900ff"
        lowerPrecip.style.padding = "5px"

        PrecipImg.src = 'images/weather/precipitation.png'
        

        svg.append(PrecipImg)
        upper.append(upperHead)
        upper.append(upperPrecip)
        lower.append(lowerHead)
        lower.append(lowerPrecip)

        

        
    }

    function onOpen(){
        drawPrecip(data,600,60,"5px","white",0,"#svg-container")
        createText(data)
    }

    openPrecip.addEventListener("click",openModal)
    openPrecip.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)
}

