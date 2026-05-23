/* ══════════════════════════════════════════════════════════════
   SCENT HAVEN — Shared UI Utilities
   ══════════════════════════════════════════════════════════════ */

// ─── TOAST NOTIFICATIONS ─────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ─── FORMAT CURRENCY (Naira) ─────────────────────────────────
function formatPrice(amount) {
  return '₦' + Number(amount).toLocaleString();
}

// ─── RENDER NAVBAR ───────────────────────────────────────────
async function renderNavbar(activePage = '') {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  
  const user = await Auth.getUser();
  const cartCount = await Cart.getCount();
  
  const userBtn = user
    ? `<a href="/profile.html" class="nav-user-btn" title="Profile">👤</a>`
    : `<a href="/login.html" class="nav-user-btn" title="Login">👤</a>`;
  
  nav.innerHTML = `
    <a href="/index.html" class="nav-logo">
      <span class="nav-logo-text"><img src="https://vudxovvqpjdhlemugtqh.supabase.co/storage/v1/object/public/assets/logo.png" alt="Scent Haven" style="height:56px;width:auto;display:block;"> <span style="display:none">Scent Haven</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="/index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
      <li><a href="/shop.html" class="nav-link ${activePage === 'shop' ? 'active' : ''}">Shop</a></li>
      <li><a href="/index.html#about" class="nav-link">About</a></li>
      <li><a href="/index.html#contact" class="nav-link">Contact</a></li>
    </ul>
    <div class="nav-actions">
      ${userBtn}
      <button class="nav-cart-btn" onclick="window.location.href='/cart.html'">
        <span>Cart</span>
        <span class="nav-cart-count" id="cart-count">${cartCount}</span>
      </button>
      <div class="nav-hamburger" id="nav-hamburger" onclick="toggleMobileNav()">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  
  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Check on load
  nav.classList.toggle('scrolled', window.scrollY > 40);
}

// ─── MOBILE NAV ──────────────────────────────────────────────
function toggleMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  let mobileNav = document.getElementById('mobile-nav');
  
  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.id = 'mobile-nav';
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
      <a href="/index.html" onclick="closeMobileNav()">Home</a>
      <a href="/shop.html" onclick="closeMobileNav()">Shop</a>
      <a href="/index.html#about" onclick="closeMobileNav()">About</a>
      <a href="/index.html#contact" onclick="closeMobileNav()">Contact</a>
      <a href="/cart.html" onclick="closeMobileNav()">Cart</a>
      <a href="/profile.html" onclick="closeMobileNav()">Profile</a>
    `;
    document.body.appendChild(mobileNav);
  }
  
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
}

function closeMobileNav() {
  var _nh=document.getElementById('nav-hamburger'); if(_nh) _nh.classList.remove('open');
  var _mn=document.getElementById('mobile-nav'); if(_mn) _mn.classList.remove('open');
}

// ─── RENDER FOOTER ───────────────────────────────────────────
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-name"><img src="https://vudxovvqpjdhlemugtqh.supabase.co/storage/v1/object/public/assets/logo.png" alt="Scent Haven" style="height:48px;width:auto;margin-bottom:0.5rem;display:block;"></div>
          <p>Curating the world's finest fragrances for the discerning nose. Every scent tells a story, let us help you find yours.</p>
        </div>
        <div>
          <div class="footer-heading">Quick Links</div>
          <div class="footer-links">
            <a href="/index.html">Home</a>
            <a href="/shop.html">Shop All</a>
            <a href="/cart.html">My Cart</a>
            <a href="/profile.html">My Profile</a>
          </div>
        </div>
        <div>
          <div class="footer-heading">Categories</div>
          <div class="footer-links">
            <a href="/shop.html?category=Oud">Oud</a>
            <a href="/shop.html?category=Floral">Floral</a>
            <a href="/shop.html?category=Fresh">Fresh</a>
            <a href="/shop.html?category=Oriental">Oriental</a>
          </div>
        </div>
        <div>
          <div class="footer-heading">Contact</div>
          <div class="footer-links">
            <a href="https://wa.me/2349033429640" target="_blank">WhatsApp</a>
            <a href="mailto:hello@scenthaven.com">Email Us</a>
            <a href="https://instagram.com/scenthaven" target="_blank">Instagram</a>
            <a href="https://twitter.com/scenthaven" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; ${new Date().getFullYear()} Scent Haven. All rights reserved.</span>
        <span class="footer-copy">Crafted with 🤍 in Lagos, Nigeria</span>
      </div>
    </div>
  `;
}

// ─── UPDATE CART COUNT ───────────────────────────────────────
async function updateCartCount() {
  const count = await Cart.getCount();
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

// ─── PERFUME BOTTLES BACKGROUND ──────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Draw different perfume bottle shapes
  function drawBottle(ctx, type, w, h) {
    ctx.beginPath();
    if (type === 0) {
      // Classic tall rectangular bottle
      var neckW = w * 0.25, neckH = h * 0.18;
      var bodyW = w, bodyH = h * 0.72;
      var nx = -neckW / 2, ny = -h / 2;
      var bx = -bodyW / 2, by = ny + neckH;
      // Cap
      ctx.roundRect(nx - w*0.05, ny - h*0.1, neckW + w*0.1, h*0.1, 2);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Neck
      ctx.rect(nx, ny, neckW, neckH);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Body
      ctx.roundRect(bx, by, bodyW, bodyH, [4, 4, 8, 8]);
      ctx.fill(); ctx.stroke();
      // Shine line
      ctx.beginPath();
      ctx.moveTo(bx + bodyW*0.2, by + bodyH*0.1);
      ctx.lineTo(bx + bodyW*0.2, by + bodyH*0.7);
      ctx.globalAlpha *= 0.4;
      ctx.lineWidth = w * 0.06;
      ctx.stroke();

    } else if (type === 1) {
      // Round/oval bottle
      ctx.ellipse(0, h*0.05, w*0.5, h*0.45, 0, 0, Math.PI*2);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Neck
      ctx.roundRect(-w*0.12, -h*0.5, w*0.24, h*0.2, 3);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Cap
      ctx.roundRect(-w*0.18, -h*0.6, w*0.36, h*0.12, 3);
      ctx.fill(); ctx.stroke();
      // Shine
      ctx.beginPath();
      ctx.ellipse(-w*0.12, -h*0.05, w*0.08, h*0.18, -0.3, 0, Math.PI*2);
      ctx.globalAlpha *= 0.35;
      ctx.fill();

    } else if (type === 2) {
      // Faceted/diamond shaped bottle
      ctx.moveTo(0, -h*0.5);
      ctx.lineTo(w*0.5, -h*0.1);
      ctx.lineTo(w*0.42, h*0.45);
      ctx.lineTo(-w*0.42, h*0.45);
      ctx.lineTo(-w*0.5, -h*0.1);
      ctx.closePath();
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Neck
      ctx.roundRect(-w*0.1, -h*0.62, w*0.2, h*0.14, 2);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Cap
      ctx.roundRect(-w*0.16, -h*0.72, w*0.32, h*0.12, 3);
      ctx.fill(); ctx.stroke();

    } else if (type === 3) {
      // Wide flat bottle
      ctx.roundRect(-w*0.5, -h*0.3, w, h*0.7, [6,6,10,10]);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Neck
      ctx.roundRect(-w*0.1, -h*0.5, w*0.2, h*0.22, 2);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Cap
      ctx.roundRect(-w*0.18, -h*0.6, w*0.36, h*0.12, 4);
      ctx.fill(); ctx.stroke();
      // Label area
      ctx.beginPath();
      ctx.roundRect(-w*0.32, -h*0.12, w*0.64, h*0.32, 2);
      ctx.globalAlpha *= 0.2;
      ctx.fill();

    } else {
      // Cylindrical/round tall bottle
      ctx.roundRect(-w*0.38, -h*0.42, w*0.76, h*0.82, 20);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Neck
      ctx.roundRect(-w*0.14, -h*0.58, w*0.28, h*0.18, 3);
      ctx.fill(); ctx.stroke(); ctx.beginPath();
      // Cap dome
      ctx.arc(0, -h*0.52, w*0.2, Math.PI, 0);
      ctx.lineTo(w*0.2, -h*0.42);
      ctx.lineTo(-w*0.2, -h*0.42);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      // Shine
      ctx.beginPath();
      ctx.roundRect(-w*0.26, -h*0.3, w*0.1, h*0.4, 5);
      ctx.globalAlpha *= 0.3;
      ctx.fill();
    }
  }

  // Bottle colors — gold, rose, deep purple, champagne, blush
  var palettes = [
    { fill: 'rgba(201,168,76,', stroke: 'rgba(230,200,100,' },
    { fill: 'rgba(184,75,122,', stroke: 'rgba(220,110,155,' },
    { fill: 'rgba(120,80,160,', stroke: 'rgba(160,110,200,' },
    { fill: 'rgba(190,155,100,', stroke: 'rgba(215,185,130,' },
    { fill: 'rgba(210,140,160,', stroke: 'rgba(235,170,185,' },
    { fill: 'rgba(80,120,160,',  stroke: 'rgba(110,155,195,' },
  ];

  function Bottle() {
    this.init = function(randomY) {
      this.x = Math.random() * W;
      this.y = randomY ? Math.random() * H : H + 80 + Math.random() * 150;
      this.w = 18 + Math.random() * 22;
      this.h = this.w * (1.6 + Math.random() * 0.8);
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(0.12 + Math.random() * 0.25);
      this.rotation = (Math.random() - 0.5) * 0.4;
      this.rotSpeed = (Math.random() - 0.5) * 0.003;
      this.bobAngle = Math.random() * Math.PI * 2;
      this.bobSpeed = 0.008 + Math.random() * 0.006;
      this.bobAmp = 0.3 + Math.random() * 0.4;
      this.opacity = randomY ? Math.random() * 0.18 : 0;
      this.maxOpacity = 0.12 + Math.random() * 0.18;
      this.fadeIn = !randomY;
      this.type = Math.floor(Math.random() * 5);
      this.palette = palettes[Math.floor(Math.random() * palettes.length)];
      this.glowSize = this.w * (1.5 + Math.random());
    };
    this.init(true);
  }

  var bottles = [];
  for (var i = 0; i < 22; i++) bottles.push(new Bottle());

  function draw() {
    ctx.clearRect(0, 0, W, H);

    bottles.forEach(function(b) {
      b.x += b.vx;
      b.y += b.vy;
      b.bobAngle += b.bobSpeed;
      b.rotation += b.rotSpeed;
      b.x += Math.sin(b.bobAngle * 0.7) * b.bobAmp * 0.15;

      if (b.fadeIn) {
        b.opacity += 0.0006;
        if (b.opacity >= b.maxOpacity) b.fadeIn = false;
      } else if (b.y + b.h < 0) {
        b.init(false);
        return;
      }

      if (b.x < -60) b.x = W + 60;
      if (b.x > W + 60) b.x = -60;

      ctx.save();
      ctx.translate(b.x, b.y + Math.sin(b.bobAngle) * b.bobAmp);
      ctx.rotate(b.rotation);
      ctx.globalAlpha = b.opacity;

      // Glow
      var glow = ctx.createRadialGradient(0, 0, 0, 0, 0, b.glowSize);
      glow.addColorStop(0, b.palette.fill + '0.25)');
      glow.addColorStop(1, b.palette.fill + '0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, b.glowSize, 0, Math.PI * 2);
      ctx.fill();

      // Bottle body
      ctx.fillStyle = b.palette.fill + '0.85)';
      ctx.strokeStyle = b.palette.stroke + '0.9)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      drawBottle(ctx, b.type, b.w, b.h);

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });
  
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ─── PRODUCT CARD HTML ───────────────────────────────────────
function productCardHTML(product) {
  const imageContent = product.image_url
    ? `<img src="${product.image_url}" alt="${product.name}" loading="lazy" onload="this.style.opacity=1" onerror="this.style.display='none';this.parentElement.innerHTML+='<span class=product-card-emoji>' + (this.alt||'🧴') + '</span>'" style="opacity:0;transition:opacity 0.4s">`
    : `<span class="product-card-emoji">${product.emoji || '🧴'}</span>`;
  
  const badge = product.badge
    ? `<span class="badge badge-gold product-card-badge">${product.badge}</span>`
    : '';
  
  const notes = (product.notes || []).slice(0, 4).map(n =>
    `<span class="badge badge-outline">${n}</span>`
  ).join('');
  
  return `
    <div class="product-card" data-id="${product.id}" onclick="window.location.href='/product.html?id=${product.id}'">
      <div class="product-card-glow"></div>
      <div class="product-card-image">
        ${imageContent}
        ${badge}
      </div>
      <div class="product-card-body">
        <div class="product-card-brand">${product.brand || ''}</div>
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-desc">${(product.description || '').substring(0, 80)}${(product.description || '').length > 80 ? '...' : ''}</div>
        <div class="product-card-notes">${notes}</div>
        <div class="product-card-footer">
          <div class="product-card-price">${formatPrice(product.price)} <small>${product.size || ''}</small></div>
          <button class="btn btn-sm btn-outline add-to-cart-btn" onclick="event.stopPropagation(); handleAddToCart(${product.id})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

// ─── ADD TO CART HANDLER ─────────────────────────────────────
async function handleAddToCart(productId) {
  const { error } = await Cart.addItem(productId);
  if (error) {
    showToast(error.message, 'error');
    return;
  }
  showToast('Added to cart!', 'success');
  updateCartCount();
  
  // Visual feedback on button
  const btn = document.querySelector(`.product-card[data-id="${productId}"] .add-to-cart-btn`);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.remove('btn-outline');
    btn.classList.add('btn-primary');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.add('btn-outline');
      btn.classList.remove('btn-primary');
    }, 1500);
  }
}

// ─── RATING STARS ────────────────────────────────────────────
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '★';
  if (half) html += '½';
  for (let i = full + (half ? 1 : 0); i < 5; i++) html += '☆';
  return `<span class="stars text-gold" title="${rating}/5">${html}</span>`;
}

// ─── LOADING SCREEN ──────────────────────────────────────────
function hideLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 600);
  }
}

// ─── GLOBAL INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initParticles();
  renderFooter();
  initScrollReveal();
  
  // Small delay to ensure smooth loading transition
  setTimeout(hideLoadingScreen, 400);
});
