/* ══════════════════════════════════════════════════════════════
   SCENT HAVEN — Products Database Module
   ══════════════════════════════════════════════════════════════ */

// ─── DEMO PRODUCTS DATA ──────────────────────────────────────
const DEMO_PRODUCTS = [
  {
    id: 1, name: 'Noir Absolu', brand: 'Tom Ford', price: 185000, stock: 12,
    category: 'Oud', description: 'An intense, smoky oud fragrance with dark rose and leather undertones. Evokes mysterious midnight gatherings.',
    notes: ['Oud', 'Dark Rose', 'Leather', 'Amber'], size: '100ml EDP',
    image_url: 'https://images.unsplash.com/photo-1594035910387-fea081ac42f0?w=400&h=500&fit=crop&q=80', emoji: '🖤', badge: 'Bestseller', featured: true, rating: 4.8, available: true
  },
  {
    id: 2, name: 'Rose Impériale', brand: 'Maison Francis Kurkdjian', price: 220000, stock: 8,
    category: 'Floral', description: 'A regal bouquet of Bulgarian and Turkish roses blended with saffron and soft musk.',
    notes: ['Bulgarian Rose', 'Saffron', 'Musk', 'Vanilla'], size: '70ml EDP',
    image_url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=500&fit=crop&q=80', emoji: '🌹', badge: 'New', featured: true, rating: 4.9, available: true
  },
  {
    id: 3, name: 'Aventus', brand: 'Creed', price: 320000, stock: 5,
    category: 'Fresh', description: 'The king of fragrances. A bold, fruity blend with birch, pineapple, and oak moss.',
    notes: ['Pineapple', 'Birch', 'Musk', 'Oak Moss'], size: '100ml EDP',
    image_url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=500&fit=crop&q=80', emoji: '👑', badge: 'Iconic', featured: true, rating: 4.7, available: true
  },
  {
    id: 4, name: 'Baccarat Rouge 540', brand: 'Maison Francis Kurkdjian', price: 280000, stock: 3,
    category: 'Oriental', description: 'Luminous and addictive. Saffron and jasmine over a warm base of ambergris and cedar.',
    notes: ['Saffron', 'Jasmine', 'Ambergris', 'Cedar'], size: '70ml EDP',
    image_url: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop&q=80', emoji: '💎', badge: 'Limited', featured: true, rating: 4.9, available: true
  },
  {
    id: 5, name: 'Velvet Orchid', brand: 'Tom Ford', price: 145000, stock: 15,
    category: 'Floral', description: 'Luxurious citrus and honey notes that create a sparkling, floral experience with rum absolute.',
    notes: ['Orchid', 'Rum', 'Honey', 'Citrus'], size: '100ml EDP',
    image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop&q=80', emoji: '🌸', badge: '', featured: false, rating: 4.5, available: true
  },
  {
    id: 6, name: 'Oud Wood', brand: 'Tom Ford', price: 195000, stock: 10,
    category: 'Oud', description: 'A smooth and exotic oud with rosewood, cardamom, and tonka bean warmth.',
    notes: ['Oud', 'Rosewood', 'Cardamom', 'Tonka Bean'], size: '50ml EDP',
    image_url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop&q=80', emoji: '🪵', badge: 'Popular', featured: true, rating: 4.6, available: true
  },
  {
    id: 7, name: 'La Nuit de L\'Homme', brand: 'Yves Saint Laurent', price: 85000, stock: 20,
    category: 'Spicy', description: 'Mysterious cardamom meets lavender in this seductive nocturnal scent.',
    notes: ['Cardamom', 'Lavender', 'Cedar', 'Vetiver'], size: '100ml EDT',
    image_url: 'https://images.unsplash.com/photo-1595425964272-fc617fa29cba?w=400&h=500&fit=crop&q=80', emoji: '🌙', badge: '', featured: false, rating: 4.4, available: true
  },
  {
    id: 8, name: 'Lost Cherry', brand: 'Tom Ford', price: 250000, stock: 6,
    category: 'Gourmand', description: 'Black cherry liqueur meets Turkish rose and jasmine in this hedonistic creation.',
    notes: ['Cherry', 'Rose', 'Jasmine', 'Tonka'], size: '50ml EDP',
    image_url: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=500&fit=crop&q=80', emoji: '🍒', badge: 'Trending', featured: true, rating: 4.8, available: true
  },
  {
    id: 9, name: 'Bleu de Chanel', brand: 'Chanel', price: 125000, stock: 18,
    category: 'Fresh', description: 'A woody aromatic fragrance that channels freedom with citrus, mint, and sandalwood.',
    notes: ['Citrus', 'Mint', 'Cedar', 'Sandalwood'], size: '100ml EDP',
    image_url: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=500&fit=crop&q=80', emoji: '💙', badge: '', featured: false, rating: 4.5, available: true
  },
  {
    id: 10, name: 'Ambre Nuit', brand: 'Dior', price: 175000, stock: 7,
    category: 'Oriental', description: 'Damascena rose meets amber in this refined Dior Privée collection masterpiece.',
    notes: ['Rose', 'Amber', 'Guaiac Wood', 'Musk'], size: '125ml EDP',
    image_url: 'https://images.unsplash.com/photo-1619994403073-2cec844b8c63?w=400&h=500&fit=crop&q=80', emoji: '✨', badge: 'Exclusive', featured: true, rating: 4.7, available: true
  },
  {
    id: 11, name: 'Tobacco Vanille', brand: 'Tom Ford', price: 210000, stock: 9,
    category: 'Gourmand', description: 'Opulent tobacco leaf and spicy notes warmed with vanilla, cocoa, and dried fruits.',
    notes: ['Tobacco', 'Vanilla', 'Cocoa', 'Spice'], size: '50ml EDP',
    image_url: 'https://images.unsplash.com/photo-1600612253971-422b1a489945?w=400&h=500&fit=crop&q=80', emoji: '🍂', badge: '', featured: false, rating: 4.6, available: true
  },
  {
    id: 12, name: 'Sauvage Elixir', brand: 'Dior', price: 160000, stock: 14,
    category: 'Spicy', description: 'A rich and concentrated elixir with grapefruit, cinnamon, nutmeg, and sandalwood.',
    notes: ['Grapefruit', 'Cinnamon', 'Nutmeg', 'Sandalwood'], size: '60ml Parfum',
    image_url: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=500&fit=crop&q=80', emoji: '🔥', badge: 'Hot', featured: true, rating: 4.7, available: true
  }
];

const CATEGORIES = ['All', 'Oud', 'Floral', 'Fresh', 'Oriental', 'Spicy', 'Gourmand'];

// ─── PRODUCTS MODULE ─────────────────────────────────────────
const Products = {
  
  // Get all products with optional filters
  async getAll(filters = {}) {
    await ensureReady();
    if (DEMO_MODE) {
      let items = [...this._getDemoProducts()];
      if (filters.category && filters.category !== 'All') {
        items = items.filter(p => p.category === filters.category);
      }
      if (filters.search) {
        const q = filters.search.toLowerCase();
        items = items.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.notes && p.notes.some(n => n.toLowerCase().includes(q)))
        );
      }
      if (filters.featured) {
        items = items.filter(p => p.featured);
      }
      if (filters.sort === 'price_asc') items.sort((a, b) => a.price - b.price);
      else if (filters.sort === 'price_desc') items.sort((a, b) => b.price - a.price);
      else if (filters.sort === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
      else if (filters.sort === 'rating') items.sort((a, b) => b.rating - a.rating);
      
      return { data: items, error: null };
    }
    
    let query = supabaseClient.from('products').select('*');
    if (filters.category && filters.category !== 'All') query = query.eq('category', filters.category);
    if (filters.search) query = query.or(`name.ilike.%${filters.search}%,brand.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    if (filters.featured) query = query.eq('featured', true);
    if (filters.sort === 'price_asc') query = query.order('price', { ascending: true });
    else if (filters.sort === 'price_desc') query = query.order('price', { ascending: false });
    else if (filters.sort === 'name') query = query.order('name');
    else if (filters.sort === 'rating') query = query.order('rating', { ascending: false });
    else query = query.order('created_at', { ascending: false });
    
    const { data, error } = await query;
    return { data, error };
  },
  
  // Get single product by ID
  async getById(id) {
    await ensureReady();
    if (DEMO_MODE) {
      const products = this._getDemoProducts();
      const product = products.find(p => p.id == id);
      return { data: product || null, error: product ? null : { message: 'Product not found' } };
    }
    const { data, error } = await supabaseClient.from('products').select('*').eq('id', id).single();
    return { data, error };
  },
  
  // Create product (admin)
  async create(product) {
    await ensureReady();
    if (DEMO_MODE) {
      const products = this._getDemoProducts();
      const newProduct = { ...product, id: Date.now(), created_at: new Date().toISOString(), rating: 0, available: true };
      products.push(newProduct);
      localStorage.setItem('sh_products', JSON.stringify(products));
      return { data: newProduct, error: null };
    }
    const { data, error } = await supabaseClient.from('products').insert(product).select().single();
    return { data, error };
  },
  
  // Update product (admin)
  async update(id, updates) {
    await ensureReady();
    if (DEMO_MODE) {
      const products = this._getDemoProducts();
      const idx = products.findIndex(p => p.id == id);
      if (idx === -1) return { data: null, error: { message: 'Product not found' } };
      products[idx] = { ...products[idx], ...updates };
      localStorage.setItem('sh_products', JSON.stringify(products));
      return { data: products[idx], error: null };
    }
    const { data, error } = await supabaseClient.from('products').update(updates).eq('id', id).select().single();
    return { data, error };
  },
  
  // Delete product (admin)
  async delete(id) {
    await ensureReady();
    if (DEMO_MODE) {
      let products = this._getDemoProducts();
      products = products.filter(p => p.id != id);
      localStorage.setItem('sh_products', JSON.stringify(products));
      return { error: null };
    }
    const { error } = await supabaseClient.from('products').delete().eq('id', id);
    return { error };
  },
  
  // Upload product image
  async uploadImage(file) {
    await ensureReady();
    if (DEMO_MODE) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({ url: e.target.result, error: null });
        reader.readAsDataURL(file);
      });
    }
    const fileName = `product_${Date.now()}_${file.name}`;
    const { data, error } = await supabaseClient.storage.from('products').upload(fileName, file);
    if (error) return { url: null, error };
    const { data: { publicUrl } } = supabaseClient.storage.from('products').getPublicUrl(fileName);
    return { url: publicUrl, error: null };
  },
  
  // Helper: get demo products from localStorage or defaults
  _getDemoProducts() {
    const stored = localStorage.getItem('sh_products');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('sh_products', JSON.stringify(DEMO_PRODUCTS));
    return [...DEMO_PRODUCTS];
  }
};

// ─── CART MODULE ─────────────────────────────────────────────
const Cart = {
  
  async getItems() {
    await ensureReady();
    if (DEMO_MODE) {
      const stored = localStorage.getItem('sh_cart');
      return stored ? JSON.parse(stored) : [];
    }
    const user = await Auth.getUser();
    if (!user) return [];
    const { data } = await supabaseClient.from('cart_items').select('*').eq('user_id', user.id);
    return data || [];
  },
  
  async addItem(productId, qty = 1) {
    await ensureReady();
    if (DEMO_MODE) {
      const cart = await this.getItems();
      const existing = cart.find(c => c.product_id == productId);
      if (existing) {
        existing.quantity += qty;
      } else {
        cart.push({ id: Date.now(), product_id: productId, quantity: qty });
      }
      localStorage.setItem('sh_cart', JSON.stringify(cart));
      return { error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { error: { message: 'Please login first' } };
    
    const { data: existing } = await supabaseClient.from('cart_items')
      .select('*').eq('user_id', user.id).eq('product_id', productId).single();
    
    if (existing) {
      await supabaseClient.from('cart_items').update({ quantity: existing.quantity + qty }).eq('id', existing.id);
    } else {
      await supabaseClient.from('cart_items').insert({ user_id: user.id, product_id: productId, quantity: qty });
    }
    return { error: null };
  },
  
  async updateQuantity(productId, qty) {
    await ensureReady();
    if (DEMO_MODE) {
      let cart = await this.getItems();
      const item = cart.find(c => c.product_id == productId);
      if (item) {
        if (qty <= 0) cart = cart.filter(c => c.product_id != productId);
        else item.quantity = qty;
      }
      localStorage.setItem('sh_cart', JSON.stringify(cart));
      return { error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { error: { message: 'Not authenticated' } };
    if (qty <= 0) {
      await supabaseClient.from('cart_items').delete().eq('user_id', user.id).eq('product_id', productId);
    } else {
      await supabaseClient.from('cart_items').update({ quantity: qty }).eq('user_id', user.id).eq('product_id', productId);
    }
    return { error: null };
  },
  
  async removeItem(productId) {
    return this.updateQuantity(productId, 0);
  },
  
  async clear() {
    await ensureReady();
    if (DEMO_MODE) {
      localStorage.removeItem('sh_cart');
      return { error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { error: { message: 'Not authenticated' } };
    await supabaseClient.from('cart_items').delete().eq('user_id', user.id);
    return { error: null };
  },
  
  async getCount() {
    await ensureReady();
    const items = await this.getItems();
    return items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  },

  // Get full cart with product details
  async getCartWithProducts() {
    await ensureReady();
    const cartItems = await this.getItems();
    if (!cartItems || cartItems.length === 0) return [];

    // Get all product IDs from cart
    var productIds = cartItems.map(function(item) { return item.product_id; });
    
    // Fetch all products in one query
    var resp = await supabaseClient.from('products').select('*').in('id', productIds);
    var products = resp.data || [];

    // Match each cart item to its product
    var result = [];
    for (var i = 0; i < cartItems.length; i++) {
      var item = cartItems[i];
      var product = null;
      for (var j = 0; j < products.length; j++) {
        if (String(products[j].id) === String(item.product_id)) {
          product = products[j];
          break;
        }
      }
      if (product) {
        result.push(Object.assign({}, item, { product: product }));
      }
    }
    return result;
  }
};

// ─── WISHLIST MODULE ─────────────────────────────────────────
const Wishlist = {
  
  async getItems() {
    await ensureReady();
    if (DEMO_MODE) {
      const stored = localStorage.getItem('sh_wishlist');
      return stored ? JSON.parse(stored) : [];
    }
    const user = await Auth.getUser();
    if (!user) return [];
    const { data } = await supabaseClient.from('wishlist').select('*, products(*)').eq('user_id', user.id);
    return data || [];
  },
  
  async toggle(productId) {
    await ensureReady();
    if (DEMO_MODE) {
      let items = await this.getItems();
      const exists = items.find(w => w.product_id == productId);
      if (exists) {
        items = items.filter(w => w.product_id != productId);
      } else {
        items.push({ id: Date.now(), product_id: productId });
      }
      localStorage.setItem('sh_wishlist', JSON.stringify(items));
      return { added: !exists, error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { added: false, error: { message: 'Please login first' } };
    
    const { data: existing } = await supabaseClient.from('wishlist')
      .select('*').eq('user_id', user.id).eq('product_id', productId).single();
    
    if (existing) {
      await supabaseClient.from('wishlist').delete().eq('id', existing.id);
      return { added: false, error: null };
    } else {
      await supabaseClient.from('wishlist').insert({ user_id: user.id, product_id: productId });
      return { added: true, error: null };
    }
  },
  
  async isWishlisted(productId) {
    await ensureReady();
    const items = await this.getItems();
    return items.some(w => w.product_id == productId);
  }
};

// ─── ORDERS MODULE ───────────────────────────────────────────
const Orders = {
  
  async create(orderData) {
    await ensureReady();
    if (DEMO_MODE) {
      const orders = JSON.parse(localStorage.getItem('sh_orders') || '[]');
      const order = {
        id: 'ORD-' + Date.now(),
        ...orderData,
        status: 'pending',
        created_at: new Date().toISOString()
      };
      orders.push(order);
      localStorage.setItem('sh_orders', JSON.stringify(orders));
      return { data: order, error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { data: null, error: { message: 'Not authenticated' } };
    
    const { data, error } = await supabaseClient.from('orders').insert({
      user_id: user.id,
      ...orderData,
      status: 'pending'
    }).select().single();
    return { data, error };
  },
  
  async getUserOrders() {
    await ensureReady();
    if (DEMO_MODE) {
      const orders = JSON.parse(localStorage.getItem('sh_orders') || '[]');
      const user = getDemoUser();
      return { data: user ? orders.filter(o => o.user_id === user.id) : [], error: null };
    }
    const user = await Auth.getUser();
    if (!user) return { data: [], error: null };
    const { data, error } = await supabaseClient.from('orders')
      .select('*, order_items(*, products(*))')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });
    return { data, error };
  },
  
  async getAll() {
    await ensureReady();
    if (DEMO_MODE) {
      const orders = JSON.parse(localStorage.getItem('sh_orders') || '[]');
      return { data: orders, error: null };
    }
    const { data, error } = await supabaseClient.from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  },
  
  async updateStatus(orderId, status) {
    await ensureReady();
    if (DEMO_MODE) {
      const orders = JSON.parse(localStorage.getItem('sh_orders') || '[]');
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.status = status;
        localStorage.setItem('sh_orders', JSON.stringify(orders));
      }
      return { error: null };
    }
    const { error } = await supabaseClient.from('orders').update({ status }).eq('id', orderId);
    return { error };
  }
};
