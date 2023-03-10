import Example from "./scripts/example"
import getCurrentData from "./scripts/data";

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    const main = document.getElementById("main")
    new Example(main);
    const currentData = getCurrentData()
    window.currentData = currentData

});

