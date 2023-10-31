document.addEventListener("DOMContentLoaded", function() {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
        showGamesByTheme(selectedTheme, 1, 15); // Display the first 15 items for the selected theme
        localStorage.removeItem("selectedTheme");
    } else {
        showGamesByTheme('all', 1, 15); // Display the first 15 items for all themes
    }

    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function() {
            const selectedText = item.textContent;
            const displayDiv = document.getElementById('selectedText');
            displayDiv.innerHTML = selectedText;

            const selectedTheme = selectedText;
            localStorage.setItem("selectedTheme", selectedTheme);
            window.location.href = "index.html";
        });
    });
});

function showGamesByTheme(theme, start, end) {
    const gameshelf = document.querySelector(".gameshelf");
    gameshelf.innerHTML = '';

    let filteredGames = [];
    if (theme.toLowerCase() === 'all') {
        filteredGames = games.slice(start - 1, end);
    } else {
        filteredGames = games.filter(game => game.theme === theme).slice(start - 1, end);
    }

    filteredGames.forEach(game => {
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
