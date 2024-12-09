// Define translations
const translations = {
    en: {
        title: "Welcome",
        description: "Select a language to change the content:",
        content: "This is an example of a multi-language website.",
    },
    id: {
        title: "Selamat Datang",
        description: "Pilih bahasa untuk mengubah konten:",
        content: "Ini adalah contoh website multi-bahasa.",
    },
    es: {
        title: "Bienvenido",
        description: "Seleccione un idioma para cambiar el contenido:",
        content: "Este es un ejemplo de un sitio web multilingüe.",
    }
};

// Handle language change
const languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", () => {
    const selectedLanguage = languageSelector.value;
    const translation = translations[selectedLanguage];

    // Update content
    document.getElementById("title").textContent = translation.title;
    document.getElementById("description").textContent = translation.description;
    document.getElementById("content").textContent = translation.content;
});

