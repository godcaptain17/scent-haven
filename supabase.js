/* ══════════════════════════════════════════════════════════════
   SCENT HAVEN — Supabase Configuration & Auth
   ══════════════════════════════════════════════════════════════
   
   SETUP INSTRUCTIONS:
   1. Create a Supabase project at https://supabase.com
   2. Replace the SUPABASE_URL and SUPABASE_ANON_KEY below
   3. Run the SQL schema in your Supabase SQL Editor (see sql/schema.sql)
   4. Enable Email Auth in Authentication > Providers
   5. Create a storage bucket named 'products' (public) and 'avatars' (public)
   ══════════════════════════════════════════════════════════════ */

// ─── CONFIGURATION ───────────────────────────────────────────
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://vudxovvqpjdhlemugtqh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZHhvdnZxcGpkaGxlbXVndHFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0Nzc4NDIsImV4cCI6MjA5NTA1Mzg0Mn0.ruuDjj5PaWjdj_7-z6-YycKvsEGhDk6OJUANX19yB5E';

// Initialize Supabase client (loaded via CDN in HTML)
// Note: CDN exposes window.supabase — our client uses 'supabaseClient'
let supabaseClient;

function initSupabase() {
  if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return true;
  }
  console.warn('Supabase JS library not loaded. Running in demo mode.');
  return false;
}

// ─── DEMO MODE ───────────────────────────────────────────────
// When Supabase isn't configured, the app uses localStorage for demo
// ─── DEMO MODE TOGGLE ─────────────────────────────────────
// Set to TRUE to use localStorage (no backend needed)
// Set to FALSE when your Supabase tables, auth, and products are fully set up
const FORCE_DEMO = false;

const DEMO_MODE = false; // Permanently disabled — always use Supabase

async function checkSupabaseReady() {
  return true; // Always use Supabase
}

function getDemoUser() {
  const stored = localStorage.getItem('sh_demo_user');
  return stored ? JSON.parse(stored) : null;
}

function setDemoUser(user) {
  localStorage.setItem('sh_demo_user', JSON.stringify(user));
}

function clearDemoUser() {
  localStorage.removeItem('sh_demo_user');
}

// ─── AUTH MODULE ─────────────────────────────────────────────
const Auth = {

  // Register a new user
  async register(email, password, fullName) {
    await ensureReady();
    if (DEMO_MODE) {
      const user = { id: 'demo_' + Date.now(), email, full_name: fullName, role: 'user', created_at: new Date().toISOString() };
      setDemoUser(user);
      return { data: { user }, error: null };
    }

    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });

    if (!error && data.user) {
      // Insert into profiles table
      await supabaseClient.from('profiles').insert({
        id: data.user.id,
        email: email,
        full_name: fullName,
        role: 'user'
      });
    }

    return { data, error };
  },

  // Login with email + password
  async login(email, password) {
    await ensureReady();
    if (DEMO_MODE) {
      // Demo: check hardcoded admin or create user session
      // Demo mode disabled — should not reach here
      return { data: null, error: { message: 'Demo mode is disabled. Please configure Supabase.' } };
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    return { data, error };
  },

  // Logout
  async logout() {
    await ensureReady();
    if (DEMO_MODE) {
      clearDemoUser();
      return { error: null };
    }
    const { error } = await supabaseClient.auth.signOut();
    return { error };
  },

  // Get current session/user
  async getUser() {
    await ensureReady();
    if (DEMO_MODE) {
      const user = getDemoUser();
      return user;
    }

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (user) {
      const { data: profile } = await supabaseClient.from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      return { ...user, ...profile };
    }
    return null;
  },

  // Check if user is admin
  async isAdmin() {
    await ensureReady();
    const user = await this.getUser();
    if (!user) return false;

    if (DEMO_MODE) return user.role === 'admin';

    const { data } = await supabaseClient.from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    return data && data.role === 'admin';
  },

  // Update profile
  async updateProfile(updates) {
    if (DEMO_MODE) {
      const user = getDemoUser();
      if (user) {
        const updated = { ...user, ...updates };
        setDemoUser(updated);
        return { data: updated, error: null };
      }
      return { data: null, error: { message: 'Not logged in' } };
    }

    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) return { data: null, error: { message: 'Not authenticated' } };

    const { data, error } = await supabaseClient.from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();
    return { data, error };
  },

  // Reset password
  async resetPassword(email) {
    if (DEMO_MODE) {
      return { data: {}, error: null }; // Simulated success
    }
    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/login.html'
    });
    return { data, error };
  },

  // Auth state listener
  onAuthChange(callback) {
    if (DEMO_MODE) return;
    supabaseClient.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }
};

// ─── ROUTE PROTECTION ────────────────────────────────────────
async function requireAuth(redirectTo = '/login.html') {
  const user = await Auth.getUser();
  if (!user) {
    window.location.href = redirectTo;
    return null;
  }
  return user;
}

async function requireAdmin(redirectTo = 'admin/login.html') {
  const isAdmin = await Auth.isAdmin();
  if (!isAdmin) {
    window.location.href = redirectTo;
    return null;
  }
  return await Auth.getUser();
}

async function redirectIfLoggedIn(to = '/profile.html') {
  const user = await Auth.getUser();
  if (user) {
    window.location.href = to;
  }
}

// Initialize immediately (CDN script is loaded before this file)
initSupabase();

// Check Supabase connectivity — stores promise so pages can await it
const _supabaseReady = checkSupabaseReady();

// Helper: call this before any data operation to ensure DEMO_MODE is resolved
async function ensureReady() {
  await _supabaseReady;
}
