
document.addEventListener('DOMContentLoaded', function(){ 
  // nav toggle for mobile
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', ()=> nav.classList.toggle('open'));

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if(nav.classList.contains('open')) nav.classList.remove('open');
    });
  });

  // reveal on scroll using IntersectionObserver
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, {threshold: 0.12});

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  document.querySelectorAll('.reveal-img').forEach(el => obs.observe(el));
});
