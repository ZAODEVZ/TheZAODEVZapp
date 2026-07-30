import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** null when Supabase env vars aren't configured, so voting quietly no-ops instead of crashing the app. */
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
