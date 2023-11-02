const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchIcon.addEventListener("click", () => {
        // 클릭 시 검색창과 검색 버튼 표시/숨김 토글
        if (searchInput.style.display === "none") {
            searchInput.style.display = "block";
            searchButton.style.display = "block";
        } else {
            searchInput.style.display = "none";
            searchButton.style.display = "none";
        }
    });
