# Image Assets Directory

This directory contains all image assets for the Washington WizKids website.

## Directory Structure

```
images/
├── logos/
│   └── logofred.png            # Main site logo (200x200px min)
├── merch/
│   ├── wizkids-hoodie.jpg      # Hoodie product (600x800px)
│   ├── district-dc-tee.jpg     # T-shirt product (600x800px)
│   └── monument-snapback.jpg   # Hat product (600x800px)
└── placeholders/
    ├── post-game-breakdown.jpg # Podcast thumbnail (1200x800px)
    ├── trade-machine.jpg       # Podcast thumbnail (1200x800px)
    ├── player-spotlight.jpg    # Podcast thumbnail (1200x800px)
    ├── injury-report.jpg       # Blog thumbnail (1200x800px)
    ├── analysis.jpg            # Blog thumbnail (1200x800px)
    ├── rumor-mill.jpg          # Blog thumbnail (1200x800px)
    ├── wizards-jersey.jpg      # Affiliate product (800x800px)
    ├── basketball.jpg          # Affiliate product (800x800px)
    ├── wizards-book.jpg        # Affiliate product (800x800px)
    └── wizards-hat.jpg         # Affiliate product (800x800px)
```

## Image Guidelines

### Logos
- Format: PNG with transparency
- Minimum size: 200x200px
- Recommended: 400x400px for retina displays
- File size: Keep under 100KB

### Merch Products
- Format: JPG or PNG
- Aspect ratio: 3:4 (portrait)
- Size: 600x800px minimum
- File size: Keep under 200KB each
- Show product clearly on clean background

### Podcast Thumbnails
- Format: JPG
- Aspect ratio: 3:2 (landscape)
- Size: 1200x800px
- File size: Keep under 300KB each
- High quality, engaging visuals

### Blog Thumbnails
- Format: JPG
- Aspect ratio: 3:2 (landscape)
- Size: 1200x800px
- File size: Keep under 300KB each

### Affiliate Products
- Format: JPG or PNG
- Aspect ratio: 1:1 (square)
- Size: 800x800px
- File size: Keep under 200KB each
- Clean product shots on white/transparent background

## Optimization Tips

1. **Compress images** before uploading using tools like:
   - TinyPNG (https://tinypng.com)
   - ImageOptim (macOS)
   - Squoosh (https://squoosh.app)

2. **Use WebP format** where possible for better compression

3. **Next.js Image component** handles optimization automatically

4. **Lazy loading** is automatic with Next.js Image

## Temporary Placeholders

Until you have real images, you can use placeholder services:
- https://placehold.co
- https://placeholder.com
- https://via.placeholder.com

Example:
```
https://placehold.co/1200x800/002B5C/E31837?text=WizKids
```

## Copyright

Ensure all images are:
- Original content you created
- Licensed for commercial use
- Have proper attribution if required
- Don't violate NBA/Wizards trademarks (unless licensed)

