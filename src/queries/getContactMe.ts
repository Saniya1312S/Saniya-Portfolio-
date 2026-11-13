import { fetchSupabaseSingle } from '../lib/supabaseClient';
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe | null> {
  return fetchSupabaseSingle<ContactMe>('contact_profiles');
}
