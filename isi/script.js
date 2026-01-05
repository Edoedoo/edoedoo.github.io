// TOGGLE ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// TOGGLE ICON MORE KEAHLIAN
let more = document.querySelector('.more');
if (more) {
    more.onclick = () => {
        more.classList.toggle('more-tutup');
    };
}

// RESET FORM ON RELOAD
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
};

// ================================
// ACTIVE NAV PER HALAMAN (TAMBAHAN)
// ================================
const navLinks = document.querySelectorAll('.navbar a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    // hapus active default
    link.classList.remove('active');

    // ambil href link
    const linkPath = new URL(link.href).pathname;

    // cocokkan halaman
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});

// fallback untuk homepage (index.html / /)
if (
    currentPath === '/' ||
    currentPath.endsWith('index.html')
) {
    document
        .querySelector('.navbar a[href*="index"]')
        ?.classList.add('active');
}
