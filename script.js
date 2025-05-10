 // Preloader
        window.addEventListener('load', () => {
            document.querySelector('.preloader').style.display = 'none';
        });

        // Navigation Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.nav-container');
            window.scrollY > 50
                ? nav.classList.add('nav-scrolled')
                : nav.classList.remove('nav-scrolled');
        });

        // Scroll Reveal Animations
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: true
        });

        sr.reveal('.skill-card, .project-card, .contact-form', {
            interval: 200
        });

        // Form Validation
        document.querySelector('.contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
