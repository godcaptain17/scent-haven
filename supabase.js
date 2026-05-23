/* ══════════════════════════════════════════════════════════════
   SCENT HAVEN — Page-Specific Styles
   ══════════════════════════════════════════════════════════════ */

/* ═══════════════ HOME PAGE ═══════════════ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse 90% 70% at 50% 50%, #2a0a1a 0%, var(--deep) 70%);
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 20% 50%, rgba(139,34,82,0.25) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(201,168,76,0.12) 0%, transparent 40%),
    radial-gradient(circle at 60% 80%, rgba(184,75,122,0.12) 0%, transparent 40%);
  animation: heroPulse 8s ease-in-out infinite alternate;
}
@keyframes heroPulse { 0% { opacity: 0.5; } 100% { opacity: 1; } }
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: heroFloat var(--dur, 5s) ease-in-out infinite alternate;
}
@keyframes heroFloat { 0% { transform: translateY(0); } 100% { transform: translateY(-22px); } }
.hero-content { text-align: center; position: relative; z-index: 2; padding: 2rem; }
.hero-eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.4em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  animation: fadeUp 0.8s 0.3s both;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 10vw, 8rem);
  font-weight: 300;
  line-height: 0.9;
  color: var(--cream);
  margin-bottom: 1rem;
  animation: fadeUp 0.8s 0.5s both;
}
.hero-title em { font-style: italic; color: var(--gold); display: block; }
.hero-subtitle {
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  color: var(--muted);
  text-transform: uppercase;
  margin-bottom: 3rem;
  animation: fadeUp 0.8s 0.7s both;
}
.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.8s 0.9s both;
}
.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
  animation: fadeUp 0.8s 1.3s both;
}
.hero-scroll span {
  font-size: 0.55rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--muted);
}
.hero-scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: pulse 1.6s ease-in-out infinite;
}

/* Marquee */
.marquee {
  background: linear-gradient(90deg, var(--rose), var(--gold), var(--rose-light), var(--gold));
  background-size: 300% 100%;
  animation: marqueeGrad 5s linear infinite;
  padding: 0.6rem 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
}
@keyframes marqueeGrad { 0% { background-position: 0%; } 100% { background-position: 300%; } }
.marquee-track {
  display: flex;
  white-space: nowrap;
  animation: marqueeSlide 22s linear infinite;
}
.marquee-item {
  font-size: 0.58rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--deep);
  padding: 0 1.8rem;
  font-weight: 700;
}
.marquee-dot { color: rgba(10,6,8,0.3); }
@keyframes marqueeSlide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* Featured Section */
.section-featured {
  padding: 6rem 0;
  background: var(--dark);
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* About Section */
.section-about {
  padding: 7rem 0;
  background: radial-gradient(ellipse 100% 80% at 50% 0%, rgba(139,34,82,0.1) 0%, var(--deep) 60%);
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}
.about-visual {
  height: 420px;
  background: radial-gradient(circle at 50%, rgba(139,34,82,0.2) 0%, rgba(10,6,8,0.8) 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(201,168,76,0.18);
  position: relative;
  overflow: hidden;
}
.about-bottles {
  display: flex;
  gap: 1.5rem;
  align-items: flex-end;
}
.about-bottle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: heroFloat var(--dur, 4s) ease-in-out infinite alternate;
}
.about-bottle span { font-size: 3rem; filter: drop-shadow(0 0 16px rgba(201,168,76,0.35)); }
.about-bottle p { font-size: 0.5rem; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; }
.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-top: 2rem;
}
.stat-item { border-left: 2px solid var(--gold); padding-left: 0.9rem; }
.stat-number { font-family: var(--font-display); font-size: 2.2rem; color: var(--gold); display: block; }
.stat-label { font-size: 0.58rem; letter-spacing: 0.16em; color: var(--muted); text-transform: uppercase; }

/* Contact Section */
.section-contact {
  padding: 6rem 0;
  background: radial-gradient(ellipse 80% 80% at 50% 100%, rgba(201,168,76,0.06) 0%, var(--dark) 60%);
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}
.contact-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.3rem;
  border: 1px solid rgba(201,168,76,0.12);
  transition: border-color var(--transition-base), background var(--transition-base);
  margin-bottom: 0.8rem;
}
.contact-link:hover { border-color: var(--gold); background: rgba(201,168,76,0.04); }
.contact-link-icon { font-size: 1.3rem; }
.contact-link-label { font-size: 0.54rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); display: block; }
.contact-link-value { font-size: 0.82rem; color: var(--text); }
.order-steps { margin-top: 2rem; }
.order-step {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.8rem;
}
.order-step-num {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 700;
  flex-shrink: 0;
  background: var(--gradient-gold);
  color: var(--deep);
}

/* ═══════════════ SHOP PAGE ═══════════════ */
.shop-controls {
  padding: 2rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}
.shop-search {
  flex: 1;
  min-width: 200px;
  position: relative;
}
.shop-search input {
  width: 100%;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(201,168,76,0.25);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.84rem;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  outline: none;
  transition: border-color var(--transition-base);
}
.shop-search input:focus { border-color: var(--gold); }
.shop-search input::placeholder { color: var(--muted-dim); }
.shop-search svg { position: absolute; right: 0.8rem; top: 50%; transform: translateY(-50%); opacity: 0.5; pointer-events: none; }
.shop-filters { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.filter-btn {
  padding: 0.5rem 1rem;
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border: 1px solid rgba(201,168,76,0.2);
  color: var(--muted);
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-base);
}
.filter-btn:hover, .filter-btn.active { border-color: var(--gold); color: var(--gold); background: rgba(201,168,76,0.06); }
.shop-sort select {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(201,168,76,0.2);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.72rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  outline: none;
}
.shop-sort select option { background: var(--dark); }
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding-bottom: 4rem;
}
.products-count {
  font-size: 0.72rem;
  color: var(--muted);
  padding: 0.5rem 0;
}

/* ═══════════════ PRODUCT CARDS ═══════════════ */
.product-card {
  background: var(--gradient-dark);
  border: 1px solid rgba(201,168,76,0.15);
  position: relative;
  overflow: hidden;
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth), border-color var(--transition-smooth);
  cursor: pointer;
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(201,168,76,0.08);
  border-color: rgba(201,168,76,0.4);
}
.product-card-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(201,168,76,0.04), rgba(139,34,82,0.04));
  opacity: 0;
  transition: opacity var(--transition-smooth);
  pointer-events: none;
}
.product-card:hover .product-card-glow { opacity: 1; }
.product-card-image {
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, rgba(139,34,82,0.16) 0%, rgba(10,6,8,0.6) 70%);
  position: relative;
  overflow: hidden;
}
.product-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.product-card:hover .product-card-image img { transform: scale(1.06); }
.product-card-emoji {
  font-size: 4.5rem;
  filter: drop-shadow(0 0 18px rgba(201,168,76,0.35));
  transition: transform var(--transition-smooth);
  user-select: none;
}
.product-card:hover .product-card-emoji { transform: scale(1.1) rotate(-5deg); }
.product-card-badge { position: absolute; top: 0.9rem; left: 0.9rem; }
.product-card-body { padding: 1.3rem; position: relative; z-index: 2; }
.product-card-brand {
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: var(--gold);
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}
.product-card-name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--cream);
  margin-bottom: 0.35rem;
}
.product-card-desc {
  font-size: 0.72rem;
  color: var(--muted);
  line-height: 1.55;
  margin-bottom: 0.7rem;
}
.product-card-notes { display: flex; gap: 0.3rem; flex-wrap: wrap; margin-bottom: 0.8rem; }
.product-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(201,168,76,0.08);
}
.product-card-price {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--gold);
}
.product-card-price small {
  font-size: 0.62rem;
  color: var(--muted);
  font-family: var(--font-body);
}

/* ═══════════════ PRODUCT DETAIL PAGE ═══════════════ */
.product-detail {
  padding: calc(var(--nav-height) + 3rem) 0 4rem;
}
.product-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}
.product-detail-image {
  height: 480px;
  background: radial-gradient(circle, rgba(139,34,82,0.2) 0%, rgba(10,6,8,0.7) 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(201,168,76,0.18);
  overflow: hidden;
  position: relative;
}
.product-detail-image img { width: 100%; height: 100%; object-fit: cover; }
.product-detail-emoji { font-size: 7rem; filter: drop-shadow(0 0 30px rgba(201,168,76,0.4)); }
.product-detail-brand {
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.5rem;
}
.product-detail-name {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 0.8rem;
}
.product-detail-price {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--gold);
  margin-bottom: 1.5rem;
}
.product-detail-price small { font-size: 0.72rem; color: var(--muted); font-family: var(--font-body); }
.product-detail-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.85; margin-bottom: 1.5rem; }
.product-detail-notes { display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 2rem; }
.product-detail-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.2rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(201,168,76,0.1);
}
.meta-item-label { font-size: 0.56rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.2rem; }
.meta-item-value { font-size: 0.82rem; color: var(--text); }
.product-detail-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.qty-control {
  display: flex;
  align-items: center;
  border: 1px solid rgba(201,168,76,0.25);
}
.qty-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--gold);
  cursor: pointer;
  transition: background var(--transition-fast);
}
.qty-btn:hover { background: rgba(201,168,76,0.1); }
.qty-display {
  width: 50px;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text);
  border-left: 1px solid rgba(201,168,76,0.15);
  border-right: 1px solid rgba(201,168,76,0.15);
  padding: 0.5rem 0;
}

/* ═══════════════ AUTH PAGES ═══════════════ */
.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(139,34,82,0.12) 0%, var(--deep) 70%);
  padding: 2rem;
}
.auth-card {
  width: 100%;
  max-width: 440px;
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.15);
  padding: 2.5rem;
}
.auth-logo {
  text-align: center;
  margin-bottom: 2rem;
}
.auth-logo a {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--gold);
  letter-spacing: 0.12em;
}
.auth-logo a em { font-style: italic; color: var(--rose-soft); }
.auth-title {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--cream);
  text-align: center;
  margin-bottom: 0.5rem;
}
.auth-subtitle {
  font-size: 0.76rem;
  color: var(--muted);
  text-align: center;
  margin-bottom: 2rem;
}
.auth-footer {
  text-align: center;
  font-size: 0.76rem;
  color: var(--muted);
  margin-top: 1.5rem;
}
.auth-footer a { color: var(--gold); text-decoration: underline; }
.auth-divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  font-size: 0.68rem;
  color: var(--muted-dim);
}
.auth-divider::before, .auth-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(201,168,76,0.1);
}

/* ═══════════════ PROFILE PAGE ═══════════════ */
.profile-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2rem;
  padding: 2rem 0 4rem;
}
.profile-sidebar {
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.12);
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: calc(var(--nav-height) + 1rem);
}
.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--deep);
  margin: 0 auto 1rem;
}
.profile-name {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--cream);
  text-align: center;
  margin-bottom: 0.3rem;
}
.profile-email {
  font-size: 0.7rem;
  color: var(--muted);
  text-align: center;
  margin-bottom: 1.5rem;
}
.profile-nav { display: flex; flex-direction: column; gap: 0.3rem; }
.profile-nav-item {
  padding: 0.7rem 1rem;
  font-size: 0.74rem;
  color: var(--muted);
  cursor: pointer;
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.profile-nav-item:hover, .profile-nav-item.active {
  color: var(--gold);
  background: rgba(201,168,76,0.06);
}
.profile-content {
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.12);
  padding: 2rem;
}
.profile-section { display: none; }
.profile-section.active { display: block; }
.profile-section-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--cream);
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(201,168,76,0.1);
}

/* ═══════════════ CART PAGE ═══════════════ */
.cart-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 2rem;
  padding: 2rem 0 4rem;
}
.cart-items { display: flex; flex-direction: column; gap: 1rem; }
.cart-item {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 1.2rem;
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.1);
  transition: border-color var(--transition-base);
}
.cart-item:hover { border-color: rgba(201,168,76,0.25); }
.cart-item-image {
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, rgba(139,34,82,0.18) 0%, rgba(10,6,8,0.6) 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  flex-shrink: 0;
}
.cart-item-image img { width: 100%; height: 100%; object-fit: cover; }
.cart-item-info { flex: 1; }
.cart-item-brand { font-size: 0.56rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); }
.cart-item-name { font-family: var(--font-display); font-size: 1.1rem; color: var(--cream); }
.cart-item-size { font-size: 0.7rem; color: var(--muted); }
.cart-item-price { font-family: var(--font-display); font-size: 1.2rem; color: var(--gold); min-width: 100px; text-align: right; }
.cart-item-remove {
  color: var(--muted);
  font-size: 0.9rem;
  padding: 0.4rem;
  transition: color var(--transition-fast);
}
.cart-item-remove:hover { color: var(--error); }
.cart-summary {
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.12);
  padding: 1.8rem;
  height: fit-content;
  position: sticky;
  top: calc(var(--nav-height) + 1rem);
}
.cart-summary-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--cream);
  margin-bottom: 1.2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(201,168,76,0.1);
}
.cart-summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: var(--muted);
  margin-bottom: 0.6rem;
}
.cart-summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  color: var(--cream);
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(201,168,76,0.15);
}
.cart-summary-total span:last-child {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--gold);
}

/* ═══════════════ CHECKOUT PAGE ═══════════════ */
.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  padding: 2rem 0 4rem;
}
.checkout-form-section {
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.12);
  padding: 2rem;
  margin-bottom: 1.5rem;
}
.checkout-form-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--cream);
  margin-bottom: 1.2rem;
}

/* ═══════════════ ADMIN ═══════════════ */
.admin-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}
.admin-sidebar {
  background: var(--dark-elevated);
  border-right: 1px solid rgba(201,168,76,0.1);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
}
.admin-sidebar-logo {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--gold);
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}
.admin-sidebar-logo em { font-style: italic; color: var(--rose-soft); }
.admin-sidebar-label {
  font-size: 0.52rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted-dim);
  padding: 0.8rem 1.5rem 0.4rem;
}
.admin-nav-item {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem 1.5rem;
  font-size: 0.76rem;
  color: var(--muted);
  cursor: pointer;
  transition: all var(--transition-base);
}
.admin-nav-item:hover, .admin-nav-item.active {
  color: var(--gold);
  background: rgba(201,168,76,0.06);
  border-right: 2px solid var(--gold);
}
.admin-main { padding: 2rem; overflow-y: auto; }
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.admin-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--cream);
}
.admin-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
}
.admin-stat-card {
  background: var(--dark-elevated);
  border: 1px solid rgba(201,168,76,0.1);
  padding: 1.5rem;
}
.admin-stat-label { font-size: 0.58rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; }
.admin-stat-value { font-family: var(--font-display); font-size: 2rem; color: var(--gold); }
.admin-stat-sub { font-size: 0.68rem; color: var(--muted-dim); margin-top: 0.3rem; }
.admin-section { display: none; }
.admin-section.active { display: block; }
.admin-table-wrap { overflow-x: auto; }
.admin-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
}
.admin-table th {
  text-align: left;
  font-size: 0.58rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(201,168,76,0.15);
  white-space: nowrap;
}
.admin-table td {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid rgba(201,168,76,0.06);
  color: var(--text-secondary);
  vertical-align: middle;
}
.admin-table tr:hover td { background: rgba(201,168,76,0.02); }
.admin-form {
  background: var(--dark-surface);
  border: 1px solid rgba(201,168,76,0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}
.admin-form-title {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--cream);
  margin-bottom: 1rem;
}
.upload-zone {
  border: 2px dashed rgba(201,168,76,0.25);
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color var(--transition-base);
  margin-bottom: 1rem;
}
.upload-zone:hover { border-color: var(--gold); }
.upload-zone-text { font-size: 0.74rem; color: var(--muted); }
.upload-preview { max-height: 120px; margin: 0.5rem auto 0; display: none; }

/* ═══════════════ RESPONSIVE ═══════════════ */
@media (max-width: 1024px) {
  .about-grid, .contact-grid, .product-detail-grid { grid-template-columns: 1fr; }
  .profile-layout { grid-template-columns: 1fr; }
  .profile-sidebar { position: static; }
  .cart-layout { grid-template-columns: 1fr; }
  .cart-summary { position: static; }
  .checkout-layout { grid-template-columns: 1fr; }
  .admin-layout { grid-template-columns: 1fr; }
  .admin-sidebar { display: none; }
}
@media (max-width: 768px) {
  .hero-title { font-size: clamp(2.5rem, 8vw, 4rem); }
  .product-detail-image { height: 320px; }
  .cart-item { flex-wrap: wrap; }
}

/* ═══════════════ WHATSAPP BUTTON ═══════════════ */
.btn-success {
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: #fff;
  border: none;
}
.btn-success:hover {
  background: linear-gradient(135deg, #20bd5a 0%, #0e7a6e 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(37,211,102,0.3);
}

/* ═══════════════ CHECKOUT FORM ═══════════════ */
.checkout-form-section {
  margin-bottom: 2rem;
}
.checkout-form-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--cream);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(201,168,76,0.1);
}
