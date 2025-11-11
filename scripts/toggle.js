const toggle = document.querySelector('.theme-toggle');
const toggle_circle = document.querySelector('.theme-circle'); 
const body = document.querySelector('body');


toggle.addEventListener('click', () => {
    toggle_circle.classList.toggle('dark');
    body.classList.toggle('dark');
}); 