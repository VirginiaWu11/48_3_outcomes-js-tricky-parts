function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let count = 0;
  let hasWon = false;
  return function (guess) {
    count++;
    if (hasWon) {
      return "The game is over, you already won!";
    } else if (guess > answer) {
      return `${guess} is too high!`;
    } else if (guess < answer) {
      return `${guess} is too low!`;
    } else {
      hasWon = true;
      return `You win! You found ${guess} in ${count} guesses.`;
    }
  };
}

// let game = guessingGame();

// console.log(game(50)); // "50 is too low!"
// console.log(game(90)); // "90 is too high!"
// console.log(game(70)); // "You win! You found 70 in 3 guesses."
// console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };

// game(50); // "50 is too low!"
// game(90); // "90 is too high!"
// game(70); // "You win! You found 70 in 3 guesses."
// game(70); // "The game is over, you already won!"
