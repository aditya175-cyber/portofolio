// header scroll state
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// day/night theme toggle
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
  document.body.classList.add('theme-light');
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('theme-light');
  const isLight = document.body.classList.contains('theme-light');
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
});
// cursor trail effect
const cursor = document.createElement('div');
cursor.className = 'cursor-trail';
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// interactive hover effects
document.querySelectorAll('.btn, .project-card, .service-card, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

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

 
// typing effect for hero role
const heroRole = document.querySelector('.hero-role');
if (heroRole) {
  const originalText = heroRole.textContent;
  heroRole.textContent = '';
  let i = 0;

  function typeWriter() {
    if (i < originalText.length) {
      heroRole.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }

  setTimeout(typeWriter, 500);
}

// interactive skill bars with click to toggle
document.querySelectorAll('.bar-row').forEach(bar => {
  bar.addEventListener('click', () => {
    const fill = bar.querySelector('.bar-fill');
    const currentWidth = fill.dataset.w;
    fill.style.width = fill.style.width === '0%' ? currentWidth + '%' : '0%';
  });
});

// contact form -> sends real email via Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = 'Sending...';
    formStatus.className = 'form-status';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        formStatus.textContent = 'Message sent, thank you!';
        formStatus.classList.add('ok');
        contactForm.reset();
      } else {
        formStatus.textContent = 'Failed to send. Try again later.';
        formStatus.classList.add('err');
      }
    } catch (err) {
      formStatus.textContent = 'Failed to send. Check your internet connection.';
      formStatus.classList.add('err');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// project read more -> modal with gallery + description + link
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const modalNoLink = document.getElementById('modalNoLink');
const modalClose = document.getElementById('modalClose');
const galImage = document.getElementById('galImage');
const galPrev = document.getElementById('galPrev');
const galNext = document.getElementById('galNext');
const galDots = document.getElementById('galDots');

let galleryImages = [];
let galleryIndex = 0;

function renderGalleryImage() {
  if (!galleryImages.length) return;
  galImage.src = galleryImages[galleryIndex];
  galImage.alt = modalTitle.textContent + ' screenshot ' + (galleryIndex + 1);
  galDots.querySelectorAll('.gal-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === galleryIndex);
  });
}

function setupGallery(images) {
  galleryImages = images;
  galleryIndex = 0;
  galDots.innerHTML = '';

  const multiple = galleryImages.length > 1;
  galPrev.classList.toggle('is-hidden', !multiple);
  galNext.classList.toggle('is-hidden', !multiple);

  if (multiple) {
    galleryImages.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'gal-dot';
      dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
      dot.addEventListener('click', () => {
        galleryIndex = i;
        renderGalleryImage();
      });
      galDots.appendChild(dot);
    });
  }

  renderGalleryImage();
}

galPrev.addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
  renderGalleryImage();
});
galNext.addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  renderGalleryImage();
});

function openProjectModal(trigger) {
  const { title, subtitle, desc, link, images } = trigger.dataset;
  modalTitle.textContent = title || '';
  modalSubtitle.textContent = subtitle || '';
  modalDesc.textContent = desc || '';

  const imageList = (images || '')
    .split(',')
    .map(src => src.trim())
    .filter(Boolean);
  setupGallery(imageList);

  if (link && link.trim() !== '' && link.trim() !== '#') {
    modalLink.href = link;
    modalLink.classList.remove('is-hidden');
    modalNoLink.classList.remove('is-shown');
  } else {
    modalLink.classList.add('is-hidden');
    modalNoLink.classList.remove('is-shown');
  }

  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProjectModal() {
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('.js-readmore').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openProjectModal(link);
  });
});

if (modalClose) modalClose.addEventListener('click', closeProjectModal);
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (!projectModal.classList.contains('open')) return;
  if (e.key === 'Escape') closeProjectModal();
  if (e.key === 'ArrowLeft' && !galPrev.classList.contains('is-hidden')) galPrev.click();
  if (e.key === 'ArrowRight' && !galNext.classList.contains('is-hidden')) galNext.click();
});

// easter egg: konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 5000);
  }
});
