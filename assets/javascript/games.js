// Create the variables for the game
var wins = 0;
var correctGuess = [];
var wrongGuess = [];
var guessesRemaining = 10;
var lettersRemaining = [];
var underscore = [];

// Grab the element from the html page
var totalWins = document.getElementById('wins-text');
var replaceUnderscore = document.getElementById('current-word');
var incorrectGuess = document.getElementById('already-guessed');

// Create the Array of words to be guessed
var gameWords = ['contra', 'megaman', 'dodgeball', 'gradius', 'zelda'];

// Generate the words randomly
var nesGame = Math.floor(Math.random() * gameWords.length);
var chosenWord = gameWords[nesGame];

// Create the underscores for the random words
var letterUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

// Create a keypress function
document.addEventListener('keypress', (event) => {
    var keyWord = String.fromCharCode(event.keyCode);
// Correct letter chosen    
    if(chosenWord.indexOf(keyWord) > -1) {
        correctGuess.push(keyWord); // STOPPED HERE
        underscore[chosenWord.indexOf(keyWord)] = keyWord;
// Incorrect letter chosen
    }  else {
        wrongGuess.push(keyWord);
        incorrectGuess[0].innerHTML = wrongGuess;
    }
})

// Display the correct guesses in the word
// Check for incorrect guesses

// =============== DOM Manipulation ==================
// Display the incorrect guesses in the "Already Guessed" area
// Display the amount of wins when user wins the game
// Show image and play audio when user completes a word
// Allow the user to press a button to play again