export function drawHumid(queryData,diameter,inner,stroke,strokeColor,id){
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
    
    // dynamic querydata , javascript time is in UTC, need to convert to EST 
    // let currentSeconds = timeToSeconds(queryData.currentConditions.datetime)
    // let sunriseSeconds = timeToSeconds(queryData.currentConditions.sunrise)
    // let sunsetSeconds = timeToSeconds(queryData.currentConditions.sunset)
    // const totalTime = 24*60*60;

    // function nightTime(currentSeconds,sunriseSeconds,sunsetSeconds){
    //     if(currentSeconds > sunsetSeconds){
    //         return totalTime - currentSeconds + sunriseSeconds
    //     }else if (currentSeconds < sunriseSeconds){
    //        return sunriseSeconds - currentSeconds
    //     }
    //      else{
    //        return totalTime - sunsetSeconds + sunriseSeconds
    //     }
    // }

    // function dayTime(currentSeconds,sunriseSeconds,sunsetSeconds){
    //     if (currentSeconds >sunriseSeconds && currentSeconds < sunsetSeconds){
    //         return  sunsetSeconds - currentSeconds
    //     }else {
    //         return 0 
    //     }
    // }

    // function timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds){
    //     if (currentSeconds > sunriseSeconds){
    //        return  currentSeconds - sunriseSeconds
    //     }else if (currentSeconds < sunsetSeconds){
    //         return  totalTime +currentSeconds-sunriseSeconds 
    //     }
    // }

    // // console.log(currentSeconds);
    // // console.log(sunriseSeconds);
    // // console.log(sunsetSeconds);
    // // console.log(nightTime(currentSeconds,sunriseSeconds,sunsetSeconds))
    // // console.log(dayTime(currentSeconds,sunriseSeconds,sunsetSeconds))
    // // console.log(timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds))

    // let nightSeconds = nightTime(currentSeconds,sunriseSeconds,sunsetSeconds)
    // let daySeconds = dayTime(currentSeconds,sunriseSeconds,sunsetSeconds)
    // let nowSeconds = timeElapse(currentSeconds,sunriseSeconds,sunsetSeconds)
    
    // //dynamic data 
    // const data = {elapse:nowSeconds,day:daySeconds,night:nightSeconds}
    const data = [1,1]

    // set color
    const color = d3.scaleOrdinal()
    .range(["#ff0660", "#416fec",])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)
    .startAngle(-5* Math.PI / 6)
    .endAngle(5*Math.PI / 6)

    const arc =  d3.arc()
    .innerRadius(radius-inner)
    .outerRadius(radius)
    
    // let angleGen = d3.pie()
    // .startAngle(Math.PI / 4)
    // .endAngle(7 * Math.PI / 4)
    // .value((d) => d.size);
    
        


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
    .attr("stroke", strokeColor) //"black"
    .style("stroke-width", stroke) //5px
    .style("opacity", 1)
}