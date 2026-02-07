# Address Search & Location Mapper

A React application for searching addresses, viewing them on an interactive map, and submitting location-based requests with user details and facility requirements.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0.0-rc.1 | UI framework |
| Vite | 6.0.1 | Build tool & dev server |
| Leaflet | 1.9.4 | Map rendering |
| React-Leaflet | 5.0.0-rc.2 | React bindings for Leaflet |
| ESLint | 9.15.0 | Code linting |

## Project Structure

```
src/
├── App.jsx              # Root component
├── Form.jsx             # Main form with address search logic
├── ListAddress.jsx      # Address suggestions dropdown list
├── MyMap.jsx            # Interactive map display (Leaflet)
├── main.jsx             # React entry point
├── App.css              # App-level styles
├── Form.css             # Form styles
├── index.css            # Global styles
└── assets/
    └── react.svg
```

## Features

- **Address Search** - Type an address and get up to 5 suggestions from OpenStreetMap Nominatim API
- **Interactive Map** - Selected address is displayed on a Leaflet map with a marker
- **Location-Based Form** - Submit user details (name, phone, email) along with facility requirements (internet, kitchen, coffee machine, room count, distance)

## External APIs

| API | Endpoint | Purpose |
|-----|----------|---------|
| Nominatim (OpenStreetMap) | `https://nominatim.openstreetmap.org/search` | Geocoding - converting address text to coordinates |
| OpenStreetMap Tiles | `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png` | Map tile rendering |

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with Hot Module Replacement (HMR).

### Build

```bash
npm run build
```

Production output is generated in the `dist/` folder.

### Lint

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

## Component Overview

### Form.jsx
The core component containing all business logic:
- Manages address search state (`address`, `lat`, `lon`, `place`)
- Fetches address suggestions from Nominatim API as the user types
- Handles form submission with user details and facility requirements

### ListAddress.jsx
Renders the list of address suggestions returned from the API. Each item is clickable and triggers coordinate selection.

### MyMap.jsx
Displays an interactive Leaflet map centered on the selected address coordinates. Re-renders when new coordinates are selected.
