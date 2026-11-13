import { fetchSupabaseTable } from '../lib/supabaseClient';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return fetchSupabaseTable<Project>('projects', {
    orderBy: { column: 'title' },
  });
}
