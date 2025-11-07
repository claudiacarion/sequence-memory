document.querySelector(".start-button").onclick = () => playGame();

const playGame = () => {
  const TOTALROUNDS = 5;
  const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let currentRound = 1;
  let gameOver = false;
  let sequence = [];

  while (currentRound <= TOTALROUNDS && !gameOver) {
    for (let i = 0; i < currentRound; i++) {
      let randomIndex = Math.floor(Math.random() * NUMBERS.length);
      sequence.push(NUMBERS[randomIndex]);
    }
    alert(`Remember this sequence: ${sequence.join(" ")}`);
    // console.log(sequence);
    // Uncomment console.log above for testing without memorizing 15 digits...

    let validInput = false;
    let userSequence = [];

    while (!validInput) {
      let userInput = prompt("Enter the sequence or cancel to quit");
      if (userInput === null) {
        alert(`Womp womp. You quit. The sequence was ${sequence.join(" ")}.`);
        gameOver = true;
        break;
      }

      let userArray = userInput.replace(/\s+/g, "").split("");
      userSequence = userArray.map(Number);

      let invalid = false;
      let short = false;

      for (let i = 0; i < userSequence.length; i++) {
        if (isNaN(userSequence[i]) || !NUMBERS.includes(userSequence[i])) {
          invalid = true;
          break;
        }
      }

      if (!invalid && userSequence.length !== sequence.length) {
        short = true;
      }

      if (invalid) {
        alert("Invalid! Enter numbers only!");
      } else if (short) {
        alert(`You entered ${userSequence.length} digits. There should be ${sequence.length} digits. Try again!`);
      } else {
        validInput = true;
      }
    }

    if (gameOver) {
      break;
    }

    let correct = true;
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] !== userSequence[i]) {
        correct = false;
        break;
      }
    }

    if (correct) {
      if (currentRound >= TOTALROUNDS) {
        alert("Great memory! You got all 15 digits! You win!");
        break;
      } else {
        currentRound++;
        alert(`You got it! Ready for Round ${currentRound}?`);
      }
    } else {
      gameOver = true;
      alert(`Whoops! The sequence was ${sequence.join(" ")} but you entered ${userSequence.join(" ")}.`);
      alert("Better luck next time!");
    }
  }
};
