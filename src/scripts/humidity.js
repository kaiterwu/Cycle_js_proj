 function drawHumid(queryData,diameter,inner,stroke,strokeColor,delay=0,id){
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

    const currentHumid = queryData.currentConditions.humidity
    let left = currentHumid
    let right = 100 - currentHumid
    
     const data = {"💧":left,"":right}
    // const data = {"💧":1,"":2}

    // set color
    const color = d3.scaleOrdinal()
    .range(["#9fc5e8", "#3a3a3a",])

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

export function makeHumidWidget(data){
    drawHumid(data,150,30,"5px","black",500,"#humid-widget")

    const currentHumid = data.currentConditions.humidity

    const humidContainer = document.querySelector("#humid-widget")
    const humidDiv = document.createElement("div")
    humidDiv.innerText = `${Math.round(currentHumid)}` + '%'
    humidContainer.append(humidDiv)


}

export function openHumidModal(data){

    const currentHumid = data.currentConditions.humidity
    const currentDew = data.currentConditions.dew

    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openHumid = document.querySelector("#humid-widget>svg")
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
        const upperHumid = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerDew = document.createElement("h1")
        const humidImg = document.createElement("img")

        upperHead.innerText = "Current Humidity"
        upperHumid.innerText = `${Math.round(currentHumid)}` + `%`

        upperHumid.style.color = "#000000"
        upperHumid.style.border = "5px solid #9fc5e8"
        upperHumid.style.borderRadius = "20px"
        upperHumid.style.background = "#9fc5e8"
        upperHumid.style.boxShadow = "0px 0px 20px 20px #9fc5e8"
        upperHumid.style.textShadow = "1px 1px 5px black"

        lowerHead.innerText = "Current Dew Point"
        lowerDew.innerText = `${Math.round(currentDew)}`+ '°F'

        lowerDew.style.color = "#9fc5e8"
        lowerDew.style.border = "5px solid #9fc5e8"
        lowerDew.style.borderRadius = "20px"
        lowerDew.style.background = "#9fc5e8"
        lowerDew.style.boxShadow = "0px 0px 20px 20px #9fc5e8"
        lowerDew.style.textShadow = "1px 1px 5px black"

        humidImg.src = 'images/weather/humidity.png'

        svg.append(humidImg)
        upper.append(upperHead)
        upper.append(upperHumid)
        lower.append(lowerHead)
        lower.append(lowerDew)

        

        
    }

    function onOpen(){
        drawHumid(data,600,60,"5px","white",0,"#svg-container")
        createText(data)
    }

    openHumid.addEventListener("click",openModal)
    openHumid.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)
}
