const compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let chances = 20;
let guesses = [];
let compGuess;

const genCompGuess = () => {
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(compGuess); // Testing Output.
};

const resetGame = () => {
    genCompGuess();
    wins = 0;
    losses = 0;
    chances = 0;
    guesses = [];
    document.querySelector(".picks").textContent = '-';
};


genCompGuess();

document.onkeyup = function (event) {
    let userGuess = event.key.toLowerCase();

    console.log(userGuess); // Testing Output.
    console.log(compGuess);
    console.log(compChoices.includes(userGuess));

    if (compChoices.includes(userGuess)) { // Tests to see if the character the user typed, matches what's in the compChoices array. 
        document.querySelector(".picks1").innerHTML = userGuess;
        if (compGuess === userGuess) {
            wins++;
            guesses.push(userGuess);
            chances--;
            alert('You did it! Press ok and keep going!');
            genCompGuess(); // resets the game, without reloading the whole page.
        } else {
            losses++;
            guesses.push(userGuess);
            chances--;
        }
    } else if (userGuess = 3) { // Cheat for testing.
        wins++;
        wins++;
        wins++;
        wins++;
        wins++;
    } else {
        alert('This is not a letter. Press OK and try again.'); // If the userGuess is not in the compChooices array, the user gets this error message.
    };

    if (chances === 0) {
        alert("Sorry, you've run out of chances. Try again?");
        resetGame();
    } else if (wins === 5) {
        alert("Call Vegas! We have a real psyhcic here!");
        resetGame();
    }

    console.log(wins); // Testing output.
    console.log(losses);
    console.log(chances);
    console.log(guesses);

    document.querySelector(".picks2").innerHTML = guesses; // This block updates the elements in the HTML.
    document.querySelector(".chanceleft").innerHTML = chances;
    document.querySelector(".wcnt").innerHTML = wins;
    document.querySelector(".lcnt").innerHTML = losses;

};


