function getPlayerChoice (event) {
    const choice = event.target.id;
    const resultDiv = document.querySelector(".result.human").children[1];
    resultDiv.className = `option ${choice}`;
    return choice;
}

function getComputerChoice() {
    const possibleChoices = ['rock','paper','scissors'];
    const choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
    const choice = possibleChoices[choiceIndex];
    const resultDiv = document.querySelector(".result.computer").children[1];
    resultDiv.className = `option ${choice}`;
    return choice;
}

const options = document.querySelectorAll("#rock, #paper, #scissors");
options.forEach((option) => {   option.addEventListener("mousedown",getPlayerChoice);
                                option.addEventListener("mouseup",getComputerChoice);
                            }
                );

                
// Old code
function singleRound() {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) return 'draw';
    else if (playerSelection === 'rock' && computerSelection ==='scissors' 
        || playerSelection === 'paper' && computerSelection ==='rock' 
        || playerSelection === 'scissors' && computerSelection ==='paper') return 'win';
    else return 'lose';
}

// Declare winner in a game with five rounds

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i=0; i<5; i++) {
        result = singleRound()
        if (result === 'win') {
            playerPoints ++;
            console.log(`Nice! ${playerSelection} beats ${computerSelection}`)
        }
        else if (result === 'lose') {
            computerPoints ++;
            console.log(`Ouch! ${playerSelection} loses to ${computerSelection}`)
        }
        else {
            console.log("It's a draw!")
        }
    };
    console.log(
        `Player points: ${playerPoints}\nComputer points: ${computerPoints}`
    );
    if (playerPoints === computerPoints) console.log("It's a draw!");
    if (playerPoints > computerPoints) console.log("You win! Congratulations!");
    if (playerPoints < computerPoints) console.log("You lose :(");
}
