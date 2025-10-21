# Washington WizKids Podcast Hub

The ultimate Washington Wizards podcast website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏀 Features

- **Hero Section**: YouTube video background with looping muted video
- **Latest Segments**: Podcast episode cards with hover effects
- **The Vault**: Merch store with live countdown timer
- **Stats Lab**: Interactive Chart.js player statistics
- **Insider Section**: Lead generation with benefits list
- **The Wire**: News and analysis blog section
- **Gear Section**: Affiliate product showcase
- **Responsive Design**: Mobile-first with hamburger menu

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + react-chartjs-2
- **Video**: YouTube IFrame API
- **Fonts**: Google Fonts (Anton + Inter)

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
new-washington-wizkids-site/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Homepage (all sections)
│   ├── globals.css             # Global styles and Tailwind
│   └── components/
│       ├── Header.tsx          # Sticky nav with mobile menu
│       ├── Hero.tsx            # Video background hero
│       ├── PodcastSection.tsx  # Latest segments
│       ├── MerchSection.tsx    # Countdown + products
│       ├── StatsLab.tsx        # Chart.js stats
│       ├── InsiderSection.tsx  # Lead gen form
│       ├── BlogSection.tsx     # News grid
│       ├── GearSection.tsx     # Affiliate products
│       └── Footer.tsx          # Social links
├── lib/
│   ├── types.ts               # TypeScript interfaces
│   ├── constants.ts           # App constants
│   ├── utils.ts               # Helper functions
│   └── data.ts                # Sample data
├── public/
│   └── images/                # Image assets
└── package.json
```

## 🎨 Brand Colors

- **Navy**: `#002B5C` (Primary)
- **Red**: `#E31837` (Accent)
- **Gray**: `#f4f4f5` (Background)

## 📸 Image Requirements

Place your images in the `public/images/` directory:

### Logos
- `logos/logofred.png` - Main logo (200x200px minimum, transparent PNG)

### Merch Products
- `merch/wizkids-hoodie.jpg` (600x800px)
- `merch/district-dc-tee.jpg` (600x800px)
- `merch/monument-snapback.jpg` (600x800px)

### Placeholders
- `placeholders/post-game-breakdown.jpg` (1200x800px)
- `placeholders/trade-machine.jpg` (1200x800px)
- `placeholders/player-spotlight.jpg` (1200x800px)
- `placeholders/injury-report.jpg` (1200x800px)
- `placeholders/analysis.jpg` (1200x800px)
- `placeholders/rumor-mill.jpg` (1200x800px)
- `placeholders/wizards-jersey.jpg` (800x800px)
- `placeholders/basketball.jpg` (800x800px)
- `placeholders/wizards-book.jpg` (800x800px)
- `placeholders/wizards-hat.jpg` (800x800px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Environment Variables (Future)

Create a `.env.local` file for:
- Database connection strings
- API keys
- Authentication secrets

## 🚧 Future Phases

### Phase 2: Authentication
- Better-Auth integration
- Sign up / Login flows
- Protected routes

### Phase 3: Premium Features
- Stripe subscriptions
- Premium dashboard
- Sports betting insights
- Token economy system

### Phase 4: Content Management
- CMS integration (Sanity/Contentful)
- Dynamic blog posts
- Dynamic merch products
- Admin panel

## 📝 Notes

- **YouTube Video**: Currently uses video ID `D4Qf03HsOoE`
- **Airtable Form**: Placeholder in InsiderSection - replace with your iframe
- **Google AdSense**: Placeholder in GearSection - replace with your ad code

## 🔗 Social Links

- YouTube: [@WashingtonWizKidsPodcast](https://www.youtube.com/@WashingtonWizKidsPodcast)
- Instagram: [@washingtonwizkidspodcast](https://www.instagram.com/washingtonwizkidspodcast)
- TikTok: [@washingtonwizkidspodcast](https://www.tiktok.com/@washingtonwizkidspodcast)

## 📄 License

© 2024 Washington WizKids. All Rights Reserved.

Not affiliated with the NBA or the Washington Wizards.

---

**Built with 💙 and unfiltered Wizards passion.**

