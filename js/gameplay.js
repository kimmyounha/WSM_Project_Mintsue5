let url = new URL(location.href);
let game = url.searchParams.get("game");

if (game === null) {
    location.href = "index.html";
}

let gameId = parseInt(game);  //string -> number

let gameData;
for (let gameOne of games) {
    if (gameId === gameOne.id) {
        gameData = gameOne;
        break;
    }
}

//제목 보여주자
let title = gameData.title;
let theme = gameData.theme;
let times = gameData.times;
let gameImage = gameData.img;

const gameImageDiv = document.getElementsByClassName("book-image")[0];
gameImageDiv.innerHTML = `<img src="${gameImage}" />`;

const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

const themeDiv = document.getElementsByClassName("theme")[1];
themeDiv.innerHTML = theme;
const timesDiv = document.getElementsByClassName("times")[1];
timesDiv.innerHTML = times;
