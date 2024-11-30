const themeToggle = document.querySelector('.mode-changer');
const themeIcon = themeToggle.querySelector('i');
const logo = document.querySelector('.logo');
const htmlElement = document.documentElement;

const navBar = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-bar');

const navUlItem = navBar.querySelectorAll('ul li');

// Load saved theme preference
const isDark = localStorage.getItem('theme') === 'dark';
htmlElement.classList.toggle('dark', isDark);
logo.src = isDark ? 'assets/dark-mode-logo-cropped.png' : 'assets/light-mode-logo-cropped.png';
themeIcon.classList.add(isDark ? "fa-moon" : "fa-sun");

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    logo.src = isDarkMode ? 'assets/dark-mode-logo-cropped.png' : 'assets/light-mode-logo-cropped.png';
    if (isDarkMode) {
        themeIcon.classList.replace("fa-sun", "fa-moon"); // Sun to Moon
    } else {
        themeIcon.classList.replace("fa-moon", "fa-sun"); // Moon to Sun
    }
});

const makeTheHeaderShadow = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.classList.add("shadow-simple_light", "dark:shadow-simple_dark")
    } else {
        header.classList.remove("shadow-simple_light", "dark:shadow-simple_dark")
    }

    // console.log(window.scrollY);

    let currenActiveIndex = 0;

    if (window.scrollY < 1166) {
        currenActiveIndex = 0;
    } else if (window.scrollY >= 1166 && window.scrollY < 1900) {
        currenActiveIndex = 1;
    } else if (window.scrollY >= 1900 && window.scrollY < 3018) {
        currenActiveIndex = 2;
    } else {
        currenActiveIndex = 3;
    }

    navUlItem.forEach((item, index) => {
        if (index === currenActiveIndex) {
            item.classList.remove(
                "cursor-pointer",
                "transition",
                "active:text-orange",
                "md:hover:text-orange",
                "dark:text-white"
            );
            item.classList.add("text-orange");
        } else {
            item.classList.remove("text-orange");
            item.classList.add(
                "cursor-pointer",
                "transition",
                "active:text-orange",
                "md:hover:text-orange",
                "dark:text-white"
            );
        }
    });
}

const showTheMenuBar = () => {
    navBar.classList.toggle('hidden')
}

menuIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    showTheMenuBar();
});

document.addEventListener("click", (event) => {
    if (!navBar.classList.contains('hidden') && !navBar.contains(event.target)) {
        navBar.classList.add('hidden');
    }
});

const changeTheActiveNavItem = () => {
    // console.log(window.screenY)
}

window.addEventListener("scroll", makeTheHeaderShadow);
window.addEventListener("scroll", changeTheActiveNavItem);