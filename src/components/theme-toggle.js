const themeToggle = document.querySelector('.theme-toggle');
const sunIcon = themeToggle ? themeToggle.querySelector('.fa-sun') : null;
const moonIcon = themeToggle ? themeToggle.querySelector('.fa-moon') : null;


if (!themeToggle || !sunIcon || !moonIcon) {
    console.error('Theme toggle elements not found.');
} else {
   
    const currentTheme = localStorage.getItem('theme');

    
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
    updateIcon();

    function toggleTheme() {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateIcon();
    }


    function updateIcon() {
        if (document.body.classList.contains('dark-mode')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            moonIcon.style.color = 'white'; 
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    
    themeToggle.addEventListener('click', toggleTheme);
}
