// Code for Top Button
var topButton = document.getElementById("top");
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  window.scrollY > 500
    ? (topButton.style.opacity = 1)
    : (topButton.style.opacity = 0);
};

// Code for Hamburger Menu Button
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("show");
  if (navBar.classList.contains("show")) {
    hamburger.style.color = "#fff";
  } else {
    hamburger.style.color = "#0d4c92";
  }
});
