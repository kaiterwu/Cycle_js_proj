// code will be similar to sunmoves script 

export function drawSeasons(queryData){

    const width = 600,
        height = 600,
        margin = 20;

    // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted 
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'sun-path'
    const svg = d3.select("#seasons")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);
    
    

    

    // data object
    const data = {a:2000,b:2000,c:2000,d:2000}
    
    

    // set color
    const color = d3.scaleOrdinal()
    .range(["#99ffe6","#065535", "#fff228",'#f77c3f'])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(radius -20)
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
    .attr("stroke", "black")
    .style("stroke-width", "5px")
    .style("opacity", 1)
    


}