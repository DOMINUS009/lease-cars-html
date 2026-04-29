const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
menu.classList.toggle('active');
});


const playBtn = document.querySelector('.video__play');
const frame = document.querySelector('.video__frame');

playBtn.addEventListener('click', () => {
    frame.src="https://www.youtube.com/embed/4nfq18MG7Mo?autoplay=1";
    frame.style.display = "block";
    playBtn.style.display = "none";
})