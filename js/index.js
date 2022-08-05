let tl = gsap.timeline();

tl.from('.logo', 3, {
  opacity: 0
}).from('.benji img', 3, {
  opacity: 0,
}, '-=0.5').from('.benji-text h2 span', 1, {
  scale: 0.5,
  opacity: 0,
  y: 30,
  x: 20,
  ease: "back.out(2)",
  stagger: {
    amount: 0.5
  }
}, '-=2.5').from('.benji-text p', 1, {
  y: 30,
  opacity: 0
}, '-=0.5').from('.nav__link', 2, {
  opacity: 0,
  stagger: {
    amount: 1
  },
  onComplete() {
    console.log('the animation ios done')
  }
}, '-=1')