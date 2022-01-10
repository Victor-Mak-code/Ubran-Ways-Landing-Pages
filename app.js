const popUp = document.querySelector('.scroll-pop');
const btnClose = document.querySelector('.close-btn');


window.addEventListener('load', ()=>{
    setTimeout(() => {
        popUp.classList.add('show-popup')
    }, 4000);
})

popUp.addEventListener('click', ()=>{
    popUp.classList.add('remove-popup')
})