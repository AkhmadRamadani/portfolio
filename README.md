# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS that dynamically loads data from an Excel file.

## Features

- ✨ Modern, animated UI with Framer Motion
- 🎨 Beautiful gradient design with glassmorphism effects
- 📊 Dynamic data loading from Excel file
- 🏷️ Project filtering by programming language
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js 14
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Data Processing:** xlsx library
- **Fonts:** Playfair Display + IBM Plex Sans

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. The Excel file is already included in `public/data/akhmadramadani_github_data.xlsx`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section with profile info
│   ├── Projects.tsx        # Projects grid with filtering
│   ├── RepositoryCard.tsx  # Individual project card
│   └── Footer.tsx          # Footer component
├── lib/
│   └── loadData.ts         # Excel data loading utility
├── types/
│   └── github.ts           # TypeScript type definitions
└── public/
    └── data/
        └── akhmadramadani_github_data.xlsx

```

## Data Format

The Excel file should contain two sheets:

### Profile Sheet
- Username, Name, Bio, Company, Location, Email, Blog
- Public Repos, Followers, Following
- Created At, Profile URL

### Repositories Sheet
- Repository Name, Description, URL
- Stars, Forks, Language
- Created At, Updated At, README Content

## Customization

### Colors
Edit the gradient colors in `app/globals.css`:
```css
:root {
  /* Customize your color scheme */
}
```

### Fonts
Change fonts in `app/globals.css` by updating the Google Fonts import.

### Animations
Adjust animation timings in `tailwind.config.js` and component files.

## License

MIT License - feel free to use this template for your own portfolio!
