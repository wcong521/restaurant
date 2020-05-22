let info;

const loadMain = function() {

    let content = document.querySelector("#content");

    // title
    let title = document.createElement("div");
    title.setAttribute("id", "title");
    let title_h1 = document.createElement("h1");
    title_h1.innerHTML = "Dimsum House";

    title.appendChild(title_h1);

    // img
    let food_image = document.createElement("img");
    food_image.src = "../src/food.jpg";

    // nav bar
    let nav_bar = document.createElement("div");
    nav_bar.setAttribute("id", "nav-bar");

    let nav_names = ["About Us", "Menu", "Reviews", "Contact Us"];

    for (let i = 0; i < nav_names.length; i++) {
        let nav_item = document.createElement("div");
        nav_item.classList.add("nav-item");
        nav_item.innerHTML = nav_names[i];
        nav_bar.appendChild(nav_item);
    }

    // info
    let info_container = document.createElement("div");
    info_container.setAttribute("id", "info-container");

    info = document.createElement("div");
    info.setAttribute("id", "info");
    // default info
    loadAboutUs();

    info_container.appendChild(info);

    // append
    content.appendChild(title);
    content.appendChild(food_image);
    content.appendChild(nav_bar);
    content.appendChild(info_container);
}

const loadAboutUs = function() {
    info.innerHTML = `<h3>Family Business</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    <br><br>
    Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Arcu risus quis varius quam quisque. Eget dolor morbi non arcu risus quis varius quam.
    `;
}

const loadMenu = function() {
    info.innerHTML = `Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nec tincidunt praesent semper feugiat. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Volutpat ac tincidunt vitae semper quis. Bibendum enim facilisis gravida neque convallis a cras. In iaculis nunc sed augue lacus viverra vitae congue. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Nisi scelerisque eu ultrices vitae auctor eu. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Id venenatis a condimentum vitae sapien pellentesque. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Mattis molestie a iaculis at erat pellentesque adipiscing commodo. Habitasse platea dictumst quisque sagittis purus sit. Sit amet nisl purus in mollis nunc sed. Aliquam eleifend mi in nulla.`;
}

const loadReviews = function() {
    info.innerHTML = `"Platea dictumst vestibulum rhoncus est pellentesque elit. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis."
    <br><br>
    "ermentum iaculis eu non diam phasellus vestibulum. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit."
    <br><br>
    "Eu lobortis elementum nibh tellus molestie nunc. Gravida quis blandit turpis cursus in hac habitasse. Tempus quam pellentesque nec nam aliquam sem et tortor. Sodales neque sodales ut etiam."`;
}

const loadContactUs = function() {
    info.innerHTML = `notarealemail@gmail.com
    <br><br>
    911-911-9111`;
}


export {
    loadMain,
    loadAboutUs,
    loadMenu,
    loadReviews,
    loadContactUs
}