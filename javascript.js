// First: Input player Option and save it in a variable

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
                                                   
// Fourth: declare winner:
//     if playerPoints > computerPoints: player wins; else: computer wins