document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 0;
}

visits++;
localStorage.setItem("visits", visits);

document.getElementById("visitor-count").textContent = visits;
// Dark / Light Mode

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});


// Live Clock

function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString() + " | " +
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();


// Visitor Counter

let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 0;
}

visits++;
localStorage.setItem("visits", visits);

document.getElementById("visitor-count").textContent = visits;
