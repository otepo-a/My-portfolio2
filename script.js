function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

window.addEventListener('scroll', function () {
  const desktopNav = document.querySelector('.nav1');
  const hamburgerNav = document.querySelector('#hamburger-nav');
  const scrolled =
    window.scrollY >
    (desktopNav
      ? desktopNav.offsetHeight
      : hamburgerNav
        ? hamburgerNav.offsetHeight
        : 0);
  if (desktopNav) desktopNav.classList.toggle('navbar-scrolled', scrolled);
  if (hamburgerNav) hamburgerNav.classList.toggle('navbar-scrolled', scrolled);
});
