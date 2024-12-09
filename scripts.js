// Select all navigation buttons
const buttons = document.querySelectorAll('.nav-button');

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add 'active' class to the clicked button for animation
        button.classList.add('active');

        // Remove 'active' class after animation ends
        setTimeout(() => {
            button.classList.remove('active');
        }, 300); // Duration should match the CSS animation time
    });
});

        // Handle language change
        const languageSelector = document.getElementById("languageSelector");

        languageSelector.addEventListener("change", () => {
            const selectedLanguage = languageSelector.value;

            // Loop through all elements with translations
            document.querySelectorAll("[data-en]").forEach((element) => {
                // Update content based on the selected language
                element.textContent = element.getAttribute(`data-${selectedLanguage}`);
            });
        });