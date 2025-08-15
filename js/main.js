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





    /* main page js */

     // Unique JavaScript for the school page
        document.addEventListener('DOMContentLoaded', function() {
            // Sample data for notices
            const notices = [
                {
                    id: 1,
                    title: "स्वतंत्रता दिवस ",
                    content: "विद्यालय परिवार के सभी सदस्यों को सूचित किया जाता है कि 79वाँ स्वतंत्रता दिवस के शुभ अवसर पर GMS MALIPUR के प्रांगण में स्वतंत्रता दिवस समारोह पूर्वक मनाया जाएगा। ",
                    date: "2025-08-15"
                },
                {
                    id: 2,
                    title: "कृष्ण जन्माष्टमी ",
                    content: "विद्यालय परिवार के सभी सदस्यों को सूचित किया जाता है कि दिनांक 16 अगस्त 2025 को कृष्ण जन्माष्टमी के शुभ अवसर पर विद्यालय में पठन-पाठन स्थगित रहेगा। दिनांक 17 अगस्त 2025 को रविवार अवकाश के पश्चात दिनांक 18 अगस्त 2025 से विद्यालय का संचालन पूर्व निर्धारित कार्यक्रम अनुसार होगा।",
                    date: "2023-08-16"
                },
               
            ];

            // Sample data for events
            const events = [
                {
                    id: 1,
                    title: " शिक्षक दिवस",
                    description: " इस दिन विद्यार्थी रंगारंग सांस्कृतिक कार्यक्रम प्रस्तुत करेंगे और अपने प्रिय शिक्षकों को सम्मानित करेंगे। यह अवसर गुरुजनों के प्रति आभार व्यक्त करने और उनके योगदान को याद करने का दिन होगा।",
                    date: "september 5, 2025",
                    image: "assets/teacher.jpg"
                },
                {
                    id: 2,
                    title: "गांधी जयंती एवं लाल बहादुर शास्त्री जयंती",
                    description: "2 अक्टूबर – गांधी जयंती एवं लाल बहादुर शास्त्री जयंती स्वच्छता अभियान, निबंध लेखन और भाषण प्रतियोगिता।",
                    date: "octuber 2, 2025",
                    image: "assets/octuber.jpeg"
                },
                {
                    id: 3,
                    title: " बाल दिवस",
                    description: "इस दिन बच्चों के लिए विशेष खेल-कूद, चित्रकला और कहानी सुनाने की प्रतियोगिताएँ आयोजित की जाएँगी। यह दिन आनंद, रचनात्मकता और बाल सुलभ उमंग को बढ़ावा देने का अवसर होगा।",
                    date: "November 14, 2025",
                    image: "assets/child .jpeg"
                }
            ];

            // Sample data for activities
            const activities = [
                {
                    id: 1,
                    title: "शारीरिक प्रशिक्षण",
                    description: "विद्यालय में व्यायाम, योग एवं शारीरिक विकास गतिविधियाँ आयोजित हुईं, जिनमें छात्रों ने उत्साहपूर्वक भाग लिया। इन गतिविधियों से स्वास्थ्य, एकाग्रता और अनुशासन को बढ़ावा मिला।",
                    date: "2023-10-10",
                    image: "assets/slider22.png"
                },
                {
                    id: 2,
                    title: "कला एवं चित्रांकन ",
                    description: "विद्यालय में कला एवं चित्रांकन गतिविधि आयोजित हुई, जिसमें छात्रों ने अपनी रचनात्मकता और कल्पनाशक्ति का सुंदर प्रदर्शन किया। ",
                    date: "2023-09-25",
                    image: "assets/slider20.png"
                },
                {
                    id: 3,
                    title: "तरंग",
                    description: " विद्यालय में ‘तरंग’ कार्यक्रम का आयोजन हुआ, जिसमें छात्रों ने सांस्कृतिक, शैक्षणिक और रचनात्मक प्रतिभाओं का उत्कृष्ट प्रदर्शन किया।",
                    date: "2023-10-05",
                    image: " assets/slider35.png"
                },
                {
                    id: 4,
                    title: "विज्ञान प्रदर्शनी",
                    description: "विद्यालय परिसर में विज्ञान प्रदर्शनी कार्यक्रम आयोजित हुआ, जिसमें छात्र-छात्राओं ने अपने प्रोजेक्ट प्रदर्शित किए। इस अवसर पर अभिभावकों एवं आगंतुकों ने उत्साहपूर्वक भाग लिया।",
                    date: "2023-11-08",
                    image: "assets/science.jpeg"
                },
                {
                    id: 5,
                    title: "पर्यावरण जागरूकता",
                    description: "विद्यालय में पर्यावरण जागरूकता कार्यक्रम आयोजित हुआ, जिसमें छात्रों ने स्वच्छता, वृक्षारोपण और प्रकृति संरक्षण का संदेश दिया।",
                    date: "2023-06-05",
                    image: "assets/nature.jpeg"
                },
                {
                    id: 6,
                    title: "फ़िल्म  प्रदर्शन",
                    description: "विद्यालय में फ़िल्म प्रदर्शन कार्यक्रम आयोजित हुआ, जिसमें छात्रों ने रुचिकर एवं ज्ञानवर्धक फ़िल्म का आनंद लिया।",
                    date: "2023-11-08",
                    image: "assets/slider17.png"
                }
            ];

            // DOM elements
            const noticeList = document.getElementById('noticeList');
            const eventsGrid = document.getElementById('eventsGrid');
            const activitiesGrid = document.getElementById('activitiesGrid');
            const noticeModal = document.getElementById('noticeModal');
            const addNoticeModal = document.getElementById('addNoticeModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalDate = document.getElementById('modalDate');
            const modalBody = document.getElementById('modalBody');
            const closeModal = document.getElementById('closeModal');
            const closeAddModal = document.getElementById('closeAddModal');
            const addNoticeBtn = document.getElementById('addNoticeBtn');
            const noticeForm = document.getElementById('noticeForm');

            // Format date
            function formatDate(dateString) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
            }

            // Render notices
            function renderNotices() {
                noticeList.innerHTML = '';
                notices.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(notice => {
                    const noticeItem = document.createElement('li');
                    noticeItem.className = 'notice-item';
                    noticeItem.innerHTML = `
                        <div class="notice-date">${formatDate(notice.date)}</div>
                        <div class="notice-title">${notice.title}</div>
                        <div class="notice-content">${notice.content.substring(0, 100)}...</div>
                    `;
                    noticeItem.addEventListener('click', () => openNoticeModal(notice));
                    noticeList.appendChild(noticeItem);
                });
            }

            // Render events
            function renderEvents() {
                eventsGrid.innerHTML = '';
                events.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(event => {
                    const eventCard = document.createElement('div');
                    eventCard.className = 'event-card';
                    eventCard.innerHTML = `
                        <img src="${event.image}" alt="${event.title}" class="event-image">
                        <div class="event-details">
                            <div class="event-date">${formatDate(event.date)}</div>
                            <h3 class="event-title">${event.title}</h3>
                            <p class="event-desc">${event.description}</p>
                            <a href="#" class="read-more">Read More</a>
                        </div>
                    `;
                    eventsGrid.appendChild(eventCard);
                });
            }

            // Render activities
            function renderActivities() {
                activitiesGrid.innerHTML = '';
                activities.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(activity => {
                    const activityCard = document.createElement('div');
                    activityCard.className = 'activity-card';
                    activityCard.innerHTML = `
                        <img src="${activity.image}" alt="${activity.title}" class="activity-image">
                        <div class="activity-details">
                            <div class="activity-date">${formatDate(activity.date)}</div>
                            <h3 class="activity-title">${activity.title}</h3>
                            <p class="activity-desc">${activity.description}</p>
                            <a href="#" class="read-more">View Details</a>
                        </div>
                    `;
                    activitiesGrid.appendChild(activityCard);
                });
            }

            // Open notice modal
            function openNoticeModal(notice) {
                modalTitle.textContent = notice.title;
                modalDate.textContent = formatDate(notice.date);
                modalBody.textContent = notice.content;
                noticeModal.classList.add('active');
            }

            // Close modals
            function closeModals() {
                noticeModal.classList.remove('active');
                addNoticeModal.classList.remove('active');
            }

            // Event listeners
            closeModal.addEventListener('click', closeModals);
            closeAddModal.addEventListener('click', closeModals);
            noticeModal.addEventListener('click', (e) => {
                if (e.target === noticeModal) closeModals();
            });
            addNoticeModal.addEventListener('click', (e) => {
                if (e.target === addNoticeModal) closeModals();
            });

           /* // Add notice button
            addNoticeBtn.addEventListener('click', () => {
                addNoticeModal.classList.add('active');
                document.getElementById('noticeDate').valueAsDate = new Date();
            });  */

            // Notice form submission
            noticeForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const newNotice = {
                    id: notices.length + 1,
                    title: document.getElementById('noticeTitle').value,
                    content: document.getElementById('noticeContent').value,
                    date: document.getElementById('noticeDate').value
                };
                
                notices.unshift(newNotice);
                renderNotices();
                noticeForm.reset();
                closeModals();
                
                // Show success message
                alert('Notice added successfully!');
            });

            // Initialize the page
            renderNotices();
            renderEvents();
            renderActivities();

            // Add animation to sections as they come into view
            const sections = document.querySelectorAll('.section, .events-section, .activities-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            sections.forEach(section => {
                observer.observe(section);
            });
        });