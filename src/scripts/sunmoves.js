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
export function drawPath(queryData){

    const width = 250,
        height = 250,
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
    
    //dynamic querydata , javascript time is in UTC, need to convert to EST 
    let currentSeconds = timeToSeconds(queryData.currentConditions.datetime)
    let sunriseSeconds = timeToSeconds(queryData.currentConditions.sunrise)
    let sunsetSeconds = timeToSeconds(queryData.currentConditions.sunset)

    
    

    

    // data object
    const data = {a:2000,b:2000,c:2000}

    // set color
    const color = d3.scaleOrdinal()
    .range(["#ffffff","#ebb811", "#7f1ea2",])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(80)
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
    .transition().delay(function(d, i) { return i * 400; })
    .duration(400)
    .attrTween('d', function(d) {                   // 'd' is current datum and function is "tween" function that interpolates through the circle path 
        let i = d3.interpolate(d.startAngle+0.1, d.endAngle);
        return function(t) {
            d.endAngle = i(t);
          return arc(d);
        };
   })
    .style('fill', d => color(d.data[0]))
    .attr("stroke", "white")
    .style("stroke-width", "10px")
    .style("opacity", 1)
    


}




