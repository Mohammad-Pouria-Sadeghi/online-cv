document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar-fill");
    const skillsContainer = document.querySelector(".c");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(skillBar => {
                    const percentage = skillBar.getAttribute("data-percentage");
                    skillBar.style.width = percentage;
                });
                observer.unobserve(skillsContainer);  // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    observer.observe(skillsContainer);
});
