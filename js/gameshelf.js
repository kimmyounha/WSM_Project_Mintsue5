document.addEventListener("DOMContentLoaded", function() {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
        showGamesByTheme(selectedTheme); // Display all items for the selected theme
        localStorage.removeItem("selectedTheme");
    } else {
        showAllGames(); // Display all items for all themes
    }
});

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

searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    window.location.href = `index.html?search=${searchInput}`;
});

document.addEventListener("DOMContentLoaded", function() {
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
document.addEventListener("DOMContentLoaded", function() {
    const pagination = document.querySelector(".pagination");
    const dataCount = 30; // Replace this with the actual count of your data
    const itemsPerPage = 15; // Define the number of items per page

    const numberOfPages = Math.ceil(dataCount / itemsPerPage);

    const prevLink = document.createElement("li");
    const prevAnchor = document.createElement("a");
    prevAnchor.href = "prev";
    prevAnchor.textContent = "<<";
    prevLink.appendChild(prevAnchor);
    pagination.appendChild(prevLink);

    for (let i = 1; i <= numberOfPages; i++) {
        const pageLink = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = i.toString();
        anchor.textContent = i;
        pageLink.appendChild(anchor);
        pagination.appendChild(pageLink);
    }

    const nextLink = document.createElement("li");
    const nextAnchor = document.createElement("a");
    nextAnchor.href = "next";
    nextAnchor.textContent = ">>";
    nextLink.appendChild(nextAnchor);
    pagination.appendChild(nextLink);
});