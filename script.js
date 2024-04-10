// Initialize variables
let computerWins = 0, playerWins = 0, winningScore = 5;

//selecting DOM elements for results
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultsBoard = document.getElementById("resultsboard");

//DOM elements to display player and computer choice
const playerEmoji = document.getElementById("playerEmoji");
const computerEmoji = document.getElementById("computerEmoji");
const playerHolder = document.getElementById("playerHolder");
const computerHolder = document.getElementById("computerHolder");

//Update scores displayed on UI
updateScores();

//Function to generate computer's choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSOR"];
    return choices[Math.floor(Math.random() * 3)];
}

//Function to play a round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `<span class="textSize">It's a tie 😶</span><br>Please try again`;
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        return `<span class="textSize">You win🔥</span><br>${playerSelection} beats ${computerSelection}`;
        playerWins++;
    } else {
        return `<span class="textSize">You lose🙁 </span><br>${computerSelection} beats ${playerSelection}`;
        computerWins++;
    }
}
//Function to call the scores to the UI
function updateScores() {
    playerScoreDisplay.textContent = playerWins;
    computerScoreDisplay.textContent = computerWins;
}

//Function to hide player and computer choices to announce the winner
function hideShow() {
    const playerBox = document.querySelector(".playerBox");
    const computerBox = document.querySelector(".computerBox");
    playerBox.style.display = playerBox.style.display === 'none' ? 'block' : 'none';
    computerBox.style.display = computerBox.style.display === 'none' ? 'block' : 'none';
}

//Function determining the winner
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultsBoard.innerHTML = result;

    if (result.includes("win")) {
        playerWins++;
    } else if (result.includes("lose")) {
        computerWins++;
    }
    updateScores();
    if (playerWins === winningScore || computerWins === winningScore) {
      const message = playerWins === winningScore ?
      "Congratulations🥳💃🕺<br>You won the game!" :
      "Oops🧐<br>Computer wins the game!";
  resultsBoard.innerHTML = `<span class="textSize2">${message}</span><br>
  <span><button id="reset">Play again</button></span>`;
  playerWins = computerWins = 0;
  hideShow();
  document.getElementById("reset").addEventListener('click', restartGame);
  document.querySelectorAll('.size').forEach(button => {
    button.addEventListener('click', restartGame);
    });
  return;
    }
    displayPlayerChoice(playerChoice);
    displayComputerChoice(computerChoice);
}
//Function to display computer choice
function displayComputerChoice(computerSelection) {
    let emoji;
    switch (computerSelection) {
        case "ROCK":
            emoji = "✊🏾";
            break;
        case "PAPER":
            emoji = "🤚🏾";
            break;
        case "SCISSOR":
            emoji = "✌🏾";
            break;
        default:
            emoji = "";
            break;
    }
    computerEmoji.textContent = emoji;
    computerHolder.textContent = computerSelection;
}

//Function to display player choice
function displayPlayerChoice(playerSelection) {
    let emoji;
    switch (playerSelection) {
        case "ROCK":
            emoji = "✊🏾";
            break;
        case "PAPER":
            emoji = "🤚🏾";
            break;
        case "SCISSOR":
            emoji = "✌🏾";
            break;
        default:
            emoji = "";
            break;
    }
    playerEmoji.textContent = emoji;
    playerHolder.textContent = playerSelection;
}

//DOM to read player's choice
document.querySelectorAll('.size').forEach(button => {
    button.addEventListener("click", () => {
        playGame(button.id.toUpperCase());
    });
});

// RestartGame function
function restartGame() {
const reset = document.getElementById("reset");
    playerWins = 0;
    computerWins = 0;
    location.reload();
    updateScores();
    resultsBoard.innerHTML = "";
    hideShow();
}