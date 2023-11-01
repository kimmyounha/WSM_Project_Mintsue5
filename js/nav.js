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

searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase(); // 검색어 입력란에서 값을 가져옴 (소문자로 변환)
    const searchResult = games.filter(game => game.title.toLowerCase().includes(searchInput)); // 데이터에서 검색어를 포함하는 게임title 찾기

    // 검색된 결과를 처리하거나 표시할 부분
    if (searchResult.length > 0) {
        console.log("검색 결과:", searchResult); // 검색 결과 임시로 콘솔에 출력
        
    } else {
        console.log("일치하는 결과 없음");
        // 검색 결과가 없을 때의 처리
    }
});
    