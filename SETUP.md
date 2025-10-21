# 🚀 Washington WizKids Setup Guide

Complete setup instructions for getting the Washington WizKids website running locally.

## Prerequisites

Before you begin, ensure you have installed:
- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

## Step 1: Clone or Navigate to Project

If you're starting fresh, navigate to your project directory:

```bash
cd c:\Users\azaia\OneDrive\new-washington-wizkids-site
```

## Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Chart.js
- react-chartjs-2
- react-youtube
- And all development dependencies

**Expected time**: 2-3 minutes

## Step 3: Add Your Images

1. Create the following directories inside `public/images/`:
   ```
   public/images/logos/
   public/images/merch/
   public/images/placeholders/
   ```

2. Add your logo:
   - Place `logofred.png` in `public/images/logos/`

3. Add merch product images:
   - `wizkids-hoodie.jpg`
   - `district-dc-tee.jpg`
   - `monument-snapback.jpg`
   Place these in `public/images/merch/`

4. Add placeholder images (see `public/images/README.md` for list)

**Temporary Solution**: If you don't have images yet, the site will show broken images but will still function. You can use placeholder URLs temporarily.

## Step 4: Run Development Server

Start the development server:

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

## Step 5: Open in Browser

Navigate to: **http://localhost:3000**

You should see:
✅ Hero section with video background
✅ Latest Segments section
✅ Merch Vault with countdown timer
✅ Stats Lab with interactive chart
✅ All other sections

## Step 6: Test Interactive Features

1. **Mobile Menu**: Resize browser to mobile width, click hamburger menu
2. **Countdown Timer**: Watch the merch countdown update every second
3. **Stats Lab**: Change player and stat dropdowns to see chart update
4. **Sticky Header**: Scroll down to see header shrink
5. **Card Hovers**: Hover over cards to see animation effects

## Common Issues & Solutions

### Issue: "Module not found" errors
**Solution**: Run `npm install` again to ensure all dependencies are installed

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Issue: YouTube video not loading
**Solution**: 
- Check your internet connection
- Video may be blocked by corporate firewall
- Try a different browser
- Check browser console for errors

### Issue: Chart.js not rendering
**Solution**:
- Clear browser cache
- Check browser console for errors
- Ensure all Chart.js dependencies are installed

### Issue: Images not showing
**Solution**:
- Verify image paths in `public/images/`
- Check file names match exactly (case-sensitive)
- Use browser DevTools to check network requests

### Issue: TypeScript errors
**Solution**:
```bash
npm run type-check
```
This will show all TypeScript errors. Fix them one by one.

## Build for Production

When ready to deploy:

```bash
# Build the production bundle
npm run build

# Test production build locally
npm run start
```

## Vercel Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. **Automatic Deployments**:
   Every push to `main` will automatically deploy to Vercel

## Next Steps

### Immediate
- [ ] Add all images to `public/images/`
- [ ] Replace Airtable placeholder with real form
- [ ] Add Google AdSense code
- [ ] Test on multiple browsers
- [ ] Test on mobile devices

### Phase 2 (Authentication)
- [ ] Install Better-Auth
- [ ] Create sign up/login pages
- [ ] Add protected routes
- [ ] Set up database

### Phase 3 (Premium Features)
- [ ] Integrate Stripe
- [ ] Build premium dashboard
- [ ] Add betting insights pages
- [ ] Implement token system

### Phase 4 (Content Management)
- [ ] Connect CMS (Sanity/Contentful)
- [ ] Make blog posts dynamic
- [ ] Make merch products dynamic
- [ ] Add admin panel

## Development Tips

### Hot Reload
Next.js has fast refresh - your changes appear instantly without losing state

### Component Isolation
Each component is in its own file - easy to find and modify

### TypeScript Benefits
Hover over any variable to see its type
Use autocomplete for better development experience

### Tailwind CSS
Use Tailwind utility classes instead of custom CSS where possible

### Performance
- Images are automatically optimized by Next.js
- Code splitting happens automatically
- Use Chrome DevTools Lighthouse for performance audits

## Need Help?

- Check the [Next.js docs](https://nextjs.org/docs)
- Check the [Tailwind CSS docs](https://tailwindcss.com/docs)
- Check the [Chart.js docs](https://www.chartjs.org/docs)
- Review code comments - every file is well-documented

## File Structure Reference

```
new-washington-wizkids-site/
├── app/                    # Next.js App Router
│   ├── components/        # All React components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── lib/                  # Utilities and types
│   ├── types.ts         # TypeScript interfaces
│   ├── constants.ts     # App constants
│   ├── utils.ts         # Helper functions
│   └── data.ts          # Sample data
├── public/              # Static assets
│   └── images/         # Image files
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind config
└── next.config.mjs     # Next.js config
```

---

**Happy coding! 🏀 Go Wizards!**

