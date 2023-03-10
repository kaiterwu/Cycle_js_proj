import Example from "./scripts/example"

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello world!")
    const main = document.getElementById("main")
    new Example(main);
    
    const apiKey = "4P48W2KCWFQAQ6SJ99K5H2VBM"
    const zip = "11040"
    const now = Math.floor(Date.now()/1000)


    async function getCurrentData() {
    
    try {
       const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}&include=current`);
       if (response.ok) {
         const data = await response.json();

         console.log(data);
       } else {
         throw response;
       }
    } catch (errorResponse) {
        console.error(errorResponse);
    }
  }

  getCurrentData()

});

