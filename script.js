let rounds = 5;
let playerScore = 0;
let computerScore = 0;
// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3); // Randomly choose 0, 1, or 2
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

// Function to start the game
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase(); // Ensure case doesn't matter
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
}
function playGame(){
    playerScore = 0;
    computerScore = 0;
    for (i=0; i<rounds; i++){
        const computerChoice = getComputerChoice();
        const userChoice = prompt("Enter rock, paper, or scissors:");
        playRound(userChoice, computerChoice);
    }
    console.log("Final results:");
    console.log("You: "+playerScore+" Computer: "+computerScore);
}
playGame();
