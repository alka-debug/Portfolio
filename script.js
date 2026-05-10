const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }

  });

}, {
  threshold:0.15
});

reveals.forEach((el) => {
  observer.observe(el);
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.style.background = "rgba(2,6,23,0.9)";
    navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
  }

  else{
    navbar.style.background = "rgba(2,6,23,0.65)";
  }

});

const cards = document.querySelectorAll(".skill-detail-card, .project-card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(59,130,246,0.14),
        rgba(15,23,42,0.8) 45%
      )
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.background = "rgba(15,23,42,0.6)";

  });

});
