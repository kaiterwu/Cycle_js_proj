export function openSelectModal(){
    
    const modal = document.querySelector('.intro-modal');
    const overlay = document.querySelector(".overlay");
    const selectButt = document.querySelector("#date-button")

    const selectContainer = document.createElement("div")
    selectContainer.setAttribute("id","selectContainer")
    
    const selectDate = document.createElement("input")
    selectDate.setAttribute("type","date")
    selectDate.setAttribute("id","input-date")

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
    enterZip.placeholder = "ZIP code"
    enterZip.defaultValue = zipcode
    
    const closeButt = document.createElement("button")
    closeButt.setAttribute("id","closeSelect")
    closeButt.innerText = "←"
    closeButt.style.width = "100px"

    const enterInputs = document.createElement("button")
    enterInputs.setAttribute("id","enterInputs")
    enterInputs.innerText = "→"

    selectContainer.append(enterZip,selectDate,dayNight,enterInputs,closeButt)



    function openSelect(){
        modal.innerHTML = ""
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
        modal.append(selectContainer)
        
    }

    function closeSelect(){
        modal.innerHTML = ""
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }

    selectButt.addEventListener("click",openSelect)
    closeButt.addEventListener("click",closeSelect)
    enterInputs.addEventListener("click",closeSelect)

}