import Example from "./scripts/example";
import getCurrentData from "./scripts/data"


document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    const main = document.getElementById("main")
    new Example(main);
    
    const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
    const zip = "11040"
    const now = Math.floor(Date.now()/1000)

    getCurrentData()
    
    

});

