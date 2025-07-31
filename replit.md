# BioCatálogo ETEC - Replit Development Guide

## Overview

BioCatálogo ETEC is a static educational website developed as a technical course completion project (TCC) for the Environmental Technology program at ETEC Cônego José Bento in Jacareí, São Paulo. The website serves as a digital catalog for plant species found in the school's garden, promoting environmental education and scientific knowledge.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional multi-page website structure using vanilla HTML, CSS, and JavaScript. The architecture is designed for simplicity and educational purposes:

- **Static HTML Pages**: Individual pages for home, catalog, and species details
- **CSS Styling**: Custom responsive design with a nature-inspired green color scheme
- **Vanilla JavaScript**: Client-side interactivity without frameworks
- **Image Integration**: External images hosted on Pixabay for plant photographs

### Technology Stack
- **HTML5**: Semantic markup with Portuguese language support
- **CSS3**: Modern styling with flexbox/grid layouts and responsive design
- **Vanilla JavaScript**: DOM manipulation and user interactions
- **External CDN**: Pixabay for plant imagery

## Key Components

### 1. Homepage (`index.html`)
- **Purpose**: Landing page introducing the project
- **Features**: Hero section, project description, navigation to catalog
- **Content**: School branding, project context, call-to-action button

### 2. Catalog Page (`catalog.html`)
- **Purpose**: Grid display of all plant species
- **Features**: Interactive species cards with click navigation
- **Layout**: Responsive grid system for species thumbnails

### 3. Species Detail Pages (`species/*.html`)
- **Purpose**: Detailed information about individual plant species
- **Structure**: Scientific information, botanical details, images
- **Navigation**: Breadcrumb navigation back to catalog

### 4. Styling System (`css/styles.css`)
- **Design Philosophy**: Nature-inspired with green gradients
- **Responsive Design**: Mobile-first approach with container-based layouts
- **Typography**: Clean, readable fonts with proper hierarchy

### 5. JavaScript Functionality (`js/main.js`)
- **Navigation**: Smooth transitions between pages
- **Accessibility**: Keyboard navigation support
- **Performance**: Lazy loading for images
- **User Experience**: Visual feedback for interactions

## Data Flow

### Content Management
- **Static Content**: All plant information is hardcoded in HTML
- **Image Delivery**: External images loaded from Pixabay CDN
- **Navigation**: Client-side routing using standard HTML links

### User Interaction Flow
1. User lands on homepage with project introduction
2. Clicks "Ver Espécies de Plantas" to access catalog
3. Views grid of available plant species
4. Clicks on species card to view detailed information
5. Uses breadcrumb navigation to return to catalog

## External Dependencies

### Image Hosting
- **Pixabay CDN**: All plant photographs are hosted externally
- **Rationale**: Reduces repository size and leverages reliable CDN
- **Fallback**: No local image fallbacks currently implemented

### Fonts
- **System Fonts**: Uses web-safe font stack (Segoe UI, Tahoma, etc.)
- **Approach**: No external font loading for better performance

## Deployment Strategy

### Static Hosting Approach
The application is designed for simple static hosting:

- **No Server Requirements**: Pure client-side application
- **File Structure**: Organized directory structure with relative paths
- **Asset Management**: External image references, local CSS/JS files
- **Browser Compatibility**: Modern browsers with HTML5/CSS3 support

### Hosting Considerations
- **CDN Compatibility**: Works with any static hosting service
- **HTTPS Requirements**: Needed for secure Pixabay image loading
- **Portuguese Language**: UTF-8 encoding properly configured

## Development Notes

### Current Limitations
- **Incomplete Files**: Several HTML files appear truncated in the species directory
- **Missing CSS**: Species detail page styling may be incomplete
- **Image URLs**: Some image URLs in HTML appear malformed or incomplete
- **JavaScript Features**: Some functions in main.js are partially implemented

### Potential Enhancements
- **Database Integration**: Could be enhanced with a backend for dynamic content management
- **Admin Panel**: Content management system for adding/editing species
- **Search Functionality**: Filter and search capabilities for the catalog
- **Offline Support**: Service worker for offline viewing
- **Multilingual Support**: English translation alongside Portuguese

### Educational Context
This project serves as a learning tool for:
- **Environmental Education**: Teaching about local plant species
- **Web Development**: Demonstrating basic web technologies
- **Scientific Documentation**: Proper botanical nomenclature and classification
- **Digital Literacy**: Creating and maintaining web-based educational resources