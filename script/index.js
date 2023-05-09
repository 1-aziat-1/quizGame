const startProgramme = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');


startProgramme.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});
