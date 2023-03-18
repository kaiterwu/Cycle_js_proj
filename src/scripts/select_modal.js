import { getCurrentData,getPastData } from "./data";

function clearContainer(){
    let theSun = document.querySelector("#sun-path")
    let theMoon = document.querySelector("#moons")
    let theSeasons = document.querySelector("#seasons")
    let theTemp = document.querySelector("#temp-widget")
    let theHumid = document.querySelector("#humid-widget")
    let theUv = document.querySelector("#uv-widget")
    let thePrecip = document.querySelector("#precip-widget")
    let location = document.querySelector("#location")

    theSun.innerHTML = ""
    theMoon.innerHTML = ""
    theSeasons.innerHTML = ""
    location.innerHTML = ""
    theTemp.innerHTML = ""
    theHumid.innerHTML = ""
    theUv.innerHTML = ""
    thePrecip.innerHTML = ""
    
}

export function openSelectModal(){
    
    const modal = document.querySelector('.intro-modal');
    const overlay = document.querySelector(".overlay");
    const selectButt = document.querySelector("#date-button")
    
    const selectContainer = document.createElement("div")
    selectContainer.setAttribute("id","selectContainer")
    
    const enterInputs = document.createElement("button")
    enterInputs.setAttribute("id","enterInputs")
    enterInputs.innerText = "→"
    
    const closeButt = document.createElement("button")
    closeButt.setAttribute("id","closeSelect")
    closeButt.innerText = "←"
    closeButt.style.width = "100px"
    
    function createElements(){
        const selectDate = document.createElement("input")
        selectDate.setAttribute("type","date")
        selectDate.setAttribute("id","input-date")

        let currentDate = new Date()
        // currentDate = currentDate.toISOString().slice(0,10)
        selectDate.min = "1970-01-01"
        
        const dayNight = document.createElement("div")
        dayNight.setAttribute("id","dayNight")

            const day = document.createElement("input")
            day.setAttribute("type","radio")
            day.setAttribute("id","dayRadio")
            day.value ="Day"
            day.name="timeofDay"
            const dayLabel = document.createElement("label")
            dayLabel.setAttribute("for","dayRadio")
            dayLabel.innerText = "Day"
        


            const night = document.createElement("input")
            night.setAttribute("type","radio")
            night.setAttribute("id","nightRadio")
            night.name = "timeofDay"
            night.value = "Night"
            const nightLabel = document.createElement("label")
            nightLabel.setAttribute("for","nightRadio")
            nightLabel.innerText = "Night"



            dayNight.append(dayLabel,day,nightLabel,night)

        
        
        const enterZip = document.createElement("input")
        enterZip.setAttribute("type", "number")
        enterZip.setAttribute("id","selectZip")
        enterZip.placeholder = "ZIP Code"
        
        


        selectContainer.append(enterZip,selectDate,dayNight,enterInputs,closeButt)

    }
        


    function openSelect(){
        modal.innerHTML = ""
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
        createElements()
        modal.append(selectContainer)
        
       
        
    }

    function closeSelect(){
        selectContainer.innerHTML = ""
        modal.innerHTML=""
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }

    function getSelectData(){
        let myNewZip = document.querySelector("#selectZip").value
        let myNewDate = document.querySelector("#input-date").value
        let dayRadio = document.querySelector("#dayRadio").checked
        let nightRadio = document.querySelector("#nightRadio").checked

        let theSun = document.querySelector("#sun-path")
        let theMoon = document.querySelector("#moons")
        let theSeasons = document.querySelector("#seasons")

        let currentDate = new Date()
        currentDate = currentDate.toISOString().slice(0,10)
        

        if (currentDate === myNewDate){
            clearContainer()
            getCurrentData(myNewZip)
        }else{
            if (nightRadio){
                //HAVE TO CLEAR CONTAINERS FOR ID seasons, moons, sun-path
                clearContainer()
                getPastData(myNewZip,myNewDate,"21:00:00")
                
            }else{
                clearContainer()
                getPastData(myNewZip,myNewDate,"09:00:00")
            }
        }

        // console.log(myNewZip)
        // console.log(myNewDate)
        // console.log(dayRadio)
        // console.log(nightRadio)
        

    }


    selectButt.addEventListener("click",openSelect)
    closeButt.addEventListener("click",closeSelect)
    enterInputs.addEventListener("click",getSelectData)
    enterInputs.addEventListener("click",closeSelect)

}