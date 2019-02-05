const compChoices = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
let wins = 0;
let losses = 0;
let chances = 20;
let guesses = [];

document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
    let compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

    // Testing Output
    console.log(userGuess);
    console.log(compGuess);

if (compGuess === userGuess) {
    wins++;
    guesses.push(userGuess);
    chances--;
    alert('You did it! Press ok and keep going!');
} else if (compGuess !== userGuess) {
    losses++;
    guesses.push(userGuess);
    chances--;
    }
if (chances === 0) {
    alert("Sorry, you've run out of chances. Try again?");
    location.reload(); // Reloads the document
} else if (wins === 5) {
    alert("Call Vegas! We have a real psyhcic here!");
    location.reload();
    }

    // Testing Output
    console.log(wins);
    console.log(losses);
    console.log(chances);
    console.log(guesses);
    

    document.querySelector(".picks1").innerHTML = userGuess;
    document.querySelector(".picks2").innerHTML = guesses;
    document.querySelector(".chanceleft").innerHTML = chances;
    document.querySelector(".wcnt").innerHTML = wins;
    document.querySelector(".lcnt").innerHTML = losses;

};

