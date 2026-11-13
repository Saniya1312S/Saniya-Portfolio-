# Dallas Zip Insight Map

Dallas Zip Insight Map is an interactive dashboard that highlights demographic patterns and assistance needs across Dallas-area ZIP codes. It combines a Leaflet-powered choropleth map with drill-down panels that summarize income, ethnicity, insurance coverage, and safety-net program participation for every ZIP.

## Screenshots
![Choropleth overview with assistance markers](public/readme/12.png)
![Income and assistance legend detail](public/readme/11.png)
![Full dashboard layout](public/readme/screenshot-2025-11-28-160128.png)

## Features
- **Interactive choropleth** that shades ZIP boundaries based on the shared income brackets defined in `src/data/dallasZipData.ts`.
- **Assistance signals** that surface financial, food, and medical flags both on the map (flag markers) and inside the demographic panel.
- **Responsive detail panel** that explains the currently selected ZIP and calls out areas that fall below key thresholds.
- **Shadcn UI starter kit** already wired up with React Query, React Router, TailwindCSS, and Vite for rapid experimentation.

## Tech stack
- React 18 + TypeScript
- Vite build + dev tooling
- TailwindCSS UI system + shadcn/ui components
- React Leaflet + OpenStreetMap tiles

## Getting started
1. **Install dependencies** (Node.js 18+ recommended):
   ```bash
   npm install
   ```
2. **Run the local dev server**:
   ```bash
   npm run dev
   ```
   The app defaults to `http://localhost:5173`.
3. **Lint / type-check** (optional while developing):
   ```bash
   npm run lint
   ```
4. **Build for production**:
   ```bash
   npm run build
   npm run preview   # serve the production build locally
   ```

## Project structure
```
src/
|- components/
|  |- DallasMap.tsx          # Leaflet map + GeoJSON + assistance markers
|  |- DemographicPanel.tsx   # Details / assistance callouts for one ZIP
|  |- MapLegend.tsx          # Shared legend for income brackets & flags
|- data/
|  |- dallasZipData.ts       # Mock dataset + helpers + legend metadata
|- pages/
|  |- Index.tsx              # Main dashboard layout
|  |- NotFound.tsx
|- main.tsx / App.tsx        # Vite + router + providers bootstrap
```

## Data model
`src/data/dallasZipData.ts` keeps the mock dataset plus helpers that the UI consumes:

- `ZipCodeData` & `dallasZipCodes`: geometry + demographics for each ZIP.
- `INCOME_BRACKETS`: single source of truth for map colors + legend labels.
- `ASSISTANCE_META`: financial/food/medical flag metadata (label, color, description).
- `getAssistanceFlags`, `getColorByIncome`, `formatCurrency`, etc. centralize shared logic.

When wiring in a live datasource you only need to replace the `dallasZipCodes` array (or hydrate it via a fetch) while leaving the rest of the UI intact.

## Key flows
1. Selecting a ZIP on the map triggers `onZipSelected`, which hydrates `DemographicPanel` and updates the status banner.
2. Assistance markers are generated up-front using the mock data + thresholds in `ASSISTANCE_META`, so the same signals appear in both the map tooltip and panel.
3. The legend consumes the same constants as the map, guaranteeing color accuracy.

## Ideas for next iterations
1. Replace the mock dataset with a real GeoJSON feed + demographic API (ACS, city datasets, etc.).
2. Add search + filtering (by income bracket, assistance type, or neighborhood).
3. Persist selected ZIP state to the query string so shares/deep links keep context.
4. Capture usage analytics or export options (CSV, PNG snapshot) for presenting insights.

Happy mapping!
