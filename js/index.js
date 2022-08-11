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
    amount: 0.7
  }
}, '-=2').from('.benji-text p', 1, {
  y: 30,
  opacity: 0
}, '-=0.5').from('.nav__link', 2, {
  opacity: 0,
  stagger: {
    amount: 1
  },
  onComplete() {
    setTimeout(changeAnimation, 3000)
  }
}, '-=1')


const okorieAnimation = () => {
  let tl = gsap.timeline();

  tl.from('.okorie img', 3, {
    opacity: 0
  }).from('.okorie-text h2 span', 1, {
    scale: 0.5,
    opacity: 0,
    y: 30,
    x: 20,
    ease: "back.out(2)",
    stagger: {
      amount: 0.7
    }
  }, '-=1').from('.okorie-text p', 1, {
    y: 30,
    opacity: 0
  }, '-=0.5')
}

const changeAnimation = () => {
  const benji = document.querySelector('.benji');
  const okorie = document.querySelector('.okorie');
  benji.classList.add('hide');
  okorie.classList.add('show');

  okorieAnimation();
}

const links = document.querySelectorAll('.nav__link');
links.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    let linkTl = gsap.timeline();

    linkTl.to(`.link__${index+1} img`, 1.2, {
      scale: 1.3,
      ease: "back.out(2)",
    }).to(`.link__${index+1} .link-text span`, 0.8, {
      opacity: 1,
      y: -30,
      x: -20,
      ease: "back.out(2)",
      stagger: {
        amount: 0.7
      }
    }, "-=1.5")
  })

  link.addEventListener('mouseleave', () => {
    let linkLeaveTL = gsap.timeline();

    linkLeaveTL.to(`.link__${index+1} .link-text span`, 0.8, {
      opacity: 0,
      y: 0,
      x: 0,
      ease: "back.out(2)",
      stagger: {
        amount: 0.6
      }
    }).to(`.link__${index+1} img`, 1, {
      scale: 1,
    }, "-=2")
  })

  
})