/**
 * BioCatálogo ETEC - Main JavaScript File
 * Handles navigation and interactive features
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('BioCatálogo ETEC initialized');
    
    // Initialize smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Initialize lazy loading for images
    initLazyLoading();
    
    // Add keyboard navigation support
    initKeyboardNavigation();
    
    // Initialize page-specific features
    initPageFeatures();
});

/**
 * Navigate to species detail page
 * @param {string} url - The URL to navigate to
 */
function navigateToSpecies(url) {
    // Add loading state
    const card = event.currentTarget;
    if (card) {
        card.style.opacity = '0.7';
        card.style.transform = 'scale(0.98)';
    }
    
    // Small delay for visual feedback
    setTimeout(() => {
        window.location.href = url;
    }, 150);
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize lazy loading for images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // If browser doesn't support native lazy loading, implement intersection observer
    if ('loading' in HTMLImageElement.prototype) {
        return; // Native lazy loading is supported
    }
    
    // Fallback for browsers without native lazy loading support
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Initialize keyboard navigation support
 */
function initKeyboardNavigation() {
    const speciesCards = document.querySelectorAll('.species-card');
    
    speciesCards.forEach(card => {
        // Make cards focusable
        card.setAttribute('tabindex', '0');
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add focus indicators
        card.addEventListener('focus', function() {
            this.style.outline = '3px solid #4a7c3c';
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

/**
 * Initialize page-specific features
 */
function initPageFeatures() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initHomePage();
            break;
        case 'catalog':
            initCatalogPage();
            break;
        case 'species':
            initSpeciesPage();
            break;
    }
}

/**
 * Get current page identifier
 * @returns {string} Page identifier
 */
function getCurrentPage() {
    const path = window.location.pathname;
    
    if (path.includes('catalog.html')) {
        return 'catalog';
    } else if (path.includes('species/')) {
        return 'species';
    } else {
        return 'index';
    }
}

/**
 * Initialize home page features
 */
function initHomePage() {
    console.log('Home page loaded');
    
    // Add animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
}

/**
 * Initialize catalog page features
 */
function initCatalogPage() {
    console.log('Catalog page loaded');
    
    // Add search functionality
    addSearchFeature();
    
    // Add filtering capabilities
    addFilterFeature();
}

/**
 * Initialize species detail page features
 */
function initSpeciesPage() {
    console.log('Species page loaded');
    
    // Add image zoom functionality
    addImageZoom();
    
    // Add print functionality
    addPrintFeature();
}

/**
 * Add search functionality to catalog page
 */
function addSearchFeature() {
    const catalogHeader = document.querySelector('.catalog-header .container');
    if (!catalogHeader) return;
    
    // Create search input
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.marginTop = '2rem';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Buscar plantas...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 1rem;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    `;
    
    searchContainer.appendChild(searchInput);
    catalogHeader.appendChild(searchContainer);
    
    // Add search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const speciesCards = document.querySelectorAll('.species-card');
        
        speciesCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const scientificName = card.querySelector('.scientific-name').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || scientificName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Style focus state
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = '#4a7c3c';
        this.style.outline = 'none';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = '#e0e0e0';
    });
}

/**
 * Add basic filtering feature
 */
function addFilterFeature() {
    // This could be expanded to include family-based filtering
    console.log('Filter feature initialized');
}

/**
 * Add image zoom functionality to species pages
 */
function addImageZoom() {
    const speciesImage = document.querySelector('.species-image-large img');
    if (!speciesImage) return;
    
    speciesImage.style.cursor = 'zoom-in';
    
    speciesImage.addEventListener('click', function() {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            cursor: zoom-out;
        `;
        
        const zoomedImage = document.createElement('img');
        zoomedImage.src = this.src;
        zoomedImage.alt = this.alt;
        zoomedImage.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        modal.appendChild(zoomedImage);
        document.body.appendChild(modal);
        
        // Close modal on click or escape key
        modal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });
        
        document.addEventListener('keydown', function closeModal(e) {
            if (e.key === 'Escape') {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
                document.removeEventListener('keydown', closeModal);
            }
        });
    });
}

/**
 * Add print functionality
 */
//function addPrintFeature() {
 

/**
 * Handle errors gracefully
 */
window.addEventListener('error', function(e) {
    console.error('BioCatálogo Error:', e.error);
    
    // You could add user-friendly error messaging here
    // For example, show a notification to the user
});

/**
 * Handle offline state
 */
window.addEventListener('online', function() {
    console.log('Connection restored');
});

window.addEventListener('offline', function() {
    console.log('Connection lost');
    // Could show offline message to user
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigateToSpecies,
        getCurrentPage
    };
}
