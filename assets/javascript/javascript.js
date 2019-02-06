const compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let chances = 20;
let guesses = [];
let compGuess;

const genCompGuess = () => {
    compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(compGuess);
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

    // Testing Output
    console.log(userGuess);
    console.log(compGuess);
    console.log(compChoices.includes(userGuess));

    if (compChoices.includes(userGuess)) {
        document.querySelector(".picks1").innerHTML = userGuess;
        if (compGuess === userGuess) {
            wins++;
            guesses.push(userGuess);
            chances--;
            alert('You did it! Press ok and keep going!');
            genCompGuess();
        } else {
            losses++;
            guesses.push(userGuess);
            chances--;
        }
    } else if (userGuess = 3) {
        wins++;
        wins++;
        wins++;
        wins++;
        wins++;
    } else {
        alert('This is not a letter. Press OK and try again.');
    };

    if (chances === 0) {
        alert("Sorry, you've run out of chances. Try again?");
        resetGame();
    } else if (wins === 5) {
        alert("Call Vegas! We have a real psyhcic here!");
        resetGame();
    }

    // Testing Output
    console.log(wins);
    console.log(losses);
    console.log(chances);
    console.log(guesses);

    document.querySelector(".picks2").innerHTML = guesses;
    document.querySelector(".chanceleft").innerHTML = chances;
    document.querySelector(".wcnt").innerHTML = wins;
    document.querySelector(".lcnt").innerHTML = losses;

};


