(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });



    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);



/*  slider js */

// Unique namespace for JavaScript to prevent conflicts
    document.addEventListener('DOMContentLoaded', function() {
        const gmsCarouselInner = document.querySelector('.gms-carousel-inner');
        const gmsItems = document.querySelectorAll('.gms-carousel-item');
        const gmsPrevBtn = document.querySelector('.gms-carousel-prev');
        const gmsNextBtn = document.querySelector('.gms-carousel-next');
        const gmsIndicatorsContainer = document.querySelector('.gms-carousel-indicators');
        
        let gmsCurrentIndex = 0;
        const gmsTotalItems = gmsItems.length;
        
        // Create indicators
        gmsItems.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('gms-carousel-indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => gmsGoToSlide(index));
            gmsIndicatorsContainer.appendChild(indicator);
        });
        
        const gmsIndicators = document.querySelectorAll('.gms-carousel-indicator');
        
        // Update carousel position
        function gmsUpdateCarousel() {
            gmsCarouselInner.style.transform = `translateX(-${gmsCurrentIndex * 100}%)`;
            
            // Update active indicator
            gmsIndicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === gmsCurrentIndex);
            });
        }
        
        // Go to specific slide
        function gmsGoToSlide(index) {
            gmsCurrentIndex = index;
            if (gmsCurrentIndex >= gmsTotalItems) gmsCurrentIndex = 0;
            if (gmsCurrentIndex < 0) gmsCurrentIndex = gmsTotalItems - 1;
            gmsUpdateCarousel();
        }
        
        // Next slide
        function gmsNextSlide() {
            gmsCurrentIndex++;
            if (gmsCurrentIndex >= gmsTotalItems) gmsCurrentIndex = 0;
            gmsUpdateCarousel();
        }
        
        // Previous slide
        function gmsPrevSlide() {
            gmsCurrentIndex--;
            if (gmsCurrentIndex < 0) gmsCurrentIndex = gmsTotalItems - 1;
            gmsUpdateCarousel();
        }
        
        // Event listeners
        gmsNextBtn.addEventListener('click', gmsNextSlide);
        gmsPrevBtn.addEventListener('click', gmsPrevSlide);
        
        // Auto-advance
        let gmsAutoSlide = setInterval(gmsNextSlide, 5000);
        
        // Pause on hover
        gmsCarouselInner.addEventListener('mouseenter', () => {
            clearInterval(gmsAutoSlide);
        });
        
        gmsCarouselInner.addEventListener('mouseleave', () => {
            gmsAutoSlide = setInterval(gmsNextSlide, 5000);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') gmsNextSlide();
            if (e.key === 'ArrowLeft') gmsPrevSlide();
        });
        
        // Touch events for mobile
        let gmsTouchStartX = 0;
        let gmsTouchEndX = 0;
        
        gmsCarouselInner.addEventListener('touchstart', (e) => {
            gmsTouchStartX = e.changedTouches[0].screenX;
        });
        
        gmsCarouselInner.addEventListener('touchend', (e) => {
            gmsTouchEndX = e.changedTouches[0].screenX;
            gmsHandleSwipe();
        });
        
        function gmsHandleSwipe() {
            if (gmsTouchEndX < gmsTouchStartX - 50) gmsNextSlide(); // Swipe left
            if (gmsTouchEndX > gmsTouchStartX + 50) gmsPrevSlide(); // Swipe right
        }
    });

    // Unique image error handler
    function handleGmsImageError(img) {
        img.classList.add('error-state');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'gms-img-error';
        errorDiv.innerHTML = `
            <div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p>Image not available</p>
                <small>${img.alt || 'Image'}</small>
            </div>
        `;
        img.parentNode.insertBefore(errorDiv, img.nextSibling);
    }
