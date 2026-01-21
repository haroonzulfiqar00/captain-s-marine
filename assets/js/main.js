/**
 * Captain Marine - Main JavaScript File
 * =====================================
 * All JavaScript functionality for the Captain Marine website
 */

/* ========================================
   HEADER NAVIGATION
   ======================================== */

(function($) {
    'use strict';

    // DOM Elements
    const boatsTrigger = $('#boats-trigger');
    const megaMenu = $('#boats-mega-menu');
    const megaMenuOverlay = $('#mega-menu-overlay');
    const moreTrigger = $('#more-trigger');
    const morePanel = $('#more-panel');
    const morePanelOverlay = $('#more-panel-overlay');
    const closePanel = $('#close-panel');

    /**
     * Close all menus
     */
    function closeAllMenus() {
        megaMenu.removeClass('active');
        megaMenuOverlay.removeClass('active');
        morePanel.removeClass('active');
        morePanelOverlay.removeClass('active');
        boatsTrigger.removeClass('active');
        enableScroll();
    }

    /**
     * Disable body scroll
     */
    function disableScroll() {
        $('body').addClass('menu-open');
    }

    /**
     * Enable body scroll
     */
    function enableScroll() {
        $('body').removeClass('menu-open');
    }

    /**
     * Toggle Boats Mega Menu
     */
    boatsTrigger.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Close MORE panel if open
        if (morePanel.hasClass('active')) {
            morePanel.removeClass('active');
            morePanelOverlay.removeClass('active');
        }

        // Toggle mega menu
        const isActive = megaMenu.hasClass('active');
        
        if (isActive) {
            megaMenu.removeClass('active');
            megaMenuOverlay.removeClass('active');
            boatsTrigger.removeClass('active');
            enableScroll();
        } else {
            megaMenu.addClass('active');
            megaMenuOverlay.addClass('active');
            boatsTrigger.addClass('active');
        }
    });

    /**
     * Close mega menu on overlay click
     */
    megaMenuOverlay.on('click', function() {
        megaMenu.removeClass('active');
        megaMenuOverlay.removeClass('active');
        boatsTrigger.removeClass('active');
    });

    /**
     * Toggle MORE Panel
     */
    moreTrigger.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Close mega menu if open
        if (megaMenu.hasClass('active')) {
            megaMenu.removeClass('active');
            megaMenuOverlay.removeClass('active');
            boatsTrigger.removeClass('active');
        }

        // Toggle MORE panel
        const isActive = morePanel.hasClass('active');
        
        if (isActive) {
            morePanel.removeClass('active');
            morePanelOverlay.removeClass('active');
            enableScroll();
        } else {
            morePanel.addClass('active');
            morePanelOverlay.addClass('active');
            disableScroll();
        }
    });

    /**
     * Close MORE panel on close button click
     */
    closePanel.on('click', function() {
        morePanel.removeClass('active');
        morePanelOverlay.removeClass('active');
        enableScroll();
    });

    /**
     * Close MORE panel on overlay click
     */
    morePanelOverlay.on('click', function() {
        morePanel.removeClass('active');
        morePanelOverlay.removeClass('active');
        enableScroll();
    });

    /**
     * Close menus on ESC key
     */
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeAllMenus();
        }
    });

    /**
     * Close mega menu when clicking outside
     */
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#boats-mega-menu, #boats-trigger').length) {
            if (megaMenu.hasClass('active')) {
                megaMenu.removeClass('active');
                megaMenuOverlay.removeClass('active');
                boatsTrigger.removeClass('active');
            }
        }
    });

    /**
     * Prevent clicks inside mega menu from closing it
     */
    megaMenu.on('click', function(e) {
        e.stopPropagation();
    });

    /**
     * Prevent clicks inside MORE panel from closing it
     */
    morePanel.on('click', function(e) {
        e.stopPropagation();
    });

    /**
     * Handle window resize
     */
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close all menus on resize to prevent layout issues
            closeAllMenus();
        }, 250);
    });

    /**
     * Initialize header navigation
     */
    $(document).ready(function() {
        console.log('Header navigation initialized');
    });

})(jQuery);

/* ========================================
   GENERAL UTILITIES
   ======================================== */

/**
 * Wait for DOM to be fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Captain Marine website loaded successfully!');
    
    // Initialize functions
    initSmoothScroll();
    initStickyHeader();
    initTestimonialCarousel();
});

/**
 * Sticky Header Background Toggle
 */
function initStickyHeader() {
    const header = document.getElementById('main-header');
    const heroBanner = document.querySelector('.hero-banner');
    
    if (!header || !heroBanner) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroBanner.offsetHeight - 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply to hash links
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Utility function for form validation
 */
function validateForm(formId) {
    // Form validation logic will go here
    return true;
}

/**
 * Utility function for API calls
 */
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

/**
 * Initialize Testimonial Carousel
 */
function initTestimonialCarousel() {
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $('.testimonial-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000,
            autoplayHoverPause: true,
            navText: ['‹', '›'], 
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                768: {
                    items: 1,
                    nav: true
                }
            }
        });
    }
}


