'use strict';

const styles = 'font-size: 1.25em; font-weight: bold; padding: 5px;';

const body = document.querySelector('body');
const navIcon = document.getElementById('nav__hamburger-icon');
const checkbox = document.getElementById('nav__checkbox');
const projectsBtn = document.querySelector('.projects-btn');

// Check localStorage for dark mode setting on page load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
    checkbox.checked = true;
  }
});

// Toggle dark mode and store the setting in localStorage
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    enableDarkMode();
    localStorage.setItem('darkMode', 'enabled');
  } else {
    disableDarkMode();
    localStorage.setItem('darkMode', 'disabled');
  }
});

function enableDarkMode() {
  body.style.backgroundColor = 'var(--darkest)';
  body.style.color = 'white';
  body.style.transition = '0.2s';
}

function disableDarkMode() {
  body.style.backgroundColor = 'var(--lightest)';
  body.style.color = 'black';
  body.style.transition = '0.2s';
}

function keepIconsBlack() {
  let homeIcon = document.querySelector('.fa-user');
  let portfolioIcon = document.querySelector('.fa-folder');
  homeIcon.style.color = 'black';
  portfolioIcon.style.color = 'black';
}
keepIconsBlack();

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
