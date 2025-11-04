document.querySelector(".start-button").onclick = () => playGame();

const ROUNDS = 5;
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let currentRound = 1;
let gameOver = false;
let sequence = [];

const playGame = () => {
  while (currentRound <= ROUNDS && !gameOver) {
    for (let i = 0; i < currentRound; i++) {
      let randomIndex = Math.floor(Math.random() * NUMBERS.length);
      sequence.push(NUMBERS[randomIndex]);
    }
    alert(`Remember this sequence: ${sequence.join(" ")}`);

    let validInput = false;
    let userSequence = [];

    while (!validInput) {
      let userInput = prompt("Enter the sequence or cancel to quit");
      if (userInput === null) {
        alert("Womp womp. You quit.");
        gameOver = true;
        break;
      }

      let userArray = userInput.replace(/\s+/g, "").split("");

      userSequence = [];

      for (let i = 0; i < userArray.length; i++) {
        userSequence.push(Number(userArray[i]));
      }

      let invalid = false;

      if (userSequence.length !== sequence.length) {
        alert(`You entered ${userSequence.length} digits. There should be ${sequence.length} digits.`);
      } else {
        for (let i = 0; i < userSequence.length; i++) {
          if (isNaN(userSequence[i]) || !NUMBERS.includes(userSequence[i])) {
            alert("Invalid! Enter numbers only!");
            break;
          }
        }
      }

      if (invalid) {
        alert("Invalid! Try again!");
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

      if (correct) {
        alert(`You got it! Ready for Round ${currentRound + 1}?`);
        currentRound++;
      } else {
        alert(`Whoops! The sequence was ${sequence.join(" ")}. You entered ${userSequence.join(" ")}.`);
        gameOver = true;
      }
    }

    if (!gameOver && currentRound > ROUNDS) {
      alert("Great memory! You got all 15 digits! You win!");
    } else {
      alert("Good try! Better luck next time!");
      break;
    }
  }
};
