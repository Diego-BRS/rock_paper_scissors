let roundsToPlay = parseInt(
  prompt(
    "Let's play rock, paper, scissors ! How many rounds would you like to play ?"
  )
);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.ceil(Math.random() * 3);
  if (computerChoice === 3) {
    return "ROCK";
  } else if (computerChoice === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Choose rock, paper or scissors : ").toUpperCase();
  return humanChoice;
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      humanScore++;
      return console.log(`You won. ${humanChoice} beats ${computerChoice} !`);
    } else if (
      (humanChoice === "PAPER" && computerChoice === "SCISSORS") ||
      (humanChoice === "SCISSORS" && computerChoice === "ROCK") ||
      (humanChoice === "ROCK" && computerChoice === "PAPER")
    ) {
      computerScore++;
      return console.log(`You lost. ${computerChoice} beats ${humanChoice} !`);
    } else {
      return console.log(`Nobody won. You both chose ${computerChoice}.`);
    }
  }

  playRound(humanSelection, computerSelection);
}

for (let r = 0; r < roundsToPlay; r++) {
  playGame();
}

console.log("Final score:");
if (humanScore === computerScore) {
  console.log(`That is a tie ! You both won ${humanScore} rounds.`);
} else if (humanScore > computerScore) {
  console.log(`Congrats! You won ${humanScore} x ${computerScore}.`);
} else {
  console.log(`Oh no! You lost ${computerScore} x ${humanScore}.`);
}
