const themeToggle = document.querySelector('.mode-changer');
const logo = document.querySelector('.logo');
const htmlElement = document.documentElement;

const navBar = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-bar');

// Load saved theme preference
const isDark = localStorage.getItem('theme') === 'dark';
htmlElement.classList.toggle('dark', isDark);
logo.src = isDark ? 'assets/dark-mode-logo-cropped.png' : 'assets/light-mode-logo-cropped.png';

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    logo.src = isDarkMode ? 'assets/dark-mode-logo-cropped.png' : 'assets/light-mode-logo-cropped.png';
});

const makeTheHeaderShadow = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.classList.add("shadow-simple_light", "dark:shadow-simple_dark")
    } else {
        header.classList.remove("shadow-simple_light", "dark:shadow-simple_dark")
    }
}

const showTheMenuBar = () => {
    navBar.classList.toggle('hidden')
}

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document
    showTheMenuBar();
});

// Hide the menu if the user clicks anywhere else
document.addEventListener("click", (event) => {
    // Check if the navBar is visible and the click is outside the navBar
    if (!navBar.classList.contains('hidden') && !navBar.contains(event.target)) {
        navBar.classList.add('hidden');
    }
});

window.addEventListener("scroll", makeTheHeaderShadow);