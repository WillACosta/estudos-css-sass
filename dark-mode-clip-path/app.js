const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const body = document.querySelector('body');

window.addEventListener('load', () => {
    const theme = localStorage.getIteum('theme');

    if (theme) {
        body.classList.add(theme);
        console.log('theme: ', theme);
    }
});

darkButton.addEventListener('click', () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    console.log('Tema Escuro');
});

lightButton.addEventListener('click', () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
});