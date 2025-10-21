### Project: Washington WizKids Podcast Hub (Next.js Version)

### Mission Statement
Build the most dynamic, engaging, and profitable Next.js web application for a sports podcast. This platform will serve as both a marketing hub AND a premium subscription platform. We're creating a two-tier experience:
1. **Public Tier**: High-energy fan hub with podcast content, merch drops, and interactive stats
2. **Premium Tier** (Future): Paid subscriptions with sports betting insights, exclusive merch tokens, and insider content

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Authentication**: Better-Auth (to be implemented)
- **Database**: TBD (likely Supabase or Prisma + PostgreSQL)
- **Payments**: Stripe (for subscriptions)
- **Charts**: Chart.js (React wrapper: react-chartjs-2)
- **Deployment**: Vercel

### Vibe & Aesthetic
Sharp, fast, and authentic. Unfiltered analysis and die-hard fan energy in a sleek, modern package. Clean and professional with core Wizards brand colors:
- **Primary Navy**: `#002B5C`
- **Accent Red**: `#E31837`
- **Background**: `#f4f4f5`

**Typography**:
- Headers: Anton (Google Fonts)
- Body: Inter (Google Fonts)

### Current Features (Public Tier)

#### 1. Hero Section
- **YouTube Video Background**: https://youtu.be/D4Qf03HsOoE (looping, muted, 65% dark overlay)
- **Main CTA**: "Watch on YouTube Now!" → links to channel
- **Design**: Full-screen impact, large Anton font headline

#### 2. Latest Segments (Podcast Section)
- 3-column grid of episode cards
- Hover animations (translateY(-8px))
- Links to individual segments (placeholders for now)

#### 3. The Vault (Merch Store)
- **Live Countdown Timer**: JavaScript-based, updates every second
- 3 product cards: Sold Out / Current Drop / Coming Soon
- Scarcity-driven design with urgency elements

#### 4. WizKids Stat Lab
- **Interactive Chart.js visualization**
- Dropdowns to select player and stat type
- Shows last 5 games performance
- Sample data for: Jordan Poole, Kyle Kuzma, Deni Avdija

#### 5. Become an Insider
- Lead generation section
- Placeholder for Airtable form (will replace with Better-Auth signup)
- Benefits list: exclusive content, merch giveaways, trade rumors

#### 6. The WizKids Wire (Blog)
- 3-column grid of news/analysis cards
- Categories: NEWS, ANALYSIS, RUMOR MILL
- Placeholder links (will connect to CMS later)

#### 7. Gear Up Section
- 4-column grid of affiliate products
- Placeholder for Google AdSense banner
- Card hover effects

#### 8. Footer
- Logo (logofred.png)
- Social media icons (YouTube, Instagram, TikTok)
- SVG icons with hover effects (scale + color change)
- Copyright notice

#### 9. Header/Navigation
- Sticky header with shrink effect on scroll
- Logo-only (no text)
- Desktop nav: The Pod, The Vault, Stat Lab, The Wire, BECOME AN INSIDER (CTA button)
- Mobile hamburger menu

### Future Features (Premium Tier)

#### 1. Authentication (Better-Auth)
- Sign up / Login
- Email verification
- Password reset
- Session management
- Protected routes

#### 2. Premium Dashboard
- Sports betting insights
- Parlay recommendations
- Advanced stats not available publicly
- Token balance display

#### 3. Token Economy
- Users earn/purchase tokens
- Redeem tokens for exclusive merch
- Gamification elements

#### 4. Subscription Management
- Stripe integration
- Monthly/annual plans
- Payment history
- Cancel/upgrade options

#### 5. Protected Content
- `/premium` routes behind auth
- `/dashboard` for user profile
- `/insights` for betting content
- `/merch-vault` for token-exclusive items

### Component Structure

```typescript
app/
├── layout.tsx                 // Root layout with fonts, metadata
├── page.tsx                   // Homepage (all public sections)
├── globals.css                // Tailwind + custom styles
├── premium/                   // Protected routes (future)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   └── insights/
└── components/
    ├── Header.tsx             // Sticky nav with mobile menu
    ├── Hero.tsx               // Video background section
    ├── PodcastSection.tsx     // Latest segments
    ├── MerchSection.tsx       // Countdown + products
    ├── StatsLab.tsx           // Chart.js component
    ├── InsiderSection.tsx     // Lead gen / future auth
    ├── BlogSection.tsx        // News grid
    ├── GearSection.tsx        // Affiliate products
    └── Footer.tsx             // Social links
```

### Assets & Images
All images stored in `public/images/`:
- **Logo**: `logos/logofred.png` (200x200px minimum, transparent PNG)
- **Merch**: `merch/wizkids-hoodie.jpg`, `merch/district-dc-tee.jpg`, `merch/monument-snapback.jpg` (600x800px)
- **Placeholders**: Blog thumbnails, affiliate products (various sizes)

### Interactive Features

#### Countdown Timer
- JavaScript interval updating every second
- Format: `07D : 14H : 32M : 11S`
- Displays "NEW DROP LIVE!" when reaches zero
- Convert to React useEffect hook

#### Chart.js Stats Lab
- `react-chartjs-2` library
- Bar chart with responsive container
- State management for player/stat selection
- Sample data structure provided in original code

#### YouTube Video Background
- YouTube IFrame API
- Auto-play, muted, looping
- 65% black overlay for text readability
- Responsive sizing (16:9 aspect ratio)

#### Mobile Menu
- Hamburger icon toggle
- Slide-in navigation
- Close on link click

#### Sticky Header
- Shrinks padding on scroll (py-3 → py-2)
- Smooth transition

### Responsive Design
- **Mobile**: Default styles, hamburger menu
- **Tablet**: `md:` breakpoint (768px+), 2-column grids
- **Desktop**: `lg:` breakpoint (1024px+), 3-4 column grids

### SEO & Meta Tags
- Title: "Washington WizKids - The Ultimate Wizards Podcast"
- Description: "Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective"
- Open Graph tags for social sharing
- Proper heading hierarchy (H1, H2, H3)

### Accessibility
- ARIA labels on all interactive elements
- Alt text on all images
- Semantic HTML5 elements
- Keyboard navigation support
- Focus states on buttons/links

### Development Phases

**Phase 1: Core Conversion** (Current Task)
- ✅ Convert static site to Next.js
- ✅ Componentize all sections
- ✅ Implement all interactive features
- ✅ Match exact visual design

**Phase 2: Authentication** (Next)
- Implement Better-Auth
- Create signup/login flows
- Add protected routes structure

**Phase 3: Premium Features**
- Build premium dashboard
- Integrate Stripe subscriptions
- Create betting insights pages
- Implement token system

**Phase 4: Content Management**
- Connect to CMS (Sanity/Contentful)
- Dynamic blog posts
- Dynamic merch products
- Admin panel

### Performance Optimization
- Next.js Image component for all images
- Font optimization with `next/font`
- Code splitting with dynamic imports
- Lazy loading for Chart.js
- YouTube iframe loaded after page render

### Deployment
- **Platform**: Vercel (automatic deployment from GitHub)
- **Domain**: TBD (will connect custom domain)
- **Environment Variables**: Stripe keys, database URL, Better-Auth secrets (future)

---

**This is the foundation for the ultimate Washington Wizards fan hub. Build it clean, make it fast, keep the vibe sharp.**