/* ============================================
   DGanz Portfolio — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Navbar scroll effect ----------
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  });

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('.navbar-toggle');
  const navLinks = document.querySelector('.navbar-links');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Active nav link on scroll ----------
  const sections = document.querySelectorAll('.section[id]');
  const navItems = document.querySelectorAll('.navbar-links a[href^="#"]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.navbar-links a[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ---------- Scroll reveal ----------
  const reveals = document.querySelectorAll('.reveal');

  function checkReveal() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const revealTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveal);
  checkReveal(); // initial check

  // ---------- Typing animation ----------
  const typingEl = document.querySelector('.typing-text');

  if (typingEl) {
    const words = JSON.parse(typingEl.dataset.words || '[]');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        typingEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 400;
      }

      setTimeout(type, typeSpeed);
    }

    if (words.length > 0) {
      type();
    }
  }

  // ---------- Back to top ----------
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Filter tabs (Projects page) ----------
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.all-projects-grid .project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ---------- Simple form handling ----------

  emailjs.init({
    publicKey: "bKlpVoGpk3hdkXeZ4"
  });

  const contactForm = document.querySelector(".contact-form");

  contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    // Loading
    Swal.fire({
      title: "Mengirim pesan...",
      text: "Mohon tunggu sebentar...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {

      await emailjs.sendForm(
        "service_hlf379o",
        "template_8emc4d5",
        contactForm
      );

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Pesan berhasil dikirim 🚀",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,

        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      contactForm.reset();

    } catch (error) {

      console.error(error);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "Gagal mengirim pesan!",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,

        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    }

  });
});

/* Fade in up animation for filter */
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);


document.getElementById("downloadCV").addEventListener("click", function (e) {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "assets/cv/Gede Gandhi_Gunadi_CV.pdf";
    link.download = "CV_Gede Gandhi_Gunadi.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});