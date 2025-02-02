document.addEventListener("DOMContentLoaded", () => {
    const sections = {
        "btn-download": "download-section",
        "btn-signup": "signup-section",
        "btn-usage": "usage-section",
    };

    Object.keys(sections).forEach(btnId => {
        document.getElementById(btnId).addEventListener("click", () => {
            document.querySelectorAll(".content section").forEach(section => {
                section.classList.add("hidden");
            });
            document.getElementById(sections[btnId]).classList.remove("hidden");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const iosBtn = document.getElementById("ios-btn");
    const androidBtn = document.getElementById("android-btn");
    const iosSteps = document.getElementById("ios-steps");
    const androidSteps = document.getElementById("android-steps");

    iosBtn.addEventListener("click", () => {
        iosSteps.classList.remove("hidden");
        androidSteps.classList.add("hidden");
    });

    androidBtn.addEventListener("click", () => {
        androidSteps.classList.remove("hidden");
        iosSteps.classList.add("hidden");
    });
});
