
function pageTransition() {
  let tl = gsap.timeline();

  tl.to('.transition', .5, {
    transformOrigin: 'center',
    zIndex: 10,
    'clip-path': 'circle(139.9% at 1% 1%)',
  }).to('.transition', .5, {
    transformOrigin: 'center',
    delay: 0.8,
    'clip-path': 'circle(50% at 50% 50%)',
  }).to('.transition', .8, {
    opacity: 0,
    zIndex: -1,
    'clip-path': 'circle(0% at 50% 50%)'
  }).to('.transition', 0.2, {
    opacity: 1,
    'clip-path': 'circle(0% at 50% 50%)',
  })
}

function contentAnimation() {
  let tl1 = gsap.timeline();

  tl1.from(['header h1', 'header .nav'], 1, {
    opacity: 0,
    y: 50,
    stagger: {
      amount: 0.3
    }
  }).from('.album__roots img', 1, {
    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
    ease: 'power2.out',
  }).from('.album__roots #songs', 1, {
    opacity: 0
  }).from('.album__love #songs', 1, {
    opacity: 0
  }).from('.album__love img', 1, {
    'clip-path': 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
    ease: 'power2.out',
  })
}


function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  })
}

barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      pageTransition();
      await delay(1500);
      done();
    },

    async enter(data) {
      contentAnimation();
    },

    async once(data) {
      contentAnimation();
    }
  }]
})