# Netflix-Inspired Portfolio

A cinematic single-page experience inspired by Netflix: visitors click through an intro sting, pick a persona tile, and then dive into sections for projects, skills, awards, blogs, certifications, work permits, Ask-Me-Anything, etc. Content is backed by Supabase and Gemini so you can refresh copy/media without redeploying.

![Preview](image.png)

## Highlights
- **Intro + persona gate** with custom audio, animated GIF avatars, and router state to theme the profile page.
- **Supabase-powered content** for timeline, skills, projects, recommendations, contact, etc., with graceful fallbacks while you seed tables.
- **Ask Me Anything (OA Bot)** streams site context into Gemini and renders markdown replies so visitors can chat about Dolapo’s story.
- **Responsive Netflix UI** with shared navbar/sidebar, section cards, GitHub repo feed, playlists, reading list, and downloadable recommendation letters.

## Tech Stack
- React 18 + TypeScript (Create React App)
- React Router 6
- Supabase JS SDK
- @google/generative-ai + markdown-to-jsx
- Custom CSS + eact-icons

## Structure
`
src/
+-- App.tsx             # route map
+-- NetflixTitle.tsx    # intro animation + sound
+-- browse/             # persona selector grid
+-- components/         # NavBar, ProfileCard, buttons…
+-- pages/              # WorkExperience, Skills, Projects, AskMeAnything, etc.
+-- profilePage/        # banner + personalized rows
+-- queries/            # Supabase helpers
+-- lib/askGemini.ts    # Gemini wrapper
`

## Local Setup
`ash
git clone <repo>
cd netflix_portfolio
nvm install 18
nvm use 18
npm install
`
Create .env with:
`
REACT_APP_SUPABASE_URL=https://<project>.supabase.co
REACT_APP_SUPABASE_ANON_KEY=<anon key>
REACT_APP_GEMINI_API_KEY=<browser-safe key>
`
Then run 
pm start and open http://localhost:3000.

## Scripts
- 
pm start – CRA dev server
- 
pm run build – optimized bundle in uild/
- 
pm test – CRA Jest suite

## Deployment (Vercel)
1. In Project ? Settings ? Environment Variables add:
   - REACT_APP_SUPABASE_URL
   - REACT_APP_SUPABASE_ANON_KEY
   - REACT_APP_GEMINI_API_KEY
2. Build command: 
pm run build
3. Output directory: uild
4. Deploy via dashboard or ercel --prod.

## Sample Supabase Schema
`sql
create table if not exists profile_banner (
  id uuid primary key default gen_random_uuid(),
  background_url text,
  headline text,
  resume_url text,
  linkedin_url text,
  profile_summary text
);

create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  name text,
  category text,
  description text,
  icon text
);

create table if not exists timeline_items (
  id uuid primary key default gen_random_uuid(),
  timeline_type text,
  name text,
  title text,
  tech_stack text,
  summary_points text[],
  date_range text,
  sort_order int
);
`
Add tables for projects, contact, certifications, awards, etc. The UI automatically falls back to bundled sample data while you seed Supabase.

## Contributing
PRs are welcome for UI polish, accessibility, new personas, or deeper data/AI integrations. Please open an issue for larger features.

---
MIT License
