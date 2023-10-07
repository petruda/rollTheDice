var playerOneName = prompt("Player 1 please enter your name");
var playerTwoName =  prompt("Player  2 please enter your name");
document.getElementById("playerOneName").textContent = playerOneName;
document.getElementById("playerTwoName").textContent = playerTwoName;
var randomNumber1 = Math.round(Math.random()*5);
document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice"+ (randomNumber1 + 1 ) + ".png");
var randomNumber2 = Math.round(Math.random()*5);
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + (randomNumber2 + 1) + ".png");
console.log(randomNumber1)
if (randomNumber1 < randomNumber2){
    document.getElementById("winner").textContent =  playerTwoName + " WINS";
} else if (randomNumber1 > randomNumber2){
    document.getElementById("winner").textContent = playerOneName + " WINS";
} else if(randomNumber1 === randomNumber2){
    document.getElementById("winner").textContent = "DRAW";

}
