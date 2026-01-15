# God3rd Visual Lotto Blueprint

## Overview

This project is an interactive, visually-driven lottery number selector. It allows users to pick numbers based on various themes like dreams, actors, flags, and animals. It also includes an "Animal Face Test" feature that uses a machine learning model to classify the user's face. The website is designed with a focus on user experience, mobile responsiveness, and content richness to comply with AdSense policies.

## Key Features & Design

### Implemented Features:

*   **Tabbed Interface for Content Organization:** The entire website content is now organized into a tabbed interface, making it easier for users to navigate between different sections like the Lotto Picker, Animal Face Test, Contact Form, Lotto Fun Facts & Tips, About Us, and Privacy Policy. This ensures all content is clearly defined and accessible.
*   **Visual Lotto Picker:** Users can select lottery numbers (1-45) by clicking on numbers directly or by clicking on images related to different themes.
*   **Multiple Themes:**
    *   **Number:** Direct number selection.
    *   **Dream (Career):** Images related to various professions.
    *   **Actor:** Portraits of famous actors.
    *   **Flag:** National flags.
    *   **Animal:** Wildlife photos.
*   **Search:** Users can search for custom image themes.
*   **Result Panel:** Displays the 6 selected lottery numbers.
*   **Contact Form:** A functional contact form using Formspree, now with an enhanced descriptive paragraph.
*   **Content Sections:**
    *   **Lotto Fun Facts & Tips:** Enhanced with more detailed articles and tips for AdSense compliance.
    *   **About Us:** Expanded with a mission and vision statement for increased content depth.
    *   **Privacy Policy:** Detailed sections on Information Collection, Data Security, Third-Party Links, and Changes to Policy to provide comprehensive information.
*   **Dark Mode:** Implemented with a toggle button and CSS variables for a consistent dark theme.
*   **Language Selection:** Supports English and Korean, with a toggle button to switch between languages, translating key UI elements including the tab buttons, Animal Face Test, Contact Form, and all new descriptive texts.
*   **Mobile Responsiveness:** Implemented using media queries to ensure the layout is optimized for various screen sizes, including the new main navigation buttons and tab content.
*   **Animal Face Test:** The Teachable Machine-based "Animal Face Test" has been debugged, with error handling added for model loading and webcam access, and an enriched description.

### Design Elements:

*   **Layout:** A centered, card-based layout, now with a prominent tabbed navigation at the top.
*   **Color Scheme:** Uses CSS variables for theming, with a light mode as the default and a dark mode option. Borders also adapt to the chosen theme.
*   **Typography:** Uses 'Apple SD Gothic Neo' font.
*   **Interactivity:** Hover effects on the image grid. Tab buttons dynamically change appearance when active.

## Current Task: Implement Tabbed Interface and Content Enhancements

This section details the most recent changes to the project.

### Plan:

1.  **Restructure `index.html` for Tabbed Interface:**
    *   Created `main-nav-btns` div with new tab buttons (`data-section-id`, `onclick="showSection(...)"`).
    *   Wrapped existing content blocks within `<section id="..." class="tab-content">` tags.
    *   Added descriptive paragraphs to the Lotto Picker, Animal Face Test, Contact Form, Lotto Fun Facts & Tips, About Us, and Privacy Policy sections.
    *   Ensured that only the default tab (`lotto-picker-section`) is active on page load.
    *   Removed `style="display: none;"` from the About Us and Privacy Policy sections, as their visibility is now controlled by the tabbed interface's CSS.
    *   Updated footer navigation links to match new section IDs and use the `showSection` JavaScript function for navigation.
2.  **Update CSS:**
    *   Added styles for `.tab-content` (default `display: none;`, `active` class `display: block;`).
    *   Added styles for `.main-nav-btns` and its buttons.
    *   Added styles for new `.description` class to format the introductory paragraphs.
    *   Adjusted `@media screen and (max-width: 768px)` rules to properly style the new `main-nav-btns` and ensure mobile responsiveness.
3.  **Update JavaScript:**
    *   Implemented `showSection(sectionId, element)` function for tab switching logic. This function hides all tab content sections and then displays the one corresponding to the clicked tab button, also updating the active state of the buttons.
    *   Modified `window.onload` to activate the default tab (`lotto-picker-section`) upon page load and initialize the lotto picker sub-tabs.
    *   Extended `toggleLanguage` to translate new main tab buttons and the new description texts for all sections.
    *   Updated `langData` object with new translation keys for tab names and all new descriptive content.

These changes significantly improve content organization and ensure greater content visibility, addressing AdSense policy concerns.