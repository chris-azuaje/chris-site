'use strict';

const styles = 'font-size: 1.25em; font-weight: bold; padding: 5px;';

const body = document.querySelector('body');
const navIcon = document.getElementById('nav__hamburger-icon');
const checkbox = document.getElementById('nav__checkbox');
const projectsBtn = document.querySelector('.projects-btn');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.style.backgroundColor = 'var(--darkest)';
    body.style.color = 'white';
    body.style.transition = '0.2s';
    // projectsBtn.style.border = '3px solid white';
  } else {
    body.style.backgroundColor = 'var(--lightest)';
    body.style.color = 'black';
    body.style.transition = '0.2s';
    // projectsBtn.style.border = '3px solid black';
  }
});

navIcon.addEventListener('click', function () {
  navIcon.classList.toggle('open');
});

// Developer Tools Menu

console.group(
  `%cHi, I'm Chris Azuaje and thanks for checking out my portfolio!`,
  styles
);
console.log('%c🐈 Github - https://github.com/chris-azuaje', styles);
console.log(
  '%c👨‍💼 LinkedIn - https://www.linkedin.com/in/chris-azuaje-73ba46126/',
  styles
);
console.log('%c📫 Email - christopherazuaje@gmail.com', styles);
console.groupEnd();
