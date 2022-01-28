var randomNumber1 = Math.floor(Math.random() * 6) + 1;    // 1-6 numbers generated
var randomDiceImage = "dice" + randomNumber1 + ".png";    // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage;     // images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";

}

// var randomNumber1 = Math.random();
// randomNumber1 = randomNumber1*6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
// // console.log(randomNumber1);




// if(randomNumber1 === 1){
//     document.querySelector(".player1 img").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber1 === 2){
//     document.querySelector(".player1 img").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1 === 3){
//     document.querySelector(".player1 img").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1 === 4){
//     document.querySelector(".player1 img").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1 === 5){
//     document.querySelector(".player1 img").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber1 === 6){
//     document.querySelector(".player1 img").setAttribute("src","images/dice6.png");
// }


// var randomNumber2 = Math.random();
// randomNumber2 = randomNumber2*6;
// randomNumber2 = Math.floor(randomNumber2) + 1;
// console.log(randomNumber2);


// if(randomNumber2 === 1){
//     document.querySelector(".player2 img").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2 === 2){
//     document.querySelector(".player2 img").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2 === 3){
//     document.querySelector(".player2 img").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2 === 4){
//     document.querySelector(".player2 img").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2 === 5){
//     document.querySelector(".player2 img").setAttribute("src","images/dice5.png");
// }
// else if(randomNumber2 === 6){
//     document.querySelector(".player2 img").setAttribute("src","images/dice6.png");
// }

