document.addEventListener("DOMContentLoaded", function () {
    const genreMenu = document.querySelector(".genre-menu");
    const genreSubMenu = document.querySelector(".genre-sub-menu");
    
    genreMenu.addEventListener("click", function (e) {
        e.preventDefault();
        genreSubMenu.classList.toggle("show-sub-menu");
    });
    
    const yearMenu = document.querySelector(".year-menu");
    const yearSubMenu = document.querySelector(".year-sub-menu");

    yearMenu.addEventListener("click", function (e) {
        e.preventDefault();
        yearSubMenu.classList.toggle("show-sub-menu");
    });
});


