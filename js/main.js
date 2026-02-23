document.querySelector(".menu-button").addEventListener("click", showMeny);
document.querySelector(".fade-layer").addEventListener("click", showMeny);

function showMeny() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let fade = document.querySelector(".fade-layer");
    fade.classList.toggle("visible");
};