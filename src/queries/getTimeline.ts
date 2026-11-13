// src/queries/getTimeline.ts
import { fetchSupabaseTable } from "../lib/supabaseClient";
import { TimelineItem } from "../types";

type TimelineRow = {
  id: string;
  timeline_type: TimelineItem["timelineType"];
  name: string;
  title: string | null;
  tech_stack: string | null;
  summary_points: string[] | string | null;
  date_range: string | null;
  sort_order: number | null;
};

export async function getTimeline(): Promise<TimelineItem[]> {
  console.log("getTimeline invoked");

  // 🔹 NO ALIASES HERE, ONLY RAW COLUMN NAMES
  const selectString = `
  id,
  timeline_type,
  name,
  title,
  tech_stack ,
  summary_points ,
  date_range ,
  sort_order
`;

  console.log("FETCH SUPABASE TABLE CALLED WITH SELECT:", selectString);

  const rows = await fetchSupabaseTable<TimelineRow>("timeline_items", {
    select: selectString,
    orderBy: { column: "sort_order", ascending: true },
  });

  console.log("RAW ROWS FROM SUPABASE:", rows);

  // 🔹 Map DB row → TimelineItem
  return rows.map((item): TimelineItem => {
    let normalized: string[] = [];

    const sp = item.summary_points;
    if (Array.isArray(sp)) {
      normalized = sp;
    } else if (typeof sp === "string") {
      const trimmed = sp.trim();
      normalized = trimmed.startsWith("[")
        ? (JSON.parse(trimmed) as string[])
        : trimmed
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
    }

    return {
      id: item.id,
      timelineType: item.timeline_type,
      name: item.name,
      title: item.title ?? "",
      techStack: item.tech_stack ?? "",
      summaryPoints: normalized,
      dateRange: item.date_range ?? "",
      sortOrder: item.sort_order ?? 999,
    };
  });
}
