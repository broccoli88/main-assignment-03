
// REFS

const img = document.querySelector("img");


//MUSIC
const main_audio = new Audio('./music/DBsuper.mp3');
const gameover_audio = new Audio('./music/re4.mp3');
const victory_audio = new Audio('./music/Re2.mp3');
const giveup_audio = new Audio('./music/sasuke.mp3');
const pl_vict = new Audio('./music/five9.mp3');
const pc_vict = new Audio('./music/squirrel.mp3');

// VARS

const moves = ["rock", "paper", "scissors"],
    rock = "rock",
    paper = "paper",
    scissors = "scissors",
    gameRecord = [
        { playerScore: 0, computerScore: 0 },
        { playerScore: 0, computerScore: 0 },
        { playerScore: 0, computerScore: 0 }
    ]

let computerSelection,
    playerSelection,
    playerScore = 0,
    computerScore = 0,
    gameCount = 0,
    roundOutcome,
    gameOutcome

// MESSAGES

const initialPromptMessageToPlayer =
    "Choose your move: ROCK, PAPER or SCISSORS. Don't even dare to use LIZARD or SPOCK!",

    cancelOrContinueGameConfirmationMessage = "Scorpion: Did you realize my greatness Hichhiker? That's why you want to run away? Than click CANCEL and run! Otherwise click OK and lets continue our battle!",

    continueGameMessage = 'Scorpion: GET OVER HERE!',

    commandListOptions = `


                    ...::: [ COMMAND LIST ] :::... 
    
    
[ START GAME ] >> click "Let\'s begin button OR type game() in the console
    
[ CHECK LAST 3 GAMES RESULT ] >> type showLastThreeGamesResults() in  the console
    
[ COMMAND LIST ] >> type commandList() in the console
    
[ EXIT GAME ] >> close tab or browser :)
    
    
    `


// FUNCTIONALITY


function computerPlay() {
    const randomNumber = Math.floor(Math.random() * moves.length);
    const computerMove = moves[randomNumber];

    return computerMove;
}

function playerPlay() {
    let playerMove = window.prompt(initialPromptMessageToPlayer);

    if (playerMove === null) {
        const result = window.confirm(cancelOrContinueGameConfirmationMessage);

        if (!result) {
            return null;
        } else {
            // Continue the game
            console.log(continueGameMessage)
            return playerPlay();
        }
    }
    const isValidChoice = ["rock", "paper", "scissors"].includes(
        playerMove.toLowerCase()
    );
    if (playerMove !== null && !isValidChoice) {
        alert(`Scorpion: Eeee.... what the heck is ${playerMove.toUpperCase()} ??!! -_-; You have only 3 options to choose from: ROCK, PAPER, SCISSORS, yet you manage to mess that up -_-; I hope your dumbness is not contagious -_-; `);
    }

    return playerMove.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    pc_vict.currentTime = 0; //Restarts audio
    pl_vict.currentTime = 0; //Restarts audio

    if (playerSelection === rock && computerSelection === rock) {
        roundOutcome = "Its a draw!";

    } else if (playerSelection === rock && computerSelection === paper) {

        roundOutcome = "Scorpion wins this round!";

        pc_vict.play();

        computerScore++;
    } else if (playerSelection === rock && computerSelection === scissors) {

        roundOutcome = "Hichhiker wins this round!";

        pl_vict.play();

        playerScore++;
    } else if (playerSelection === paper && computerSelection === rock) {


        roundOutcome = "Round goes to Hichhiker!";

        pl_vict.play();

        playerScore++;
    } else if (playerSelection === paper && computerSelection === paper) {

        roundOutcome = "Its a draw!";

    } else if (playerSelection === paper && computerSelection === scissors) {

        roundOutcome = "Round goes to Scorpion!";

        pc_vict.play();

        computerScore++;
    } else if (playerSelection === scissors && computerSelection === rock) {

        roundOutcome = "Scorpion wins!";

        pc_vict.play();

        computerScore++;
    } else if (playerSelection === scissors && computerSelection === paper) {

        roundOutcome = "Hichhiker wins!";

        pl_vict.play();

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

    recordGameResult(playerScore, computerScore)
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
                        "Scorpion: Only if you beat me in game of rock, paper, scissors, muahaha ;]"
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
}

function lostGameDialog() {
    gameover_audio.currentTime = 0;
    gameover_audio.play();
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
                        setTimeout(commandList(), 500)
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function wonGameDialog() {
    victory_audio.currentTime = 0;
    victory_audio.play();
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
                                    setTimeout(commandList, 500)
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

    main_audio.pause();
    giveup_audio.currentTime = 0;
    giveup_audio.play();

    console.log(
        "Ha! I knew you would give up. Yoa are as week as Netflixes 'Witcher' series... "
    );
}

function recordGameResult(playerScore, computerScore) {
    gameRecord[gameCount - 1].playerScore = playerScore
    gameRecord[gameCount - 1].computerScore = computerScore
}

function showLastThreeGamesResults() {
    gameRecord.forEach((record, index) => {
        if (!record.playerScore && !record.computerScore) {
            console.log(`GAME No${index + 1}:  No data yet, or you have already died.... :)`)
        } else {
            console.log(`GAME No${index + 1}:  Hichhiker Score: ${record.playerScore} || Scorpion Score: ${record.computerScore} >> ${gameOutcome}`)
        }
    })
}

function commandList() {

    console.log(commandListOptions);
    return ' ">:D" ';

}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    img.src = "";

    img.src = "assets/mortal-kombat.gif";

    setTimeout(() => {
        allRounds();
        if (!playerSelection) {

            cancelDialog();
        } else if (computerScore > playerScore) {
            gameOutcome = 'SCORPION WINS!'
            img.src = "./assets/fatality-mortal-kombat.gif";
            // adding gameOver after 4s 
            setTimeout(() => {
                img.src = "./assets/game-over.gif"
            }, 4000);

            console.log(gameOutcome);
            main_audio.pause();
            lostGameDialog();
        } else if (playerScore > computerScore) {
            gameOutcome = 'HICHHIKER WINS!!'
            img.src = "./assets/finish-him-fatality.gif";

            setTimeout(() => {
                img.src = "./assets/game-over.gif"
            }, 4000);
            console.log(gameOutcome);
            main_audio.pause();
            wonGameDialog();
        } else {
            gameOutcome = "IT'S A DRAW!"
            img.src = "./assets/scorpion-subzero.gif";

            setTimeout(() => {
                img.src = "./assets/game-over.gif"
            }, 4000);

            console.log(gameOutcome);
            main_audio.pause();
            lostGameDialog();
        }

    }, 7000);
}

function game() {
    if (gameCount === 3) {
        gameCount = 0
    }

    gameCount++

    console.clear();

    victory_audio.pause();
    main_audio.currentTime = 0;
    main_audio.volume = 0.15;
    main_audio.play();

    entryDialog();
    startGame();

}







