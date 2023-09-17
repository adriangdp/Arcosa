const burguer = document.getElementById('burguer');
const menu = document.getElementById('burguer-menu');

burguer.addEventListener('click', () => {

    burguer.classList.toggle('is-active');
    menu.classList.toggle('is-active');

})