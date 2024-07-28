// Selectors
const themeToggleBtn = document.querySelector(".theme-toggle");

// Get the current theme from localStorage
const theme = localStorage.getItem("theme");

// Apply the saved theme
if (theme) {
    document.body.classList.add(theme);
}

const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark-mode");
    } else {
        localStorage.removeItem("theme");
    }
};

// Event listener for the theme toggle button
themeToggleBtn.addEventListener("click", handleThemeToggle);
