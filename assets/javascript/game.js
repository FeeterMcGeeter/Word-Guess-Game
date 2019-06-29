// Game Counters
var guessesLeft = 10;
var wins = 0;  

// Arrays
var gameWords = ["zelda", "contra", "megaman", "dodgeball", "gradius", "tetris", "battletoads", "castlevania", "commando", ];

var lettersArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];
                
// Global Variables
var alreadyGuessed = [];
var hiddenWord = [];
var currentWord; 
var letter; 

// DOM Manipulation
var currentWordText = document.getElementById('current-word');
var guessesLeftCount = document.getElementById('remaining-guesses'); 
var winCount = document.getElementById('wins-text'); 
var alreadyGuessedText = document.getElementById('already-guessed');

// FUNCTIONS
function gameStart() {
    
    currentWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(currentWord);

    for (var i = 0; i < currentWord.length; i++) {
        hiddenWord.push('_');
    }
    currentWordText.innerHTML = hiddenWord.join(" ");
}

function gamePlay(letter) {

    if (lettersArray.indexOf(letter) == -1) {
        alert("Please pick a letter!");

    } else if (currentWord.indexOf(letter) == -1 && alreadyGuessed.indexOf(letter) == -1) {
        guessesLeft--;
        guessesLeftCount.innerHTML = guessesLeft; 
        console.log(guessesLeft)
        alreadyGuessed.push(letter);
        alreadyGuessedText.innerHTML = alreadyGuessed.join(" ");
        console.log(alreadyGuessed);

        winOrLoss();
    } else {

        for (var i = 0; i < currentWord.length; i++)

            if (currentWord[i] == letter) {
                hiddenWord[i] = currentWord[i]; 
            }  
        console.log(hiddenWord); 
        currentWordText.innerHTML = hiddenWord.join(" ");

        winOrLoss(); 
    }
}

function winOrLoss() {

    if (hiddenWord.indexOf('_') == -1) { 
        document.getElementById("nes-game").innerHTML = "You Win!";
        wins++;
        winCount.innerHTML = wins; 
        resetGame();
    } else if (guessesLeft == 0) {
        document.getElementById("nes-game").innerHTML = "Game Over";
        resetGame();
    }
}

function resetGame() {

    guessesLeft = 9; 
    guessesLeftCount.innerHTML = guessesLeft; 
    alreadyGuessed = [];
    hiddenWord = [];
    currentWord; 
    currentWordText.innerHTML = " ";
    alreadyGuessedText.innerHTML = " "; 

    gameStart();
}

document.onkeyup = function (event) {

    letter = event.key;
    console.log(letter);   
    gamePlay(letter);
}

gameStart(); 
