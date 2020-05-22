import {
    loadMain,
    loadAboutUs,
    loadMenu,
    loadReviews,
    loadContactUs
} from "./loader.js";


loadMain();

let nav_items = Array.from(document.querySelectorAll(".nav-item"));

nav_items.forEach(item => item.addEventListener("click", () => {
    switch(event.target.innerHTML) {
        case "About Us":
            loadAboutUs();
            break;
        case "Menu":
            loadMenu();
            break;
        case "Reviews":
            loadReviews();
            break;
        case "Contact Us":
            loadContactUs();
            break;
    }
}));