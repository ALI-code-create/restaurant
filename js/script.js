document.addEventListener('DOMContentLoaded', () => {

  /* ==================== NAVBAR ==================== */
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    document.querySelector('.back-to-top')?.classList.toggle('visible', window.scrollY > 400);
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks?.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navLinks?.classList.remove('active');
    });
  });

  /* ==================== SCROLL REVEAL ==================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ==================== BACK TO TOP ==================== */
  const backToTop = document.querySelector('.back-to-top');
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ==================== MENU DATA ==================== */
  const menuData = [
    { id: 1, name: 'Bruschetta al Pomodoro', desc: 'Grilled sourdough with vine-ripened tomatoes, basil, and extra virgin olive oil', price: 12, category: 'Starters', image: 'https://images.pexels.com/photos/5639415/pexels-photo-5639415.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 2, name: 'Calamari Fritti', desc: 'Crispy squid rings served with lemon aioli and marinara sauce', price: 14, category: 'Starters', image: 'https://images.pexels.com/photos/19119775/pexels-photo-19119775.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 3, name: 'Carpaccio di Manzo', desc: 'Thinly sliced beef tenderloin with arugula, parmesan, and truffle oil', price: 16, category: 'Starters', image: 'https://images.pexels.com/photos/35476004/pexels-photo-35476004.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 4, name: 'Zuppa del Giorno', desc: 'Chef\'s daily creation made with seasonal farm-fresh ingredients', price: 10, category: 'Starters', image: 'https://images.pexels.com/photos/27098514/pexels-photo-27098514.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 5, name: 'Filetto di Manzo', desc: 'Prime grilled filet mignon with rosemary jus and roasted vegetables', price: 38, category: 'Mains', image: 'https://images.pexels.com/photos/34433608/pexels-photo-34433608.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 6, name: 'Salmone al Forno', desc: 'Oven-baked Atlantic salmon with dill butter, asparagus, and lemon', price: 32, category: 'Mains', image: 'https://images.pexels.com/photos/31609761/pexels-photo-31609761.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 7, name: 'Costolette d\'Agnello', desc: 'Herb-crusted lamb rack with mint demi-glace and gratin dauphinois', price: 36, category: 'Mains', image: 'https://images.pexels.com/photos/10821331/pexels-photo-10821331.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 8, name: 'Pasta alla Carbonara', desc: 'Spaghetti with guanciale, pecorino, egg yolk, and black pepper', price: 22, category: 'Mains', image: 'https://images.pexels.com/photos/998246/pexels-photo-998246.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 9, name: 'Gamberetti al Linguine', desc: 'Succulent shrimp linguine tossed in garlic, white wine, and fresh basil', price: 26, category: 'Mains', image: 'https://images.pexels.com/photos/9544261/pexels-photo-9544261.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 10, name: 'Tiramisù Classico', desc: 'Layered mascarpone with espresso-soaked ladyfingers and cocoa', price: 12, category: 'Desserts', image: 'https://images.pexels.com/photos/27305271/pexels-photo-27305271.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 11, name: 'Panna Cotta', desc: 'Vanilla bean panna cotta with wild berry compote and mint', price: 10, category: 'Desserts', image: 'https://images.pexels.com/photos/24838459/pexels-photo-24838459.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 12, name: 'Gelato Artigianale', desc: 'Selection of house-made gelato – vanilla, chocolate, pistachio, stracciatella', price: 8, category: 'Desserts', image: 'https://images.pexels.com/photos/28735384/pexels-photo-28735384.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 13, name: 'Barolo DOCG', desc: 'Nebbiolo from Piedmont, aged 36 months – bold, elegant, complex', price: 45, category: 'Wines', image: 'https://images.pexels.com/photos/3171158/pexels-photo-3171158.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 14, name: 'Prosecco Superiore', desc: 'Conegliano Valdobbiadene DOCG – crisp, floral, fine bubbles', price: 32, category: 'Wines', image: 'https://images.pexels.com/photos/20019728/pexels-photo-20019728.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 15, name: 'Negroni', desc: 'Gin, Campari, sweet vermouth – stirred, served over ice with orange peel', price: 16, category: 'Cocktails', image: 'https://images.pexels.com/photos/3794291/pexels-photo-3794291.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 16, name: 'Aperol Spritz', desc: 'Aperol, Prosecco, soda water – refreshing Venetian classic', price: 14, category: 'Cocktails', image: 'https://images.pexels.com/photos/9119755/pexels-photo-9119755.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: 17, name: 'Martini Rosso', desc: 'House-infused vermouth with gin, garnished with olives and a twist', price: 15, category: 'Cocktails', image: 'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  /* ==================== MENU RENDER ==================== */
  const menuGrid = document.getElementById('menuGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderMenu(category = 'All') {
    if (!menuGrid) return;
    const filtered = category === 'All' ? menuData : menuData.filter(item => item.category === category);
    menuGrid.innerHTML = filtered.map(item => `
      <div class="menu-item reveal">
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="800" height="450" style="aspect-ratio:16/9;object-fit:cover;background-color:#6b2d3e">
        <div class="menu-item-body">
          <div class="menu-item-header">
            <h3>${item.name}</h3>
            <span class="price">$${item.price}</span>
          </div>
          <p class="desc">${item.desc}</p>
          <span class="category-tag">${item.category}</span>
        </div>
      </div>
    `).join('');
    revealObserver.disconnect();
    document.querySelectorAll('.menu-item.reveal').forEach(el => revealObserver.observe(el));
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });

  renderMenu();

  /* ==================== TESTIMONIAL CAROUSEL ==================== */
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');

  if (slides.length) {
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });

    setInterval(() => showSlide(currentSlide + 1), 5000);
  }

  /* ==================== GALLERY LIGHTBOX ==================== */
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  if (lightbox && galleryItems.length) {
    let currentIndex = 0;
    const images = Array.from(galleryItems);

    function openLightbox(index) {
      currentIndex = index;
      lightboxImg.style.transition = 'none';
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.85)';
      lightboxImg.src = images[currentIndex].src;
      lightbox.classList.add('active');
      requestAnimationFrame(() => {
        lightboxImg.style.transition = 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
        lightboxImg.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      });
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightboxImg.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.85)';
      setTimeout(() => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }, 250);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.style.transition = 'opacity 0.2s ease';
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.style.transition = 'opacity 0.25s ease';
        lightboxImg.style.opacity = '1';
      }, 200);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.style.transition = 'opacity 0.2s ease';
      lightboxImg.style.opacity = '0';
      setTimeout(() => {
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.style.transition = 'opacity 0.25s ease';
        lightboxImg.style.opacity = '1';
      }, 200);
    }

    images.forEach((img, i) => {
      img.addEventListener('click', () => openLightbox(i));
    });

    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    lightboxNext?.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox?.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });
  }

  /* ==================== RESERVATION FORM ==================== */
  const reserveForm = document.getElementById('reserveForm');
  reserveForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('resName').value;
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const msg = encodeURIComponent(`Hello! I'd like to reserve a table.\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
    window.open(`https://wa.me/212661803030?text=${msg}`, '_blank');
  });

  /* ==================== CONTACT FORM ==================== */
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    const msg = encodeURIComponent(`Hello! My name is ${name} (${email}).\n\n${message}`);
    window.open(`https://wa.me/212661803030?text=${msg}`, '_blank');
  });

});
