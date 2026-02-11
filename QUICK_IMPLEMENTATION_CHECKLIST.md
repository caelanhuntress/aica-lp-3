# Quick SEO Implementation Checklist
## For Claude Browser Extension - WordPress Backend

Use this checklist while implementing SEO changes. Check off each item as you complete it.

---

## 🎯 PRIORITY 1: Critical Changes (Do These First - 30 mins)

### 1. Update Page Title & Meta Description
**Location:** Pages → Edit "AI Roadmap Workshop" → Scroll to Yoast SEO box

- [ ] **SEO Title:** Copy this:
  ```
  AI Planning Workshop NZ | AI Implementation New Zealand | AI Coaching Academy
  ```

- [ ] **Meta Description:** Copy this:
  ```
  AI planning workshop NZ for SMEs. Get an AI implementation roadmap with ROI projections in 2 hours. New Zealand AI strategy consulting for business teams. From $1,500 for up to 15 participants.
  ```

- [ ] Click "Update" button

---

### 2. Update H1 Heading
**Location:** Same page → Main editor area → Find first big heading

- [ ] Click the heading
- [ ] Replace with:
  ```
  AI Planning Workshop New Zealand
  Stop Guessing Where AI Fits in Your Business
  ```

- [ ] Verify it's H1 (Block settings → HTML tag: H1)
- [ ] Click "Update"

---

### 3. Add Geographic Meta Tags
**Location:** Plugins → Add New → Search "Insert Headers and Footers" → Install & Activate

- [ ] Go to: Settings → Insert Headers and Footers
- [ ] In "Scripts in Header" box, paste:
  ```html
  <!-- Geographic Meta Tags for NZ SEO -->
  <meta name="geo.region" content="NZ" />
  <meta name="geo.placename" content="New Zealand" />
  <meta name="geo.position" content="-41.2865;174.7762" />
  <meta name="ICBM" content="-41.2865, 174.7762" />
  ```

- [ ] Click "Save"

---

### 4. Update Hero Subtitle
**Location:** Pages → Edit page → Find paragraph under main heading

- [ ] Find text starting with "In just 2 hours..."
- [ ] Replace with:
  ```
  AI implementation workshop for New Zealand businesses. In just 2 hours, your leadership team identifies 5-8 high-value AI opportunities — prioritized by ROI, with a concrete implementation plan.
  ```

- [ ] Click "Update"

---

## 🎯 PRIORITY 2: High Impact Changes (45 mins)

### 5. Add Location Section
**Location:** Pages → Edit page → Add after hero section

- [ ] Click "+" button to add new block
- [ ] Search for "Group" and insert
- [ ] Add Heading (H2):
  ```
  AI Implementation Consulting Across New Zealand
  ```

- [ ] Add Paragraph:
  ```
  We work with SMEs throughout New Zealand — from Auckland to Wellington, Christchurch to Hamilton. Whether you're looking for AI strategy consulting in Auckland, AI implementation support in Wellington, or AI planning workshops anywhere in NZ, we deliver results remotely or in-person.
  ```

- [ ] Add Columns block (3 columns)
- [ ] In each column add:

  **Column 1:**
  - H3: AI Workshops Auckland
  - Paragraph: In-person and remote AI planning workshops for Auckland businesses

  **Column 2:**
  - H3: AI Strategy Wellington
  - Paragraph: AI roadmap development and implementation consulting in Wellington

  **Column 3:**
  - H3: AI Consulting NZ-Wide
  - Paragraph: Remote AI workshops for teams across Christchurch, Hamilton, Tauranga, and all NZ regions

- [ ] Click "Update"

---

### 6. Add NZ-Specific FAQ Items
**Location:** Pages → Edit page → Scroll to FAQ section

- [ ] Add FAQ 1:
  - **Question:** Do you run AI workshops throughout New Zealand?
  - **Answer:** Yes! We deliver AI planning workshops across New Zealand — Auckland, Wellington, Christchurch, Hamilton, and beyond. Sessions can be run in-person or remotely via Zoom, depending on your location and preference.

- [ ] Add FAQ 2:
  - **Question:** What makes this different from other AI consulting in NZ?
  - **Answer:** Unlike generic AI training, this workshop is a working session specific to your New Zealand business. You'll walk away with a concrete AI implementation plan, not just theory. We focus on practical AI tools and strategies that work for NZ SMEs.

- [ ] Add FAQ 3:
  - **Question:** Is the pricing in NZD?
  - **Answer:** Yes, all pricing is in New Zealand dollars (NZD) plus GST. The AI Roadmap Workshop is $1,500 NZD + GST for up to 15 participants.

- [ ] Click "Update"

---

### 7. Update Schema Markup
**Location:** Plugins → Add New → Search "Code Snippets" → Install & Activate

- [ ] Go to: Snippets → Add New
- [ ] Title: "Enhanced Schema - AI Workshop NZ"
- [ ] Copy ALL code from `schema-code-snippet.txt` file
- [ ] Paste into code area
- [ ] Save and Activate
- [ ] (See detailed code in separate file)

---

### 8. Update Trust Strip Text
**Location:** Pages → Edit page → Find "Trusted by SME teams across New Zealand"

- [ ] Change to:
  ```
  Trusted by SME teams across Auckland, Wellington & all NZ
  ```

- [ ] Click "Update"

---

### 9. Update About Section
**Location:** Pages → Edit page → Scroll to About Caelan section

- [ ] Find first paragraph about Caelan
- [ ] Replace with:
  ```
  Caelan Huntress is the founder of AI Coaching Academy. With over a decade of helping New Zealand businesses work smarter with technology, he's facilitated AI planning workshops and implementation projects for teams across Auckland, Wellington, Christchurch — from professional services firms to logistics companies to creative agencies.
  ```

- [ ] Click "Update"

---

## 🎯 PRIORITY 3: Image Optimization (15 mins)

### 10. Update Image Alt Text
**Location:** Pages → Edit page → Click each image

- [ ] Main workshop image:
  ```
  Caelan Huntress AI workshop facilitator speaking at New Zealand AI implementation workshop
  ```

- [ ] Headshot image:
  ```
  Caelan Huntress - AI implementation consultant and workshop facilitator New Zealand
  ```

- [ ] Click "Update"

---

## 🎯 VERIFICATION: Test Everything (10 mins)

### 11. Visual Check

- [ ] View page in incognito browser
- [ ] Check H1 shows new text with "New Zealand"
- [ ] Check new location section appears
- [ ] Check 3 new FAQ items appear
- [ ] Scroll through entire page

---

### 12. Technical Check

- [ ] Right-click → View Page Source
- [ ] Press Ctrl+F (Find)
- [ ] Search for "geo.region" - should find it
- [ ] Search for "Auckland" - should find multiple instances
- [ ] Search for "areaServed" - should find in schema

---

### 13. Schema Validation

- [ ] Go to: https://search.google.com/test/rich-results
- [ ] Enter page URL
- [ ] Click "Test URL"
- [ ] Verify "LocalBusiness" appears
- [ ] Verify "FAQPage" appears
- [ ] Check for 0 errors

---

### 14. Yoast/Rank Math Check

- [ ] Edit page again
- [ ] Scroll to Yoast SEO box
- [ ] Click "Readability" or "SEO" tab
- [ ] Check that focus keyword suggestions include:
  - "New Zealand" mentioned ✓
  - "AI planning workshop" mentioned ✓
  - "AI implementation" mentioned ✓

---

## 🎯 POST-LAUNCH: Submit to Search Engines (5 mins)

### 15. Google Search Console

- [ ] Go to: https://search.google.com/search-console
- [ ] Add property (if not added): join.ai-coaching.academy
- [ ] Click "URL Inspection"
- [ ] Paste: https://join.ai-coaching.academy/roadmap/
- [ ] Click "Request Indexing"

---

### 16. Clear All Caches

- [ ] If using WP Super Cache: Settings → Delete Cache
- [ ] If using W3 Total Cache: Performance → Empty All Caches
- [ ] If using WP Rocket: Clear Cache
- [ ] Browser: Hard refresh (Ctrl+Shift+R)

---

## 📊 MONITORING: Check Results

### Week 1:
- [ ] Check page appears in Google: site:join.ai-coaching.academy/roadmap/
- [ ] Verify title shows correctly in search results

### Week 2:
- [ ] Google Search Console → Performance
- [ ] Check impressions for "AI workshop NZ"
- [ ] Check impressions for "AI implementation New Zealand"

### Month 1:
- [ ] Review organic traffic increase
- [ ] Check ranking positions for target keywords
- [ ] Review which keywords are driving traffic

---

## ✅ COMPLETION CHECKLIST

**Essential (Must Do):**
- [ ] Title tag updated with NZ keywords
- [ ] Meta description updated
- [ ] H1 updated with location
- [ ] Geographic meta tags added
- [ ] Location section added to page
- [ ] 3 NZ FAQs added
- [ ] Schema updated with areaServed
- [ ] About section updated
- [ ] All changes saved
- [ ] Page tested in browser
- [ ] Schema validated
- [ ] Submitted to Search Console

**Recommended (Do Soon):**
- [ ] Create first blog post ("AI Implementation Guide for NZ SMEs")
- [ ] Set up Google Business Profile
- [ ] Add to NZ business directories
- [ ] Create case study page

**Nice to Have (Ongoing):**
- [ ] Create 2 more blog posts
- [ ] Build internal links
- [ ] Get testimonials with location mentions
- [ ] Create location-specific landing pages

---

## 🆘 TROUBLESHOOTING

**Changes don't appear:**
1. Clear cache (WP + browser)
2. Check page is published
3. Hard refresh: Ctrl+Shift+R

**Schema errors:**
1. Use validator: https://validator.schema.org/
2. Check for typos in code
3. Ensure Code Snippets plugin is active

**Yoast/Rank Math conflicts:**
1. Only use ONE SEO plugin
2. Deactivate others
3. Re-save settings

---

## ⏱️ TIME ESTIMATE

- **Priority 1 (Critical):** 30 minutes
- **Priority 2 (High Impact):** 45 minutes
- **Priority 3 (Images):** 15 minutes
- **Verification:** 10 minutes
- **Total:** ~2 hours for complete implementation

---

## 📝 NOTES

**Focus Keyword:** AI planning workshop NZ

**Secondary Keywords:**
- AI implementation New Zealand
- AI strategy Auckland
- AI consulting Wellington
- AI workshop Christchurch

**Goal:** Rank in top 5 for these searches within 3-6 months

---

**Status:** [ ] Not Started | [ ] In Progress | [ ] Completed | [ ] Verified

**Completed By:** ________________
**Date:** ________________
**Verified By:** ________________
**Date:** ________________
