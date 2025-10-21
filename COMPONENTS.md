# 📦 Component Documentation

Detailed documentation for all React components in the Washington WizKids website.

## Component Architecture

All components follow these principles:
- **Single Responsibility**: Each component does one thing well
- **Type Safety**: Full TypeScript support with interfaces
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Well-Documented**: Extensive comments explaining functionality

---

## Header Component

**File**: `app/components/Header.tsx`

**Purpose**: Sticky navigation header with mobile menu

**Features**:
- Sticky positioning that shrinks on scroll
- Hamburger menu for mobile devices
- Smooth scroll to sections
- Responsive breakpoints

**Props**: None (uses constants from `lib/constants.ts`)

**State**:
- `isMobileMenuOpen`: Boolean for mobile menu toggle
- `isScrolled`: Boolean for header shrink effect

**Usage**:
```tsx
<Header />
```

---

## Hero Component

**File**: `app/components/Hero.tsx`

**Purpose**: Full-screen hero section with YouTube video background

**Features**:
- Looping muted YouTube video (using IFrame API)
- 65% dark overlay for text readability
- Responsive text sizing
- CTA button to YouTube channel

**Props**: None

**State**: None (video managed by YouTube API)

**Important**:
- Loads YouTube IFrame API dynamically
- Video ID configurable in `lib/constants.ts`
- Requires internet connection for video

**Usage**:
```tsx
<Hero />
```

---

## PodcastSection Component

**File**: `app/components/PodcastSection.tsx`

**Purpose**: Display latest podcast segments in responsive grid

**Features**:
- 3-column responsive grid (1/2/3 columns)
- Card hover effects (translateY + shadow)
- Next.js Image optimization
- Links to individual segments

**Props**: None (uses data from `lib/data.ts`)

**Data Structure**:
```typescript
interface PodcastSegment {
  id: string
  title: string
  description: string
  image: string
  link: string
}
```

**Usage**:
```tsx
<PodcastSection />
```

---

## MerchSection Component

**File**: `app/components/MerchSection.tsx`

**Purpose**: Merch vault with live countdown timer

**Features**:
- Live countdown updating every second
- 3 product cards with status (sold-out/current/coming-soon)
- Featured product with special styling
- Scarcity-driven design

**Props**: None

**State**:
- `countdown`: CountdownState object with days/hours/minutes/seconds

**Countdown Logic**:
- Updates every 1000ms using setInterval
- Calculates time remaining until future date
- Shows "NEW DROP LIVE!" when expired

**Usage**:
```tsx
<MerchSection />
```

---

## StatsLab Component

**File**: `app/components/StatsLab.tsx`

**Purpose**: Interactive Chart.js player statistics visualization

**Features**:
- Dropdown to select player
- Dropdown to select stat type
- Bar chart showing last 5 games
- Auto-updating chart on selection change

**Props**: None

**State**:
- `selectedPlayer`: string (player key)
- `selectedStat`: StatType ('points' | 'assists' | 'rebounds')

**Dependencies**:
- Chart.js
- react-chartjs-2

**Data Structure**:
```typescript
interface ChartData {
  players: { [key: string]: string }
  games: string[]
  data: {
    [playerKey: string]: {
      points: number[]
      assists: number[]
      rebounds: number[]
    }
  }
}
```

**Usage**:
```tsx
<StatsLab />
```

---

## InsiderSection Component

**File**: `app/components/InsiderSection.tsx`

**Purpose**: Lead generation section for becoming an insider

**Features**:
- Benefits list with checkmarks
- Two-column responsive layout
- Placeholder for Airtable form (or Better-Auth signup)

**Props**: None

**Future Enhancement**:
Replace placeholder div with:
- Airtable embedded form, OR
- Better-Auth signup component (Phase 2)

**Usage**:
```tsx
<InsiderSection />
```

---

## BlogSection Component

**File**: `app/components/BlogSection.tsx`

**Purpose**: News and analysis grid (The WizKids Wire)

**Features**:
- 3-column responsive grid
- Category tags (NEWS, ANALYSIS, RUMOR MILL)
- Color-coded categories
- Card hover effects

**Props**: None

**Data Structure**:
```typescript
interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: 'NEWS' | 'ANALYSIS' | 'RUMOR MILL'
  link: string
}
```

**Usage**:
```tsx
<BlogSection />
```

---

## GearSection Component

**File**: `app/components/GearSection.tsx`

**Purpose**: Affiliate product showcase

**Features**:
- 4-column responsive grid (2/4 columns)
- Card hover effects
- Affiliate product links
- Google AdSense banner placeholder

**Props**: None

**Data Structure**:
```typescript
interface AffiliateProduct {
  id: string
  name: string
  image: string
  link: string
}
```

**Usage**:
```tsx
<GearSection />
```

---

## Footer Component

**File**: `app/components/Footer.tsx`

**Purpose**: Site footer with branding and social links

**Features**:
- Centered logo and brand name
- Social media icons (YouTube, Instagram, TikTok)
- SVG icons with hover effects
- Copyright notice

**Props**: None

**Social Links**:
All links configured in `lib/constants.ts`

**Usage**:
```tsx
<Footer />
```

---

## Styling Approach

All components use:
1. **Tailwind CSS utility classes** for most styling
2. **Custom CSS classes** for complex effects (defined in `globals.css`)
3. **Inline styles** only when dynamic (rare)

### Common Tailwind Patterns

**Responsive Design**:
```tsx
className="grid md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 column
// Tablet (768px+): 2 columns
// Desktop (1024px+): 3 columns
```

**Hover Effects**:
```tsx
className="hover:text-wizards-red transition duration-300"
```

**Custom Colors**:
```tsx
className="bg-wizards-navy text-wizards-red"
// Defined in tailwind.config.ts
```

---

## TypeScript Types

All components are fully typed. Key types:

### Props (when applicable)
```typescript
interface ComponentProps {
  // Props defined here
}
```

### State
```typescript
const [state, setState] = useState<StateType>(initialValue)
```

### Event Handlers
```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // Handler logic
}
```

---

## Accessibility Features

All components include:
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **ARIA labels**: `aria-label`, `aria-expanded`, `aria-live`
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Focus states**: Visible focus indicators on all interactive elements
- **Alt text**: All images have descriptive alt text
- **Color contrast**: WCAG AA compliant

---

## Performance Optimizations

### Images
- Next.js Image component for automatic optimization
- Lazy loading by default
- Responsive sizes specified

### Code Splitting
- Each component is a separate file
- Dynamic imports where appropriate
- Chart.js only loaded when needed

### State Management
- Local state where possible (useState)
- No unnecessary re-renders
- Efficient event listeners with cleanup

---

## Testing Guidelines

### Manual Testing
1. **Desktop**: Test all breakpoints (1920px, 1440px, 1024px)
2. **Tablet**: Test at 768px
3. **Mobile**: Test at 375px and 414px
4. **Interactions**: Click all buttons, links, dropdowns
5. **Accessibility**: Tab through all interactive elements

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing
- iOS Safari
- Android Chrome
- Various screen sizes

---

## Customization Guide

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  wizards: {
    navy: '#002B5C',    // Change this
    red: '#E31837',     // Change this
    gray: '#f4f4f5',    // Change this
  },
}
```

### Changing Fonts
Edit `app/layout.tsx`:
```typescript
import { NewFont } from 'next/font/google'

const newFont = NewFont({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-new',
})
```

### Adding New Components
1. Create file in `app/components/`
2. Use TypeScript for type safety
3. Add extensive comments
4. Import and use in `app/page.tsx`

### Modifying Data
Edit `lib/data.ts` to change:
- Podcast segments
- Merch products
- Blog posts
- Affiliate products
- Player stats

---

## Common Patterns

### Client vs Server Components

**Client Components** (need 'use client'):
- Use state (useState)
- Use effects (useEffect)
- Use event handlers
- Use browser APIs

**Server Components** (default):
- No state
- No effects
- Can fetch data directly
- Better performance

### Responsive Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

### Card with Hover
```tsx
<article className="card-hover-effect bg-white rounded-lg shadow-md">
  {/* Content */}
</article>
```

### Section Structure
```tsx
<section id="section-id" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <header className="text-center mb-12">
      <h2 className="text-4xl font-anton uppercase">
        Section Title
      </h2>
      <p className="text-gray-600">Description</p>
    </header>
    {/* Section content */}
  </div>
</section>
```

---

## Troubleshooting

### Component Not Rendering
1. Check import path
2. Check for TypeScript errors
3. Check browser console for errors

### Styles Not Applying
1. Check Tailwind class names (no typos)
2. Check for conflicting styles
3. Verify Tailwind config is correct

### Interactive Features Not Working
1. Check for 'use client' directive
2. Check event handlers are attached
3. Check browser console for errors

---

**For more help**: Check inline comments in each component file - they're extensively documented!

