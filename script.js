/* ================================================================
   SCRIPT.JS - Nhôm Kính Cao Cấp
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Sticky Header ----
  initStickyHeader();
  
  // ---- Mobile Menu ----
  initMobileMenu();
  
  // ---- Smooth Scroll ----
  initSmoothScroll();
  
  // ---- Scroll Reveal ----
  initScrollReveal();
  
  // ---- Counter Animation ----
  initCounters();
  
  // ---- Gallery Lightbox ----
  initLightbox();
  
  // ---- Gallery Filter ----
  initGalleryFilter();
  
  // ---- Video Players ----
  initVideoPlayers();
  
  // ---- Back to Top ----
  initBackToTop();
  
  // ---- Form ----
  initForm();
  
  // ---- Active Nav on Scroll ----
  initActiveNav();
});

/* ================================================================
   STICKY HEADER
   ================================================================ */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScrollY = 0;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ================================================================
   MOBILE MENU
   ================================================================ */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.mobile-overlay');
  const links = document.querySelectorAll('.nav-link');
  
  if (!toggle || !menu) return;
  
  function closeMenu() {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  toggle.addEventListener('click', () => {
    const isActive = toggle.classList.toggle('active');
    menu.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  });
  
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }
  
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ================================================================
   SMOOTH SCROLL
   ================================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (!target) return;
      
      e.preventDefault();
      
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/* ================================================================
   SCROLL REVEAL ANIMATIONS
   ================================================================ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  if (reveals.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Don't unobserve to allow re-animation on scroll
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

/* ================================================================
   COUNTER ANIMATION
   ================================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        animateCounter(entry.target);
        entry.target.dataset.counted = 'true';
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  const stepTime = duration / steps;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current) + suffix;
  }, stepTime);
}

/* ================================================================
   GALLERY LIGHTBOX
   ================================================================ */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (!lightbox || galleryItems.length === 0) return;
  
  let currentIndex = 0;
  let visibleItems = Array.from(galleryItems).filter(
    item => item.style.display !== 'none'
  );
  
  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(
      item => item.style.display !== 'none'
    );
  }
  
  function openLightbox(index) {
    updateVisibleItems();
    currentIndex = index;
    const img = visibleItems[currentIndex]?.querySelector('img');
    if (!img) return;
    
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    const img = visibleItems[currentIndex]?.querySelector('img');
    if (img) {
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxImg.style.opacity = '1';
      }, 200);
    }
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    const img = visibleItems[currentIndex]?.querySelector('img');
    if (img) {
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxImg.style.opacity = '1';
      }, 200);
    }
  }
  
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      const visibleIndex = visibleItems.indexOf(item);
      if (visibleIndex !== -1) openLightbox(visibleIndex);
    });
  });
  
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  });
}

/* ================================================================
   GALLERY FILTER
   ================================================================ */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length === 0 || galleryItems.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter items with animation
      galleryItems.forEach((item, index) => {
        const category = item.dataset.category;
        
        if (filter === 'all' || category === filter) {
          item.style.display = '';
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.transition = 'all 0.4s ease';
          }, index * 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ================================================================
   VIDEO PLAYERS
   ================================================================ */
function initVideoPlayers() {
  const playBtns = document.querySelectorAll('.video-play-btn');
  
  playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.video-wrapper');
      const video = wrapper?.querySelector('video');
      
      if (!video) return;
      
      if (video.paused) {
        // Pause all other videos first
        document.querySelectorAll('.video-wrapper video').forEach(v => {
          if (v !== video) {
            v.pause();
            v.closest('.video-wrapper')?.querySelector('.video-play-btn')?.classList.remove('playing');
          }
        });
        
        video.play();
        btn.classList.add('playing');
        btn.style.opacity = '0';
        video.controls = true;
      } else {
        video.pause();
        btn.classList.remove('playing');
        btn.style.opacity = '1';
        video.controls = false;
      }
    });
  });
  
  // Show play button when video ends or is paused
  document.querySelectorAll('.video-wrapper video').forEach(video => {
    video.addEventListener('pause', () => {
      const btn = video.closest('.video-wrapper')?.querySelector('.video-play-btn');
      if (btn) {
        btn.style.opacity = '1';
        video.controls = false;
      }
    });
    
    video.addEventListener('ended', () => {
      const btn = video.closest('.video-wrapper')?.querySelector('.video-play-btn');
      if (btn) {
        btn.style.opacity = '1';
        btn.classList.remove('playing');
        video.controls = false;
      }
    });
  });
}

/* ================================================================
   BACK TO TOP
   ================================================================ */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ================================================================
   FORM HANDLING
   ================================================================ */
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.phone) {
      showNotification('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
      return;
    }
    
    // Phone validation
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      showNotification('Số điện thoại không hợp lệ!', 'error');
      return;
    }
    
    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang gửi...';
    submitBtn.disabled = true;
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.', 'success');
      form.reset();
    } catch (error) {
      showNotification('Chưa gửi được yêu cầu. Vui lòng gọi hoặc nhắn Zalo để được tư vấn ngay.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 25px;
    padding: 16px 24px;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 500;
    z-index: 10001;
    max-width: 400px;
    animation: slideInRight 0.4s ease;
    backdrop-filter: blur(20px);
    border: 1px solid;
    ${type === 'success' 
      ? 'background: rgba(37, 211, 102, 0.15); color: #25D366; border-color: rgba(37, 211, 102, 0.3);'
      : 'background: rgba(255, 87, 87, 0.15); color: #ff5757; border-color: rgba(255, 87, 87, 0.3);'
    }
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Add animation keyframes if not exists
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
  
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'all 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

/* ================================================================
   ACTIVE NAV ON SCROLL
   ================================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-80px 0px -50% 0px'
  });
  
  sections.forEach(section => observer.observe(section));
}
