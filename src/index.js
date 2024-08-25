const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt("Pick Rock, Paper, or Scissors: ");
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`Player score: ${humanScore} | Computer score: ${computerScore}`);
}


playGame();

