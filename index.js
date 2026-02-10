// Register GSAP ScrollTrigger
// Note: Ensure you include <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// and <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script> in your HTML

document.addEventListener("DOMContentLoaded", () => {
    // 1. GSAP Hero Animation
    gsap.from(".hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from(".hero p", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
    });

    // 2. Scroll Reveal for Cards
    gsap.utils.toArray(".service-card").forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "expo.out"
        });
    });

    // 3. Multilingual Logic
    const langData = {
        en: {
            home: "Home",
            services: "Services",
            about: "About",
            contact: "Contact",
            heroTitle: "Build with Integrity. <br>Designed with Precision.",
            heroSub: "At PHIN Forge, we transform ideas into exceptional digital experiences.",
            footer: "© 2026 PHIN Forge. All rights reserved.",
            softDev: "Software Development",
            softDesc: "Custom web applications, mobile apps, and enterprise solutions."
        },
        fr: {
            home: "Accueil",
            services: "Services",
            about: "À Propos",
            contact: "Contact",
            heroTitle: "Construire avec Intégrité. <br>Conçu avec Précision.",
            heroSub: "Chez PHIN Forge, nous transformons les idées en expériences numériques exceptionnelles.",
            footer: "© 2026 PHIN Forge. Tous droits réservés.",
            softDev: "Développement Logiciel",
            softDesc: "Applications web personnalisées, applications mobiles et solutions d'entreprise."
        }
    };

    const langBtn = document.querySelector(".lang-switch");
    let currentLang = "en";

    langBtn.addEventListener("change", (e) => {
        currentLang = e.target.value;
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            if (langData[currentLang][key]) {
                el.innerHTML = langData[currentLang][key];
            }
        });
    }
});
