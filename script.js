const themeToggle = document.querySelector('.mode-changer');
const themeIcon = themeToggle.querySelector('i');
const logo = document.querySelector('.logo');
const htmlElement = document.documentElement;

const navBar = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-bar');

const navUlItem = navBar.querySelectorAll('ul li');
const sections = document.querySelectorAll('#hero-section, #about-me, #services, #gallery, #contact');
let lastActiveIndex = -1;

const services = document.querySelectorAll(".services .boxes .box");
const showBtn = document.querySelector(".show-more");
let isShown = false;

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

    console.log(window.scrollY);

    let currentActiveIndex = -1;

    // Calculate the current scroll position
    const scrollPosition = window.scrollY + window.innerHeight / 3; // Allow for smoother activation point

    // Loop through sections to determine which section is currently visible
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // We need a buffer zone between sections. This ensures smooth transition between sections.
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActiveIndex = index;
        }
    });

    // If the active index has changed, update the active class on the nav links
    if (currentActiveIndex !== lastActiveIndex) {
        // Remove active classes from all nav links
        navUlItem.forEach(link => {
            link.classList.remove("text-orange");
            link.classList.add(
                "cursor-pointer",
                "transition",
                "active:text-orange",
                "md:hover:text-orange",
                "dark:text-white"
            );
        });

        // Add the active class to the current active link
        if (currentActiveIndex !== -1) {
            navUlItem[currentActiveIndex].classList.remove(
                "cursor-pointer",
                "transition",
                "active:text-orange",
                "md:hover:text-orange",
                "dark:text-white"
            );
            navUlItem[currentActiveIndex].classList.add("text-orange");
        }

        lastActiveIndex = currentActiveIndex;
    }
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

const showMoreServices = () => {
    isShown = !isShown;
    for (let i = 4; i <= 7; i++) {
        services[i].classList.toggle("hidden")
    }

    showBtn.textContent = isShown ? "Show less" : "Show more";
}

const viewMore = document.querySelector(".view-more")

const loadTheImages = () => {
    const imagesContainer = document.querySelector(".images");
    const numberOfImages = 29;

    for (let i = 1; i <= numberOfImages; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        imagesContainer.append(card);

        const cardImage = document.createElement("img");
        cardImage.src = `assets/Gallery/image ${i}.jpg`;
        cardImage.alt = `Image number ${i}`;
        cardImage.loading = "lazy";
        card.append(cardImage);

        if (i > 8) {
            card.classList.add("hidden");
        }
    }
}

const showAllImages = () => {
    const hiddenCards = document.querySelectorAll(".card.hidden");

    if (hiddenCards.length > 0) {
        hiddenCards.forEach(card => card.classList.remove("hidden"));
        viewMore.textContent = "View Less";
    } else {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card, index) => {
            if (index >= 8) {
                card.classList.add("hidden");
            }
        });
        viewMore.textContent = "View More";
    }
}

window.addEventListener("scroll", makeTheHeaderShadow);
showBtn.addEventListener("click", showMoreServices);
window.addEventListener("load", loadTheImages);
viewMore.addEventListener("click", showAllImages)