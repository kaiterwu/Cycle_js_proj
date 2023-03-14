export function openIntroModal(){
    const modal = document.querySelector('.intro-modal');
    const submit = document.querySelector('#start');
    const overlay = document.querySelector(".overlay");

    function closeModal(){
        modal.classList.add("hidden")
        overlay.classList.add("hidden")
    }

    submit.addEventListener("click",closeModal)

}