/* ================================================================
   main.js – Portfolio behaviours
   Alejandro Estrada Hernandez – 2025
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------------------------------------
     1. STICKY HEADER – add shadow on scroll
  ------------------------------------------------------- */
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('shadow-lg', 'shadow-black/30');
    } else {
      header.classList.remove('shadow-lg', 'shadow-black/30');
    }
  }, { passive: true });


  /* -------------------------------------------------------
     2. ACTIVE NAV LINK – highlight section in view
  ------------------------------------------------------- */
  const sections  = document.querySelectorAll('section[id], header[id]');
  const navLinks  = document.querySelectorAll('nav a[href^="#"]');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const isActive = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('text-text-primary', isActive);
          link.classList.toggle('text-text-secondary', !isActive);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));


  /* -------------------------------------------------------
     3. COPY BUTTONS – email & phone
  ------------------------------------------------------- */
  function setupCopyBtn(btnId, textToCopy) {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.classList.add('copied');
        btn.title = 'Copied!';

        // Visual feedback: swap icon to checkmark temporarily
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-400" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
          </svg>`;

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.classList.remove('copied');
          btn.title = btnId === 'copyEmail' ? 'Copy email' : 'Copy phone';
        }, 2000);

      } catch {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = textToCopy;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    });
  }

  setupCopyBtn('copyEmail', 'telematik_4@hotmail.com');
  setupCopyBtn('copyPhone', '+52 312 131 1383');


  /* -------------------------------------------------------
     4. MOBILE MENU – open / close with animation
  ------------------------------------------------------- */
  const menuOpen     = document.getElementById('menuOpen');
  const menuClose    = document.getElementById('menuClose');
  const menuPanel    = document.getElementById('menuPanel');
  const menuBackdrop = document.getElementById('menuBackdrop');
  const mobileMenu   = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    mobileMenu.classList.remove('pointer-events-none');
    menuBackdrop.classList.remove('opacity-0');
    menuBackdrop.classList.add('opacity-100');
    menuPanel.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuBackdrop.classList.remove('opacity-100');
    menuBackdrop.classList.add('opacity-0');
    menuPanel.classList.add('translate-x-full');
    document.body.style.overflow = '';
    setTimeout(() => mobileMenu.classList.add('pointer-events-none'), 300);
  }

  if (menuOpen)     menuOpen.addEventListener('click', openMenu);
  if (menuClose)    menuClose.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Also close menu on logo link inside panel
  const menuLogoLink = document.getElementById('menuLogoLink');
  if (menuLogoLink) menuLogoLink.addEventListener('click', closeMenu);


  /* -------------------------------------------------------
     5. THEME TOGGLE – placeholder (dark-only for now)
  ------------------------------------------------------- */
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      // Future: toggle between dark/light. For now just animate.
      themeBtn.style.transform = 'rotate(20deg)';
      setTimeout(() => (themeBtn.style.transform = ''), 300);
    });
  }


  /* -------------------------------------------------------
     6. SMOOTH SCROLL – for all internal anchor links
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });


  /* -------------------------------------------------------
     7. SCROLL-REVEAL – fade-in sections as they enter viewport
  ------------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '#about, #skills, #experience, #work, #contact, footer, ' +
    '.skill-item, .bg-bg-card'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-6');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach(el => {
    // Set initial hidden state via inline style (avoids flash)
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
    el.addEventListener('transitionend', () => {
      el.style.opacity   = '';
      el.style.transform = '';
    }, { once: true });

    // Wrap IntersectionObserver callback to use inline styles
    revealObserver.observe(el);
  });

  // Override observer to use inline styles instead of classes
  const revealObserver2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealTargets.forEach(el => revealObserver2.observe(el));

});
