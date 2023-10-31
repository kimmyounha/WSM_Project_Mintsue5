document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');

    searchIcon.addEventListener('click', function() {
        searchBox.classList.toggle('hidden');
    });
});
