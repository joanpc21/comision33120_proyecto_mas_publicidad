const menu = document.querySelector('.nav_links');
const btn = document.querySelector('.menu-btn');

 btn.addEventListener('click', () => {
  menu.classList.toggle('active')
 })