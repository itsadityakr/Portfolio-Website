// Selectors
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

// Get the current theme from localStorage
const theme = localStorage.getItem("theme");

// Apply the saved theme
if (theme) {
    document.body.classList.add(theme);
    // Set the appropriate image based on the saved theme
    themeIcon.src = theme === "dark-mode" ? "../assets/icons/light.png" : "../assets/icons/dark.png";
}

const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
        themeIcon.src = "../assets/icons/light.png"; // Set to dark mode image
    } else {
        localStorage.removeItem("theme");
        themeIcon.src = "../assets/icons/dark.png"; // Set to light mode image
    }
};

// Event listener for the theme toggle button
themeToggleBtn.addEventListener("click", handleThemeToggle);
