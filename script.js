const img = document.querySelector("img");

const moves = ["rock", "paper", "scissors"],
  rock = "rock",
  paper = "paper",
  scissors = "scissors";

let computerSelection,
  playerSelection,
  playerScore = 0,
  computerScore = 0,
  roundOutcome;

const initialPromptMessageToPlayer =
  "Choose your move: ROCK, PAPER or SCISSORS. Don't even dare to use LIZARD or SPOCK!";

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * moves.length);
  const computerMove = moves[randomNumber];

  return computerMove;
}

function playerPlay() {
  let playerMove = window.prompt(initialPromptMessageToPlayer);

  if (playerMove === null) {
    const result = window.confirm(
      "You clicked cancel.If you want cancel the game click Cancel, if you want to continue click OK "
    );

    if (!result) {
      return null;
    } else {
      // Continue the game
      return playerPlay();
    }
  }
  const isValidChoice = ["rock", "paper", "scissors"].includes(
    playerMove.toLowerCase()
  );
  if (playerMove !== null && !isValidChoice) {
    alert("Invalid input. Please choose 'Rock', 'Paper', or 'Scissors'.");
  }

  return playerMove.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === rock) {
    roundOutcome = "Its a draw!";
  } else if (playerSelection === rock && computerSelection === paper) {
    roundOutcome = "Scorpion wins this round!";
    computerScore++;
  } else if (playerSelection === rock && computerSelection === scissors) {
    roundOutcome = "Hichhiker wins this round!";
    playerScore++;
  } else if (playerSelection === paper && computerSelection === rock) {
    roundOutcome = "Round goes to Hichhiker!";
    playerScore++;
  } else if (playerSelection === paper && computerSelection === paper) {
    roundOutcome = "Its a draw!";
  } else if (playerSelection === paper && computerSelection === scissors) {
    roundOutcome = "Round goes to Scorpion!";
    computerScore++;
  } else if (playerSelection === scissors && computerSelection === rock) {
    roundOutcome = "Scorpion wins!";
    computerScore++;
  } else if (playerSelection === scissors && computerSelection === paper) {
    roundOutcome = "Hichhiker wins!";
    playerScore++;
  } else {
    roundOutcome = "Its a draw!";
  }
}

function allRounds() {
  for (let i = 1; i < 6; i++) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    if (!playerSelection) {
      break;
    } else if (
      playerSelection === "rock" ||
      playerSelection === "paper" ||
      playerSelection === "scissors"
    ) {
      playRound(playerSelection, computerSelection);

      console.log(`
                     

                                    ROUND:  ${i}

                         >>   ${roundOutcome}   <<      

                     Hitchhiker :                   Scorpion :

        MOVE:         ${playerSelection}           vs            ${computerSelection}     

        SCORE:        ${playerScore}                :               ${computerScore}

`);

      if (i === 4) {
        console.log("FINAL ROUND!");
      }
    } else {
      i--;
    }
  }
}

function entryDialog() {
  setTimeout(() => {
    console.log(`Hichhiker: I have finally found ya ey?`);
    setTimeout(() => {
      console.log(
        "ScorpionI: Oh crap... this moron again...what do you want?? -_-;;"
      );
      setTimeout(() => {
        console.log(
          "Hichhiker: Only you know the answer to the Ultimate Question of Life, the Universe, and Everything! Tell me now!"
        );

        setTimeout(() => {
          console.log(
            "Hichhiker: Only you know the answer to the Ultimate Question of Life, the Universe, and Everything! Tell me now!"
          );
          setTimeout(() => {
            console.log(
              "Scorpion: Only if you beat me in game of rock, paper, scissors ;]"
            );
            setTimeout(() => {
              console.log(
                "Hichhiker: Eeeee... sure -_-; Let's begin than -_-;"
              );
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  game();
}

function lostGameDialog() {
  setTimeout(() => {
    console.log(
      "Scorpion: You have lost Hichhiker, Now scram, Castlevania: Nocturne is about to begin... "
    );
    setTimeout(() => {
      console.log("Scorpion: Oh... and Hichhiker...");

      setTimeout(() => {
        console.log("Hichhiker: What do you want ?");
        setTimeout(() => {
          console.log(
            "Scorpion: Don't forget to close the doors after yourself... I would walk you to the door but I won't hehe XD"
          );
          setTimeout(() => {
            console.log("Hichhiker: -_-; Go to hell !");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function wonGameDialog() {
  console.log("Hichhiker: You lost Scorpion! Now answer my question !");
  setTimeout(() => {
    console.log(
      "Scorpion: Damn you Hichhiker, but I guess promise is a promise.... The answer is:"
    );
    setTimeout(() => {
      console.log("Scorpion: Wait for it....");

      setTimeout(() => {
        console.log("Scorpion: 42");

        setTimeout(() => {
          console.log("Hichhiker: 42 ?");
          setTimeout(() => {
            console.log("Scorpion: 42");

            setTimeout(() => {
              console.log("Hichhiker: What 42?");
              setTimeout(() => {
                console.log(
                  "Scorpion: The answer to your question is 42. That is the answer we received form supercomputer named Deep Thought. It took it 7.5 million years to calculate this answer."
                );
                setTimeout(() => {
                  console.log(
                    "Scorpion: OK. You get what you wanted. Now get lost. Castlevania: Nocturne is about to begin. Scram. And close the door after you. "
                  );
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function cancelDialog() {
  console.log(
    "You cancelled the game. If you want play game, please click button"
  );
}

function game() {
  playerScore = 0;
  computerScore = 0;
  img.src = "";

  img.src = "assets/mortal-kombat.gif";

  setTimeout(() => {
    allRounds();
    if (!playerSelection) {
      cancelDialog();
    } else if (computerScore > playerScore) {
      console.log("SCORPIONS WINS!");
      img.src = "./assets/fatality-mortal-kombat.gif";
      lostGameDialog();
    } else if (playerScore > computerScore) {
      console.log("HICHHIKER WINS!");
      img.src = "./assets/finish-him-fatality.gif";
      wonGameDialog();
    } else {
      console.log("IT'S A DRAW!");
      img.src = "./assets/scorpion-subzero.gif";
      lostGameDialog();
    }
  }, 7000);
}

function startGame() {
  console.clear();
  entryDialog();
  const startButton = document.getElementById("startButton");
  startButton.innerHTML = "Play again";
}

// window.addEventListener('load', game)
