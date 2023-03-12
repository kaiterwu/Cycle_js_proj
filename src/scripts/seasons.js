// code will be similar to sunmoves script 
import { currentDays } from "./timeConvert";

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
    
    

    //dynamic data 
    // let currentDay = currentDays(queryData.days[0].datetime)
    // const year = parseInt(queryData.days[0].datetime.slice(0,4))

    // function winterTime(currentDay){
    //     let winter = 0 
    //     if (currentDay>90){
    //         return 0 
    //     }else{
    //         return 90 - currentDay
    //     }
    // }

    // function springTime(currentDay){
    //     if (currentDay > 182){
    //         return 0 
    //     }else if (currentDay > 90){
    //         return 182 - currentDay
    //     }else{
    //         return 92
    //     }
    // }

    // function summerTime(currentDay){
    //     if (currentDay > 273 ){
    //         return 0 
    //     }else if (currentDay > 182){
    //         return 273-currentDay
    //     }else{
    //         return 92
    //     }
    // }
    
    // function fallTime(currentDay){
    //     if (currentDay>273){
    //         return 365-currentDay
    //     }else{
    //         return 91
    //     }
        
    // }

    // console.log(winterTime(currentDay))
    // console.log(springTime(currentDay))
    // console.log(summerTime(currentDay))
    // console.log(fallTime(currentDay))
    // console.log(queryData.days[0].datetime)

    // const data = 
    // {"current":currentDay,"winter":winterTime(currentDay),"spring":springTime(currentDay),
    // "summer":summerTime(currentDay),"fall":fallTime(currentDay)}



    // data object
    const data = {e:2000,a:2000,b:2000,c:2000,d:2000}
    
    

    // set color
    const color = d3.scaleOrdinal()
    .range(["#ffffff","#99ffe6","#065535", "#fff228",'#f77c3f'])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1])
    .sort(null)

    const arc =  d3.arc()
    .innerRadius(radius -60)
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
    .attr("stroke", "black")
    .style("stroke-width", "20px")
    .style("opacity", 1)
    


}