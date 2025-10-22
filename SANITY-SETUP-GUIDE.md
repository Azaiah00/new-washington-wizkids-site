# 🎨 Sanity CMS Setup Guide

Complete step-by-step guide to set up your blog CMS!

---

## 🎓 What You Just Built (Phase 1 Complete!)

✅ Sanity configuration files  
✅ Blog post schema (what fields a post has)  
✅ Sanity client (connects to cloud)  
✅ Query functions (fetch blog posts)  
✅ Updated BlogSection to use live data  
✅ Admin dashboard route (/studio)  

---

## 📋 What You Need to Do Next (10 Minutes)

### Step 1: Create Sanity Account (2 minutes)

1. Go to: https://www.sanity.io/
2. Click "Get Started" or "Sign Up"
3. Sign up with:
   - GitHub (easiest)
   - Google
   - Or email

### Step 2: Create Sanity Project (3 minutes)

After signing up, you'll be at the dashboard. Now:

**Run this command in PowerShell:**

```powershell
cd C:\Users\azaia\OneDrive\new-washington-wizkids-site
npx sanity init --project-plan free
```

**Follow the prompts:**

```
? Select project to use
→ Create new project

? Project name
→ Washington WizKids

? Dataset name  
→ production

? Project output path
→ Press Enter (uses current directory)

? Select project template
→ Clean project with no predefined schemas
```

This creates your Sanity project in the cloud!

### Step 3: Get Your Project ID (1 minute)

After running `sanity init`, look for this in the output:

```
✔ Success! Below are your project details:

Project ID: abc123xyz  ← COPY THIS!
Dataset: production
```

**OR** go to: https://www.sanity.io/manage  
→ Click your project  
→ Copy the Project ID

### Step 4: Add Environment Variables (2 minutes)

1. **Copy the template:**
   ```powershell
   copy env.template .env.local
   ```

2. **Open `.env.local` in your editor**

3. **Add your Project ID:**
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Save the file**

### Step 5: Start Your Site (1 minute)

```powershell
npm run dev
```

Visit: **http://localhost:3000**

### Step 6: Access Sanity Studio (1 minute)

While your site is running, visit:

**http://localhost:3000/studio**

🎉 **You'll see your CMS dashboard!**

---

## ✍️ How to Add Your First Blog Post

### In Sanity Studio (http://localhost:3000/studio):

1. **Click "Blog Post"** in the left sidebar
2. **Click the "+" button** (Create new document)
3. **Fill in the fields:**

   **Title:**
   ```
   Wizards Defeat Celtics in Overtime Thriller
   ```

   **Slug:**
   - Click "Generate" button next to slug field
   - It auto-creates: `wizards-defeat-celtics-in-overtime-thriller`

   **Excerpt:**
   ```
   In a stunning overtime victory, the Wizards overcame a 15-point deficit to defeat the Celtics 128-125. Jordan Poole led with 35 points.
   ```

   **Featured Image:**
   - Click "Upload"
   - Select an image from your computer
   - Add alt text: "Jordan Poole celebrating game-winning shot"

   **Category:**
   - Select "News"

   **Content:**
   - Write your full blog post here
   - Use the toolbar for formatting (bold, headings, etc.)

4. **Click "Publish"** in the bottom right

### View It Live:

1. Go back to **http://localhost:3000**
2. Scroll to "The WizKids Wire" section
3. **Your post is live!** 🎉

---

## 🎯 Understanding the System

### How Data Flows:

```
You add post in Studio (localhost:3000/studio)
          ↓
Sanity saves to cloud (instant)
          ↓
Your website fetches from cloud
          ↓
Post appears on homepage!
```

### Files You Created:

```
sanity.config.ts          - Main Sanity configuration
sanity/schemas/
  ├── index.ts            - Exports all schemas
  └── blogPost.ts         - Blog post structure
sanity/lib/
  ├── client.ts           - Connects to Sanity cloud
  └── queries.ts          - Fetch functions
app/studio/
  └── [[...index]]/
      └── page.tsx        - Admin dashboard route
app/components/
  └── BlogSection.tsx     - Now fetches from Sanity!
```

---

## 🔍 Understanding GROQ Queries

In `sanity/lib/queries.ts`, we use GROQ (Sanity's query language):

```groq
*[_type == "blogPost"] | order(publishedAt desc) [0...3] {
  title,
  excerpt,
  featuredImage
}
```

**Breaking it down:**
- `*` = Get all documents
- `[_type == "blogPost"]` = Filter to only blog posts
- `| order(publishedAt desc)` = Sort by date, newest first
- `[0...3]` = Limit to first 3 results
- `{ fields }` = Select which fields to return

---

## 🎨 Customizing Your CMS

### Add More Fields to Blog Posts:

Edit `sanity/schemas/blogPost.ts`:

```typescript
// Add after the 'author' field:
defineField({
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [{ type: 'string' }],
  description: 'Add tags like "Trade", "Injury", "Preview"',
}),
```

### Add a New Content Type (e.g., Podcasts):

1. Create `sanity/schemas/podcast.ts`
2. Define fields (title, audioUrl, duration, etc.)
3. Add to `sanity/schemas/index.ts`:
   ```typescript
   import podcast from './podcast'
   export const schemaTypes = [blogPost, podcast]
   ```

---

## 🚨 Troubleshooting

### "Environment variable not found"
**Fix:** Make sure `.env.local` exists and has your Project ID

### "Failed to fetch from Sanity"
**Fix:** 
1. Check Project ID is correct
2. Make sure dataset is "production"
3. Check internet connection

### "Studio won't load"
**Fix:**
```powershell
npm install
npm run dev
```

### "Posts not showing up"
**Fix:**
1. Make sure you clicked "Publish" in Studio (not just Save)
2. Refresh your homepage
3. Check browser console for errors (F12)

---

## 🎯 What's Next?

✅ **Phase 1 Complete:** Sanity CMS integrated!

Now you can:
- ✅ Add blog posts from beautiful dashboard
- ✅ Upload images
- ✅ Publish/unpublish content
- ✅ Edit anytime

**Ready for Phase 2?** NBA Stats Integration! 🏀

---

## 📝 Quick Reference

**Start dev server:**
```powershell
npm run dev
```

**Access Studio:**
http://localhost:3000/studio

**View website:**
http://localhost:3000

**Sanity Dashboard:**
https://www.sanity.io/manage

**Sanity Docs:**
https://www.sanity.io/docs

---

**Questions? Check the inline comments in each file - they explain everything!** 📚


