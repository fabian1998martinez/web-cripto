const home = document.getElementById('home');
const homeButton = document.querySelector('#button');
const header = document.getElementById('header-home');
const bar = document.getElementById('nav-bar');
const nav = document.getElementById('nav');


homeButton.addEventListener('click',(e)=>{
    home.classList.toggle('home_toogle')
    header.classList.toggle('header_toogle')
})

bar.addEventListener('click',(e)=>{
    nav.classList.toggle('nav_toogle')
    
    
})

