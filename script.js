const themeToggle = document.querySelector('.mode-changer');
const logo = document.querySelector('.logo')
const htmlElement = document.documentElement;

let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    htmlElement.classList.toggle('dark');

    if (isDark) {
        logo.src = 'assets/dark-mode-logo-cropped.png';
    } else {
        logo.src = 'assets/light-mode-logo-cropped.png'
    }
});