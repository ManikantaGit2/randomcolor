let titleColorElement = document.getElementById("titleColor");
let clickButtonElement = document.getElementById("clickButton");

let bgColorsArray = ["#e75d7c","#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b","violet"];


function changeColor() {
    let numberOfBgColors = bgColorsArray.length;
    let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

    if(randomBgColorIndex === numberOfBgColors) {
        randomBgColorIndex = numberOfBgColors - 1;
    }
    let randomBgColor = bgColorsArray[randomBgColorIndex];

    titleColorElement.style.backgroundColor = randomBgColor;
}

