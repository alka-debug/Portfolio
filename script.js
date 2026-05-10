// CARD REVEAL

const revealElements = document.querySelectorAll(
  ".skill-detail-card, .project-card, .about p, .section-title, .hero-text, .hero-image"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach((el) => {
  observer.observe(el);
});

// TYPING EFFECT

const title = document.querySelector(".hero h1");

const text =
  "Building Strong Technical Foundations For Modern Infrastructure";

title.innerHTML = "";

let index = 0;

function typeText() {

  if (index < text.length) {

    title.innerHTML += text.charAt(index);
    index++;

    setTimeout(typeText, 35);
  }
}

window.addEventListener("load", typeText);

// NAVBAR SCROLL EFFECT

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    nav.classList.add("nav-scrolled");

  } else {

    nav.classList.remove("nav-scrolled");

  }
});

// PARALLAX HERO IMAGE

window.addEventListener("mousemove", (e) => {

  const image = document.querySelector(".hero-image");

  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  image.style.transform = `translate(${x}px, ${y}px)`;
});

// GLOW FOLLOWER

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});
