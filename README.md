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

## Using Google Sheets

You can also load data directly from a Google Sheet. This allows you to update your portfolio by simply editing the spreadsheet.

1. **Prepare your Google Sheet**:
   - Create a Google Sheet with the same structure as the local Excel file (sheets named "Profile" and "Repositories").
   - Fill in your data.

2. **Publish to the Web**:
   - Go to `File` > `Share` > `Publish to web`.
   - Select "Entire Document" and "Microsoft Excel (.xlsx)".
   - Click "Publish" and copy the generated link.

3. **Configure Environment Variable**:
   - Create a `.env.local` file in the root of the project.
   - Add the following line, replacing the URL with your published sheet URL:
     ```env
     GOOGLE_SHEET_URL=https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=xlsx
     ```
   - Restart the development server.

Now the application will fetch data from your Google Sheet. It will automatically revalidate the data every 60 seconds.

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
