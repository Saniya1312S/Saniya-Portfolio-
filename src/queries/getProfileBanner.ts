import { fetchSupabaseSingle } from '../lib/supabaseClient';
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner | null> {
  return fetchSupabaseSingle<ProfileBanner>('profile_banner');
}
