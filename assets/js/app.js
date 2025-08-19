document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');
  if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('open'));

  const play = document.querySelector('.play-btn');
  const audio = document.querySelector('#audio-hero');
  if (play && audio) {
    play.addEventListener('click', () => {
      if (audio.paused) { audio.play().catch(()=>{}); play.innerText='❚❚'; }
      else { audio.pause(); play.innerText='▶'; }
    });
  }

  // Basic intersection lazy-loading (for images without native loading attr)
  const lazyImgs = document.querySelectorAll('img[data-src]');
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target; img.src = img.dataset.src; img.removeAttribute('data-src'); observer.unobserve(img);
      }
    });
  }, {rootMargin:'200px'});
  lazyImgs.forEach(img => obs.observe(img));
});