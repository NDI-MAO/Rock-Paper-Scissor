function playGame() {
  let computerWins = 0;
  let playerWins = 0;
  const winningScore= 5;

  while (computerWins < winningScore && playerWins < winningScore) {
      let playerSelection = getPlayerChoice();
      let computerSelection = getComputerChoice();
      const playRound = computerWins + playerWins + 1;
      console.log(`Round ${playRound}`);

      const result = gameResult(playerSelection, computerSelection);
      console.log(result);

      if (result.includes("win")) {
          playerWins++;
      } else if (result.includes("lose")) {
          computerWins++;
      }
  }

  if (playerWins === winningScore) {
      console.log("Congratulations! You win the game! 🔥🔥🔥");
  } else {
      console.log("Computer wins the game!☹️");
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
      return "ROCK";
  } else if (randomNumber === 1) {
      return "PAPER";
  } else {
      return "SCISSOR";
  }
}

function getPlayerChoice() {
  let playerSelection = prompt("Choose either ROCK, PAPER, or SCISSOR").toUpperCase();
  while (!["ROCK", "PAPER", "SCISSOR"].includes(playerSelection)) {
      alert("Invalid choice. Please choose ROCK, PAPER, or SCISSOR.");
      playerSelection = prompt("Choose either ROCK, PAPER, or SCISSOR").toUpperCase();
  }
  return playerSelection;
}

function gameResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      return `Player selection: ${playerSelection}
Computer selection: ${computerSelection}

It's a tie!!`;
  } else if (
      (playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
      (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
      return `Player selection: ${playerSelection}
Computer selection: ${computerSelection}

You win! ${playerSelection} beats ${computerSelection}`;
  } else {
      return `Player selection: ${playerSelection}
Computer selection: ${computerSelection}

You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

playGame();
