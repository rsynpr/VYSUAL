/**
 * ==========================================================================
 * VYSUAL — MODERN ARTISTIC PHOTOGRAPHY STUDIO
 * Script: assets/js/script.js
 * Concept: White Editorial Aesthetic & Smooth Immersive Interactions
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Mark body as loaded for initial entrance cascade
  document.body.classList.add('is-loaded');

  /* --------------------------------------------------------------------------
     1. CUSTOM ARTISTIC CURSOR (Desktop Only)
     -------------------------------------------------------------------------- */
  const customCursor = document.getElementById('customCursor');
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  if (customCursor && !isTouchDevice) {
    const dot = customCursor.querySelector('.cursor-dot');
    const ring = customCursor.querySelector('.cursor-ring');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isCursorVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isCursorVisible) {
        customCursor.classList.remove('cursor-hidden');
        isCursorVisible = true;
      }

      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      customCursor.classList.add('cursor-hidden');
      isCursorVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      customCursor.classList.remove('cursor-hidden');
      isCursorVisible = true;
    });

    // Smooth trailing ring loop
    function renderCursorRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      requestAnimationFrame(renderCursorRing);
    }
    requestAnimationFrame(renderCursorRing);

    // Hover expand interaction
    const interactiveSelectors = 'a, button, [role="button"], [role="tab"], .work-card, .gallery-clean-card, input, textarea';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
    });
  }

  /* --------------------------------------------------------------------------
     2. KONFIGURASI WHATSAPP STUDIO
     Ganti nomor di bawah ini dengan nomor resmi WhatsApp studio Anda (format internasional).
     -------------------------------------------------------------------------- */
  const WHATSAPP_NUMBER = "62882003602662";
  const DEFAULT_WHATSAPP_MESSAGE = "Halo, saya tertarik dengan layanan fotografi VYSUAL Studio. Saya ingin berdiskusi mengenai proyek fotografi.";

  function getWhatsAppUrl(customMessage) {
    const msg = customMessage || DEFAULT_WHATSAPP_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  function setupWhatsAppLinks() {
    const waTriggers = document.querySelectorAll('.js-whatsapp-trigger');
    waTriggers.forEach(el => {
      const serviceName = el.getAttribute('data-service');
      const message = serviceName
        ? `Halo, saya tertarik dengan layanan ${serviceName} dari studio Anda. Saya ingin berdiskusi mengenai proyek.`
        : DEFAULT_WHATSAPP_MESSAGE;

      el.setAttribute('href', getWhatsAppUrl(message));
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    const waDisplays = document.querySelectorAll('.js-whatsapp-display');
    waDisplays.forEach(el => {
      el.textContent = WHATSAPP_NUMBER.includes('X')
        ? "+62 882-0036-02662 (WhatsApp)"
        : `+${WHATSAPP_NUMBER}`;
    });
  }
  setupWhatsAppLinks();

  /* --------------------------------------------------------------------------
     3. NAVBAR SCROLL EFFECT & SCROLLSPY
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function handleNavbarScroll() {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 35);
  }
  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  function highlightActiveNav() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }
  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  /* --------------------------------------------------------------------------
     4. SUBTLE HERO PARALLAX (Desktop Only)
     -------------------------------------------------------------------------- */
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (parallaxElements.length && !isTouchDevice) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 1.2) return; // Stop calculating past hero

      parallaxElements.forEach(el => {
        const factor = parseFloat(el.getAttribute('data-parallax')) || 0.05;
        el.style.transform = `translateY(${scrollY * factor * -1}px)`;
      });
    }, { passive: true });
  }

  /* --------------------------------------------------------------------------
     5. MOBILE MENU DRAWER
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn-primary, .mobile-drawer .btn-outline');

  function setMobileMenuState(isOpen) {
    if (!mobileDrawer) return;
    mobileDrawer.classList.toggle('open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', (!isOpen).toString());
    if (drawerBackdrop) drawerBackdrop.classList.toggle('active', isOpen);
    if (hamburgerBtn) {
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
    }
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function openMobileMenu() { setMobileMenuState(true); }
  function closeMobileMenu() { setMobileMenuState(false); }

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      setMobileMenuState(!isOpen);
    });
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* --------------------------------------------------------------------------
     6. PORTFOLIO FILTERING (Liquid Glass Tabs)
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-glass-btn');
  const galleryCards = document.querySelectorAll('.gallery-clean-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        const isActive = (b === btn);
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive.toString());
      });

      const filterVal = btn.getAttribute('data-filter');

      galleryCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const isMatch = (filterVal === 'all' || cardCat === filterVal);

        if (isMatch) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.97)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 30);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     7. FULL LIGHTBOX MODAL
     -------------------------------------------------------------------------- */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCat = document.getElementById('lightboxCat');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  // Koleksi data dari Selected Works
  const selectedCards = document.querySelectorAll('.work-card');
  const selectedData = [];
  selectedCards.forEach((card, index) => {
    const img = card.querySelector('.work-img');
    const title = card.querySelector('.work-info-title') || card.querySelector('.work-name') || card.querySelector('.work-caption-title');
    const cat = card.querySelector('.work-cat-pill') || card.querySelector('.glass-pill-cat');
    selectedData.push({
      index: index,
      src: img ? img.getAttribute('src') : '',
      alt: img ? img.getAttribute('alt') : '',
      title: title ? title.textContent.trim() : 'Karya Pilihan',
      category: cat ? cat.textContent.trim() : 'Selected Works'
    });
  });

  // Koleksi data dari All Projects Gallery
  const allCardsData = [];
  galleryCards.forEach((card, index) => {
    const img = card.querySelector('.gallery-clean-img');
    const title = card.querySelector('.card-project-title');
    const cat = card.querySelector('.card-cat-tag');
    allCardsData.push({
      index: index,
      element: card,
      src: img ? img.getAttribute('src') : '',
      alt: img ? img.getAttribute('alt') : '',
      title: title ? title.textContent.trim() : 'Karya Studio',
      category: cat ? cat.textContent.trim() : 'Portfolio'
    });
  });

  let activeCollection = allCardsData;
  let activeIndex = 0;

  function getVisibleAllCards() {
    return allCardsData.filter(item => !item.element.classList.contains('hide'));
  }

  function renderLightboxContent() {
    if (!activeCollection.length || !lightboxImg) return;
    const item = activeCollection[activeIndex];

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCat) lightboxCat.textContent = item.category.toUpperCase();

    if (lightboxCounter) {
      const cur = String(activeIndex + 1).padStart(2, '0');
      const tot = String(activeCollection.length).padStart(2, '0');
      lightboxCounter.textContent = `${cur} / ${tot}`;
    }
  }

  function openLightbox(itemIndex, isSelectedWorks = false) {
    if (!lightboxModal) return;
    if (isSelectedWorks) {
      activeCollection = selectedData;
      activeIndex = itemIndex;
    } else {
      activeCollection = getVisibleAllCards();
      const targetIdx = activeCollection.findIndex(i => i.index === itemIndex);
      activeIndex = targetIdx !== -1 ? targetIdx : 0;
    }

    renderLightboxContent();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function stepLightbox(direction) {
    if (!activeCollection.length) return;
    activeIndex = (activeIndex + direction + activeCollection.length) % activeCollection.length;
    renderLightboxContent();
  }

  // Bind klik Selected Works
  selectedCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-work-index'), 10);
      openLightbox(idx, true);
    });
  });

  // Bind klik All Projects Gallery
  galleryCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index'), 10);
      openLightbox(idx, false);
    });
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(-1); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(1); });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
    else if (e.key === 'ArrowRight') stepLightbox(1);
  });

  /* --------------------------------------------------------------------------
     8. SCROLL REVEAL ANIMATIONS
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  /* --------------------------------------------------------------------------
     9. BACK TO TOP BUTTON
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. SMOOTH ANCHOR SCROLLING WITH NAVBAR OFFSET
     -------------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
