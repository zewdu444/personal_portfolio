const mobileoption = document.getElementById('mobileoption');
const body = document.querySelector('body');
const barClick = document.getElementById('barClick');
const popupWindow =document.getElementById('popupmenu')
const seeProject=Array.from(document.querySelectorAll('.projectbutton'))
mobileoption.style.display = 'none';

// add event listener to click barclick
barClick.addEventListener('click', () => {
  mobileoption.style.display = 'block';
  body.style.overflow = 'hidden';
});

// add event listener to mobile option
mobileoption.addEventListener('click', () => {
  mobileoption.style.display = 'none';
  body.style.overflow = 'auto';
});
// check screen size and turned off mobile option in desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileoption.style.display = 'none';
  }
});

seeProject[2].addEventListener('click',()=>{
popupWindow.style.display='block'
});
