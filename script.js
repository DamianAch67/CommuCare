// Community Health Connect
// JavaScript functionality will be added progressively.

console.log("Community Health Connect loaded successfully.");

// ========================================
// COMMUNITY HEALTH CONNECT
// Part 2 JavaScript
// ========================================


// ================================
// ANIMATED STATISTICS
// ================================

const counters = document.querySelectorAll(".counter");

const counterSpeed = 40;

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / counterSpeed);

        current += increment;

        if (current >= target) {
            current = target;
        }

        counter.textContent = current;

        if (current < target) {
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
};


// ================================
// START COUNTERS WHEN VISIBLE
// ================================

const statsSection = document.querySelector(".statistics");

let countersStarted = false;

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting && !countersStarted) {

                countersStarted = true;

                counters.forEach((counter) => {
                    startCounter(counter);
                });

            }

        });

    },
    {
        threshold: 0.3
    }
);


if (statsSection) {
    observer.observe(statsSection);
}


// ================================
// SIMPLE PAGE LOAD MESSAGE
// ================================

console.log(
    "Community Health Connect | Part 2 loaded successfully."
);