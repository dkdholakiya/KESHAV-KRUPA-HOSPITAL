/* ==========================================================================
   KESHAVKRUPA HOSPITAL - PREMIER APPLICATION JAVASCRIPT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Safety check: check if GSAP and ScrollTrigger are loaded successfully
    const isGsapAvailable = typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined";
    
    if (isGsapAvailable) {
        gsap.registerPlugin(ScrollTrigger);
    }

    /* ==========================================================================
       1. CUSTOM CURSOR TRACKING
       ========================================================================== */
    const cursor = document.querySelector(".custom-cursor");
    const follower = document.querySelector(".custom-cursor-follower");
    
    let mouseX = 0, mouseY = 0; // Current mouse coords
    let posX = 0, posY = 0;     // Follower lag coords
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Instant cursor tracking
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });
    
    // Smooth follower movement using requestAnimationFrame
    function updateFollower() {
        // Lag math: target - current * ease-factor
        posX += (mouseX - posX) * 0.12;
        posY += (mouseY - posY) * 0.12;
        
        follower.style.left = posX + "px";
        follower.style.top = posY + "px";
        
        requestAnimationFrame(updateFollower);
    }
    updateFollower();
    
    // Hover micro-interactions for links/buttons/cards
    const hoverables = document.querySelectorAll("a, button, .service-card, .why-card, .doctor-card, .facility-item, .gallery-item-wrapper, .dot, input, select, textarea");
    hoverables.forEach(item => {
        item.addEventListener("mouseenter", () => {
            document.body.classList.add("hovered-element");
        });
        item.addEventListener("mouseleave", () => {
            document.body.classList.remove("hovered-element");
        });
    });

    /* ==========================================================================
       2. PRELOADER & HERO ENTRANCE TRIGGERS
       ========================================================================== */
    const loader = document.getElementById("loader");
    
    window.addEventListener("load", () => {
        // Delay preloader close for premium luxury presentation
        setTimeout(() => {
            loader.classList.add("loaded");
            triggerHeroAnimations();
            // Force ScrollTrigger to recalculate DOM heights once page is fully rendered
            if (isGsapAvailable) {
                ScrollTrigger.refresh();
            }
        }, 1200);
    });

    // Backup loader timeout in case window load event is delayed
    setTimeout(() => {
        if (!loader.classList.contains("loaded")) {
            loader.classList.add("loaded");
            triggerHeroAnimations();
        }
    }, 3000);

    function triggerHeroAnimations() {
        if (!isGsapAvailable) return;
        
        // Suppress warnings for missing targets on subpages (e.g. .scroll-down doesn't exist on about.html)
        gsap.config({ nullTargetWarn: false });
        
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        
        tl.fromTo(".hero-brand-card", { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 })
          .fromTo(".hero-main-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, "-=1.0")
          .fromTo(".anim-fade", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 }, "-=1.2")
          .fromTo(".hero-doctor-img", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8 }, "-=1.5")
          .fromTo(".floating-badge", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, stagger: 0.15, ease: "back.out(1.5)" }, "-=1.2")
          .fromTo(".scroll-down", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.5");
    }

    /* ==========================================================================
       3. NAVIGATION & MOBILE HAMBURGER
       ========================================================================== */
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const navLinks = document.querySelectorAll(".nav-link");
    
    // Shrink and blur navbar on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        updateScrollProgressBar();
    });

// Hamburger drawer controls
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
});

    const mobileCloseIcon = document.querySelector('.mobile-close-icon');
    if (mobileCloseIcon) {
        mobileCloseIcon.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            mobileNav.classList.remove("open");
            document.body.classList.remove("overflow-hidden");
        });
    });

    // Backdrop overlay click handler
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        });
    }
    // Close sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        const isClickInsideNav = mobileNav.contains(e.target);
        const isClickOnHamburger = hamburger.contains(e.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('open')) {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.classList.remove('overflow-hidden');
        }
    });



    // Scroll progress bar indicator and Back to top progress
    const backToTopBtn = document.querySelector(".back-to-top");
    const progressCircle = document.querySelector(".progress-ring-circle");
    
    function updateScrollProgressBar() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;
        
        // Update top horizontal progress bar
        const horizontalProgress = document.querySelector(".scroll-progress-bar");
        if (horizontalProgress) {
            horizontalProgress.style.width = (scrollPercent * 100) + "%";
        }
        
        // Show/Hide back to top button
        if (scrollTop > 400) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }
        
        // Update back to top radial progress ring outline
        if (progressCircle) {
            const radius = progressCircle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (scrollPercent * circumference);
            progressCircle.style.strokeDasharray = circumference;
            progressCircle.style.strokeDashoffset = offset;
        }
    }

    /* ==========================================================================
       4. SCROLLTRIGGER & GSAP ANIMATIONS (Professional & Fail-Safe)
       ========================================================================== */
    const counterNumbers = document.querySelectorAll(".counter-number");

    if (isGsapAvailable) {
        // 1. Title Heading reveals
        const sectionHeaders = document.querySelectorAll(".section-header");
        sectionHeaders.forEach(header => {
            const subtitle = header.querySelector(".section-subtitle");
            const title = header.querySelector(".section-title");
            const divider = header.querySelector(".section-divider");
            
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: header,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
            
            if (subtitle) headerTl.from(subtitle, { opacity: 0, y: 15, duration: 0.8 });
            if (title) headerTl.from(title, { opacity: 0, y: 25, duration: 1 }, "-=0.6");
            if (divider) headerTl.from(divider, { scaleX: 0, duration: 0.8, ease: "power2.out" }, "-=0.6");
        });

        // 2. About section left details and side visual
        const aboutLeft = document.querySelector(".about-left");
        const aboutSideVisual = document.querySelector(".about-side-visual");
        
        if (aboutLeft) {
            gsap.set(aboutLeft, { x: -40, opacity: 0 });
            gsap.to(aboutLeft, {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutLeft,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        if (aboutSideVisual) {
            gsap.set(aboutSideVisual, { x: 40, opacity: 0 });
            gsap.to(aboutSideVisual, {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: aboutSideVisual,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }

        // 3. Statistics Increment Counters
        counterNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            
            gsap.fromTo(counter, 
                { innerText: 0 }, 
                { 
                    innerText: target, 
                    duration: 2, 
                    ease: "power2.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    onUpdate: function() {
                        counter.innerText = Math.ceil(this.targets()[0].innerText);
                    }
                }
            );
        });

        // 4. Helper function to animate items with horizontal row stagger grouping
        function animateGridItems(selector, startOffset = "top 90%") {
            const items = document.querySelectorAll(selector);
            if (items.length === 0) return;

            // Set initial dynamic hidden state via JS. Fully visible if JS is disabled or fails.
            gsap.set(items, { y: 40, opacity: 0 });

            // Group items dynamically by their horizontal line (offsetTop) to enable responsive row staggers
            const rows = {};
            items.forEach(item => {
                const top = item.offsetTop;
                if (!rows[top]) rows[top] = [];
                rows[top].push(item);
            });

            // Set up triggers per card for absolute precision and fail-safe results
            Object.values(rows).forEach(row => {
                row.forEach((item, index) => {
                    gsap.to(item, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: index * 0.15, // horizontal stagger offset
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: startOffset,
                            toggleActions: "play none none none"
                        }
                    });
                });
            });
        }

        // Trigger premium, robust reveals
        animateGridItems(".service-card", "top 92%");
        animateGridItems(".why-card", "top 92%");
        animateGridItems(".doctor-card", "top 92%");
        animateGridItems(".facility-item", "top 95%");
        animateGridItems(".gallery-item-wrapper", "top 90%");

        // 5. Emergency CTA Card entry animation
        const emergencyWrapper = document.querySelector(".emergency-wrapper");
        if (emergencyWrapper) {
            gsap.set(emergencyWrapper, { scale: 0.94, opacity: 0 });
            gsap.to(emergencyWrapper, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: emergencyWrapper,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // 6. Appointment Form fade-up
        const appointmentWrapper = document.querySelector(".appointment-wrapper");
        if (appointmentWrapper) {
            gsap.set(appointmentWrapper, { y: 40, opacity: 0 });
            gsap.to(appointmentWrapper, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: appointmentWrapper,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        }

        // 7. Contact Section Info and Map reveal
        const contactInfo = document.querySelector(".contact-info-panel");
        const contactMap = document.querySelector(".contact-map-container");
        
        if (contactInfo) {
            gsap.set(contactInfo, { x: -40, opacity: 0 });
            gsap.to(contactInfo, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: contactInfo,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }
        
        if (contactMap) {
            gsap.set(contactMap, { x: 40, opacity: 0 });
            gsap.to(contactMap, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: contactMap,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        }

    } else {
        // Graceful Fail-safe Fallback: Set counter target numbers directly if GSAP is unavailable
        console.warn("Keshavkrupa: GSAP or ScrollTrigger library was not detected. Reverting to high-performance local fallbacks.");
        counterNumbers.forEach(counter => {
            counter.innerText = counter.getAttribute("data-target");
        });
    }

    /* ==========================================================================
       5. TESTIMONIALS MARQUEE SECTION
       (Purged unused JS slider carousel logic. The new marquee section uses pure,
       high-performance, hardware-accelerated CSS keyframe animations instead.)
       ========================================================================== */

    /* ==========================================================================
       6. GALLERY LIGHTBOX MODAL
       ========================================================================== */
    const galleryItems = document.querySelectorAll(".gallery-item-wrapper");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightboxPrev = document.querySelector(".lightbox-prev");
    const lightboxNext = document.querySelector(".lightbox-next");
    
    let activeImageIndex = 0;
    const galleryImagesArray = [];

    // Prepopulate array coordinates
    galleryItems.forEach((item, index) => {
        const img = item.querySelector(".gallery-img");
        const title = item.querySelector(".gallery-info h3").innerText;
        const sub = item.querySelector(".gallery-info span").innerText;
        
        galleryImagesArray.push({
            src: img.getAttribute("src"),
            alt: img.getAttribute("alt"),
            caption: `${title} - ${sub}`
        });

        item.addEventListener("click", () => {
            activeImageIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        updateLightboxContent();
        lightbox.classList.add("open");
        document.body.classList.add("overflow-hidden");
        
        gsap.fromTo(".lightbox-content", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
    }

    function closeLightbox() {
        lightbox.classList.remove("open");
        document.body.classList.remove("overflow-hidden");
    }

    function updateLightboxContent() {
        const item = galleryImagesArray[activeImageIndex];
        lightboxImg.setAttribute("src", item.src);
        lightboxImg.setAttribute("alt", item.alt);
        lightboxCaption.innerText = item.caption;
    }

    // Modal Action listeners
    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener("click", () => {
            activeImageIndex = (activeImageIndex + 1) % galleryImagesArray.length;
            updateLightboxContent();
            gsap.fromTo(lightboxImg, { opacity: 0.8 }, { opacity: 1, duration: 0.3 });
        });
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener("click", () => {
            activeImageIndex = (activeImageIndex - 1 + galleryImagesArray.length) % galleryImagesArray.length;
            updateLightboxContent();
            gsap.fromTo(lightboxImg, { opacity: 0.8 }, { opacity: 1, duration: 0.3 });
        });
    }

    // Close when clicking empty dark overlay container
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard support for Lightbox modal
    document.addEventListener("keydown", (e) => {
        if (lightbox && lightbox.classList.contains("open")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight" && lightboxNext) lightboxNext.click();
            if (e.key === "ArrowLeft" && lightboxPrev) lightboxPrev.click();
        }
    });

    /* ==========================================================================
       7. APPOINTMENT FORM VALIDATION & SUCCESS MODAL
       ========================================================================== */
    const appForm = document.getElementById("appointmentForm");
    const successOverlay = document.querySelector(".form-success-overlay");
    const closeSuccessBtn = document.querySelector(".close-success-btn");
    
    // Modal Open/Close Logic
    const globalModal = document.getElementById("globalAppointmentModal");
    const closeGlobalModal = document.getElementById("closeGlobalModal");
    const floatingAppBtn = document.getElementById("floatingAppBtn");
    
    function openAppointmentModal(e) {
        if(e) e.preventDefault();
        globalModal.classList.add("open");
        document.body.style.overflow = "hidden";
    }
    
    function closeAppointmentModal() {
        globalModal.classList.remove("open");
        document.body.style.overflow = "";
    }
    
    floatingAppBtn.addEventListener("click", openAppointmentModal);
    closeGlobalModal.addEventListener("click", closeAppointmentModal);
    
    // Close modal on outside click
    globalModal.addEventListener("click", (e) => {
        if(e.target === globalModal) closeAppointmentModal();
    });

    // Intercept all "Book Appointment" links
    document.querySelectorAll('a[href*="#appointment"]').forEach(link => {
        link.addEventListener("click", openAppointmentModal);
    });
    // Set minimum preferred booking date to tomorrow
    const dateInput = document.getElementById("date");
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dd = String(tomorrow.getDate()).padStart(2, '0');
        dateInput.setAttribute("min", `${yyyy}-${mm}-${dd}`);
    }

    // Validate email pattern helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Validate phone pattern helper (10 digits)
    function validatePhone(phone) {
        const re = /^[6-9]\d{9}$/; // standard Indian mobile number ranges
        return re.test(phone);
    }

    // Highlight input helper on validation status
    function setValidity(inputElement, isValid) {
        const group = inputElement.closest(".form-group");
        if (isValid) {
            group.classList.remove("invalid");
        } else {
            group.classList.add("invalid");
        }
    }

    // Real-time validation triggers on blur
    const inputsToValidate = appForm.querySelectorAll("input[required], select[required]");
    inputsToValidate.forEach(input => {
        input.addEventListener("blur", () => {
            validateSingleField(input);
        });
        
        input.addEventListener("input", () => {
            const group = input.closest(".form-group");
            if (group.classList.contains("invalid")) {
                validateSingleField(input);
            }
        });
    });

    function validateSingleField(field) {
        let isValid = true;
        const val = field.value.trim();

        if (field.id === "name") {
            isValid = val.length >= 2;
        } else if (field.id === "phone") {
            isValid = validatePhone(val);
        } else if (field.id === "email") {
            isValid = validateEmail(val);
        } else if (field.id === "department") {
            isValid = val !== "";
        } else if (field.id === "date") {
            isValid = val !== "";
            if (isValid) {
                const selectedDate = new Date(val);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                isValid = selectedDate >= today;
            }
        }

        setValidity(field, isValid);
        return isValid;
    }

    // Intercept form submission
    appForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        inputsToValidate.forEach(input => {
            const isFieldValid = validateSingleField(input);
            if (!isFieldValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            // Retrieve values for dynamic modal content
            const phoneVal = document.getElementById("phone").value;
            document.getElementById("userPhone").innerText = phoneVal;
            
            // Open beautiful preloaded success card modal using GSAP
            successOverlay.classList.add("open");
            gsap.fromTo(".success-box", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
        }
    });

    // Close success overlay modal
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener("click", () => {
            successOverlay.classList.remove("open");
            appForm.reset();
            
            // Force reset validity styling status classes
            inputsToValidate.forEach(input => {
                input.closest(".form-group").classList.remove("invalid");
            });
        });
    }

    /* ==========================================================================
       8. FAQ ACCORDION
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       9. REDESIGNED CONTACT SECTION INTERACTIVITY
       ========================================================================== */
    // Map Tabs Navigation
    const tabBtns = document.querySelectorAll(".map-tab-btn");
    const tabContents = document.querySelectorAll(".map-tab-content");
    
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");
            
            // Toggle buttons
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            // Toggle contents with smooth GSAP fade
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add("active");
                    if (typeof gsap !== "undefined") {
                        gsap.fromTo(content, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.4 });
                    }
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });

    // Custom Tooltip for SVG Art Map
    const mapWrapper = document.querySelector(".svg-map-wrapper");
    const tooltip = document.getElementById("mapTooltip");
    const landmarks = document.querySelectorAll(".map-landmark-group, .map-hospital-pin");
    
    if (mapWrapper && tooltip) {
        landmarks.forEach(landmark => {
            landmark.addEventListener("mousemove", (e) => {
                const rect = mapWrapper.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                tooltip.innerText = landmark.getAttribute("data-tooltip");
                tooltip.style.left = x + "px";
                tooltip.style.top = y + "px";
                tooltip.classList.add("visible");
            });
            
            landmark.addEventListener("mouseleave", () => {
                tooltip.classList.remove("visible");
            });
        });
    }

    // Quick inquiry Form validation
    const quickForm = document.getElementById("quickContactForm");
    if (quickForm) {
        const quickInputs = quickForm.querySelectorAll("input[required], textarea[required]");
        
        quickInputs.forEach(input => {
            input.addEventListener("blur", () => {
                validateQuickField(input);
            });
            input.addEventListener("input", () => {
                if (input.closest(".form-group").classList.contains("invalid")) {
                    validateQuickField(input);
                }
            });
        });
        
        function validateQuickField(field) {
            let isValid = true;
            const val = field.value.trim();
            if (field.id === "quick-name") {
                isValid = val.length >= 2;
            } else if (field.id === "quick-phone") {
                isValid = validatePhone(val);
            } else if (field.id === "quick-email") {
                isValid = validateEmail(val);
            } else if (field.id === "quick-message") {
                isValid = val.length >= 10;
            }
            setValidity(field, isValid);
            return isValid;
        }
        
        quickForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isFormValid = true;
            quickInputs.forEach(input => {
                if (!validateQuickField(input)) {
                    isFormValid = false;
                }
            });
            
            if (isFormValid) {
                const panel = quickForm.closest(".quick-inquiry-panel");
                if (typeof gsap !== "undefined") {
                    gsap.to(quickForm, {
                        opacity: 0,
                        y: -20,
                        duration: 0.4,
                        onComplete: showSuccessMessage
                    });
                } else {
                    showSuccessMessage();
                }
                
                function showSuccessMessage() {
                    quickForm.style.display = "none";
                    const successHTML = `
                        <div class="quick-success-box" style="text-align: center; padding: 30px 0;">
                            <div style="font-size: 3.5rem; color: var(--primary); margin-bottom: 20px;"><i class="fa-solid fa-circle-check"></i></div>
                            <h3 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 10px;">Message Sent!</h3>
                            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">Thank you for writing. Our patient care officer will contact you within 15 minutes.</p>
                        </div>
                    `;
                    panel.insertAdjacentHTML("beforeend", successHTML);
                    const successBox = panel.querySelector(".quick-success-box");
                    if (typeof gsap !== "undefined") {
                        gsap.fromTo(successBox, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
                    }
                }
            }
        });
    }

    // Attach custom cursor hovered class listeners to new elements
    const newHoverables = document.querySelectorAll(".map-tab-btn, .contact-card, .quick-contact-form input, .quick-contact-form textarea, .quick-contact-form button");
    newHoverables.forEach(item => {
        item.addEventListener("mouseenter", () => {
            document.body.classList.add("hovered-element");
        });
        item.addEventListener("mouseleave", () => {
            document.body.classList.remove("hovered-element");
        });
    });

});
