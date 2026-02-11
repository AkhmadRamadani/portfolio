# Quick Start Guide

Follow these steps to get your portfolio website running:

## 1. Install Node.js
If you don't have Node.js installed, download it from https://nodejs.org/
- Recommended: Node.js 18 or higher

## 2. Navigate to Project
```bash
cd portfolio-website
```

## 3. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- xlsx (for Excel file reading)

## 4. Run Development Server
```bash
npm run dev
```

Your website will be available at: http://localhost:3000

## 5. Build for Production (Optional)
```bash
npm run build
npm start
```

## Troubleshooting

### Port 3000 already in use?
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill

# Or specify a different port:
PORT=3001 npm run dev
```

### Module not found errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Customization Tips

1. **Update your data**: Replace the Excel file in `public/data/` with your own GitHub data
2. **Change colors**: Edit gradients in `app/globals.css`
3. **Modify fonts**: Update Google Fonts import in `app/globals.css`
4. **Add sections**: Create new components in `components/` folder

Enjoy your new portfolio! 🚀
