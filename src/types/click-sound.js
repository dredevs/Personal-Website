
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');

    const clickSound = new Audio('/public/sound/click.mp3');

    function playSound() {
        clickSound.play();
    }

    if (homeLink) {
        homeLink.addEventListener('click', playSound);
    }

    if (contactLink) {
        contactLink.addEventListener('click', playSound);
    }
});
