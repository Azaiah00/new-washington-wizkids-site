# ⚡ Quick Start Guide

Get the Washington WizKids site running in 5 minutes!

## 1️⃣ Install Dependencies (2 minutes)

```bash
npm install
```

Wait for installation to complete...

## 2️⃣ Start Development Server (30 seconds)

```bash
npm run dev
```

You should see:
```
  ▲ Next.js 14.2.0
  - Local:   http://localhost:3000
  ✓ Ready in 2.5s
```

## 3️⃣ Open Browser (10 seconds)

Navigate to: **http://localhost:3000**

## ✅ What You Should See

- ✅ Header with logo and navigation
- ✅ Hero section (video background may take a moment to load)
- ✅ Latest Segments section with 3 cards
- ✅ Merch Vault with countdown timer
- ✅ Stats Lab with interactive chart
- ✅ Insider section
- ✅ Blog section (The Wire)
- ✅ Gear section
- ✅ Footer with social icons

## 🎮 Test These Features

1. **Resize browser** - Check mobile menu (hamburger icon)
2. **Scroll down** - Watch header shrink
3. **Hover cards** - See animation effects
4. **Stats Lab** - Change player and stat dropdowns
5. **Countdown** - Watch timer update every second

## ⚠️ Known Issues (Not Your Fault)

### Images Not Showing
**Why**: Image files not added yet
**Fix**: Add images to `public/images/` (see `public/images/README.md`)
**Temporary**: Site still functions, just shows broken images

### Video Not Loading
**Why**: Internet connection or firewall
**Fix**: Check connection, try different browser
**Temporary**: Hero still shows text content

## 📝 Quick Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
wizards: {
  navy: '#002B5C',  // Change this
  red: '#E31837',   // Change this
}
```

### Change Content
Edit `lib/data.ts`:
- Podcast segments
- Merch products
- Blog posts
- Affiliate products

### Change Social Links
Edit `lib/constants.ts`:
```typescript
export const SOCIAL_LINKS = {
  youtube: 'your-url-here',
  instagram: 'your-url-here',
  tiktok: 'your-url-here',
}
```

## 🚨 Common Errors & Fixes

### "Port 3000 already in use"
**Fix**:
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001

### "Module not found"
**Fix**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### TypeScript errors in editor
**Fix**: Restart VS Code or your editor

## 📖 Next Steps

1. **Read SETUP.md** for detailed instructions
2. **Add images** to `public/images/`
3. **Update content** in `lib/data.ts`
4. **Test on mobile** device
5. **Deploy to Vercel** when ready

## 🎯 Key Files to Know

- `app/page.tsx` - Homepage (all sections)
- `lib/data.ts` - Sample content (change this!)
- `lib/constants.ts` - Configuration
- `tailwind.config.ts` - Colors and styling

## 💬 Need Help?

Check these files:
1. `README.md` - Project overview
2. `SETUP.md` - Detailed setup
3. `COMPONENTS.md` - Component docs
4. `PROJECT-SUMMARY.md` - Complete summary

## ✨ You're Live!

Your Washington WizKids site is now running locally. 

**Time to make it yours! 🏀**

---

**Pro Tip**: Keep the dev server running while you edit files. Changes appear instantly thanks to Next.js Fast Refresh!

