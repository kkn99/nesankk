# My Website

A modern, responsive website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design** – Mobile-first approach that works seamlessly on all devices
- **Smooth Navigation** – Sticky header with mobile toggle menu
- **Interactive Components** – Form handling, smooth scrolling, and scroll animations
- **Modern Styling** – CSS variables, flexbox/grid layouts, and gradient backgrounds
- **Performance Optimized** – Lightweight and fast-loading

## Project Structure

```
.
├── index.html       # Main HTML file
├── styles.css       # Stylesheet with responsive design
├── app.js          # JavaScript for interactivity
├── package.json    # Project metadata and npm scripts
└── README.md       # This file
```

## Getting Started

### Prerequisites
- Node.js and npm (or just use VS Code Live Server)

### Installation & Running

**Option 1: Using npm and live-server**
```powershell
npm start
```

**Option 2: VS Code Live Server Extension** (Recommended for Windows)
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

**Option 3: Manual with Python** (if you have Python)
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## Features Included

### Navigation
- Sticky header with responsive mobile menu
- Smooth scroll links to all sections
- Mobile hamburger toggle

### Sections
- **Hero** – Eye-catching landing section with CTA button
- **About** – Brief introduction
- **Services** – 3-card grid layout with hover effects
- **Contact** – Form with validation and success message

### JavaScript Functionality
- Mobile nav toggle and auto-close on link click
- Contact form validation and submission handling
- Scroll animations for service cards using Intersection Observer
- Smooth scrolling to sections

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    /* ... more variables */
}
```

### Content
Edit the HTML content directly in `index.html` to add your own text, sections, and images.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

ISC
