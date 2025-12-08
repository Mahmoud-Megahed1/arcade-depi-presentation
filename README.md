# Online Electronics Store - Presentation

A beautiful HTML/JavaScript presentation for the **Online Electronics Store E-commerce Platform** project.

## 📁 Project Structure

```
electronics-store-presentation/
├── index.html          # Main presentation file with all 13 slides
├── styles.css          # Dark theme styling with blue accents
├── script.js           # Navigation and keyboard controls
├── erd-diagram.png     # Entity Relationship Diagram
├── schema-diagram.png  # Database Schema Diagram
└── README.md           # This file
```

## 🚀 How to Use

### Opening the Presentation

1. **Double-click** on `index.html` to open in your default browser
2. Or right-click → **Open with** → Choose your preferred browser (Chrome recommended)

### Navigation Controls

| Action | Keyboard | Mouse/Touch |
|--------|----------|-------------|
| Next Slide | `→` `↓` `Space` `PageDown` | Click right arrow button |
| Previous Slide | `←` `↑` `PageUp` | Click left arrow button |
| First Slide | `Home` | Click first indicator dot |
| Last Slide | `End` | Click last indicator dot |
| Fullscreen | `F` | - |
| Swipe (Mobile) | - | Swipe left/right |

### Slide Indicators

- Click on any dot on the right side to jump to that slide
- The progress bar at the top shows your current position

## 🎨 Features

- ✅ **13 Professional Slides** covering all project aspects
- ✅ **Dark Theme** with blue gradient accents
- ✅ **Responsive Design** works on desktop and tablet
- ✅ **Keyboard Navigation** for seamless presenting
- ✅ **Touch/Swipe Support** for mobile devices
- ✅ **Fullscreen Mode** for professional presentations
- ✅ **Animated Transitions** for visual appeal
- ✅ **Database Diagrams** embedded in slides 6 & 7

## 📊 Slides Overview

1. **Title Slide** - Project identity and team members
2. **Problem Statement** - Project goals and objectives
3. **Technology Stack** - Backend and frontend technologies
4. **MVP Scope** - Features to be delivered
5. **Out of Scope** - Features not in MVP
6. **ERD Diagram** - Entity Relationship Diagram
7. **Database Schema** - Physical schema and migrations
8. **MVC Architecture** - Layered design pattern
9. **Use Cases** - Main user flows
10. **Security** - Data protection measures
11. **Stakeholders** - Risk assessment matrix
12. **Live Demo** - Website link and roadmap
13. **Thank You** - Project summary

## 🔗 Adding Your Website Link

To add your live website URL:

1. Open `index.html` in a text editor
2. Find slide 12 (search for `id="slide12"`)
3. Replace the placeholder link with your actual URL:

```html
<a href="https://your-website-url.com" id="demoLink" target="_blank">
    <i class="fas fa-external-link-alt"></i> your-website-url.com
</a>
```

Or use the browser console:
```javascript
presentationAPI.setDemoLink('https://your-website-url.com');
```

## 🖼️ Adding More Images

### To add a screenshot to Slide 2:

1. Save your image in this folder (e.g., `catalog-screenshot.png`)
2. Find the `.image-placeholder` div in slide 2
3. Replace it with:

```html
<div class="diagram-image">
    <img src="catalog-screenshot.png" alt="Product Catalog">
    <p class="caption">Figure: Online Electronics Store - Customer Interface</p>
</div>
```

### To add a QR code to Slide 12:

1. Generate a QR code for your website URL
2. Save it as `qr-code.png` in this folder
3. Replace the `.qr-placeholder` div with:

```html
<div class="diagram-image">
    <img src="qr-code.png" alt="QR Code" style="max-width: 200px;">
    <p class="caption">Scan to access live demo</p>
</div>
```

## 🛠️ Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-blue: #3b82f6;        /* Main accent color */
    --accent-blue-light: #60a5fa;  /* Light accent */
    --bg-primary: #0a0a0f;         /* Background */
    --bg-card: #1a1a25;            /* Card background */
}
```

### Changing Fonts

The presentation uses **Inter** from Google Fonts. To change:

1. Update the Google Fonts link in `index.html`
2. Update `font-family` in `styles.css`

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Mobile browsers

## 👥 Team Members

- El Hassan Mohammed Taha
- Mahmoud Mohammed Megahed
- Osama Hamdy El Ganterey
- Ahmed Mohamed Abokhyal
- Raheem Darweesh Ragab
- Kareem Ahmed El Sandarosy

## 📅 Date

December 2025

---

**Good luck with your presentation! 🎉**
