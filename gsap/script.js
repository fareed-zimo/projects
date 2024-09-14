// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
// gsap.from(".link", { duration: 0.5, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", ease: "power2.in", delay: 1 });
// gsap.from(".left", { duration: 2, x: "100vw", ease: "power2.in", delay: 1 });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 3.5 });
// gsap.fromTo(
//   ".button",
//   {
//     opacity: 0,
//     scale: 0,
//     rotation: 720,
//   },
//   { duration: 1, opacity: 1, scale: 1, rotation: 0, delay: 3.5 }
// );

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { duration: 2, x: "-100vw", ease: "power2.in" }, 1)
  .from(".left", { duration: 2, x: "100vw", ease: "power2.in" }, "<")
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    {
      opacity: 0,
      scale: 0,
      rotation: 720,
    },
    { opacity: 1, scale: 1, rotation: 0 }
  );

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});
