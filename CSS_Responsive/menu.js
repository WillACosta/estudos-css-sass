// Menu responsivo
let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener('click', () => {

    // Impedir rolagem do body
    document.body.style.overflow = show ? 'hidden' : 'initial';

    // Toggle adiciona e remove a classe indicada sempre que o evento for disparado
    menuSection.classList.toggle('on', show); // Força apenas se show for true
    show = !show;
});