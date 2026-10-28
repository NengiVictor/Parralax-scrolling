const parallaxBgs = document.querySelectorAll('.parallax-bg');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  
  parallaxBgs.forEach(bg => {
    // Move background at half the speed of the scroll
    bg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });
});