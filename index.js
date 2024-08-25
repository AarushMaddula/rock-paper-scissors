let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    let formatedHumanChoice = toTitleCase(humanChoice.toLowerCase().trim());

    if (formatedHumanChoice === computerChoice) {
        updateUI("tie", formatedHumanChoice, computerChoice);
    } else if (
        formatedHumanChoice === "Rock" && computerChoice === "Scissors" ||
        formatedHumanChoice === "Paper" && computerChoice === "Rock" ||
        formatedHumanChoice === "Scissors" && computerChoice === "Paper"
    ) {
        humanScore++;
        updateUI("human", formatedHumanChoice, computerChoice);
    } else {
        computerScore++;
        updateUI("computer", formatedHumanChoice, computerChoice);
    } 
}

function updateUI(winner, humanChoice, computerChoice) {
    if (winner === "human") {
        setResultText("You Win!");
        setResultDetails(`${humanChoice} beats ${computerChoice}`);
    } else if (winner === "computer"){
        setResultText("You Lost!");
        setResultDetails(`${computerChoice} beats ${humanChoice}`);
    } else {
        setResultText("Tie!");
        setResultDetails(`${humanChoice} ties with ${computerChoice}`);
    }

    setIcons(humanChoice, computerChoice);
    setScores();
}

function textToIcon(string) {
    switch (string.toLowerCase()){
        case "rock": 
            return "🪨"; 
        case "paper": 
            return "📄"; 
        case "scissors": 
            return "✂️"; 
        default:
            return "ERROR";    
    }
}

function setResultText(string) {
    const resultText = document.querySelector(".result-text");
    resultText.innerText = string;
}

function setResultDetails(string) {
    const resultDetail = document.querySelector(".result-detail");
    resultDetail.innerText = string;
}

function setIcons(humanChoice, computerChoice) {
    const humanIconElement = document.querySelector(".human-choice-icon");
    const computerIconElement = document.querySelector(".computer-choice-icon");

    humanIconElement.innerText = textToIcon(humanChoice);
    computerIconElement.innerText = textToIcon(computerChoice);
}

function setScores() {
    const humanScoreElement = document.querySelector(".human-score");
    const computerScoreElement = document.querySelector(".computer-score");

    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore; 
}

function toTitleCase(string) {
    return string.toLowerCase().split(" ").map((word) => 
        word.at(0).toUpperCase() + word.slice(1)
    ).join(" ");

    //credit: geeksforgeeks
}


const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        playRound(choice.dataset.option, getComputerChoice());
    })
})




