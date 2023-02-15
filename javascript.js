// First: Input player Option and save it in a variable
let getPlayerChoice = () => prompt('Choose rock, paper or scissors').toLowerCase(); //prompt user option and store it in lower case

// Second: make computer "choose" its option
function getComputerChoice() {
    let possibleChoices = ['rock','paper','scissors'];
    let choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
    let choice = possibleChoices[choiceIndex];
    return choice;
}

// Third: compare it:
//     if playerOption === computerOption: draw
    
//     if playerOption === rock && computerOption === scissors: player wins 
//                                                 === paper: computer wins
    
//     if playerOption === paper && computerOption === rock: player wins
//                                                 === paper: computer wins
                                                
//     if playerOption === scissors && computerOption === paper: player wins
//                                                    === rock: computer wins
               
function singleRound() {
    if (getPlayerChoice() === getComputerChoice()) return 'draw';
    else if (getPlayerChoice() === 'rock' && getComputerChoice() ==='scissors' 
        || getPlayerChoice() === 'paper' && getComputerChoice() ==='rock' 
        || getPlayerChoice() === 'scissors' && getComputerChoice() ==='paper') return 'win';
    else return 'lose';
}
// Fourth: declare winner: ****ACTUALLY**** make a game with five rounds
//     if playerPoints > computerPoints: player wins; else: computer wins INCOMPLETE: draw is possible

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i=0; i<5; i++) {
        let result = singleRound()
        if (result === 'win') {
            playerPoints ++;
        }
        else if (result === 'lose') {
            computerPoints ++;
        }
    }
}
