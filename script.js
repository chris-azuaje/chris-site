const checkbox = document.getElementById("check");
const body = document.querySelector("body");
const linkGthb = document.querySelector(".social-gthb");
const linkTwtr = document.querySelector(".social-twtr");
const linkLnkdn = document.querySelector(".social-lnkdn");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.style.backgroundColor = "var(--darkest)";
    body.style.color = "white";
    body.style.transition = "0.2s";
    linkGthb.style.color = "white";
    linkTwtr.style.color = "white";
    linkLnkdn.style.color = "white";
    linkGthb.style.transition = "0.2s";
    linkTwtr.style.transition = "0.2s";
    linkLnkdn.style.transition = "0.2s";
  } else {
    body.style.backgroundColor = "var(--lightest)";
    body.style.color = "black";
    body.style.transition = "0.2s";
    linkGthb.style.color = "black";
    linkTwtr.style.color = "black";
    linkLnkdn.style.color = "black";
    linkGthb.style.transition = "0.2s";
    linkTwtr.style.transition = "0.2s";
    linkLnkdn.style.transition = "0.2s";
  }
});
