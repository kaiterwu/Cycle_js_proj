import { getCurrentData } from "./data";

export function openIntroModal(){
    const modal = document.querySelector('.intro-modal');
    const submit = document.querySelector('#start');
    const overlay = document.querySelector(".overlay");

    function closeModal(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }

    function getZip(){
        let myZipcode = document.querySelector('#zipcode').value
        getCurrentData(myZipcode)
    }

    submit.addEventListener("click",closeModal)
    submit.addEventListener("click",getZip)

}

