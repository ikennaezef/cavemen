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
  }, '-=0.1')
}

function contentAnimation() {

  let showcase = new hoverEffect({
    parent: document.querySelector('.image__container'),
    intensity: 0.3,
    imagesRatio: 1080 / 1920,
    image1: './images/home_image.png',
    image2: './images/home_image_2.png',
    displacementImage: './images/7.jpg'
  })

  let tl = new gsap.timeline();

  tl.from('.title div', 1.2, {
    delay: 1.5,
    opacity: 0,
    'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
  }).from(['.line-1', '.line-2'], 1.5, {
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
    stagger: {
      amount: 0.3
    }
  }, '-=0.8')



  // ========== MUSIC PAGE ANIMATION

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

  console.clear();
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


const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
})