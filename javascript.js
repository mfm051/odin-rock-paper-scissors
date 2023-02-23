function singleRound(event) {
    
    function getComputerChoice() {
        let possibleChoices = ['rock','paper','scissors'];
        let choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
        let choice = possibleChoices[choiceIndex];
        return choice;
    };

    function printChoice(player) {
        let resultDiv = document.querySelector(`.result.${player}`).children[1];
        if (player === "human") resultDiv.className = `option ${humanChoice}`
        else if (player === "computer") resultDiv.className = `option ${computerChoice}`
        else return false;
    }

    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    printChoice('human');
    printChoice('computer');    

    function getResult(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return 'draw';
        else if (   humanChoice === 'rock' && computerChoice ==='scissors' ||
                    humanChoice === 'paper' && computerChoice ==='rock' ||
                    humanChoice === 'scissors' && computerChoice ==='paper') return 'win';
        else return 'lose';
    }

    getResult(humanChoice, computerChoice);
}

const options = document.querySelectorAll("#rock, #paper, #scissors");
options.forEach((option) => {   option.addEventListener("mousedown",singleRound);
                                // option.addEventListener("mouseup",getComputerChoice);
                            }
                );


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
