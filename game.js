//global variables
var letterChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0; 
var guessesLeft = 10;
var lettersGuessed= [];
var computerGuess = [];

//Initial computer letter
window.onload = function() {
	var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	computerGuess.push(compGuess);
    console.log(computerGuess[0]);
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses
}

//Game
document.onkeyup = function(event) {
	var playerGuess = event.key;
    lettersGuessed.push(playerGuess);
    console.log(playerGuess)
    
if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    alert("You Win!")
    wins++;
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
    guessesLeft --;
}

else {
    alert("You Lose :(")
    losses++;
    document.getElementById("losses").innerHTML = losses
	guessesLeft = 10;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = letterChoices[Math.floor(Math.random() * letterChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}
document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses
}