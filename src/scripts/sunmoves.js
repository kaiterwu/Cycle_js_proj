
export function sunPath(data){
    let sunrise = document.createElement("li")
    let sunset = document.createElement("li")
    sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`
    sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`
    const homeData = document.getElementsByClassName("astro-data")[0]
    homeData.append(sunrise)
    homeData.append(sunset)
}

    //set the dimensions and margins of the graph
export function drawPath(){

    const width = 450,
        height = 450,
        margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    const svg = d3.select("sun-path")
    .append("svg")
        .attr("width", width)
        .attr("height", height)
    .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create dummy data
    const data = {a:2000,b:2000}

    // set the color scale
    const color = d3.scaleOrdinal()
    .range(["#ffff", "#7f1ea2",])

    // Compute the position of each group on the pie:
    const pie = d3.pie()
    .value(d=>d[1]).sort(null)
        


    const data_ready = pie(Object.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
    .selectAll('whatever')
    .data(data_ready)
    .join('path')
    .attr('d', d3.arc()
        .innerRadius(100)         // This is the size of the donut hole
        .outerRadius(radius)
    )
    .attr('fill', d => color(d.data[0]))
    .attr("stroke", "white")
    .style("stroke-width", "5px")
    .style("opacity", 1)
}




