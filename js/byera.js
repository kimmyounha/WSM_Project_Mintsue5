function reply_click(button) {
    const buttonValue = button.textContent;
    const textbox = document.getElementById('textbox');
    textbox.textContent = buttonValue;
}
function reply_click(id) {
    const ids = id.split('-');
    const firstId = parseInt(ids[0]);
    const secondId = parseInt(ids[1]);

    let FirstId = parseInt(firstId);  
    let SecondId = parseInt(secondId);  

    console.log(`FirstId: ${FirstId} type: ${typeof FirstId}`);
    console.log(`SecondId: ${SecondId} type: ${typeof SecondId}`);

    let gameData;
        for (let gameOne of games) {
            if (FirstId === gameOne.id) {    //===: 값이랑 자료형이랑 둘다 맞을 때 ㅇㅈ
                gameData = gameOne;
                break;
            }
        }

    let gameData1;
        for (let gameOne of games) {
            if (SecondId === gameOne.id) {    //===: 값이랑 자료형이랑 둘다 맞을 때 ㅇㅈ
                gameData1 = gameOne;
                break;
            }
        }

    let title = gameData.title;
    let onesummary = gameData.onesummary;
    let img = gameData.img;
    let times = gameData.times;

    let title1 = gameData1.title;
    let onesummary1 = gameData1.onesummary;
    let img1 = gameData1.img;
        
    console.log(title, onesummary, img, times);
    console.log(title1, onesummary1, img1);

    const imgDiv = document.getElementsByClassName("gamePhoto")[0];
    imgDiv.innerHTML = `<img src="${img}" />`;
    
    const img1Div = document.getElementsByClassName("gamePhoto")[1];
    img1Div.innerHTML = `<img src="${img1}" />`;

    const TitleDiv = document.getElementsByClassName("gameName")[0];
    TitleDiv.innerHTML = title;

    const Title1Div = document.getElementsByClassName("gameName")[1];
    Title1Div.innerHTML = title1;

    const timesDiv = document.getElementsByClassName("textbox")[0];
    timesDiv.innerHTML = times;

}
