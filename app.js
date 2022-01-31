const tl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power1.out" },
});

tl.fromTo(
  ".hero-img",
  {
    scale: 1.3,
    borderRadius: "0rem",
  },
  {
    scale: 1,
    borderRadius: "5rem",
    ease: "elastic.out(1, 0.8)",
    duration: 2,
  }
);
tl.from(".cta1", { opacity: 0, x: -100 });
tl.from(".cta2", { opacity: 0, y: -100 }, "<.1");
tl.from(".cta3", { opacity: 0, x: 100 }, "<.1");
tl.from(".cta4", { opacity: 0, y: -100 }, "<.1");
tl.from(".cta5", { opacity: 0, x: -100 }, "<.1");
tl.from(".cta6", { opacity: 0, y: 100 }, "<.1");

let title = document.querySelector(".title");

let newTitle = title.textContent.split("");

title.textContent = "";

newTitle.forEach((char) => {
  title.innerHTML += `<span class="letter">${char}</span>`;
});

gsap.from(".letter", {
  y: 100,
  ease: "elastic.out(1, 0.8)",
  duration: 1,
  delay: 2,
  stagger: 0.1,
});
