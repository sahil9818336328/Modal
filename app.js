// getting the elements
const Obtn = document.querySelector('.modal-btn');
const Cbtn = document.querySelector('.close-btn');
const Moverlay = document.querySelector('.modal-overlay');

//opening the modal
Obtn.addEventListener('click',function(){
    Moverlay.classList.add("open-modal");
});

//closing the modal
Cbtn.addEventListener('click',function(){
    Moverlay.classList.remove('open-modal');
});