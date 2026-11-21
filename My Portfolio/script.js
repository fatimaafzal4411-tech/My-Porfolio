
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const open = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(open)
        );

        menuToggle.textContent = open ? "×" : "☰";

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// CURRENT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// ACTIVE NAVIGATION

const navItems = document.querySelectorAll(
    ".nav-links a[href^='#']"
);

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navItems.forEach(link => {

                        link.classList.toggle(
                            "active",
                            link.hash === `#${entry.target.id}`
                        );

                    });

                }

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px"
        }
    );

    document.querySelectorAll("main section[id]").forEach(section => {
        sectionObserver.observe(section);
    });

}


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

const portfolioEmail = "fatimaafzal4411@gmail.com";

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.getElementById("visitorName").value.trim();

        const email = document.getElementById("visitorEmail").value.trim();

        const message = document.getElementById("visitorMessage").value.trim();

        const feedback = document.getElementById("formFeedback");

        if (!name || !email || !message) {

            feedback.textContent = "Please complete all fields.";

            return;

        }

        feedback.textContent = "Opening your email app...";

        const subject = encodeURIComponent(
            `Portfolio message from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        window.location.href =
            `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;

    });

}
