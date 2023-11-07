function displayAllGames() {
    games.forEach(game => {
        console.log(`Title: ${game.title}`);
        console.log(`Summary: ${game.onesummary}`);
        console.log(`Image URL: ${game.img}`);
    });
}

// Assuming you have the `games` array with game data

// 44개의 guide-container를 생성
for (let i = 0; i < 44; i++) {
    const guideContainer = document.createElement('div');
    guideContainer.className = 'guide-container';
    guideContainer.setAttribute('data-year', games[i].times); // Set data-year attribute
    
    const gamePhoto = document.createElement('div');
    gamePhoto.className = 'gamePhoto';
    const gamePhotoImage = document.createElement('img');
    gamePhotoImage.src = games[i].img;
    gamePhotoImage.alt = `Photo ${i + 1}`;
    gamePhoto.appendChild(gamePhotoImage);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'items-container';
    
    const items1 = document.createElement('div');
    items1.className = 'items';
    const gameName = document.createElement('div');
    gameName.className = 'gameName';
    gameName.textContent = games[i].title;
    items1.appendChild(gameName);

    const items2 = document.createElement('div');
    items2.className = 'items';
    const gameGuide = document.createElement('div');
    gameGuide.className = 'gameGuide';
    gameGuide.textContent = games[i].onesummary;
    items2.appendChild(gameGuide);

    itemsContainer.appendChild(items1);
    itemsContainer.appendChild(items2);
    
    guideContainer.appendChild(gamePhoto);
    guideContainer.appendChild(itemsContainer);
    
    // body에 guide-container 추가
    document.body.appendChild(guideContainer);
}

function reply_click(selectedYear) {
    // Hide all games initially
    const guideContainers = document.querySelectorAll('.guide-container');
    guideContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the corresponding guide containers based on the selected year
    guideContainers.forEach(container => {
        const gameYear = container.getAttribute('data-year');
        if (gameYear === selectedYear) {
            container.style.display = 'block';
        }
    });
}

// Display all games initially
displayAllGames();

// Add a class to your button elements
function updateGameInfo(selectedYear) {
    const guideContainers = document.querySelectorAll('.guide-container');
    guideContainers.forEach(container => {
        const gameYear = container.getAttribute('data-year');
        if (gameYear === selectedYear) {
            container.style.display = 'block'; // 선택한 연도와 일치하는 경우 표시
        } else {
            container.style.display = 'none'; // 일치하지 않는 경우 숨김
        }
    });
}


// ...

// Function to update game information based on the selected year
function updateGameInfo(selectedYear) {
    const selectedGame = games.find(game => game.times === selectedYear);
    if (selectedGame) {
        const gameTitleElement = document.querySelector('.gameName');
        const gameGuideElement = document.querySelector('.gameGuide');
        const gameImageElement = document.querySelector('.gamePhoto img');

        gameTitleElement.textContent = selectedGame.title;
        gameGuideElement.textContent = selectedGame.onesummary;
        gameImageElement.src = selectedGame.img;
    }
}

//확인용
function displayAllGames() {
    games.forEach(game => {
        console.log(`Title: ${game.title}`);
        console.log(`Summary: ${game.onesummary}`);
        console.log(`Image URL: ${game.img}`);
    });
}

// 기본으로 모든 게임 정보를 보여줄 변수 추가
let displayAll = true;

// 이 함수를 호출하여 모든 게임 정보를 보여줄 수 있도록 설정
function showAllGames() {
    const guideContainers = document.querySelectorAll('.guide-container');
    guideContainers.forEach(container => {
        container.style.display = 'block';
    }
    )}

// Add an event listener to each button
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const selectedYear = this.id; // Assuming the button id corresponds to the year
        if (displayAll) {
            // 모든 게임 정보를 숨기고 선택한 연도 정보만 표시
            const guideContainers = document.querySelectorAll('.guide-container');
            guideContainers.forEach(container => {
                container.style.display = 'none';
            });

            guideContainers.forEach(container => {
                const gameYear = container.getAttribute('data-year');
                if (gameYear === selectedYear) {
                    container.style.display = 'block';
                }
            });

            // displayAll 값을 업데이트하여 다시 버튼을 누르면 모두 표시
            displayAll = false;
        } else {
            // 다시 버튼을 누르면 모든 게임 정보 표시
            showAllGames();

            // displayAll 값을 업데이트하여 처음처럼 다시 버튼을 누르면 모두 숨김
            displayAll = true;
        }
    });
});


// Display all games initially
displayAllGames();