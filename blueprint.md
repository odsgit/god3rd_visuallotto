# Blueprint for SEO & GEO Optimization

This document outlines the plan for optimizing the website for search engines and generative AI.

## Overview

The goal is to improve the website's visibility in search engine results and generative AI recommendations by implementing SEO and GEO (Generative Engine Optimization) best practices as defined by Google, Naver, and recent AI-focused marketing articles.

## Current State Analysis

*   **HTML:** The HTML files have been significantly improved with better meta tags, canonical URLs, descriptive H1 tags, and structured content.
*   **`robots.txt`:** The file is correctly configured to allow crawlers and points to the sitemap.
*   **`sitemap.xml`:** The sitemap is correctly formatted.
*   **`firebase.json`:** The hosting configuration is set up with redirects, security headers, and a custom 404 page.

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
    - [x] Added FAQ section.
    - [x] Made meta description more conversational.

- [x] **`about-us.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`animal-face-test.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.
    - [x] Moved render-blocking scripts to the end of the `<body>`.
    - [x] Added FAQ section.
    - [x] Made meta description more conversational.

- [x] **`contact.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`lotto-info.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.
    - [x] Added FAQ section.
    - [x] Made meta description more conversational.

- [x] **`privacy-policy.html` Specific Optimizations:**
    - [x] Made `<h1>` tag more descriptive.

- [x] **`sitemap.xml` Optimization:**
    - [x] Remove the duplicate entry for `index.html`.
    - [x] Update the `lastmod` dates to reflect the actual modification dates.

- [x] **Structured Data (Schema.org):**
    - [x] Review and enhance structured data on all pages to better describe the content to search engines.

- [x] **GEO (Generative Engine Optimization):**
    - [x] Made content more conversational and user-centric.
    - [x] Added FAQ sections to relevant pages.
    - [x] Improved page descriptions to be more engaging.

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

*   **HTML files**:
    *   Added FAQ sections to `index.html`, `lotto-info.html`, and `animal-face-test.html`.
    *   Updated meta descriptions in `index.html`, `lotto-info.html`, and `animal-face-test.html` to be more conversational.
    *   Removed duplicate scripts in `index.html`.
    *   Made `<h1>` tags more descriptive across all pages.
    *   Moved render-blocking scripts to the end of the `<body>` in `index.html` and `animal-face-test.html`.
*   **`firebase.json`**:
    *   Added `www` to non-`www` redirect.
    *   Added HSTS header.
    *   Configured a custom 404 page.
    *   Ensured `ads.txt` is served with the correct `Content-Type`.
*   **`404.html`**: Created a custom 404 error page.

I have completed the GEO optimizations. The website content is now more conversational and structured to be more easily understood by generative AI.

I will now commit the latest changes to the git repository.