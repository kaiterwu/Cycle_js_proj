 function drawUv(queryData,diameter,inner,stroke,strokeColor,delay=0,id){
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
    
    
    const data = [3,3,2,4,2]//0,1,2,3,4,5,6,7,8,9,10,11+

    // set color
    const color = d3.scaleOrdinal()
    .range(["#3ded97", "#fff440","#e69138","#ff0800","#d200ff"])

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
   }).delay(delay)
    .style('fill', d => color(d.data[0]))
    .attr("stroke", strokeColor) //"black"
    .style("stroke-width", stroke) //5px
    .style("opacity", 1)
}

export function makeUvWidget(data){
    drawUv(data,150,30,"5px","black",1500,"#uv-widget")

    const currentUv = data.currentConditions.uvindex

    const uvContainer = document.querySelector("#uv-widget")
    const uvDiv = document.createElement("div")
    uvDiv.innerText = "UV" + " " + `${currentUv}`

    //["#3ded97", "#fff440","#e69138","#ff0800","#d200ff"]

    if (currentUv < 3){
        uvDiv.style.color = "#3ded97"
        uvDiv.style.textShadow = "1px 1px 20px #3ded97"
    } else if (currentUv >2 && currentUv < 6){
        uvDiv.style.color = "#fff440"
        uvDiv.style.textShadow = "1px 1px 20px #fff440"
    }else if (currentUv > 5 && currentUv <8){
        uvDiv.style.color = "#e69138"
        uvDiv.style.textShadow = "1px 1px 20px #e69138"
    }else if (currentUv > 7 && currentUv < 11){
        uvDiv.style.color = "#ff0800"
        uvDiv.style.textShadow = "1px 1px 20px #ff0800"
    }else{
        uvDiv.style.color = "#d200ff"
        uvDiv.style.textShadow = "1px 1px 20px #d200ff"
    }
    
    uvContainer.append(uvDiv)
}

export function openUvModal(data){

    const currentUv = data.currentConditions.uvindex

    const modal = document.querySelector(".astro-modal");
    const overlay = document.querySelector(".overlay");
    const openUv = document.querySelector("#uv-widget>svg")
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
        const upperUv = document.createElement("h1")
        const lowerHead = document.createElement("p")
        const lowerUv = document.createElement("h1")
        const uvImg = document.createElement("img")

        upperHead.innerText = "Current UV index"
        upperUv.innerText = `${currentUv}`

        let uvColors = ["#3ded97", "#fff440","#e69138","#ff0800","#d200ff"]
        let currentUvColor;
        if (currentUv < 3){
           currentUvColor = uvColors[0]
           lowerUv.innerText = 'Low'
        } else if (currentUv >2 && currentUv < 6){
            currentUvColor = uvColors[1]
            lowerUv.innerText = 'Moderate'
        }else if (currentUv > 5 && currentUv <8){
            currentUvColor = uvColors[2]
            lowerUv.innerText = 'High'
        }else if (currentUv > 7 && currentUv < 11){
            currentUvColor = uvColors[3]
            lowerUv.innerText = 'Very High'
        }else{
            currentUvColor = uvColors[4]
            lowerUv.innerText = 'Extreme'
        }
        upperUv.style.color = "#000000"
        upperUv.style.border = `5px solid ${currentUvColor}`
        upperUv.style.borderRadius = "20px"
        upperUv.style.background = `${currentUvColor}`
        upperUv.style.boxShadow = `0px 0px 20px 20px ${currentUvColor}`
        upperUv.style.textShadow = "1px 1px 10px black"

        lowerHead.innerText = "Current Condition"
        
        

        lowerUv.style.color = `${currentUvColor}`
        lowerUv.style.textShadow = `1px 1px 10px ${currentUvColor}`
        lowerUv.style.borderRadius = "20px"
        lowerUv.style.border = `5px solid ${currentUvColor}`
        lowerUv.style.boxShadow = `1px 1px 20px 20px ${currentUvColor}`
        lowerUv.style.padding = "10px"
    

        uvImg.src = 'images/weather/uv.png'
        
        

        svg.append(uvImg)
        upper.append(upperHead)
        upper.append(upperUv)
        lower.append(lowerHead)
        lower.append(lowerUv)

        

        
    }

    function onOpen(){
        drawUv(data,600,30,"20px","black",0,"#svg-container")
        createText(data)
    }

    openUv.addEventListener("click",openModal)
    openUv.addEventListener("click",onOpen)
    closeModalBtn.addEventListener("click",closeModal)
}

