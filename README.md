# Captain Marine Website

A fully organized website structure for Captain Marine - your premier destination for boats, marine services, and parts.

## 📁 Project Structure

```
captain-marine/
├── index.html                 # Home page
├── pages/                     # All internal pages
│   ├── service.html          # Service page
│   ├── parts.html            # Parts page
│   ├── proshop.html          # Pro Shop page
│   ├── financing.html        # Financing page
│   ├── about.html            # About Us page
│   ├── history.html          # Company History page
│   ├── 5starcertificate.html # 5 Star Certificate page
│   ├── lakecams.html         # Lake Cameras page
│   ├── sell-trade.html       # Sell & Trade page
│   ├── contact.html          # Contact page
│   ├── crew.html             # Our Crew page
│   ├── testimonials.html     # Customer Testimonials page
│   └── lake-levels.html      # Lake Levels page
├── assets/                    # Static assets
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   └── main.js           # Main JavaScript file
│   └── images/               # Image assets directory
├── components/               # Reusable components
│   ├── header.html          # Header component
│   ├── footer.html          # Footer component
│   └── navigation.html      # Navigation component
└── README.md                # This file
```

## 🎨 Features

- **Fully Responsive Design** - Mobile-first approach with modern CSS
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Modern Typography** - Using Inter font family from Google Fonts
- **CSS Variables** - Easy theming and customization
- **Clean Code Structure** - Organized and maintainable
- **Smooth Scrolling** - Enhanced user experience
- **Utility Classes** - Quick styling options

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your browser
2. **Navigate pages**: Use the links to navigate between different pages
3. **Customize**: Edit the HTML, CSS, and JavaScript files as needed

## 🎯 Pages Overview

| Page | Purpose |
|------|---------|
| **Home** | Main landing page |
| **Service** | Marine service and maintenance information |
| **Parts** | Marine parts and accessories catalog |
| **Pro Shop** | Premium gear and accessories |
| **Financing** | Financing options and information |
| **About** | Company information and mission |
| **History** | Company heritage and timeline |
| **5 Star Certificate** | Certification program details |
| **Lake Cams** | Live lake camera feeds |
| **Sell & Trade** | Boat selling and trading information |
| **Contact** | Contact form and information |
| **Crew** | Team member profiles |
| **Testimonials** | Customer reviews and feedback |
| **Lake Levels** | Current water level information |

## 🎨 Customization

### Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #003d7a;
    --accent-color: #00a8e8;
    /* ... more colors */
}
```

### Typography
Change fonts in the `<head>` section of HTML files or update the CSS variable:

```css
--font-primary: 'Inter', sans-serif;
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- **Bootstrap 4.6.2** - Responsive framework
- **Owl Carousel 2.3.4** - Touch-enabled carousel
- **Font Awesome 4.7.0** - Icon library
- **jQuery 3.5.1** - Required for Bootstrap & Owl Carousel
- Custom Fonts:
  - FreightBig Pro (Headings)
  - Avenir LT Pro (Body Text)

## 📚 External Libraries

All required libraries are loaded via CDN:

### CSS Libraries
- Bootstrap 4.6.2 (Grid system & components)
- Owl Carousel 2.3.4 (Carousels/sliders)
- Font Awesome 4.7.0 (675+ icons)

### JavaScript Libraries
- jQuery 3.5.1
- Bootstrap 4.6.2 JS Bundle
- Owl Carousel 2.3.4 JS

**See `LIBRARIES.md` for complete documentation and usage examples.**

## 🎨 Custom Typography

The site uses custom local fonts:
- **FreightBig Pro** for H1 and H2 headings
- **Avenir LT Pro** for all other text

**See `TYPOGRAPHY-SETUP.md` for complete typography specifications.**

## 📝 Next Steps

1. Add content to each page
2. Create header and footer components
3. Add navigation menu
4. Implement forms (contact, financing, etc.)
5. Add images to the `assets/images/` directory
6. Implement interactive features
7. Add animations and transitions
8. Optimize for performance

## 📄 License

All rights reserved - Captain Marine

---

**Built with ❤️ for Captain Marine**
