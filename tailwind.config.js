tailwind.config = {
    darkMode: 'class', // Use 'class' mode for toggling with a class (e.g., 'dark').
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                orange: '#ff6500',
                dark: '#373b48',
                bg_dark_mode: '#202020',
                slight_dark: 'rgba(0, 0, 0, 0.1)',
                slight_light: 'rgba(255, 255, 255, 0.1)'
            },
            fontFamily: {
                pt_sans: ["PT Sans", "sans-serif"],
                edu_au: ["Edu AU VIC WA NT Pre", "cursive"]
            }
        }
    }
}