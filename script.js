const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav__links a");
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  nav.classList.toggle("site-nav--scrolled", window.scrollY > 12);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link = document.querySelector(.site-nav__links a[href="#"]);
      if (!link) return;
      navLinks.forEach((navLink) => navLink.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));
