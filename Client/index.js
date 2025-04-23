// index.js

// Toggle dark/light mode
const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Toggle "Show More" section
const showMoreBtn = document.querySelector(".show-more");
const extraInfo = document.getElementById("extra-info");

showMoreBtn?.addEventListener("click", () => {
  extraInfo.classList.toggle("hidden");
}); 

// Fade out header on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.style.opacity = 1 - window.scrollY / 200;
});
