let tl = new gsap.timeline();

tl.from('.title__main', 1.5, {
  delay: 1.5,
  opacity: 0,
  'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
}).from(['.line-1', '.line-2'], 2, {
  width: '0%',
}, '-=1').from(['.intro h5', '.intro p'], 1.2, {
  y: 20,
  opacity: 0,
  stagger: {
    amount: 0.5
  }
}, '-=0.8').from('.showcase .star', 1, {
  opacity: 0,
}, '-=0.8').from('.image__container', 1, {
  opacity: 0,
  'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
}, '-=0.8').from('.nav__links li', {
  opacity: 0,
  y: 20,
  stagger: {
    amount: 0.4
  }
}).from(['.perform', '.award'], 1.5, {
  y: 40,
  opacity: 0,
}, '-=0.8')