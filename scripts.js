/* scripts.js - simple and clean */

/* year in footer */
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
});

/* hamburger + mobile menu */
const hambtn = document.getElementById('hambtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hambtn && mobileMenu) {
  hambtn.addEventListener('click', () => {
    const open = hambtn.classList.toggle('open');
    hambtn.setAttribute('aria-expanded', String(open));
    mobileMenu.style.display = open ? 'block' : 'none';
    mobileMenu.setAttribute('aria-hidden', String(!open));
  });

  // close mobile menu when click a link
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hambtn.classList.remove('open');
      hambtn.setAttribute('aria-expanded','false');
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden','true');
    });
  });

  // close on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      hambtn.classList.remove('open');
      hambtn.setAttribute('aria-expanded','false');
      mobileMenu.style.display = 'none';
      mobileMenu.setAttribute('aria-hidden','true');
    }
  });
}

/* dropdown keyboard handling (basic) */
document.querySelectorAll('.dropdown').forEach(dd => {
  const btn = dd.querySelector('.dropbtn');
  const menu = dd.querySelector('.dropdown-content');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.style.display = open ? 'none' : 'block';
  });
  // close when clicking outside
  document.addEventListener('click', (e) => {
    if (!dd.contains(e.target)) {
      btn.setAttribute('aria-expanded','false');
      menu.style.display = 'none';
    }
  });
});

/* logo animation on scroll - smooth */
const logo = document.querySelector('.logo-img');
window.addEventListener('scroll', () => {
  if (!logo) return;
  if (window.scrollY > 100) {
    logo.classList.add('scrolled');
  } else {
    logo.classList.remove('scrolled');
  }
});

/* offset anchor so fixed header doesn't hide section headings */
function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 72);
  }
}
window.setTimeout(offsetAnchor, 0);
window.addEventListener("hashchange", offsetAnchor);
