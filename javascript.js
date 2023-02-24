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
    if (roundResult === "win" || roundResult === "lose") roundResults.push(roundResult);

    if (roundResults.length === 5) {
        completeGame();
        restartGame();
    };  
};

let roundResults = [];

function getWinner (results) {
    let wins = results.filter(result => result === "win");
    let loses = results.filter(result => result === "lose");

    if (wins.length > loses.length) return "human"
    else return "computer";
};

function showWinner (winner) { //Simple version
    console.log(winner);

    if (winner === "human") {
        let computerImg = document.querySelector(".result.computer").children[0];
        computerImg.src = "imgs/monitor.png";
    } else {
        let humanImg = document.querySelector(".result.human").children[0];
        humanImg.src = "imgs/impatient.png";
    }
};

function completeGame () {
    let winner = getWinner(roundResults);
    showWinner(winner);
};

function clearResults () {
    document.querySelector(".option.rounds").textContent = "";
    let computerResultDiv = document.querySelector(".result.computer").children[1];
    let humanResultDiv = document.querySelector(".result.human").children[1];
    computerResultDiv.className = "option";
    humanResultDiv.className = "option";
}

function restartGame() {
    clearResults();
    roundResults = [];
}

const options = document.querySelectorAll("#rock, #paper, #scissors");
options.forEach((option) => option.addEventListener("mousedown",singleRound));

const h1 = document.querySelector('h1');
h1.addEventListener("mousedown", restartGame);