import { createClient, type SupabaseClient } from "@supabase/supabase-js";
let client: SupabaseClient | null = null;
export function supabase(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;if(!url||!key||key==="YOUR_SUPABASE_PUBLISHABLE_KEY")return null; if(!client)client=createClient(url,key,{auth:{autoRefreshToken:true,persistSession:true,detectSessionInUrl:true}});return client;}
