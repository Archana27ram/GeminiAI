const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav a');

if (menuToggle && header) {
  menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
