// Explore button (safe check)
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Contact form
const contactForm = document.querySelector("form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent 🚗");
        contactForm.reset();
    });
}

// Visitor Counter
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

const visitorElement = document.getElementById("visitor-count");
if (visitorElement) {
    visitorElement.textContent = visits;
}

// Dark / Light Mode (FIXED)
function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
    }
}

// Toggle button (matches your HTML id="themeToggle")
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light");
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme);

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
