import { createClient } from '@supabase/supabase-js';

// ==========================================
// TO DO: ADD YOUR SUPABASE CREDENTIALS HERE
// Get these from your dashboard at supabase.com
// ==========================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client or null if credentials are missing to prevent crashing
export const supabase = (supabaseUrl && supabaseAnonKey && supabaseUrl !== 'YOUR_SUPABASE_URL') 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn("Supabase credentials missing. Admin features will be disabled.");
}

