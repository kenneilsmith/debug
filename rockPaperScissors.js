let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];
let computerChoice = randomFrom(computerChoices);
console.log(computerChoice);
function randomFrom(array) {
  return array[Math.ceil(Math.random() * 2)];
}

function checkInput(input, computerChoices) {
  if (input === "quit") {
    return true;
  }

  // let computerChoice = randomFrom(computerChoices);

  if (computerChoice === "rock" && input === "scissors") {
    alert("Computer wins!");
    return true;
  } else if (computerChoice === "scissors" && input === "paper") {
    alert("Computer wins!");
    return true;
  } else if (computerChoice === "paper" && input === "rock") {
    alert("Computer wins!");
    return true;
  } else if (computerChoice === "rock" && input === "rock") {
    alert("Draw!");
    return true;
  } else if (computerChoice === "scissors" && input === "scissors") {
    alert("Draw!");
    return true;
  } else if (computerChoice === "paper" && input === "paper") {
    alert("Draw!");
    return true;
  } else {
    alert("You WIN!!!!");
  }

  // alert("Computer wins!");
  // ``;
  return false;
}

function start(gameOver, computerChoices) {
  while (!gameOver) {
    let playerInput = prompt(
      "Hi! Enter rock/paper/scissors to play, or quit to stop playing."
    );
    gameOver = checkInput(playerInput, computerChoices);
    // playerInput = "paper";
  }
}

start(gameOver, computerChoices);
