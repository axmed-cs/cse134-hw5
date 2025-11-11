const toggle = document.querySelector('.theme-toggle');
const toggle_circle = document.querySelector('.theme-circle'); 
const body = document.querySelector('body');


const mode = JSON.parse(localStorage.getItem('mode')); 

if (mode == 'dark'){
    body.classList.add('dark');
    toggle_circle.classList.add('dark');
} 

toggle.addEventListener('click', () => {
    toggle_circle.classList.toggle('dark');
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
}); 
