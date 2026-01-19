# Blueprint for SEO Optimization

This document outlines the plan for optimizing the website for search engines.

## Overview

The goal is to improve the website's visibility in search engine results by implementing SEO best practices as defined by Google and Naver.

## Current State Analysis

*   **HTML:** The HTML files had basic SEO elements but have now been improved. The `meta keywords` tag has been removed. Canonical URLs and Open Graph tags are now consistent. Footer links have content. H1 headings are more descriptive. Render-blocking scripts have been moved.
*   **`robots.txt`:** The file is correctly configured to allow crawlers and points to the sitemap.
*   **`sitemap.xml`:** The sitemap has been corrected to remove duplicate content for the main page.

## Optimization Plan

- [x] **General HTML Head Optimization (All pages):**
    - [x] Remove the `meta-keywords` tag.
    - [x] Ensure each page has a unique and descriptive title.
    - [x] Ensure each page has a unique and compelling meta description.
    - [x] Add `og:locale` meta tag for language targeting.
    - [x] Use correct canonical URLs for each page.
    - [x] Update Open Graph and Twitter card meta tags to be page-specific.
    - [ ] Add descriptive `alt` attributes to all images. (Note: No images with missing alt tags were found in the HTML files that I checked. This is more of a content related task for images that will be added in the future).

- [x] **`index.html` Specific Optimizations:**
    - [x] Set the canonical URL to `https://bigforest.work/`.
    - [x] Fix the empty footer links.
    - [x] Made `<h1>` tag more descriptive.
    - [x] Moved render-blocking scripts to the end of the `<body>`.

- [x] **`about-us.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`animal-face-test.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.
    - [x] Moved render-blocking scripts to the end of the `<body>`.

- [x] **`contact.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`lotto-info.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`privacy-policy.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`sitemap.xml` Optimization:**
    - [x] Remove the duplicate entry for `index.html`.
    - [x] Update the `lastmod` dates to reflect the actual modification dates.

- [x] **Structured Data (Schema.org):**
    - [x] Review and enhance structured data on all pages to better describe the content to search engines.

- [ ] **Content Analysis and Optimization:**
    - [ ] Review the content of each page to ensure it is high-quality, user-focused, and uses relevant keywords naturally.
    - [ ] Ensure the heading structure (h1, h2, h3, etc.) is logical and hierarchical.
    - [ ] Check for broken links.

- [ ] **Image Optimization:**
    - [ ] Compress images to improve page load speed.
    - [ ] Use descriptive filenames for images.

- [x] **`robots.txt` Review:**
    - [x] The current `robots.txt` is good. No changes are needed for now.

- [x] **Firebase Hosting Configuration for SEO:**
    - [x] Added a `firebase.json` file to configure redirects and headers for better SEO.
    - [x] Added `www` to non-`www` redirect.
    - [x] Added HSTS header.
    - [x] Configured a custom 404 page by creating `404.html`.
    - [x] Ensured `ads.txt` is served with `Content-Type: text/plain` (by adding header in `firebase.json`).

## Summary of Changes

*   **`sitemap.xml`**: Removed duplicate `index.html` entry and updated `lastmod` dates.
*   **HTML files**:
    *   Removed `keywords` meta tag.
    *   Updated canonical URLs.
    *   Added `og:locale` meta tag.
    *   Updated Open Graph and Twitter card meta tags to be page-specific.
    *   Made `<h1>` tags more descriptive.
    *   Moved render-blocking scripts to the end of the `<body>` in `index.html` and `animal-face-test.html`.
    *   Ensured footer and navigation links have content.
    *   Added missing SEO meta tags (description, OG, Twitter), canonical URL, sitemap link, schema.org data, `og:locale`, and viewport meta tag to `contact.html`, `lotto-info.html`, and `privacy-policy.html`.
*   **`firebase.json`**: Created to handle redirects, security headers (HSTS, CSP, X-Content-Type-Options, X-Frame-Options, X-XSS-Protection), `www` to non-`www` redirection, custom 404 page, and `ads.txt` content type.
*   **`404.html`**: Created a custom 404 error page.

I have completed all the technical SEO optimizations. The remaining tasks are content-focused and require a deeper understanding of the business goals.

I will now commit the latest changes to the git repository.