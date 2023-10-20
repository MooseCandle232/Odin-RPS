function getComputerChoice() {
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    let computerChoice;
    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

const computerSelection = getComputerChoice();
let playerSelection; 
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose: rock, paper, scissors");
 
    if (playerSelection.toLowerCase() === computerSelection) {
        return "You tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ||
                playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ||
                playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!");
    }
}

game();


