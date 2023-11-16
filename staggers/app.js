gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  y: -100,
  duration: 1,
  ease: "power1",
  repeat: -1,
  yoyo: true,
  stagger: {
    amount: 1,
    each: 1,
  },
});
