let gameResults = []

function singleRound(event) {
    let humanChoice = event.target.id;

    function getComputerChoice() {
        let possibleChoices = ['rock','paper','scissors'];
        let choiceIndex = Math.floor(Math.random()*3); // random int between 0 and 2
        let choice = possibleChoices[choiceIndex];
        return choice;
    };

    let computerChoice = getComputerChoice();

    function printChoice(player) {
        let resultDiv = document.querySelector(`.result.${player}`).children[1];
        if (player === "human") resultDiv.className = `option ${humanChoice}`
        else if (player === "computer") resultDiv.className = `option ${computerChoice}`
        else return false;
    }

    printChoice('human');
    printChoice('computer');    

    function getResult(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return 'draw';
        else if (   humanChoice === 'rock' && computerChoice ==='scissors' ||
                    humanChoice === 'paper' && computerChoice ==='rock' ||
                    humanChoice === 'scissors' && computerChoice ==='paper') return 'win';
        else return 'lose';
    }

    let roundResult = getResult(humanChoice, computerChoice);

    function showResult (result) {
        if (result === 'win') {
            let img = document.createElement("img");
            img.src = "imgs/win.png";
            document.querySelector(".option.rounds").appendChild(img);
        } else if (result === 'lose') {
            let img = document.createElement("img");
            img.src = "imgs/lose.png";
            document.querySelector(".option.rounds").appendChild(img);
        };
    }

    showResult(roundResult);

    if (roundResult === "win" || roundResult === "lose") gameResults.push(roundResult);

    function getWinner (results) {
       let winArray = results.filter(result => result === "win");
       let loseArray = results.filter(result => result === "lose");
       if (winArray.length > loseArray.length) return "human"
       else return "computer";
    }

    function restartGame () {
        document.querySelector(".option.rounds").textContent = "";
    }

    if (gameResults.length === 5) {
        console.log(getWinner(gameResults));
        gameResults = [];
        restartGame();
    }  
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
