const menu = document.querySelector("#menu");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const num = Math.ceil(Math.random() * 3);
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Tie! Both chose ${humanChoice}`;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

function updateUI(message) {
  resultDiv.textContent = message;
  scoreDiv.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
}

menu.addEventListener("click", (event) => {
  if (!event.target.id) return;

  if (humanScore === 5 || computerScore === 5) return;

  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  const message = playRound(humanChoice, computerChoice);
  updateUI(message);

  if (humanScore === 5) {
    resultDiv.textContent = "🎉 You won the game!";
  } else if (computerScore === 5) {
    resultDiv.textContent = "💻 Computer won the game!";
  }
});
