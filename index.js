// Scroll reveal animation
        function reveal() {
            const reveals = document.querySelectorAll('.reveal');
            
            for (let i = 0; i < reveals.length; i++) {
                const windowHeight = window.innerHeight;
                const elementTop = reveals[i].getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        
        window.addEventListener('scroll', reveal);
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Initial reveal check
        reveal();

        // Back to top button + loader
        const backToTopButton = document.querySelector('.back-to-top');
        const pageLoader = document.querySelector('.page-loader');
        const navToggle = document.querySelector('.nav-toggle');
        const primaryNav = document.querySelector('#primary-nav');

        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 400) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });

            backToTopButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        window.addEventListener('load', () => {
            if (pageLoader) {
                pageLoader.classList.add('hidden');
            }
        });

        if (navToggle && primaryNav) {
            navToggle.addEventListener('click', () => {
                const isOpen = primaryNav.classList.toggle('is-open');
                navToggle.setAttribute('aria-expanded', String(isOpen));
            });

            primaryNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', () => {
                    primaryNav.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
