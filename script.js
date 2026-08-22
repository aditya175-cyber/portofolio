// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// mobile nav
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// reveal on scroll (includes staggered project cards via .proj-reveal)
const revealEls = document.querySelectorAll('.reveal, .proj-reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      entry.target.querySelectorAll('.bar-fill').forEach(fill => {
        fill.style.width = fill.dataset.w + '%';
      });
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// project filter, animated
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;

    cards.forEach(card => {
      const cats = card.dataset.cat.split(' ');
      const match = f === 'all' || cats.includes(f);
      if (match) {
        card.style.display = 'flex';
        // let the browser register display:flex before removing the hide class
        requestAnimationFrame(() => requestAnimationFrame(() => {
          card.classList.remove('filter-hide');
        }));
      } else {
        card.classList.add('filter-hide');
        setTimeout(() => {
          if (card.classList.contains('filter-hide')) card.style.display = 'none';
        }, 300);
      }
    });
  });
});
