document.addEventListener("DOMContentLoaded", function() {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
        showGamesByTheme(selectedTheme);
        localStorage.removeItem("selectedTheme");
        displaySelectedTheme(selectedTheme);
    } else {
        showAllGames(); 
    }
});

function displaySelectedTheme(theme) {
    const selectedItemDisplay = document.getElementById('selectedItemDisplay');
    selectedItemDisplay.textContent = `${theme}`;      //dropdown에서 선택한 장르
}

const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(item => {
    item.addEventListener("click", function() {
        const selectedTheme = this.textContent;
        localStorage.setItem("selectedTheme", selectedTheme);
        window.location.href = "index.html";
    });
});

function showGamesByTheme(theme) {
    const gameshelf = document.querySelector(".gameshelf");
    gameshelf.innerHTML = '';

    let filteredGames = [];
    if (theme.toLowerCase() === 'all') {
        filteredGames = games;
    } else {
        filteredGames = games.filter(game => game.theme === theme);
    }

    filteredGames.forEach(game => {
        const gameItem = createGameItem(game);
        gameshelf.appendChild(gameItem);
    });
}

function showAllGames() {
    const gameshelf = document.querySelector(".gameshelf");
    gameshelf.innerHTML = '';

    games.forEach(game => {
        const gameItem = createGameItem(game);
        gameshelf.appendChild(gameItem);
    });
}

function createGameItem(game) {
    const gameItem = document.createElement("div");
    gameItem.classList.add("game-item");

    const gameLink = document.createElement("a");
    gameLink.href = `gameplay.html?game=${game.id}`;

    const gameImage = document.createElement("img");
    gameImage.src = game.img;
    gameImage.alt = game.title;

    const gameTitle = document.createElement("p");
    gameTitle.classList.add("title");
    gameTitle.textContent = game.title;

    gameLink.appendChild(gameImage);
    gameItem.appendChild(gameLink);
    gameItem.appendChild(gameTitle);

    return gameItem;
}


// enter로 검색
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    // Enter 키 눌렀는지 확인 (Enter 키의 keyCode는 13)
    if (event.key === 'Enter' || event.keyCode === 13) {
        event.preventDefault(); // 기본 엔터 키 동작 방지
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        window.location.href = `index.html?search=${searchInput}`;
    }
});

// 이미 존재하는 click 이벤트에 대한 코드를 캡슐화하는 것이 좋습니다.
searchButton.addEventListener("click", searchFunction);

function searchFunction() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    window.location.href = `index.html?search=${searchInput}`;
}

document.addEventListener("DOMContentLoaded", function() {
    handleSearch();
});

function handleSearch() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
  
    if (searchParam) {
        const searchInput = searchParam.toLowerCase();
        const searchResult = games.filter(game => game.title.toLowerCase().includes(searchInput));

        if (searchResult.length > 0) {
            displayMatchingGames(searchResult);
            document.getElementById('noResultsMessage').style.display = 'none'; // Hide the message if there are matching results
        } else {
            document.getElementById('noResultsMessage').style.display = 'block'; // Display the message if no matching results are found
            clearGameDisplay();
        }
    }
}

//버튼 눌렀을때 검색
searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    window.location.href = `index.html?search=${searchInput}`;
});

document.addEventListener("DOMContentLoaded", function() {
    handleSearch();
});

function displayMatchingGames(matchedGames) {
    const gameshelf = document.querySelector(".gameshelf");
    gameshelf.innerHTML = '';

    matchedGames.forEach(game => {
        const gameItem = createGameItem(game);
        gameshelf.appendChild(gameItem);
    });
}

function clearGameDisplay() {
    const gameshelf = document.querySelector(".gameshelf");
    gameshelf.innerHTML = '';
}

//아래쪽 숫자바 [<<] [1] [2] [>>]
document.addEventListener("DOMContentLoaded", function () {
    const gameshelf = document.querySelector(".gameshelf");
    let itemsPerPage = 15; // Default number of items per page

    const gameItems = document.querySelectorAll('.game-item');

    // Function to show items based on the page number
    function showItems(pageNumber) {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        gameItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function adjustItemsPerPage() {
        if (window.innerWidth <= 549) { // For screens 549px or less
            itemsPerPage = 16;
        } else {
            itemsPerPage = 15;
        }
        showItems(1); // Show the first page after the adjustment
    }

    window.addEventListener('resize', adjustItemsPerPage);
    adjustItemsPerPage(); // Initial adjustment when the page loads

    // Pagination section
    const pagination = document.querySelector(".pagination");

    // Function to calculate the number of pages based on the items per page
    function updatePagination() {
        const numberOfPages = Math.ceil(gameItems.length / itemsPerPage);

        // Clear existing pagination links
        pagination.innerHTML = '';

        // Create pagination links
        for (let i = 1; i <= numberOfPages; i++) {
            const pageLink = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = "#";
            anchor.textContent = i;
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                showItems(i);
            });
            pageLink.appendChild(anchor);
            pagination.appendChild(pageLink);
        }

        // Add first and last page links
        const firstLink = document.createElement("li");
        const firstAnchor = document.createElement("a");
        firstAnchor.href = "#";
        firstAnchor.textContent = '<<';
        firstAnchor.addEventListener('click', function (e) {
            e.preventDefault();
            showItems(1);
        });
        firstLink.appendChild(firstAnchor);
        pagination.insertBefore(firstLink, pagination.firstChild);

        const lastLink = document.createElement("li");
        const lastAnchor = document.createElement("a");
        lastAnchor.href = "#";
        lastAnchor.textContent = '>>';
        lastAnchor.addEventListener('click', function (e) {
            e.preventDefault();
            showItems(numberOfPages);
        });
        lastLink.appendChild(lastAnchor);
        pagination.appendChild(lastLink);
    }

    window.addEventListener('resize', updatePagination);
    updatePagination(); // Initial pagination when the page loads
});
