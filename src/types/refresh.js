document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

function smoothRefresh(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = href;
    }, 500);
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', smoothRefresh);
});
