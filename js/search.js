searchButton.addEventListener("click", () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const searchResult = games.filter(game => game.title.toLowerCase().includes(searchInput));

    const resultIndices = [];
    games.forEach((game, index) => {
        if (searchResult.includes(game)) {
            resultIndices.push(index);
        }
    });

    if (resultIndices.length > 0) {
        console.log("Indices of Matching Results:", resultIndices);
    } else {
        console.log("No matching results found");
    }

    console.log(resultIndices);
});
