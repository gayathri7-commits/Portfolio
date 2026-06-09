document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Scroll Animations (Intersection Observer)
  const observerOptions = {
    root: null,
    threshold: 0.1
  };

  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-up elements EXCEPT those inside the hero section
  document.querySelectorAll('.fade-up:not(#hero .fade-up)').forEach(el => {
    fadeUpObserver.observe(el);
  });

  // 2. Trigger Hero Animations Immediately on Load
  document.querySelectorAll('#hero .fade-up').forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 200);
  });

  // 3. Contact Form Submission Interaction (Mock)
  const submitBtn = document.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      // Basic UI feedback for the demo
      const originalText = this.textContent;
      this.textContent = 'Sent ✓';
      this.style.background = '#c45f3a';
      
      setTimeout(() => {
        this.textContent = originalText;
        this.style.background = '';
      }, 3000);
    });
  }

  // 4. Smooth Scrolling for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});