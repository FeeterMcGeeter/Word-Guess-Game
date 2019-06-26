// Create the Array of words
var words = ['contra', 'megaman', 'dodgeball', 'gradius', 'zelda'];

// Choose words randomnly
var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];
// Create the variables 
var wins = 0;
var lettersRemaining = 10;
var correct = [];
var wrong = [];
var underscore = [];

var totalWins = document.getElementById('wins-text');
var replaceUnderscore = document.getElementById('current-word');
var incorrectGuess = document.getElementById('already-guessed');


// Create underscores based on the amount of letters in a word

var letterUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}

// Get user's guess and determine whether it's correct or wrong

document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);

    // This determines if the user is correct or not and places the letter accordingly

    if(chosenWord.indexOf(keyword) > -1) {
        correct.push(keyword);
        underscore[chosenWord.indexOf(keyword)] = keyword;
        replaceUnderscore[0].innerHTML = underscore.join('');
        if(underscore.join('') == chosenWord) {
            alert('You Win');
        }
    } else { 
        wrong.push(keyword);
        incorrectGuess[0].innerHTML = wrong;
    }
});

replaceUnderscore[0].innerHTML = letterUnderscore().join('');






// If correct, push to current word being guessed

// If incorrect, push to "letters guessed"

// Display the amount of wins

