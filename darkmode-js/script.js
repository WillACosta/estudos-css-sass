const htmlEl = document.querySelector('html');
const chkBox = document.querySelector('input[name=theme]');

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)


/** Pegar o estilo do elemento html */
const lightColors = {
    bg: getStyle(htmlEl, '--bg'),
    bgPanel: getStyle(htmlEl, '--bg-panel'),
    colorHeadings: getStyle(htmlEl, '--color-headings'),
    colorText: getStyle(htmlEl, '--color-text'),
}

const darkColors = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
}

// RegExp procura as letras maiúsculas e altera para -$1 (- e valor)
const transformKey = key => "--" + key.replace(/^([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    console.log(colors);
    Object.keys(colors).map(key => {
        htmlEl.style.setProperty(transformKey(key), colors[key]);
    })
}

chkBox.addEventListener('change', ({
    target
}) => {
    target.checked ? changeColors(darkColors) : changeColors(lightColors)
})