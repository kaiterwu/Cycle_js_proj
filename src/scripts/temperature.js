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

function openTempModal(data){
    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openTemp = document.querySelector("#temp-widget>svg")
    const closeModalBtn = document.querySelector(".close-btn")
    const svg = document.querySelector("#svg-container")
    const upper = document.querySelector("#upper-text")
    const lower = document.querySelector("#lower-text")
    
}
