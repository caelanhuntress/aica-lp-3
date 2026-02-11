# WordPress SEO Implementation Guide
## AI Roadmap Workshop - New Zealand Long-Tail Keyword Optimization

This guide provides step-by-step instructions for implementing SEO improvements in WordPress backend.

---

## Prerequisites

**Required Plugins:**
1. **Yoast SEO** (recommended) OR **Rank Math** OR **All in One SEO**
2. **WP Schema Pro** OR **Schema Pro** (for advanced structured data)
3. **Advanced Custom Fields (ACF)** (optional, for custom sections)

**Alternative:** If using a page builder like Elementor, Divi, or Beaver Builder, follow the builder-specific instructions below.

---

## PART 1: Title Tag & Meta Description (Critical - Do First)

### If Using Yoast SEO:

1. **Navigate to:** Pages → All Pages → Find "AI Roadmap Workshop" page → Click Edit
2. **Scroll down** to the "Yoast SEO" meta box (below the editor)
3. **Update SEO Title:**
   ```
   AI Planning Workshop NZ | AI Implementation New Zealand | AI Coaching Academy
   ```

4. **Update Meta Description:**
   ```
   AI planning workshop NZ for SMEs. Get an AI implementation roadmap with ROI projections in 2 hours. New Zealand AI strategy consulting for business teams. From $1,500 for up to 15 participants.
   ```

5. **Click "Update"** to save

### If Using Rank Math:

1. **Navigate to:** Pages → Edit your page
2. **Find Rank Math SEO box** below editor
3. **Click "Edit snippet"**
4. **Update Title:** Same as above
5. **Update Description:** Same as above
6. **Click "Update"**

### If Using All in One SEO:

1. **Navigate to:** Pages → Edit your page
2. **Scroll to "AIOSEO Settings"** panel
3. **Enter same Title and Description** as above
4. **Click "Update"**

---

## PART 2: Update H1 Heading (High Priority)

### Method A: Using Block Editor (Gutenberg)

1. **Navigate to:** Pages → Edit your page
2. **Find the main heading** (should be first heading on page)
3. **Click the heading block**
4. **Change text to:**
   ```
   AI Planning Workshop New Zealand
   Stop Guessing Where AI Fits in Your Business
   ```
   OR
   ```
   New Zealand AI Implementation Strategy
   Plan Your AI Roadmap in 2 Hours
   ```

5. **Verify it's H1:** Click block → Right sidebar → Settings → HTML tag should be "H1"
6. **Click "Update"**

### Method B: Using Classic Editor

1. **Find the main heading** in the editor
2. **Highlight the text**
3. **Change to:** Same as above
4. **Ensure dropdown says "Heading 1"** (not Heading 2)
5. **Click "Update"**

### Method C: Using Page Builder (Elementor/Divi)

**Elementor:**
1. Click "Edit with Elementor"
2. Click the hero heading widget
3. Change HTML Tag to H1 in left panel
4. Update text to new heading
5. Click "Update"

**Divi:**
1. Click "Edit with Divi"
2. Click the text module with heading
3. Update heading text
4. Ensure Heading Level is H1
5. Save

---

## PART 3: Add Geographic Meta Tags

### Using Yoast SEO (Free - Code Injection Method)

1. **Navigate to:** Appearance → Theme File Editor
   - ⚠️ **SAFER ALTERNATIVE:** Use "Insert Headers and Footers" plugin instead

2. **If using Insert Headers and Footers plugin:**
   - Install plugin: Plugins → Add New → Search "Insert Headers and Footers"
   - Navigate to: Settings → Insert Headers and Footers
   - In "Scripts in Header" section, add:

```html
<!-- Geographic Meta Tags for NZ SEO -->
<meta name="geo.region" content="NZ" />
<meta name="geo.placename" content="New Zealand" />
<meta name="geo.position" content="-41.2865;174.7762" />
<meta name="ICBM" content="-41.2865, 174.7762" />
```

3. **Click "Save"**

### Using Rank Math (Built-in Code Injection)

1. **Navigate to:** Rank Math → General Settings → Edit .htaccess and robots.txt
2. **Or use:** Rank Math → General Settings → Edit Robots.txt (not needed here)
3. **Better method:** Install "Code Snippets" plugin
   - Plugins → Add New → "Code Snippets"
   - Snippets → Add New
   - **Title:** "Geographic Meta Tags NZ"
   - **Code:**

```php
add_action('wp_head', function() {
    if (is_page('ai-roadmap-workshop') || is_page('roadmap')) {
        echo '<!-- Geographic Meta Tags for NZ SEO -->' . "\n";
        echo '<meta name="geo.region" content="NZ" />' . "\n";
        echo '<meta name="geo.placename" content="New Zealand" />' . "\n";
        echo '<meta name="geo.position" content="-41.2865;174.7762" />' . "\n";
        echo '<meta name="ICBM" content="-41.2865, 174.7762" />' . "\n";
    }
}, 1);
```

4. **Save and Activate**

---

## PART 4: Add Location-Specific Content Section

### Using Block Editor (Gutenberg)

1. **Navigate to:** Pages → Edit your page
2. **Scroll to where you want to add the section** (recommended: after hero, before "Who This Is For")
3. **Click the "+" button** to add new block
4. **Search for "Group" block** and insert it
5. **Inside the Group, add:**
   - **Heading block (H2):**
     ```
     AI Implementation Consulting Across New Zealand
     ```

   - **Paragraph block:**
     ```
     We work with SMEs throughout New Zealand — from Auckland to Wellington, Christchurch to Hamilton. Whether you're looking for AI strategy consulting in Auckland, AI implementation support in Wellington, or AI planning workshops anywhere in NZ, we deliver results remotely or in-person.
     ```

   - **Columns block (3 columns)**

6. **In each column, add:**

   **Column 1:**
   - **Heading (H3):** AI Workshops Auckland
   - **Paragraph:** In-person and remote AI planning workshops for Auckland businesses

   **Column 2:**
   - **Heading (H3):** AI Strategy Wellington
   - **Paragraph:** AI roadmap development and implementation consulting in Wellington

   **Column 3:**
   - **Heading (H3):** AI Consulting NZ-Wide
   - **Paragraph:** Remote AI workshops for teams across Christchurch, Hamilton, Tauranga, and all NZ regions

7. **Click "Update"**

### Using Elementor

1. **Click "Edit with Elementor"**
2. **Click "+" icon** where you want to add section
3. **Choose 1-column layout**
4. **Drag "Heading" widget:**
   - Text: "AI Implementation Consulting Across New Zealand"
   - HTML Tag: H2

5. **Drag "Text Editor" widget:**
   - Add the paragraph content above

6. **Add new section with 3 columns**
7. **In each column, add Heading (H3) + Text** as above
8. **Click "Update"**

### Using Divi

1. **Click "Edit with Divi"**
2. **Click "+" to add new section**
3. **Choose 1-column layout**
4. **Add Text module** with H2 heading and paragraph
5. **Add new row** with 3 columns
6. **In each column:** Add text module with H3 and paragraph
7. **Save Changes**

---

## PART 5: Update Schema Markup (Critical for AI Search)

### Using Yoast SEO Schema

1. **Navigate to:** SEO → Schema
2. **Click "Add Schema"** or edit existing
3. **Choose "Local Business"**
4. **Fill in:**
   - **Name:** AI Coaching Academy
   - **Description:** AI Roadmap Workshop - AI implementation and planning workshops for New Zealand SMEs
   - **Phone:** +64 27 575 1345
   - **Email:** caelan@ai-coaching.academy
   - **URL:** https://join.ai-coaching.academy/roadmap/
   - **Country:** New Zealand
   - **Region:** Wellington (or your primary city)

5. **Save Schema**

### Using Schema Pro Plugin (Recommended for Advanced Schema)

1. **Install:** Plugins → Add New → "Schema Pro"
2. **Navigate to:** Schema Pro → Add New Schema
3. **Select:** Local Business
4. **Configure:**

**Page 1 - Schema Type:**
- Schema Type: Local Business
- Enable On: Specific Page → Select "AI Roadmap Workshop"

**Page 2 - Business Info:**
```
Business Name: AI Coaching Academy
Description: AI Roadmap Workshop - AI implementation and planning workshops for New Zealand SMEs
Phone: +64 27 575 1345
Email: caelan@ai-coaching.academy
Price Range: $$
```

**Page 3 - Address:**
```
Country: New Zealand
Region: Wellington (or leave for all NZ)
Latitude: -41.2865
Longitude: 174.7762
```

**Page 4 - Areas Served:**
- Add: Auckland
- Add: Wellington
- Add: Christchurch
- Add: New Zealand

**Page 5 - Advanced:**
```json
"serviceType": "AI Planning Workshop, AI Implementation Consulting, AI Strategy",
"knowsAbout": ["AI Implementation", "AI Strategy", "Business AI Adoption", "AI Workshops"]
```

5. **Publish Schema**

### Manual Schema (Advanced - Use Code Snippets Plugin)

1. **Install:** Plugins → Add New → "Code Snippets"
2. **Navigate to:** Snippets → Add New
3. **Title:** "Enhanced Schema Markup - AI Workshop"
4. **Code Type:** PHP Snippet
5. **Code:**

```php
add_action('wp_footer', function() {
    if (is_page('ai-roadmap-workshop') || is_page('roadmap')) {
        ?>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AI Coaching Academy",
          "description": "AI Roadmap Workshop - AI implementation and planning workshops for New Zealand SMEs",
          "telephone": "+64 27 575 1345",
          "email": "caelan@ai-coaching.academy",
          "url": "https://join.ai-coaching.academy/roadmap/",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NZ",
            "addressRegion": "New Zealand"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-41.2865",
            "longitude": "174.7762"
          },
          "areaServed": [
            {"@type": "City", "name": "Auckland"},
            {"@type": "City", "name": "Wellington"},
            {"@type": "City", "name": "Christchurch"},
            {"@type": "Country", "name": "New Zealand"}
          ],
          "priceRange": "$$",
          "serviceType": "AI Planning Workshop, AI Implementation Consulting, AI Strategy",
          "knowsAbout": ["AI Implementation", "AI Strategy", "Business AI Adoption", "AI Workshops"]
        }
        </script>

        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "AI Planning Workshop",
          "provider": {
            "@type": "Organization",
            "name": "AI Coaching Academy"
          },
          "areaServed": {
            "@type": "Country",
            "name": "New Zealand"
          },
          "offers": {
            "@type": "Offer",
            "price": "1500",
            "priceCurrency": "NZD",
            "description": "AI Roadmap Workshop for up to 15 participants"
          },
          "description": "2-hour AI planning workshop for New Zealand businesses. Identify 5-8 high-value AI opportunities with ROI projections and implementation roadmap."
        }
        </script>
        <?php
    }
}, 99);
```

6. **Save and Activate**

---

## PART 6: Add NZ-Specific FAQ Items

### If Using Gutenberg Block Editor

1. **Navigate to:** Pages → Edit your page
2. **Scroll to FAQ section**
3. **After existing FAQ items, click "+" to add block**
4. **Search "Details"** or use **"Accordion"** block (if available)
5. **Add these three new FAQ items:**

**FAQ 1:**
- **Summary/Question:** Do you run AI workshops throughout New Zealand?
- **Answer:**
```
Yes! We deliver AI planning workshops across New Zealand — Auckland, Wellington, Christchurch, Hamilton, and beyond. Sessions can be run in-person or remotely via Zoom, depending on your location and preference.
```

**FAQ 2:**
- **Summary/Question:** What makes this different from other AI consulting in NZ?
- **Answer:**
```
Unlike generic AI training, this workshop is a working session specific to your New Zealand business. You'll walk away with a concrete AI implementation plan, not just theory. We focus on practical AI tools and strategies that work for NZ SMEs.
```

**FAQ 3:**
- **Summary/Question:** Is the pricing in NZD?
- **Answer:**
```
Yes, all pricing is in New Zealand dollars (NZD) plus GST. The AI Roadmap Workshop is $1,500 NZD + GST for up to 15 participants.
```

6. **Click "Update"**

### If Using Elementor

1. **Edit with Elementor**
2. **Find FAQ section**
3. **Duplicate existing FAQ accordion item** (right-click → Duplicate)
4. **Edit each duplicated item** with the content above
5. **Update**

### Update Yoast FAQ Schema

1. **Scroll to Yoast SEO box** on the page
2. **Click "Schema" tab**
3. **Find FAQ section** or add FAQ block
4. **Add the three new questions** with answers above
5. **Update**

---

## PART 7: Update Text Content with NZ Keywords

### Find and Replace Key Sections:

**Hero Subtitle:**
1. **Navigate to:** Pages → Edit page
2. **Find the hero subtitle paragraph** (currently starts with "In just 2 hours...")
3. **Change to:**
```
AI implementation workshop for New Zealand businesses. In just 2 hours, your leadership team identifies 5-8 high-value AI opportunities — prioritized by ROI, with a concrete implementation plan.
```

**Trust Strip:**
1. **Find the line:** "Trusted by SME teams across New Zealand"
2. **Change to:**
```
Trusted by SME teams across Auckland, Wellington & all NZ
```

**About Section:**
1. **Find Caelan's bio paragraph**
2. **Change the first paragraph to:**
```
Caelan Huntress is the founder of AI Coaching Academy. With over a decade of helping New Zealand businesses work smarter with technology, he's facilitated AI planning workshops and implementation projects for teams across Auckland, Wellington, Christchurch — from professional services firms to logistics companies to creative agencies.
```

3. **Click "Update"** after each change

---

## PART 8: Update Image Alt Text

### For Each Image on the Page:

1. **Click the image** in the editor
2. **In the right sidebar,** find "Alt text" field
3. **Update to include location keywords:**

**Main workshop image:**
```
Caelan Huntress AI workshop facilitator speaking at New Zealand AI implementation workshop
```

**Headshot image:**
```
Caelan Huntress - AI implementation consultant and workshop facilitator New Zealand
```

**Any other images:**
- Include "New Zealand," "NZ," or city names
- Include "AI implementation," "AI workshop," or "AI planning"

4. **Click "Update"**

---

## PART 9: Update Page Settings

### Language Setting:

1. **Navigate to:** Settings → General
2. **Site Language:** Change to "English (New Zealand)" if available
3. **Save Changes**

### Canonical URL:

1. **Edit your page**
2. **In Yoast/Rank Math box:**
   - Find "Advanced" tab
   - Canonical URL: Ensure it's set to:
     ```
     https://join.ai-coaching.academy/roadmap/
     ```
3. **Update**

---

## PART 10: Verification & Testing

### After implementing all changes:

1. **View the page** in incognito/private browser
2. **Right-click → View Page Source**
3. **Verify these are present:**
   - ✅ Title tag includes "NZ" or "New Zealand"
   - ✅ Meta description includes location keywords
   - ✅ Geographic meta tags present
   - ✅ Schema markup includes areaServed
   - ✅ H1 includes location keywords

### Test with SEO Tools:

1. **Google Rich Results Test:**
   - Visit: https://search.google.com/test/rich-results
   - Enter your page URL
   - Verify LocalBusiness and FAQPage schema appear

2. **Schema Markup Validator:**
   - Visit: https://validator.schema.org/
   - Enter page URL
   - Check for errors

3. **Yoast SEO Analysis:**
   - Check that "NZ" or "New Zealand" appears in:
     - ✅ SEO title
     - ✅ Meta description
     - ✅ H1
     - ✅ First paragraph
     - ✅ Subheadings
     - ✅ Alt text

---

## PART 11: Additional Optimizations (Next Steps)

### Create a Blog Post Category:

1. **Navigate to:** Posts → Categories
2. **Add New Category:**
   - Name: "AI Implementation NZ"
   - Slug: "ai-implementation-nz"
   - Description: "AI implementation guides and tips for New Zealand businesses"

### Create Supporting Blog Posts:

1. **Navigate to:** Posts → Add New
2. **Create these posts** (one at a time):

**Post 1: "AI Implementation Guide for New Zealand SMEs 2026"**
- Focus keyword: "AI implementation New Zealand"
- 1500+ words
- Link to workshop page

**Post 2: "How Auckland Businesses Are Using AI to Save Time and Money"**
- Focus keyword: "AI Auckland business"
- Case studies and examples
- Link to workshop page

**Post 3: "AI Planning Workshop vs AI Training: What NZ Businesses Need"**
- Focus keyword: "AI planning workshop NZ"
- Explain differences
- CTA to workshop page

### Internal Linking Strategy:

1. **Edit each blog post**
2. **Add links to workshop page** using keyword-rich anchor text:
   - "AI planning workshop NZ"
   - "AI implementation consulting"
   - "New Zealand AI strategy workshop"

---

## CHECKLIST: Implementation Priority

### Week 1 (Critical):
- [ ] Update title tag (Yoast/Rank Math)
- [ ] Update meta description
- [ ] Add geographic meta tags (Insert Headers and Footers plugin)
- [ ] Update H1 heading

### Week 2 (High Impact):
- [ ] Add location-specific content section
- [ ] Update schema markup with geo-coordinates
- [ ] Add 3 NZ-specific FAQ items
- [ ] Update image alt text

### Week 3 (Medium Impact):
- [ ] Add Service schema (Code Snippets)
- [ ] Update body content with NZ keywords
- [ ] Add breadcrumb schema
- [ ] Create first blog post

### Week 4 (Ongoing):
- [ ] Create 2 more blog posts
- [ ] Submit to Google Search Console
- [ ] Set up Google Business Profile
- [ ] Build backlinks from NZ directories

---

## Plugins Summary

**Essential:**
1. **Yoast SEO** or **Rank Math** (free)
2. **Insert Headers and Footers** (free)
3. **Code Snippets** (free)

**Recommended:**
4. **Schema Pro** (premium, ~$79/year) - OR use Code Snippets method above
5. **MonsterInsights** (for tracking SEO performance)

**Nice to Have:**
6. **Broken Link Checker** (maintain SEO health)
7. **Redirection** (manage 301 redirects if needed)

---

## Support & Troubleshooting

### If changes don't appear:

1. **Clear cache:**
   - WP Super Cache: Settings → WP Super Cache → Delete Cache
   - W3 Total Cache: Performance → Dashboard → Empty All Caches
   - WP Rocket: Settings → Clear Cache

2. **Check page is published** (not draft)

3. **Verify Yoast/Rank Math is enabled** for this page

4. **Hard refresh browser:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### If schema errors appear:

1. **Use validator:** https://validator.schema.org/
2. **Fix JSON syntax** (missing commas, quotes)
3. **Check plugin conflicts** (disable other schema plugins)

---

## Expected Timeline & Results

**Week 1-2:** Changes implemented
**Week 3-4:** Google begins indexing new content
**Month 2-3:** Ranking improvements for long-tail keywords
**Month 4-6:** 30-50% increase in NZ-targeted organic traffic

---

## Contact & Questions

If implementing through Claude Browser Extension and you encounter issues:

1. **Take screenshot** of the issue
2. **Note the plugin versions** you're using
3. **Check WordPress version** (should be 6.0+)
4. **Provide URL** of the page

---

**Last Updated:** 2026-02-11
**For:** AI Roadmap Workshop - New Zealand SEO Optimization
**Target Keywords:** AI planning workshop NZ, AI implementation New Zealand, AI strategy Auckland
