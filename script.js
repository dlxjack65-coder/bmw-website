// Explore button
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.getElementById("about")?.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent 🚗");
        contactForm.reset();
    });
}

// Visitor Counter (better + safe)
let visits = Number(localStorage.getItem("visits") || 0);
visits++;
localStorage.setItem("visits", visits);

const visitorElement = document.getElementById("visitor-count");
if (visitorElement) {
    visitorElement.textContent = visits;
}

// Theme system
const themeToggle = document.getElementById("themeToggle");

// apply saved theme
function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
}

// toggle theme
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

// load saved theme
applyTheme(localStorage.getItem("theme"));

// Live Clock
function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const now = new Date();
        clock.textContent =
            now.toLocaleDateString() +
            " | " +
            now.toLocaleTimeString();
    }
}

updateClock();
setInterval(updateClock, 1000);
