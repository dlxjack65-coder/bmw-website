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
