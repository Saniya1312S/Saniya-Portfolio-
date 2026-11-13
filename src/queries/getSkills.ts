import { fetchSupabaseTable } from '../lib/supabaseClient';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return fetchSupabaseTable<Skill>('skills', { orderBy: { column: 'category' } });
}
