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
    initMobileMenu();
    initFooterAccordion();
});

/**
 * Sticky Header Background Toggle
 */
function initStickyHeader() {
    const header = document.getElementById('main-header');
    const heroBanner = document.querySelector('.scrollclr');
    
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



/**
 * Initialize Mobile Menu
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const moreMenuTrigger = document.getElementById('more-trigger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const megaMenuOverlay = document.getElementById('mega-menu-overlay');
    const mobileMenuTriggers = document.querySelectorAll('.mobile-menu-trigger');
    
    // Function to open mobile menu
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
        if (moreMenuTrigger) moreMenuTrigger.classList.add('active');
        megaMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
        if (moreMenuTrigger) moreMenuTrigger.classList.remove('active');
        megaMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Toggle mobile menu with mobile toggle button
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // Toggle mobile menu with MORE button on mobile
    if (moreMenuTrigger) {
        moreMenuTrigger.addEventListener('click', function(e) {
            // Check if we're on mobile (screen width < 992px)
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation();
                if (mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }
            // On desktop, the existing MORE panel logic will handle it
        });
    }
    
    // Close mobile menu
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            closeMobileMenu();
        });
    }
    
    // Close on overlay click
    if (megaMenuOverlay) {
        megaMenuOverlay.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // Accordion functionality
    mobileMenuTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other submenus
            document.querySelectorAll('.mobile-menu-trigger').forEach(function(t) {
                t.classList.remove('active');
            });
            document.querySelectorAll('.mobile-submenu').forEach(function(s) {
                s.classList.remove('active');
            });
            
            // Toggle current submenu
            if (!isActive && submenu) {
                this.classList.add('active');
                submenu.classList.add('active');
            }
        });
    });
}




/**
 * Initialize Footer Accordion
 */
function initFooterAccordion() {
    const footerTriggers = document.querySelectorAll('.footer-accordion-trigger');
    
    footerTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            // Only work on mobile
            if (window.innerWidth <= 768) {
                const content = this.nextElementSibling;
                const isActive = this.classList.contains('active');
                
                // Close all other accordions
                document.querySelectorAll('.footer-accordion-trigger').forEach(function(t) {
                    t.classList.remove('active');
                });
                document.querySelectorAll('.footer-accordion-content').forEach(function(c) {
                    c.classList.remove('active');
                });
                
                // Toggle current accordion
                if (!isActive) {
                    this.classList.add('active');
                    content.classList.add('active');
                }
            }
        });
    });
}

/* ========================================
   ADDITIONAL SERVICES TABS
   ======================================== */

/**
 * Initialize Service Tabs
 */
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.service-tab-btn');
    const tabContents = document.querySelectorAll('.service-tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all buttons
                tabButtons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
                
                // Remove active class from all content
                tabContents.forEach(function(content) {
                    content.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Add active class to corresponding content
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});

