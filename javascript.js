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
const buttons = document.querySelectorAll("button");
const playerScoreRef = document.querySelector("#player-score");
const computerScoreRef = document.querySelector("#computer-score");
const scorecard = document.querySelector(".scorecard");
const output = document.querySelector(".output-text");

let computerSelection;
let playerSelection; 
let playerScore = 0;
let computerScore = 0;

    buttons.forEach((button)=>(button.addEventListener("click", () => {
        playerSelection = button.id;
        computerSelection = getComputerChoice();
        game();
    })));

function playRound() {
        if (playerSelection === computerSelection) {
            output.textContent = "Both players tied this round.";
        } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                    playerSelection === "paper" && computerSelection === "rock" ||
                    playerSelection === "scissors" && computerSelection === "paper") {
            output.textContent = "Player wins this round!";
            playerScore++;
        } else {
            output.textContent = "Computer wins this round!";
            computerScore++;
        }

        playerScoreRef.textContent = "Player Score: " + playerScore;
        computerScoreRef.textContent = "Comptuer Score: " + computerScore;
}

function game() {
    playRound(playerSelection, computerSelection);
    if (playerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        output.textContent = "Player wins the game!!";
    } else if (computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        output.textContent = "Computer wins the game!!";
    }

}



