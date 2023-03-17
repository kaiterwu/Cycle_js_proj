import { getCurrentData } from "./data";

export function openIntroModal(){
    const modal = document.querySelector('.intro-modal');
    const submit = document.querySelector('#start');
    const overlay = document.querySelector(".overlay");

    function closeModal(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
        playSong()
    }

    function getZip(){
        let myZipcode = document.querySelector('#zipcode').value
        getCurrentData(myZipcode)

    }

    function playSong(){
        let song = document.querySelector('#startSong')
        song.play()
        song.volume = 0.3;
    }


    submit.addEventListener("click",closeModal)
    submit.addEventListener("click",getZip)

}

export function volume(){
    const songButton = document.querySelector('#songplay')

    const song = document.querySelector('#startSong')

    function mute(){    
        if (song.muted){
            song.muted = false
            songButton.innerText = "∣∣"
        }else{
            song.muted = true 
            songButton.innerText = '♫'
        }
    }  
    songButton.addEventListener("click",mute)

}



