import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';

type Filter = Record<string, string | number | boolean>;

interface SupabaseFetchOptions {
  select?: string;
  orderBy?: { column: string; ascending?: boolean };
  filters?: Filter;
  limit?: number;
}

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY;

type FilterableQuery = PostgrestFilterBuilder<any, any, any, any>;

export const hasSupabaseConfig = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase: SupabaseClient | null = hasSupabaseConfig
  ? createClient(SUPABASE_URL as string, SUPABASE_ANON_KEY as string)
  : null;

function applyFilters(query: FilterableQuery, filters?: Filter) {
  if (!filters) return query;
  return Object.entries(filters).reduce((acc, [column, value]) => acc.eq(column, value), query);
}

export async function fetchSupabaseTable<T>(table: string, options: SupabaseFetchOptions = {}): Promise<T[]> {
  console.log("FETCH SUPABASE TABLE CALLED WITH SELECT:", options.select);

  if (!supabase) {
    return [];
  }

  let query = supabase.from(table).select(options.select ?? '*') as FilterableQuery;

  if (options.orderBy) {
    query = query.order(options.orderBy.column, { ascending: options.orderBy.ascending !== false });
  }

  query = applyFilters(query, options.filters);

  if (options.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;
  if (error) {
    throw error;
  }

  return (data as T[]) ?? [];
}


export async function fetchSupabaseSingle<T>(table: string, options?: SupabaseFetchOptions): Promise<T | null> {
  const rows = await fetchSupabaseTable<T>(table, { ...(options ?? {}), limit: 1 });
  return rows.length ? rows[0] : null;
}
