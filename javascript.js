// Input player choice and save it in a variable
let getPlayerChoice = () => prompt('Choose rock, paper or scissors').toLowerCase(); //prompt user option and store it in lower case

// Make computer "choose" its option
function getComputerChoice() {
    let possibleChoices = ['rock','paper','scissors'];
    let choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
    let choice = possibleChoices[choiceIndex];
    return choice;
}

// In each round the choices are compared
               
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
