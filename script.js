document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});

// Visitor Counter
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

const visitorElement = document.getElementById("visitor-count");
if (visitorElement) {
    visitorElement.textContent = visits;
}

// Dark / Light Mode
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
}

// Live Clock
function updateClock() {
    const clock = document.getElementById("clock");

    if (clock) {
        const now = new Date();
        clock.innerHTML =
            now.toLocaleDateString() +
            " | " +
            now.toLocaleTimeString();
    }
}

updateClock();
setInterval(updateClock, 1000);
