# Required Libraries Documentation

## Overview
This project uses the following external libraries as per client requirements:

---

## CSS Libraries

### 1. Bootstrap 4.6.2
**Purpose**: Responsive grid system, components, and utilities

**CDN Link**:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
    integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
```

**Documentation**: https://getbootstrap.com/docs/4.6/

**Features**:
- Responsive 12-column grid system
- Pre-built components (navbar, cards, modals, etc.)
- Utility classes for spacing, colors, typography
- Mobile-first responsive design

---

### 2. Owl Carousel 2.3.4
**Purpose**: Touch-enabled jQuery carousel/slider plugin

**CDN Links**:
```html
<!-- Core CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
    integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- Default Theme -->
<link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
    integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
```

**Documentation**: https://owlcarousel2.github.io/OwlCarousel2/

**Features**:
- Touch and drag support
- Responsive breakpoints
- Auto-play and lazy loading
- Multiple items display
- Navigation and pagination

**Basic Usage**:
```javascript
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 5 }
    }
});
```

---

### 3. Font Awesome 4.7.0
**Purpose**: Icon font library

**CDN Link**:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

**Documentation**: https://fontawesome.com/v4/

**Features**:
- 675+ icons
- Scalable vector icons
- Easy to customize with CSS
- No JavaScript required

**Basic Usage**:
```html
<i class="fa fa-home"></i>
<i class="fa fa-phone"></i>
<i class="fa fa-envelope"></i>
```

---

## JavaScript Libraries

### 1. jQuery 3.5.1
**Purpose**: Required dependency for Bootstrap and Owl Carousel

**CDN Link**:
```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
```

**Note**: Must be loaded before Bootstrap and Owl Carousel

---

### 2. Bootstrap 4.6.2 JS Bundle
**Purpose**: Bootstrap JavaScript components (includes Popper.js)

**CDN Link**:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
```

**Features**:
- Modals, dropdowns, tooltips
- Collapse/accordion functionality
- Carousel component
- Alert dismissal

---

### 3. Owl Carousel 2.3.4 JS
**Purpose**: Owl Carousel functionality

**CDN Link**:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
    integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

---

## Load Order (Important!)

The libraries must be loaded in this specific order:

### In `<head>`:
1. Bootstrap CSS
2. Owl Carousel CSS (core + theme)
3. Font Awesome CSS
4. **Custom CSS (style.css) - MUST BE LAST**

### Before `</body>`:
1. jQuery
2. Bootstrap JS
3. Owl Carousel JS
4. **Custom JS (main.js) - MUST BE LAST**

---

## HTML Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"...>
    
    <!-- Owl Carousel CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"...>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"...>
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <!-- Content here -->
    
    <!-- jQuery -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"...></script>
    
    <!-- Owl Carousel JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"...></script>
    
    <!-- Custom JS -->
    <script src="assets/js/main.js"></script>
</body>
</html>
```

---

## Files Updated

All HTML files in the project now include these libraries:

- ✅ `index.html`
- ✅ `pages/service.html`
- ✅ `pages/parts.html`
- ✅ `pages/proshop.html`
- ✅ `pages/financing.html`
- ✅ `pages/about.html`
- ✅ `pages/history.html`
- ✅ `pages/5starcertificate.html`
- ✅ `pages/lakecams.html`
- ✅ `pages/sell-trade.html`
- ✅ `pages/contact.html`
- ✅ `pages/crew.html`
- ✅ `pages/testimonials.html`
- ✅ `pages/lake-levels.html`

---

## Notes

- **No additional libraries**: Only these libraries are used as per client requirements
- **CDN hosted**: All libraries are loaded from CDN for faster delivery
- **Integrity checks**: SRI (Subresource Integrity) hashes included for security
- **Custom styles last**: Ensures custom CSS can override library defaults
- **jQuery required**: Bootstrap and Owl Carousel both depend on jQuery

---

**Last Updated**: January 21, 2026
**Status**: ✅ All libraries configured and ready to use
