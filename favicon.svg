-- ═══════════════════════════════════════════════════════════
-- SCENT HAVEN — Supabase Database Schema
-- Run this in your Supabase SQL Editor (supabase.com/dashboard)
-- ═══════════════════════════════════════════════════════════

-- ─── 1. PROFILES TABLE ──────────────────────────────────────
-- Extends Supabase auth.users with app-specific fields
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  bio TEXT,
  dob DATE,
  avatar_url TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'customer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ─── 2. PRODUCTS TABLE ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT,
  price INTEGER NOT NULL DEFAULT 0,
  description TEXT,
  category TEXT DEFAULT 'Oud',
  size TEXT DEFAULT '100ml EDP',
  stock INTEGER DEFAULT 10,
  rating NUMERIC(2,1) DEFAULT 4.5,
  emoji TEXT DEFAULT '🧴',
  image_url TEXT,
  notes TEXT[] DEFAULT '{}',
  badge TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


-- ─── 3. CART ITEMS TABLE ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.cart_items (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);


-- ─── 4. WISHLIST TABLE ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.wishlist (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id BIGINT NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, product_id)
);


-- ─── 5. ORDERS TABLE ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.orders (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  delivery_address TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','shipped','delivered','cancelled')),
  total INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


-- ─── 6. ORDER ITEMS TABLE ──────────────────────────────────
CREATE TABLE IF NOT EXISTS public.order_items (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id BIGINT REFERENCES public.products(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  brand TEXT,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- ─── 7. ADDRESSES TABLE ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.addresses (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  street TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  country TEXT DEFAULT 'Nigeria',
  is_default BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);


-- ═══════════════════════════════════════════════════════════
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ═══════════════════════════════════════════════════════════

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;

-- ─── PROFILES POLICIES ─────────────────────────────────────
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ─── PRODUCTS POLICIES ─────────────────────────────────────
-- Anyone can read products (including unauthenticated)
CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert products"
  ON public.products FOR INSERT
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update products"
  ON public.products FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can delete products"
  ON public.products FOR DELETE
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ─── CART POLICIES ──────────────────────────────────────────
CREATE POLICY "Users can manage own cart"
  ON public.cart_items FOR ALL
  USING (auth.uid() = user_id);

-- ─── WISHLIST POLICIES ──────────────────────────────────────
CREATE POLICY "Users can manage own wishlist"
  ON public.wishlist FOR ALL
  USING (auth.uid() = user_id);

-- ─── ORDERS POLICIES ───────────────────────────────────────
CREATE POLICY "Users can view own orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON public.orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can view all orders"
  ON public.orders FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can update orders"
  ON public.orders FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ─── ORDER ITEMS POLICIES ───────────────────────────────────
CREATE POLICY "Users can view own order items"
  ON public.order_items FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );

CREATE POLICY "Users can create order items"
  ON public.order_items FOR INSERT
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.orders WHERE orders.id = order_items.order_id AND orders.user_id = auth.uid())
  );

CREATE POLICY "Admins can view all order items"
  ON public.order_items FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- ─── ADDRESSES POLICIES ────────────────────────────────────
CREATE POLICY "Users can manage own addresses"
  ON public.addresses FOR ALL
  USING (auth.uid() = user_id);


-- ═══════════════════════════════════════════════════════════
-- SEED DATA — Default Admin User & Sample Products
-- ═══════════════════════════════════════════════════════════

-- NOTE: The admin user must be created via Supabase Auth first.
-- After creating the user with email: admin@scenthaven.com,
-- run this to promote them to admin:
--
-- UPDATE public.profiles SET role = 'admin'
-- WHERE id = (SELECT id FROM auth.users WHERE email = 'admin@scenthaven.com');

-- ─── Sample Products ────────────────────────────────────────
INSERT INTO public.products (name, brand, price, description, category, size, stock, rating, emoji, notes, badge, featured) VALUES
  ('Oud Wood', 'Tom Ford', 185000, 'A composition of rare oud wood, sandalwood, and vetiver. Exotic and smoky, this fragrance redefines luxury for the modern connoisseur.', 'Oud', '100ml EDP', 8, 4.8, '🖤', ARRAY['Oud','Sandalwood','Vetiver','Tonka Bean'], 'Bestseller', true),
  ('Aventus', 'Creed', 280000, 'A rich and bold fragrance celebrating strength, power, and success. Notes of pineapple, birch, and musk create an unforgettable impression.', 'Fresh', '100ml EDP', 5, 4.9, '👑', ARRAY['Pineapple','Birch','Musk','Ambergris'], 'Iconic', true),
  ('Baccarat Rouge 540', 'Maison Francis Kurkdjian', 320000, 'An alchemy of woody and amber notes with a luminous aura. Jasmine, saffron, and cedarwood create crystalline beauty.', 'Oriental', '70ml EDP', 6, 4.9, '💎', ARRAY['Saffron','Jasmine','Cedarwood','Ambergris'], 'Legendary', true),
  ('Sauvage Elixir', 'Dior', 165000, 'A potent and magnetic fragrance with lavender, nutmeg, and amber. The ultimate expression of raw masculinity.', 'Spicy', '60ml Elixir', 12, 4.7, '🔥', ARRAY['Cinnamon','Nutmeg','Cardamom','Sandalwood'], 'New', true),
  ('N°5 L''Eau', 'Chanel', 195000, 'A fresh interpretation of the iconic N°5. Citrus, ylang-ylang, and musk in a vibrant, modern composition.', 'Floral', '100ml EDT', 10, 4.6, '🌹', ARRAY['Citrus','Rose','Ylang-Ylang','White Musk'], 'Classic', true),
  ('Black Opium', 'YSL', 125000, 'An addictive gourmand fragrance with black coffee, vanilla, and white flowers. Seductive and mysterious.', 'Gourmand', '90ml EDP', 15, 4.7, '✨', ARRAY['Coffee','Vanilla','White Flowers','Cedar'], 'Popular', true),
  ('Tobacco Vanille', 'Tom Ford', 210000, 'A luxurious blend of tobacco leaf, vanilla, cocoa, and dried fruits. Opulent and warm, perfect for evening wear.', 'Oriental', '100ml EDP', 7, 4.8, '🍂', ARRAY['Tobacco','Vanilla','Cocoa','Dried Fruits'], NULL, true),
  ('Grand Soir', 'Maison Francis Kurkdjian', 245000, 'An amber fragrance glowing with warmth. Benzoin, amber accord, and vanilla create an intoxicating trail.', 'Oriental', '70ml EDP', 4, 4.7, '🌙', ARRAY['Amber','Benzoin','Vanilla','Tonka Bean'], 'Limited', true),
  ('Eros', 'Versace', 85000, 'A vibrant fragrance inspired by Greek mythology. Mint, green apple, and tonka bean create an energetic aura.', 'Fresh', '100ml EDT', 20, 4.5, '💙', ARRAY['Mint','Green Apple','Tonka Bean','Vanilla'], NULL, false),
  ('La Nuit de L''Homme', 'YSL', 95000, 'A daring and sophisticated scent. Cardamom and cedar provide a dark, magnetic allure for the modern gentleman.', 'Spicy', '100ml EDT', 14, 4.6, '🌃', ARRAY['Cardamom','Cedar','Vetiver','Coumarin'], NULL, false),
  ('Jasmin Rouge', 'Tom Ford', 220000, 'A voluptuous floral with spicy accents. Jasmine sambac meets cinnamon and clove in a daringly sensual blend.', 'Floral', '50ml EDP', 3, 4.5, '🌺', ARRAY['Jasmine','Cinnamon','Clove','Saffron'], 'Exclusive', false),
  ('Royal Oud', 'Creed', 290000, 'A regal composition blending oud with pink pepper, lemon, and galbanum. Sophisticated and commanding.', 'Oud', '100ml EDP', 4, 4.8, '👑', ARRAY['Oud','Pink Pepper','Lemon','Sandalwood'], 'Premium', true)
ON CONFLICT DO NOTHING;


-- ═══════════════════════════════════════════════════════════
-- INDEXES for performance
-- ═══════════════════════════════════════════════════════════
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON public.products(featured);
CREATE INDEX IF NOT EXISTS idx_cart_user ON public.cart_items(user_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_user ON public.wishlist(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON public.order_items(order_id);


-- ═══════════════════════════════════════════════════════════
-- UPDATED_AT TRIGGER (auto-update timestamps)
-- ═══════════════════════════════════════════════════════════
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER set_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
CREATE TRIGGER set_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
