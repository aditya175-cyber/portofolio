// Form kontak via FormSubmit.co
const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.setAttribute('action', 'https://formsubmit.co/ajax/adityapratama6963@gmail.com');
  contactForm.setAttribute('method', 'POST');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm)
    })
    .then(response => response.json())
    .then(() => {
      alert('Message sent successfully!');
      contactForm.reset();
    })
    .catch(() => {
      alert('Error sending message. Please try again.');
    });
  });
}

// Like button: Dummy persistence
const likeBtn = document.querySelector('[data-like-btn]');
const likeCount = document.querySelector('[data-like-count]');
if (likeBtn) {
  let count = parseInt(localStorage.getItem('likeCount') || '48');
  let liked = localStorage.getItem('isLiked') === 'true';

  const update = () => {
    likeCount.textContent = `${count} Likes`;
    if (liked) likeBtn.style.color = 'var(--color-text-strong)';
  };

  likeBtn.addEventListener('click', () => {
    if (!liked) {
      count++;
      liked = true;
      localStorage.setItem('likeCount', count);
      localStorage.setItem('isLiked', 'true');
      update();
    }
  });
  update();
}

// Theme toggle
const themeToggle = document.querySelector('[data-theme-toggle]');
const sunIcon = document.querySelector('[data-sun-icon]');
const moonIcon = document.querySelector('[data-moon-icon]');

if (themeToggle) {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', currentTheme);
  
  const updateIcons = (theme) => {
    if (theme === 'light') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  };
  
  updateIcons(currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme);
  });
}

// ============================================================
// Accordion "What I do?": klik service untuk buka/tutup deskripsi.
// Satu-satunya service yang terbuka berganti saat item lain diklik.
// ============================================================
const services = document.querySelectorAll('.service');

services.forEach((service) => {
  const head = service.querySelector('.service__head');

  if (!head) return;

  head.addEventListener('click', () => {
    const wasOpen = service.classList.contains('service--open');

    // Tutup semua service yang lain.
    services.forEach((other) => {
      other.classList.remove('service--open');
      other.querySelector('.service__head')?.setAttribute('aria-expanded', 'false');
    });

    // Klik ulang pada item yang terbuka => melipat kembali.
    if (!wasOpen) {
      service.classList.add('service--open');
      head.setAttribute('aria-expanded', 'true');
    }
  });
});

// ============================================================
// Terminal "hacker": animasi mengetik baris demi baris, lalu loop.
// Baris statis di HTML dipakai sebagai fallback jika JS dimatikan.
// ============================================================
const terminalContent = document.querySelector('.terminal__content');

if (terminalContent && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const unreachable = /(\d{1,3}\.){3}\d{1,3}(?!\.\d)/;

  // Nurse script terminal — persis seperti baris statis di index.html.
  const terminalScript = [
    'aditya@horizon:~$ sudo ./init_identity --tag "Tamaa"',
    '[ OK ] Identity: Aditya Pratama (Tamaa)',
    '[ OK ] Role: Informatics Student · Karawang · Sem 3',
    '[ OK ] University: Horizon University Indonesia',
    'aditya@horizon:~$ cat focus.txt',
    '> Web dev · Game dev (Unity) · UI/UX Design',
    'aditya@horizon:~$ projects --list',
    '> MINERVA AI        [ DEPLOYED ]',
    '> Camera Tracking   [ ON DEV     ]',
    '> FlowHeart         [ DEPLOYED ]',
    '> Unity 3D Car Game [ ON DEV     ]',
    'aditya@horizon:~$ ./debug --error "haunting" --hours 4',
    '> Scanning stack... 0x7f3a... patched!',
    '> Error solved. Dopamine hit acquired.',
    'aditya@horizon:~$ mindset --print',
    '> "I wonder if I can build this?" -> "let\'s try."',
    'aditya@horizon:~$ echo $DREAM',
    '> Learning to build web, games, and design.',
    'aditya@horizon:~$ ssh tamaa@github --repo aditya175-cyber',
    '> Connection established. _'
  ];

  // Karakter acak untuk efek "decode" ala hacker.
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________@$%&';

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Tulis 1 baris per karakter dengan kecepatan acak.
  async function typeLine(line, text) {
    for (let i = 1; i <= text.length; i++) {
      line.textContent = text.slice(0, i);
      line.appendChild(cursor);
      // Kecepatan acak + jeda mikro biar terasa "hidup".
      await sleep(10 + Math.random() * 40);
      if (Math.random() < 0.04) await sleep(90 + Math.random() * 120);
    }
  }

  // Mulai baris dengan beberapa karakter sampah lalu "terurai" jadi teks asli.
  async function glitchLine(line, text) {
    line.appendChild(cursor);
    const previewLen = Math.min(10, text.length);

    for (let i = 0; i < 4; i++) {
      let garbage = '';
      for (let j = 0; j < previewLen; j++) {
        garbage += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      line.textContent = garbage;
      line.appendChild(cursor);
      await sleep(40);
    }

    if (unreachable.test(text) || text.includes('>')) {
      terminalContent.classList.add('terminal--glitch');
      await sleep(160);
      terminalContent.classList.remove('terminal--glitch');
    }
  }

  const cursor = document.createElement('span');
  cursor.className = 'terminal__cursor';
  cursor.setAttribute('aria-hidden', 'true');

  async function runTerminal() {
    // Hapus baris statis, lalu jalankan animasi selamanya.
    terminalContent.replaceChildren();

    for (;;) {
      for (const text of terminalScript) {
        const line = document.createElement('span');
        line.className = 'terminal__line';
        terminalContent.appendChild(line);

        await glitchLine(line, text);
        await typeLine(line, text);
        await sleep(140 + Math.random() * 160);
      }

      // Jeda di akhir "sesi" sebelum mulai lagi dari atas.
      await sleep(2800);
      terminalContent.replaceChildren();
    }
  }

  runTerminal();
}
const player = document.querySelector('[data-player]');
if (player) {
  const audio = new Audio();
  const tracks = [...player.querySelectorAll('.player__track')];
  const cover = player.querySelector('[data-cover]');
  const playBtn = player.querySelector('[data-play]');
  const icon = playBtn.querySelector('use');
  let i = 0;

  const load = (n) => {
    i = (n + tracks.length) % tracks.length;
    tracks.forEach((t, k) => t.classList.toggle('player__track--current', k === i));
    audio.src = tracks[i].dataset.src;
    cover.src = tracks[i].dataset.cover;
  };
  const play = () => audio.play().catch(() => {});

  audio.addEventListener('play', () => { icon.setAttribute('href', '#icon-pause'); playBtn.setAttribute('aria-label', 'Pause'); });
  audio.addEventListener('pause', () => { icon.setAttribute('href', '#icon-play'); playBtn.setAttribute('aria-label', 'Play'); });
  audio.addEventListener('ended', () => { load(i + 1); play(); });

  playBtn.addEventListener('click', () => (audio.paused ? play() : audio.pause()));
  player.querySelector('[data-prev]').addEventListener('click', () => { load(i - 1); play(); });
  player.querySelector('[data-next]').addEventListener('click', () => { load(i + 1); play(); });
  tracks.forEach((t, k) => t.addEventListener('click', () => (k === i ? playBtn.click() : (load(k), play()))));

  load(0);
}