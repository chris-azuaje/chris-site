const body = document.querySelector("body");
const checkbox = document.getElementById("check");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.style.backgroundColor = "var(--darkest)";
    body.style.color = "white";
    body.style.transition = "0.2s";
  } else {
    body.style.backgroundColor = "var(--lightest)";
    body.style.color = "black";
    body.style.transition = "0.2s";
  }
});

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}
