 function drawTemp(queryData,diameter,inner,stroke,strokeColor,delay,id){
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
    
   //dynamic data
   const currentTemp = queryData.days[0].temp
   const tempMin = queryData.days[0].tempmin
   const tempMax = queryData.days[0].tempmax
   const tempFeels = queryData.days[0].feelslike

//    console.log(currentTemp)
//    console.log(tempMin)
//    console.log(tempMax)
//    console.log(tempFeels)

   let leftSide = currentTemp - tempMin 
   let rightSide = tempMax - currentTemp

   const data = [leftSide,rightSide]

    // const data = [1,1]

    // set color
    const color = d3.scaleOrdinal()
    .range(["#ff0c00", "#29cdff",])

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
    .selectAll('path')
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
   })
    .style('fill', d => color(d.data[0]))
    .attr("stroke", strokeColor) //"black"
    .style("stroke-width", stroke) //5px
    .style("opacity", 1)
}

export function makeTempWidget(data){
    drawTemp(data,150,30,"5px","black",0,"#temp-widget")
    const currentTemp = data.days[0].temp
    const tempMin = data.days[0].tempmin
    const tempMax = data.days[0].tempmax
    const tempFeels = data.days[0].feelslike

    
    const tempContainer = document.querySelector("#temp-widget")
    const tempDiv = document.createElement("div")
    tempDiv.innerText = `${currentTemp}` + '°F'
   tempContainer.append(tempDiv)
}

export function openTempModal(data){

    const currentTemp = data.days[0].temp
    const tempMin = data.days[0].tempmin
    const tempMax = data.days[0].tempmax
    const tempFeels = data.days[0].feelslike

    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openTemp = document.querySelector("#temp-widget>svg")
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
        const upperTemp = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerTemp = document.createElement("h1")
        const tempImg = document.createElement("div")

        upperHead.innerText = "Day High is "
        upperTemp.innerText = `${tempMax}`

        upperTemp.style.color = "black"
        upperTemp.style.border = "5px solid #ff0c00"
        upperTemp.style.borderRadius = "20px"
        upperTemp.style.background = "#ff0c00"
        upperTemp.style.boxShadow = "0px 0px 20px 20px #ff0c00"
        upperTemp.style.textShadow = "1px 1px 5px black"

        lowerHead.innerText = "Day Low is"
        lowerTemp.innerText = `${tempMin}`

        lowerTemp.style.color = "black"
        lowerTemp.style.border = "5px solid #29cdff"
        lowerTemp.style.borderRadius = "20px"
        lowerTemp.style.background = "#29cdff"
        lowerTemp.style.boxShadow = "0px 0px 20px 20px #29cdff"
        lowerTemp.style.textShadow = "1px 1px 5px black"

        upper.append(upperHead)
        upper.append(upperTemp)
        lower.append(lowerHead)
        lower.append(lowerTemp)

        let currentContainer = document.createElement("div")
        let currentTempContainer = document.createElement("div")
        let feelsContainer = document.createElement("div")
        let feelsTempContainer = document.createElement("div")

        currentContainer.innerText = "Currently:"
        currentTempContainer.innerText = `${currentTemp}` + '°F'
        feelsContainer.innerText = "Feels like:"
        feelsTempContainer.innerText =`${tempFeels}` + '°F'

        tempImg.append(currentContainer)
        tempImg.append(currentTempContainer)
        tempImg.append(document.createElement("br"))
        tempImg.append(feelsContainer)
        tempImg.append(feelsTempContainer)

        svg.append(tempImg)
    }

    function onOpen(){
        drawTemp(data,600,80,"5px","white",0,"#svg-container")
        createText(data)
    }

    openTemp.addEventListener("click",openModal)
    openTemp.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)
}
