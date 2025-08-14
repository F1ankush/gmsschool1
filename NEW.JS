// Unique namespace for Kids School functionality
const kidsSchoolJS = {
    init: function() {
        this.setupMobileMenu();
        this.setupCardNavigation();
        console.log('Kids School initialized');
    },
    
    setupMobileMenu: function() {
        const hamburgerMenu = document.querySelector('.ks-hamburger-menu');
        const menu = document.querySelector('.ks-menu');
        
        if (hamburgerMenu && menu) {
            hamburgerMenu.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }
    },
    
    setupCardNavigation: function() {
        // Add any card navigation functionality here
        const leftArrow = document.querySelector('.ks-left-arrow');
        const rightArrow = document.querySelector('.ks-right-arrow');
        const cardsContainer = document.querySelector('.ks-cards-container');
        
        if (leftArrow && rightArrow && cardsContainer) {
            leftArrow.addEventListener('click', () => {
                cardsContainer.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            rightArrow.addEventListener('click', () => {
                cardsContainer.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    },
    
    // Add more functionality as needed
    setupEventListeners: function() {
        // Example: Add click handlers for enrollment button
        const enrollBtn = document.querySelector('.ks-enroll-btn');
        if (enrollBtn) {
            enrollBtn.addEventListener('click', () => {
                console.log('Enrollment button clicked');
                // Add enrollment functionality here
            });
        }
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    kidsSchoolJS.init();
});