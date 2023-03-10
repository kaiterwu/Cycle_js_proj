import Example from "./scripts/example";
import getCurrentData from "./scripts/data"
import {drawPath,sunPath}  from "./scripts/sunmoves";


document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    const main = document.getElementById("main")
    new Example(main);
    drawPath();
    
    
    
    //silence this code before running webpack before changes to prevent extra queries 

    // getCurrentData()

    

});

