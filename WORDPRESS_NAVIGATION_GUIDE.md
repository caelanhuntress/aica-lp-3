# WordPress Navigation Guide for Claude Browser Extension
## Where to Find Everything - Step-by-Step Locations

This guide shows you EXACTLY where to click in WordPress to make each change.

---

## 🔍 FINDING YOUR PAGE

### Step 1: Log into WordPress
1. Go to: `https://join.ai-coaching.academy/wp-admin/`
2. Enter username and password
3. You'll see the WordPress Dashboard

### Step 2: Find the AI Roadmap Workshop Page
1. **In the left sidebar**, look for "Pages" (has a document icon)
2. **Hover over "Pages"** and click "All Pages"
3. **Look for the page titled:** "AI Roadmap Workshop" or "roadmap"
4. **Click "Edit"** underneath the page title

---

## 📝 EDITING PAGE TITLE & META DESCRIPTION

### Where: Yoast SEO Meta Box

1. **After clicking Edit** on your page, scroll down below the main editor
2. **Look for a box titled "Yoast SEO"** (has a traffic light icon)
   - If you don't see it, click "Screen Options" at top right → Check "Yoast SEO"
3. **Click "Edit snippet"** button (if snippet is collapsed)
4. **You'll see 3 fields:**
   - **SEO title** ← Update this
   - **Slug** ← Leave as is
   - **Meta description** ← Update this

### Alternative: If Using Rank Math
1. **Scroll down** to "Rank Math SEO" box
2. **Click "Edit Snippet"**
3. **Update:**
   - Title
   - Description

### Alternative: If Using All in One SEO
1. **Scroll down** to "AIOSEO Settings" panel
2. **You'll see fields for:**
   - Post Title
   - Meta Description

---

## 📄 EDITING PAGE CONTENT (H1, Paragraphs, Sections)

### Using Block Editor (Gutenberg) - Most Common

#### Where is the Editor?
1. **After clicking Edit**, you'll see the main editing area
2. **Each piece of content is a "block"** (paragraph, heading, image, etc.)
3. **Click any block** to edit it
4. **Click the "+" button** to add new blocks

#### To Edit H1 Heading:
1. **Find the main heading** at top (usually largest text)
2. **Click on it** - block will highlight with blue border
3. **Replace the text**
4. **Check it's H1:**
   - Look at right sidebar → Block tab → Heading settings
   - Make sure it says "H1" in dropdown
   - If not, change to H1

#### To Edit a Paragraph:
1. **Click the paragraph** you want to edit
2. **Replace or edit text** directly
3. Changes save automatically to draft

#### To Add a New Section:
1. **Click where you want to add** (between existing blocks)
2. **Click the "+" button** that appears
3. **Search for the block type** you want:
   - "Group" - for containers
   - "Heading" - for headings
   - "Paragraph" - for text
   - "Columns" - for side-by-side layout

#### To Add the Location Section (3 Columns):
1. **Click "+"** where you want the section
2. **Search "Group"** and insert
3. **Inside the group, click "+"** again
4. **Add "Heading"** block → Type the H2 heading
5. **Click "+"** → Add "Paragraph" → Type intro text
6. **Click "+"** → Search "Columns"
7. **Choose "3 columns"** layout
8. **In each column:**
   - Click "+" → Add "Heading" (H3)
   - Click "+" → Add "Paragraph"

### Using Classic Editor

1. **You'll see one big text editor** (looks like Word)
2. **To edit text:** Just click and type
3. **To change heading level:**
   - Highlight text
   - Use dropdown that says "Paragraph" or "Heading 1"
   - Select "Heading 1" for H1
4. **To add new content:**
   - Click where you want to add
   - Type or paste

### Using Elementor Page Builder

1. **Click "Edit with Elementor"** button (blue button at top)
2. **New interface opens** with widgets on left, preview on right
3. **To edit text:**
   - Click the element on the page
   - Edit text in left panel
4. **To add new section:**
   - Click "+" icon (usually at bottom or between sections)
   - Drag widgets from left panel
5. **To change heading level:**
   - Click heading
   - Look in left panel → Content → HTML Tag
   - Select H1, H2, H3, etc.

---

## 🖼️ UPDATING IMAGE ALT TEXT

### Block Editor:
1. **Click the image** you want to update
2. **Look at right sidebar** → Block tab
3. **Scroll down** to find "Alt text (alternative text)" field
4. **Type new alt text** in the box
5. **That's it!** No save button needed

### Classic Editor:
1. **Click the image**
2. **Click the pencil/edit icon** that appears
3. **In the popup:**
   - Find "Alternative Text" field
   - Update it
4. **Click "Update"**

### Elementor:
1. **Click the image** widget
2. **In left panel:**
   - Find "Alternative Text" field
   - Update it

### Media Library Method (Updates Everywhere):
1. **Go to:** Media → Library (in left sidebar)
2. **Find the image** (search if needed)
3. **Click the image** to open details
4. **Right side panel appears**
5. **Find "Alternative Text" field**
6. **Update and click "Update"**

---

## ❓ ADDING FAQ ITEMS

### Using Block Editor with Details Block:
1. **Scroll to FAQ section** on your page
2. **After last FAQ, click "+"**
3. **Search "Details"** and insert
   - Note: Some themes may not have this
   - Alternative: Search "Accordion" or "Toggle"
4. **You'll see:**
   - Summary (the question)
   - Content (the answer)
5. **Click Summary** → Type question
6. **Click Content area** → Type answer
7. **Repeat** for each FAQ

### If Using an Accordion Plugin:
1. **Look for the accordion/FAQ block** type
2. **Click "Add Item"** or "+"
3. **Fill in Question and Answer fields**

### If FAQ is Custom Code:
1. **Find the FAQ section** in editor
2. **Copy an existing FAQ item**
3. **Paste it**
4. **Edit the question and answer text**

---

## 🔌 INSTALLING PLUGINS

### To Install a Plugin:
1. **In left sidebar, click "Plugins"**
2. **Click "Add New"**
3. **Search for the plugin name** in the search box (top right)
   - Example: "Insert Headers and Footers"
4. **Click "Install Now"** button
5. **Wait for it to install** (button changes to "Activate")
6. **Click "Activate"**

### Plugins You Need:
- **Insert Headers and Footers** (for meta tags)
- **Code Snippets** (for schema markup)

---

## 🔧 USING "INSERT HEADERS AND FOOTERS" PLUGIN

### After Installing:
1. **In left sidebar, hover over "Settings"**
2. **Click "Insert Headers and Footers"**
3. **You'll see 3 boxes:**
   - Scripts in Header ← Use this for meta tags
   - Scripts in Body
   - Scripts in Footer
4. **Click inside "Scripts in Header" box**
5. **Paste the geographic meta tags**
6. **Scroll down and click "Save"**

---

## 💻 USING "CODE SNIPPETS" PLUGIN

### After Installing:
1. **In left sidebar, look for "Snippets"**
2. **Click "Snippets"** → **"Add New"**
3. **You'll see:**
   - Title field ← Give it a descriptive name
   - Code editor ← Paste PHP code here
4. **Important:** Make sure "Code Type" says **"PHP Snippet"**
   - If it says "HTML" change it to "PHP Snippet"
5. **Paste your schema code**
6. **Scroll down**
7. **Make sure "Active" switch is ON**
8. **Click "Save Changes and Activate"**

### To Edit a Snippet Later:
1. **Go to Snippets → All Snippets**
2. **Click "Edit"** under the snippet
3. **Make changes**
4. **Save**

---

## 🎯 YOAST SEO SETTINGS DETAILS

### Where: Edit Page → Scroll to Yoast SEO Box

The Yoast box has multiple tabs:

#### 1. SEO Tab (Traffic Light Icon)
- **Focus keyphrase:** Enter "AI planning workshop NZ"
- **SEO title:** Your title tag
- **Meta description:** Your description
- **Snippet preview:** See how it looks in Google

#### 2. Readability Tab
- Shows content analysis
- Ignore this for now

#### 3. Social Tab
- **Facebook settings:**
  - Title
  - Description
  - Image
- **Twitter settings:**
  - Same as above

#### 4. Schema Tab
- **Manages structured data**
- Usually auto-configured
- You can add FAQ schema here

#### 5. Advanced Tab
- **Canonical URL:** Set the official URL
- **Meta robots:** Usually leave as default

---

## 🧹 CLEARING CACHE

### If Using WP Super Cache:
1. **In left sidebar:** Settings → WP Super Cache
2. **Click "Delete Cache" button**
3. **Done**

### If Using W3 Total Cache:
1. **In left sidebar:** Performance
2. **Click "Dashboard"**
3. **Click "Empty All Caches"** button
4. **Done**

### If Using WP Rocket:
1. **In top WordPress toolbar** (at very top of screen)
2. **Look for "WP Rocket"**
3. **Hover over it**
4. **Click "Clear Cache"**

### If Using Cloudflare:
1. **Log into Cloudflare separately**
2. **Go to Caching tab**
3. **Click "Purge Everything"**

### Browser Cache:
1. **On the website:** Press **Ctrl + Shift + R** (Windows/Linux)
2. **Or:** Press **Cmd + Shift + R** (Mac)

---

## 💾 SAVING YOUR CHANGES

### In Block Editor:
1. **Click "Update" button** (top right, blue button)
   - If draft: Button says "Publish"
2. **Wait for "Page updated" message**
3. **Click "View Page"** to see changes

### In Elementor:
1. **Click "Update" button** (bottom left, green button)
2. **Wait for save confirmation**
3. **Click arrow next to Update → View Page**

### In Classic Editor:
1. **Click "Update" button** (right sidebar)
2. **Wait for confirmation**

---

## 🔍 VERIFYING YOUR CHANGES

### View Page Source:
1. **Visit your page** in browser
2. **Right-click anywhere** on the page
3. **Click "View Page Source"**
4. **Press Ctrl+F** to open Find
5. **Search for:**
   - "geo.region" ← Should find it if meta tags added
   - "areaServed" ← Should find it if schema added
   - "Auckland" ← Should find multiple times

### Test Rich Results:
1. **Go to:** https://search.google.com/test/rich-results
2. **Paste your page URL**
3. **Click "Test URL"**
4. **Wait for results**
5. **Should see:**
   - ✅ LocalBusiness
   - ✅ FAQPage
   - 0 errors

### Test in Yoast:
1. **Edit your page**
2. **Scroll to Yoast box**
3. **Look at SEO analysis**
4. **Should see green bullets for:**
   - Focus keyword in title ✓
   - Focus keyword in meta description ✓
   - Focus keyword in content ✓

---

## 🗺️ QUICK LOCATION REFERENCE

| What You're Doing | Where to Go |
|-------------------|-------------|
| Edit page title/meta | Pages → Edit → Yoast SEO box |
| Edit H1 heading | Pages → Edit → Click heading block |
| Add new section | Pages → Edit → Click "+" button |
| Install plugin | Plugins → Add New |
| Add meta tags | Settings → Insert Headers and Footers |
| Add schema code | Snippets → Add New |
| Update image alt text | Click image → Right sidebar |
| Add FAQ | Pages → Edit → Add Details block |
| Clear cache | Settings → Cache Plugin |
| View changes | Click "Update" → "View Page" |

---

## 🚨 COMMON ISSUES & SOLUTIONS

### Issue: Can't find Yoast SEO box
**Solution:**
1. Click "Screen Options" (top right corner)
2. Check "Yoast SEO" checkbox
3. Box appears at bottom

### Issue: Changes don't appear on live site
**Solution:**
1. Clear WordPress cache
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 5 minutes
4. Check again

### Issue: Schema errors in validator
**Solution:**
1. Copy the error message
2. Check Code Snippets plugin is activated
3. Check for typos in code (missing commas, quotes)
4. Make sure code type is "PHP Snippet"

### Issue: Can't add new blocks
**Solution:**
1. Update WordPress to latest version
2. Update your theme
3. Try deactivating plugins one by one
4. Switch to default theme temporarily

### Issue: Page won't save
**Solution:**
1. Check internet connection
2. Disable ad blockers
3. Try different browser
4. Check PHP memory limit (ask host)

---

## 📞 GETTING HELP

### WordPress Support:
- https://wordpress.org/support/

### Plugin Support:
- **Yoast SEO:** https://yoast.com/help/
- **Rank Math:** https://rankmath.com/kb/
- **Code Snippets:** Plugin page → Support tab

### Check Plugin Settings:
1. Go to: Plugins → Installed Plugins
2. Find the plugin
3. Click "Settings" or plugin name
4. Look for documentation links

---

## ✅ PRE-FLIGHT CHECKLIST

Before you start, make sure:

- [ ] You have WordPress admin access
- [ ] You know which page builder you're using (Gutenberg/Elementor/Divi)
- [ ] You know which SEO plugin is installed (Yoast/Rank Math/AIOSEO)
- [ ] You have a backup (or can create one)
- [ ] You're in a good internet connection
- [ ] You have 2-3 hours available

**Ready to start?** Go to the QUICK_IMPLEMENTATION_CHECKLIST.md and follow step by step!

---

**Last Updated:** 2026-02-11
**For:** Claude Browser Extension Implementation Guide
**Page:** AI Roadmap Workshop - SEO Optimization
