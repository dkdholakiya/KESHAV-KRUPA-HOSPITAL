/* ==========================================================================
   KESHAVKRUPA HOSPITAL - DYNAMIC DOCTOR PROFILE HANDLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Structured Doctor Database
    const doctorsData = {
        "rajesh-patel": {
            name: "Dr. Rajesh Patel",
            specialty: "Chief Cardiologist",
            subtitle: "MD, DM (Cardiology), FACC (USA)",
            image: "assets/images/doctor-1.jpg",
            experience: "18+ Yrs Exp",
            email: "rajesh.patel@keshavkrupahospital.com",
            phone: "+91 93137 51534 (Ext. 101)",
            room: "Clinic Room 102, First Floor",
            languages: "English, Hindi, Gujarati",
            departmentVal: "cardiology",
            timings: [
                { days: "Mon - Fri", hours: "10:00 AM - 04:00 PM" },
                { days: "Saturday", hours: "10:00 AM - 01:00 PM" },
                { days: "Sunday", hours: "Emergency Call Only" }
            ],
            bio: "Dr. Rajesh Patel is a pioneer in advanced interventional cardiology in Gandhinagar. With over 18 years of clinical and surgical expertise, he has successfully performed over 5,000 complex coronary angioplasties. He is widely recognized for clinical excellence in heart failure management, pacing therapy, and preventive cardiology. A gold medalist from leading medical institutions, he brings a patient-centric, evidence-based approach to cardiac health, helping thousands of patients return to healthy, active lives.",
            specializations: [
                "Interventional Cardiology",
                "Coronary Angioplasty & Stenting",
                "Pacemaker & ICD Implantation",
                "Heart Failure Management",
                "Valvular Heart Disease Treatment",
                "Echocardiography & Stress Testing"
            ],
            education: [
                { degree: "DM in Cardiology", institution: "All India Institute of Medical Sciences (AIIMS), New Delhi", year: "2008" },
                { degree: "MD in General Medicine", institution: "B.J. Medical College, Ahmedabad", year: "2005" },
                { degree: "MBBS", institution: "Gujarat University, Ahmedabad", year: "2002" }
            ],
            achievements: [
                "Recipient of the 'Best Cardiologist of Gujarat' Award in 2024.",
                "Fellow of the American College of Cardiology (FACC) since 2015.",
                "Published 20+ research articles in national and international peer-reviewed medical journals.",
                "Conducted over 100+ free rural cardiac health awareness camps."
            ]
        },
        "sneha-sharma": {
            name: "Dr. Sneha Sharma",
            specialty: "Lead Pediatrician & Neonatologist",
            subtitle: "MD (Pediatrics), DCH, IBCLC",
            image: "assets/images/doctor-2.jpg",
            experience: "12+ Yrs Exp",
            email: "sneha.sharma@keshavkrupahospital.com",
            phone: "+91 93137 51534 (Ext. 104)",
            room: "Clinic Room 105, First Floor",
            languages: "English, Hindi, Gujarati, Punjabi",
            departmentVal: "pediatrics",
            timings: [
                { days: "Mon - Fri", hours: "09:30 AM - 03:30 PM" },
                { days: "Saturday", hours: "09:30 AM - 12:30 PM" },
                { days: "Sunday", hours: "Closed" }
            ],
            bio: "Dr. Sneha Sharma is a highly compassionate specialist in pediatric wellness and neonatal intensive care. Having graduated from top national institutes and with a 12-year clinical journey, she specializes in high-risk newborn care, child development pathways, and immunization schedules. Her warm, gentle, and child-friendly clinical approach ensures a supportive and low-anxiety experience for young patients and their families.",
            specializations: [
                "Neonatal Intensive Care (NICU) Management",
                "High-Risk Newborn Care & Follow-up",
                "Childhood Growth & Development Monitoring",
                "Pediatric Asthma & Allergy Management",
                "Nutrition Counsel & Lactation Support (IBCLC)",
                "Routine Childhood Immunization Pathways"
            ],
            education: [
                { degree: "Fellowship in Neonatology", institution: "Post Graduate Institute of Medical Education & Research (PGIMER), Chandigarh", year: "2014" },
                { degree: "MD in Pediatrics", institution: "Lady Hardinge Medical College, New Delhi", year: "2012" },
                { degree: "MBBS", institution: "Maulana Azad Medical College, New Delhi", year: "2009" }
            ],
            achievements: [
                "Successfully managed and discharged over 1,200+ premature and high-risk neonates from the NICU.",
                "Certified International Board Certified Lactation Consultant (IBCLC).",
                "Recognized for excellence in developmental pediatrics by the Pediatric Association.",
                "Frequent speaker and trainer at neonatology workshops across India."
            ]
        },
        "amit-verma": {
            name: "Dr. Amit Verma",
            specialty: "Senior Orthopedic Surgeon",
            subtitle: "MS (Orthopedics), M.Ch (Ortho, UK)",
            image: "assets/images/doctor-3.jpg",
            experience: "15+ Yrs Exp",
            email: "amit.verma@keshavkrupahospital.com",
            phone: "+91 93137 51534 (Ext. 108)",
            room: "Clinic Room 204, Second Floor",
            languages: "English, Hindi, Gujarati",
            departmentVal: "orthopedics",
            timings: [
                { days: "Mon - Fri", hours: "11:00 AM - 05:00 PM" },
                { days: "Saturday", hours: "11:00 AM - 02:00 PM" },
                { days: "Sunday", hours: "Emergency Call Only" }
            ],
            bio: "Dr. Amit Verma is a premier specialist in joint replacement surgeries, sports injuries, and advanced arthroscopic reconstructions. With over 15 years of surgical leadership, he has pioneered low-incision and rapid-recovery knee and hip replacement methodologies in the region. Dr. Verma is active in clinical orthopedic research and is dedicated to designing tailored rehabilitation paths that help patients restore full pain-free mobility.",
            specializations: [
                "Total Knee & Hip Replacement (Arthroplasty)",
                "Arthroscopic Ligament Reconstruction (ACL, PCL, Meniscus)",
                "Sports Medicine & Joint Preservation",
                "Minimally Invasive Spine Surgery",
                "Complex Trauma & Fracture Reconstruction",
                "Arthritis & Osteoporosis Management"
            ],
            education: [
                { degree: "M.Ch in Orthopedics", institution: "University of Dundee, United Kingdom", year: "2013" },
                { degree: "MS in Orthopedics", institution: "Grant Medical College & J.J. Hospital, Mumbai", year: "2009" },
                { degree: "MBBS", institution: "Mumbai University, Mumbai", year: "2006" }
            ],
            achievements: [
                "Pioneered computer-assisted navigated knee replacement surgeries in Gandhinagar.",
                "Completed over 3,000+ joint replacements and reconstructive surgeries.",
                "Active member of the Indian Orthopaedic Association (IOA) and ISKSAA.",
                "Presented clinical research on joint arthroplasty at key orthopedic conferences."
            ]
        },
        "priya-nair": {
            name: "Dr. Priya Nair",
            specialty: "Consultant Gynecologist & Obstetrician",
            subtitle: "MS (OBGYN), DNB, Fellowship in Laparoscopy",
            image: "assets/images/doctor-4.jpg",
            experience: "10+ Yrs Exp",
            email: "priya.nair@keshavkrupahospital.com",
            phone: "+91 93137 51534 (Ext. 112)",
            room: "Clinic Room 206, Second Floor",
            languages: "English, Hindi, Gujarati, Malayalam",
            departmentVal: "gynecology",
            timings: [
                { days: "Mon - Fri", hours: "10:30 AM - 04:30 PM" },
                { days: "Saturday", hours: "10:30 AM - 01:30 PM" },
                { days: "Sunday", hours: "Closed" }
            ],
            bio: "Dr. Priya Nair provides holistic and state-of-the-art care in obstetrics, high-risk pregnancies, and minimally invasive laparoscopic gynecological surgery. Dedicated to women's long-term health and wellness, she advocates for an empathetic, evidence-based clinical practice. Over her 10-year career, she has guided thousands of families safely through pregnancy and childbirth while managing complex medical conditions with care and precision.",
            specializations: [
                "High-Risk Obstetrics & Prenatal Care",
                "Laparoscopic Gynecological Surgery (Keyhole Hysterectomy)",
                "Infertility Diagnostic Workup & Treatment",
                "Adolescent Reproductive Health",
                "PCOS & Endometriosis Management",
                "Menopausal Wellness & Hormonal Therapy"
            ],
            education: [
                { degree: "Fellowship in Minimally Invasive Gynecology (Laparoscopy)", institution: "Sunrise Hospital, Kochi", year: "2017" },
                { degree: "MS in Obstetrics & Gynecology", institution: "King Edward Memorial (KEM) Hospital & Seth G.S. Medical College, Mumbai", year: "2015" },
                { degree: "MBBS", institution: "Kerala University, Trivandrum", year: "2011" }
            ],
            achievements: [
                "Safely managed and delivered over 2,500+ babies including highly complex high-risk pregnancies.",
                "Awarded the 'Young Obstetrician of the Year' (West Zone) in 2023.",
                "Member of the Federation of Obstetric & Gynaecological Societies of India (FOGSI).",
                "Conducted free public webinars on adolescent healthcare and cancer awareness."
            ]
        }
    };

    // 2. Fetch Query Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = urlParams.get('id') || 'rajesh-patel';
    const doctor = doctorsData[doctorId] || doctorsData['rajesh-patel']; // Fallback

    // 3. Dynamic Rendering DOM updates
    // Title
    document.title = `${doctor.name} - Profile | Keshavkrupa Hospital`;

    // Headers
    document.getElementById("banner-doctor-name").innerText = doctor.name;
    document.getElementById("breadcrumb-doctor-name").innerText = doctor.name;

    // Sidebar Details
    const imgEl = document.getElementById("doctor-img");
    imgEl.src = doctor.image;
    imgEl.alt = doctor.name;

    document.getElementById("doctor-badge-exp").innerHTML = `<i class="fa-solid fa-award"></i> ${doctor.experience}`;
    document.getElementById("doctor-name").innerText = doctor.name;
    document.getElementById("doctor-spec").innerText = doctor.specialty;
    document.getElementById("doctor-subspec").innerText = doctor.subtitle;
    document.getElementById("doctor-email").innerText = doctor.email;
    document.getElementById("doctor-phone").innerText = doctor.phone;
    document.getElementById("doctor-room").innerText = doctor.room;
    document.getElementById("doctor-languages").innerText = doctor.languages;

    // Timings
    const timingsContainer = document.getElementById("doctor-timings");
    timingsContainer.innerHTML = doctor.timings.map(time => `
        <tr>
            <td class="day-cell">${time.days}</td>
            <td class="hours-cell">${time.hours}</td>
        </tr>
    `).join("");

    // Bio
    document.getElementById("doctor-bio").innerText = doctor.bio;

    // Specializations (Badges)
    const specContainer = document.getElementById("doctor-specializations");
    specContainer.innerHTML = doctor.specializations.map(spec => `
        <span class="spec-badge"><i class="fa-solid fa-circle-check"></i> ${spec}</span>
    `).join("");

    // Education Timeline
    const eduContainer = document.getElementById("doctor-education");
    eduContainer.innerHTML = doctor.education.map(edu => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${edu.year}</div>
            <div class="timeline-content">
                <h4>${edu.degree}</h4>
                <p>${edu.institution}</p>
            </div>
        </div>
    `).join("");

    // Achievements
    const achContainer = document.getElementById("doctor-achievements");
    achContainer.innerHTML = doctor.achievements.map(ach => `
        <li><i class="fa-solid fa-star-of-life bullet-icon"></i> <span>${ach}</span></li>
    `).join("");

    // 4. Modal Interactions: Pre-select Department & Pre-fill Message
    const bookBtn = document.getElementById("doctor-book-btn");
    const deptSelect = document.getElementById("department");
    const msgInput = document.getElementById("message");

    if (bookBtn) {
        bookBtn.addEventListener("click", (e) => {
            // Trigger pre-selection
            if (deptSelect && doctor.departmentVal) {
                deptSelect.value = doctor.departmentVal;
                // Trigger change event for label animation/validation styles
                deptSelect.dispatchEvent(new Event('change'));
            }
            if (msgInput) {
                msgInput.value = `I would like to schedule an appointment with ${doctor.name}.`;
            }

            // Open global appointment modal (defined in script.js)
            const globalModal = document.getElementById("globalAppointmentModal");
            if (globalModal) {
                globalModal.classList.add("open");
                document.body.style.overflow = "hidden";
            }
        });
    }

    // 4.5 Dynamic Rendering of Other Specialists
    const otherDoctorsGrid = document.getElementById("otherDoctorsGrid");
    if (otherDoctorsGrid) {
        const otherDocsHtml = Object.keys(doctorsData)
            .filter(id => id !== doctorId)
            .map(id => {
                const doc = doctorsData[id];
                return `
                    <a href="doctor-profile.html?id=${id}" class="doctor-card" style="text-decoration: none; color: inherit; display: block;">
                        <div class="doc-image-wrapper">
                            <img src="${doc.image}" alt="${doc.name}" class="doc-image">
                            <div class="doc-overlay">
                                <div class="doc-socials">
                                    <span class="btn btn-primary" style="padding: 10px 20px; font-size: 0.85rem; background: var(--accent); color: var(--text-dark); border-color: var(--accent); font-weight: 600;">View Profile</span>
                                </div>
                            </div>
                        </div>
                        <div class="doc-info">
                            <h3>${doc.name}</h3>
                            <span class="doc-spec">${doc.specialty}</span>
                            <span class="doc-exp"><i class="fa-solid fa-award"></i> ${doc.experience}</span>
                        </div>
                    </a>
                `;
            }).join("");
        otherDoctorsGrid.innerHTML = otherDocsHtml;
    }

    // Refresh ScrollTrigger to recalculate trigger positions after dynamic height changes
    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
    }

    // 5. GSAP Entrance Animations
    if (typeof gsap !== "undefined") {
        gsap.config({ nullTargetWarn: false });

        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        // Info Card reveal (animating the child of the sticky sidebar to prevent transform conflicts with position: sticky)
        tl.fromTo(".profile-info-card",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, clearProps: "transform" },
            "+=0.4"
        );

        // Content blocks reveal
        tl.fromTo(".profile-content-block",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 },
            "-=0.7"
        );

        // Micro badges reveal
        gsap.fromTo(".spec-badge",
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.05,
                duration: 0.6,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: ".spec-badges-container",
                    start: "top 95%"
                }
            }
        );

        // Timeline items reveal
        gsap.fromTo(".timeline-item",
            { x: -30, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".timeline-wrapper",
                    start: "top 95%"
                }
            }
        );

        // Other doctors cards reveal on scroll
        gsap.fromTo(".other-doctors-grid .doctor-card",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".other-doctors-container",
                    start: "top bottom+=50"
                }
            }
        );
    }

    // Register custom cursor hover interactions for new profile components
    const profileHoverables = document.querySelectorAll(".spec-badge, .timeline-item, .availability-table tr, .cta-appointment-btn, .breadcrumbs-nav a, .other-doctors-grid .doctor-card");
    profileHoverables.forEach(item => {
        item.addEventListener("mouseenter", () => {
            document.body.classList.add("hovered-element");
        });
        item.addEventListener("mouseleave", () => {
            document.body.classList.remove("hovered-element");
        });
    });

});

