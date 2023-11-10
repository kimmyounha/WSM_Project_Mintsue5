function displayGameInformation() {
    const gamebyerashelf = document.querySelector('.gamebyerashelf');

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');

        const gameLink = document.createElement('a');
        gameLink.href = `gameplay.html?game=${game.id}`;
        gameLink.classList.add('game-link');

        const gameImage = document.createElement('img');
        gameImage.src = game.img;
        gameImage.alt = game.title;
        gameImage.classList.add('game-image');
        gameLink.appendChild(gameImage);
        gameItem.appendChild(gameLink);

        const gameDetails = document.createElement('div');
        gameDetails.classList.add('game-details');

        const gameTitle = document.createElement('p');
        gameTitle.classList.add('title');
        gameTitle.textContent = `${game.title} #${game.times}`;
        gameDetails.appendChild(gameTitle);

        const gameSummary = document.createElement('p');
        gameSummary.classList.add('game-summary');
        gameSummary.textContent = game.onesummary;
        gameDetails.appendChild(gameSummary);

        gameItem.appendChild(gameDetails);
        gamebyerashelf.appendChild(gameItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayGameInformation();
});

document.addEventListener('DOMContentLoaded', function() {
    const gamebyerashelf = document.querySelector('.gamebyerashelf');
    const buttons = document.querySelectorAll('.button-container button');
    const selectedItemByEra = document.getElementById('selectedItembyera');
    let currentSelectedYear = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedYear = this.textContent.substring(1); // Extract the year from the button text without the '#'

            gamebyerashelf.innerHTML = ''; // Clear previous games

            if (selectedYear === currentSelectedYear) {
                currentSelectedYear = ''; // Set back to 'all' if the same button is clicked again
                selectedItemByEra.textContent = 'all';
            } else {
                currentSelectedYear = selectedYear;
                selectedItemByEra.textContent = selectedYear === '' ? 'all' : selectedYear;
            }

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active'); 
            button.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                  this.classList.remove('active');
                //   buttons.forEach(btn => btn.classList.remove('active'));
                  console.log(this.classList + "|active 삭제");
                } else {
                  this.classList.add('active');
                  console.log(this.classList + "|active 추가");      
                }
              });

            games.forEach(game => {
                if (game.times === currentSelectedYear || currentSelectedYear === '') {
                    const gameItem = document.createElement('div');
                    gameItem.classList.add('game-item');

                    const gameLink = document.createElement('a');
                    gameLink.href = `gameplay.html?game=${game.id}`;
                    gameLink.classList.add('game-link');

                    const gameImage = document.createElement('img');
                    gameImage.src = game.img;
                    gameImage.alt = game.title;
                    gameImage.classList.add('game-image');
                    gameLink.appendChild(gameImage);
                    gameItem.appendChild(gameLink);

                    const gameDetails = document.createElement('div');
                    gameDetails.classList.add('game-details');

                    const gameTitle = document.createElement('p');
                    gameTitle.classList.add('title');
                    gameTitle.textContent = `${game.title} #${game.times}`;
                    gameDetails.appendChild(gameTitle);

                    const gameSummary = document.createElement('p');
                    gameSummary.classList.add('game-summary');
                    gameSummary.textContent = game.onesummary;
                    gameDetails.appendChild(gameSummary);

                    gameDetails.appendChild(gameSummary);

                    gameItem.appendChild(gameDetails);
                    gamebyerashelf.appendChild(gameItem);
                }
            });
        });
    });
});