// Select the theme toggle element and icons
const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = themeToggle ? themeToggle.querySelector('.fa-sun') : null;
const moonIcon = themeToggle ? themeToggle.querySelector('.fa-moon') : null;

// Check if themeToggle, sunIcon, or moonIcon is null
if (!themeToggle || !sunIcon || !moonIcon) {
    console.error('Theme toggle elements not found.');
} else {
    // Check the current theme in localStorage
    const currentTheme = localStorage.getItem('theme');

    // Apply the current theme if it exists
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        // Set default theme if none is set
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
    updateIcon();

    // Function to toggle between light and dark mode
    function toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            // Switch to light mode
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            // Switch to dark mode
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateIcon();
    }

    // Function to update the icon based on the current theme
    function updateIcon() {
        if (document.body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            moonIcon.style.color = 'white'; // Make the moon icon white in dark mode
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    // Add event listener to the theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
}
