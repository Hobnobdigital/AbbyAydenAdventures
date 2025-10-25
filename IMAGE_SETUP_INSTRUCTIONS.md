# Image Setup Instructions for lululemon Clone Website

## Overview
This document provides instructions for creating and populating the images folder for the lululemon-inspired one-page website.

## Task List

### 1. Create Images Directory Structure
```bash
mkdir -p images
```

### 2. Required Images

Create or source the following images with these specifications:

#### Hero Section
- **Filename**: `hero-banner.jpg` or `hero-banner.png`
- **Dimensions**: 1920x600px (minimum)
- **Content**: Athletic model in lululemon-style activewear, clean background
- **Style**: Bright, aspirational, minimalist

#### Featured Categories (3 images)
- **Filename**: `category-women-new.jpg`
- **Dimensions**: 800x1000px
- **Content**: Women's activewear showcase

- **Filename**: `category-top-rated.jpg`
- **Dimensions**: 800x1000px
- **Content**: Popular product highlight

- **Filename**: `category-sale.jpg`
- **Dimensions**: 800x1000px
- **Content**: Sale/discount items display

#### Product Showcase (4 images)
- **Filename**: `product-align-pants.jpg`
- **Dimensions**: 600x750px
- **Content**: Black leggings/yoga pants on model or flat lay

- **Filename**: `product-scuba-hoodie.jpg`
- **Dimensions**: 600x750px
- **Content**: Oversized hoodie on model or styled

- **Filename**: `product-wunder-train.jpg`
- **Dimensions**: 600x750px
- **Content**: Training tights/athletic leggings

- **Filename**: `product-define-jacket.jpg`
- **Dimensions**: 600x750px
- **Content**: Fitted athletic jacket

#### Lifestyle Section
- **Filename**: `lifestyle-fabric.jpg`
- **Dimensions**: 1200x1000px
- **Content**: Close-up of fabric texture or person in athletic wear, lifestyle shot
- **Style**: Premium, detail-focused, natural lighting

### 3. Image Guidelines

**Style Consistency:**
- Clean, minimal backgrounds (white, light gray, or natural settings)
- Professional product photography aesthetic
- Consistent lighting across all images
- Focus on premium, athletic lifestyle vibe

**Technical Requirements:**
- Format: JPG or PNG (JPG preferred for photos)
- Optimization: Compress images to web-friendly sizes (100-300KB each)
- Quality: High resolution but optimized for web

**Color Palette:**
- Predominantly neutral (black, white, gray, beige)
- Accent colors: deep reds, navy, earth tones
- Avoid oversaturated or neon colors

### 4. Directory Structure
```
AbbyAydenAdventures/
├── index.html
├── styles.css
├── IMAGE_SETUP_INSTRUCTIONS.md
└── images/
    ├── hero-banner.jpg
    ├── category-women-new.jpg
    ├── category-top-rated.jpg
    ├── category-sale.jpg
    ├── product-align-pants.jpg
    ├── product-scuba-hoodie.jpg
    ├── product-wunder-train.jpg
    ├── product-define-jacket.jpg
    └── lifestyle-fabric.jpg
```

### 5. Image Sourcing Options

**Option A: Stock Photo Sites**
- Unsplash.com (free, high-quality)
- Pexels.com (free)
- Search terms: "athletic wear", "yoga clothes", "activewear", "fitness model"

**Option B: AI Image Generation**
- Use Midjourney, DALL-E, or Stable Diffusion
- Prompts: "minimalist athletic wear product photography, clean background, professional lighting"

**Option C: lululemon-Style Photography**
- Look for similar aesthetic: clean, minimal, premium athletic lifestyle
- Focus on natural poses, good lighting, neutral backgrounds

### 6. Git Workflow

Once images are added to the `images/` folder:

```bash
# Navigate to project directory
cd /path/to/AbbyAydenAdventures

# Check status
git status

# Add all images
git add images/

# Commit with descriptive message
git commit -m "Add product and lifestyle images for lululemon clone

- Add hero banner image
- Add 3 category showcase images
- Add 4 product images
- Add lifestyle section image

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to the feature branch
git push -u origin claude/lululemon-clone-page-011CUUNBrRsHrm58W8HqLpkR
```

### 7. Notify for HTML Update

After images are committed and pushed, notify the development agent with:

**Message to Agent:**
```
Images have been added to the images/ folder and pushed to GitHub.
Please update index.html to replace all image placeholders with actual <img> tags
pointing to the files in the images/ directory. Add appropriate alt text for
accessibility based on the image content.
```

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim before committing
- Target file sizes: 100-300KB per image
- Maintain aspect ratios as specified
- Use JPG for photos, PNG for graphics with transparency

## Questions or Issues?

If images need different specifications or you need help with:
- Image resizing
- Format conversion
- Alternative layouts

Contact the development agent for adjustments to the HTML/CSS structure.

---

**Branch**: `claude/lululemon-clone-page-011CUUNBrRsHrm58W8HqLpkR`
**Last Updated**: 2025-10-25
