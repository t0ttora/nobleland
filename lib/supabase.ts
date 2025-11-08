import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**
 * Creates a server-side Supabase client using service role when available.
 * Falls back to anon key if service role is not provided.
 * Returns null if required env vars are missing.
 */
export function createAdminClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url) return null;
  const key = serviceKey || anon;
  if (!key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}
