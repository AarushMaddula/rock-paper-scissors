const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt("Pick Rock, Paper, or Scissors: ");
}

function playRound(humanChoice, computerChoice) {
    let formatedHumanChoice = humanChoice.toLowerCase().trim();
    let roundString = "";

    if (formatedHumanChoice === computerChoice) roundString = `Tie! ${formatedHumanChoice} ties with ${computerChoice}`;
    else if (
        formatedHumanChoice === "rock" && computerChoice === "scissors" ||
        formatedHumanChoice === "paper" && computerChoice === "rock" ||
        formatedHumanChoice === "scissors" && computerChoice === "paper"
    ) {
        roundString = `You Win! ${formatedHumanChoice} beats ${computerChoice}`;
        humanScore++
    } else {
        roundString = `You Lose! ${computerChoice} beats ${formatedHumanChoice}`;
        computerScore++;
    } 

    alert(roundString);
}

playRound(getHumanChoice(), getComputerChoice());