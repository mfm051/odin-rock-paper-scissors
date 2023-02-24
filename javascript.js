function getHumanChoice (e) {
    let humanChoice = e.target.id;
    return humanChoice;
}

function getComputerChoice() {
    let possibleChoices = ['rock','paper','scissors'];
    let choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
    let computerChoice = possibleChoices[choiceIndex];
    return computerChoice;
};

function printChoice(player, playerChoice) {
    let resultDiv = document.querySelector(`.result.${player}`).children[1];
    if (player === "human") resultDiv.className = `option ${playerChoice}`
    else if (player === "computer") resultDiv.className = `option ${playerChoice}`
    else return false;
};

function getRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return 'draw';
    else if (   humanChoice === 'rock' && computerChoice ==='scissors' ||
                humanChoice === 'paper' && computerChoice ==='rock' ||
                humanChoice === 'scissors' && computerChoice ==='paper') return 'win';
    else return 'lose';
};

function showRoundResult (result) {
    if (result === 'win') {
        let img = document.createElement("img");
        img.src = "imgs/win.png";
        document.querySelector(".option.rounds").appendChild(img);
    } else if (result === 'lose') {
        let img = document.createElement("img");
        img.src = "imgs/lose.png";
        document.querySelector(".option.rounds").appendChild(img);
    };
};

function singleRound(e) {
    let humanChoice = getHumanChoice(e);
    let computerChoice = getComputerChoice();

    printChoice('human', humanChoice);
    printChoice('computer', computerChoice);    

    let roundResult = getRoundResult(humanChoice, computerChoice);

    showRoundResult(roundResult);
    return roundResult;
    // if (roundResult === "win" || roundResult === "lose") gameResults.push(roundResult);  
}

// let gameResults = []

// function showWinner (gameResults) {
//     function getWinner (gameResults) {
//         let winArray = gameResults.filter(result => result === "win");
//         let loseArray = gameResults.filter(result => result === "lose");
//         if (winArray.length > loseArray.length) return "human"
//         else return "computer";
//      };

//     let winner = getWinner(gameResults);
//     console.log(winner);
// }

// function restartGame () {
//     document.querySelector(".option.rounds").textContent = "";
//     let computerResultDiv = document.querySelector(".result.computer").children[1];
//     let humanResultDiv = document.querySelector(".result.human").children[1];
//     computerResultDiv.className = "option";
//     humanResultDiv.className = "option";
// }

// if (gameResults.length === 5) {
//     showWinner(gameResults);
//     gameResults = [];
//     restartGame();
// }

const options = document.querySelectorAll("#rock, #paper, #scissors");
options.forEach((option) => {   option.addEventListener("mousedown",singleRound);
                                // option.addEventListener("mouseup",getComputerChoice);
                            }
                );

// const h1 = document.querySelector('h1');
// h1.addEventListener("mousedown", restartGame);

// Old code


// Declare winner in a game with five rounds

// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     for (let i=0; i<5; i++) {
//         result = singleRound()
//         if (result === 'win') {
//             playerPoints ++;
//             console.log(`Nice! ${playerSelection} beats ${computerSelection}`)
//         }
//         else if (result === 'lose') {
//             computerPoints ++;
//             console.log(`Ouch! ${playerSelection} loses to ${computerSelection}`)
//         }
//         else {
//             console.log("It's a draw!")
//         }
//     };
//     console.log(
//         `Player points: ${playerPoints}\nComputer points: ${computerPoints}`
//     );
//     if (playerPoints === computerPoints) console.log("It's a draw!");
//     if (playerPoints > computerPoints) console.log("You win! Congratulations!");
//     if (playerPoints < computerPoints) console.log("You lose :(");
// }
