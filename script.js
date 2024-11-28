const themeToggle = document.querySelector('.mode-changer');
const logo = document.querySelector('.logo');
const htmlElement = document.documentElement;

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
