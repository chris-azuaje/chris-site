const styles = 'font-size: 1.25em; font-weight: bold; padding: 5px;';

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

const body = document.querySelector('body');
const checkbox = document.getElementById('check');
const projectsBtn = document.querySelector('.projects-btn');

// projectsBtn.addEventListener('click', () => {
//   window.open(
//     'https://chris-azuaje.github.io/chris-azuaje-portfolio/',
//     '_blank'
//   );
// });

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

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
