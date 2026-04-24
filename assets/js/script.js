"use strict";

const header = document.querySelector(".topbar");
const navLinks = Array.from(document.querySelectorAll(".topnav a"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const yearNode = document.getElementById("year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const start = section.offsetTop;
    const end = start + section.offsetHeight;
    const matchingLink = navLinks.find(
      (link) => link.getAttribute("href") === `#${section.id}`
    );

    if (!matchingLink) {
      return;
    }

    if (scrollPosition >= start && scrollPosition < end) {
      navLinks.forEach((link) => link.classList.remove("is-active"));
      matchingLink.classList.add("is-active");
    }
  });
};

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

window.addEventListener("scroll", () => {
  updateHeaderState();
  setActiveLink();
});

window.addEventListener("load", () => {
  updateHeaderState();
  setActiveLink();
});
