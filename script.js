let rounds = 5;
let playerScore = 0;
let computerScore = 0;
let currentRound = 0; // Track the number of rounds played
let points = document.querySelector("#header");

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
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

// Function to play a single round
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
    points.textContent =`You: ${playerScore} Computer: ${computerScore}`;
    console.log(`results: You: ${playerScore} Computer: ${computerScore}`);
    /* currentRound++;
    if (currentRound >= rounds) {
        console.log("Game over!");
        console.log(`Final results: You: ${playerScore} Computer: ${computerScore}`);
        
    } */
}

// Add event listener to the menu for user interaction
function setupGame() {
    const menu = document.querySelector('#container');
    menu.addEventListener('click', (event) => {
        const target = event.target;
        let userChoice = "";

        if (target.classList.contains('rock')) {
            userChoice = "rock";
        } else if (target.classList.contains('paper')) {
            userChoice = "paper";
        } else if (target.classList.contains('scissors')) {
            userChoice = "scissors";
        }

        if (userChoice) {
            playRound(userChoice);
        }
    });
}

// Start the game setup
setupGame();
