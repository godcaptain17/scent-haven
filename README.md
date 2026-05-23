# 🌹 Scent Haven — Luxury Perfume E-Commerce

A premium, full-stack perfume e-commerce platform built with vanilla HTML/CSS/JS and Supabase.

## ✨ Features

- **Dark luxury theme** — Gold accents, glassmorphism, animated particles
- **Full product catalog** — Categories, search, sorting, filtering
- **Shopping cart** — Add/remove, quantity control, persistent across sessions
- **Wishlist** — Save favorite fragrances
- **User accounts** — Register, login, profile management
- **Order system** — Checkout flow with WhatsApp confirmation
- **Admin dashboard** — Product CRUD, order management, stats overview
- **Responsive** — Works on mobile, tablet, and desktop
- **Demo mode** — Works out of the box with localStorage (no backend needed)

---

## 📁 Project Structure

```
scent-haven/
├── index.html              # Landing page
├── shop.html               # Product catalog
├── product.html            # Product detail
├── cart.html                # Shopping cart
├── checkout.html           # Checkout flow
├── login.html              # User login
├── register.html           # User registration
├── profile.html            # User dashboard
├── admin/
│   ├── login.html          # Admin login
│   └── dashboard.html      # Admin panel
├── assets/
│   ├── css/
│   │   ├── core.css        # Design system & global styles
│   │   └── pages.css       # Page-specific styles
│   └── js/
│       ├── supabase.js     # Auth & Supabase client
│       ├── db.js           # Database modules (Products, Cart, Orders, Wishlist)
│       └── ui.js           # Shared UI components (navbar, footer, toasts)
└── database/
    └── schema.sql          # Supabase SQL schema + seed data
```

---

## 🚀 Quick Start (Demo Mode)

**No setup needed.** The app works immediately with demo data stored in localStorage.

1. Serve the folder with any static server:

```bash
# Using Python
cd scent-haven
python3 -m http.server 8000

# Using Node
npx serve .

# Using PHP
php -S localhost:8000

# Using VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```

2. Open `http://localhost:8000`

3. **Demo admin login:**
   - URL: `/admin/login.html`
   - Email: `admin@scenthaven.com`
   - Password: `115987Daniel`

---

## 🔌 Supabase Setup (Production Mode)

To connect a real backend:

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Note your **Project URL** and **Anon Key** from Settings → API

### Step 2: Run Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Paste the contents of `database/schema.sql`
3. Click **Run** — this creates all tables, RLS policies, indexes, and seed data

### Step 3: Create Admin User

1. Go to **Authentication → Users** in Supabase dashboard
2. Click **Add User** → Create user with:
   - Email: `admin@scenthaven.com`
   - Password: your secure password
3. Go back to **SQL Editor** and run:

```sql
UPDATE public.profiles SET role = 'admin'
WHERE id = (SELECT id FROM auth.users WHERE email = 'admin@scenthaven.com');
```

### Step 4: Create Storage Bucket (for product images)

1. Go to **Storage** in Supabase dashboard
2. Click **New Bucket** → Name: `product-images`, set to **Public**
3. Add this RLS policy for uploads (SQL Editor):

```sql
CREATE POLICY "Admins can upload product images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'product-images'
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Public can view product images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');
```

### Step 5: Configure the App

Open `assets/js/supabase.js` and replace the placeholder values:

```javascript
const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE';
```

Once configured, the app automatically detects Supabase and switches from demo mode to production.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#C9A84C` | Primary accent, CTAs |
| `--deep` | `#0A0608` | Page background |
| `--dark` | `#140D10` | Cards, panels |
| `--rose` | `#8B2252` | Secondary accent |
| `--cream` | `#F5EFE0` | Headings text |
| `--muted` | `#9B8E7E` | Body text |
| `--glass` | `rgba(20,13,16,0.7)` | Glassmorphism panels |

**Fonts:**
- Display: Cormorant Garamond (serif)
- Body: Josefin Sans (sans-serif)

---

## 🛒 How It Works

### Shopping Flow
1. Browse products on `/shop.html` — filter by category, search, sort
2. View product details on `/product.html?id=X`
3. Add to cart → review on `/cart.html`
4. Checkout at `/checkout.html` or order via WhatsApp
5. Track orders in `/profile.html`

### Admin Flow
1. Login at `/admin/login.html`
2. View stats, recent orders on Overview
3. Add/edit/delete products in Products section
4. Update order statuses in Orders section

### Data Flow (Demo Mode)
- Products: hardcoded in `db.js` with 12 luxury perfumes
- Cart: `localStorage` key `sh_cart`
- Wishlist: `localStorage` key `sh_wishlist`
- Orders: `localStorage` key `sh_orders`
- Auth: `localStorage` key `sh_user`

### Data Flow (Supabase Mode)
- All data stored in PostgreSQL via Supabase
- Auth handled by Supabase Auth (JWT)
- Images stored in Supabase Storage
- RLS policies enforce access control

---

## 📱 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
cd scent-haven
vercel
```

### Netlify

1. Drag and drop the `scent-haven` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Done! Your site is live

### GitHub Pages

1. Push to a GitHub repo
2. Settings → Pages → Source: main branch → root folder
3. Your site will be at `username.github.io/repo-name`

> **Note:** For GitHub Pages, update all absolute paths (`/assets/...`) to relative paths (`./assets/...`) since the app won't be at the root domain.

---

## 📋 WhatsApp Integration

Orders can be confirmed via WhatsApp. The current number is:
- **+234 903 342 9640**

To change it, search for `2349033429640` across all HTML files and replace with your number.

---

## 🔐 Security Notes

- Demo mode stores data in localStorage (client-side only, no security)
- Supabase mode uses JWT auth + Row Level Security
- Admin role is checked server-side via RLS policies
- Never expose your Supabase service_role key in client code
- The anon key is safe to use client-side (it's designed for that)

---

## 📄 License

MIT — Built with ♥ for Scent Haven
