document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".content-card");
  const wrapper = document.querySelector(".parallax-wrapper");

  const observerOptions = {
    root: wrapper, 
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });
});