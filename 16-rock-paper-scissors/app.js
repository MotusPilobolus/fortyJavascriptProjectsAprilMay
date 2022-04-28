let playerScore = 0;
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const choice = document.querySelectorAll(".choice");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

// REFACTOR odin project RPS JS to see if I can / what I've learned so far
// function computerPlay() {
//     let index = Math.random();
//     if (index < 0.1 ) {
//         computerChoice = "rock"
//     } else if (index < 0.5)  {
//         computerChoice = "scissors"
//     } else {
//         computerChoice = "paper"
//     }
//     return computerChoice;
// }
// function buttonPlay(e) {
//     let playerSelection = e.target.dataset.id; //returns player choice
//     console.log(playerSelection);
//     playRound(playerSelection);
//     if (computerScore > 4 || playerScore > 4) {
//          if (computerScore > 4) {
//             result_div.innerHTML = ` <p> You lose! Try again next time! </p> `;
//              playerScore = 0;
//              computerScore = 0;
//             }
//          else if (playerScore > 4) {
//             result_div.innerHTML =` <p> You win! Want to play again?  </p>`;
//              playerScore = 0;
//              computerScore = 0;
//             }
//     }
//     updateScoreBoard(playerScore,computerScore);
// }
// function playRound(playerSelection) {
//     computerSelection = computerPlay(); // returns computer choice
//     const playerDraw = ` <p> It's a draw! </p> `;
//     const playerWin = ` <p> You Win! ${ playerSelection.toUpperCase() } beats ${computerSelection}! </p> `;
//     const playerLose = ` <p> You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection}! </p> `;
//     if (playerSelection == computerSelection) {
//         gameEndPhrase = playerDraw 
//     } else if (playerSelection == "rock") {
//         if (computerSelection == "scissors") {
//             gameEndPhrase = playerWin;
//             playerScore += 1;
//         } else { 
//             gameEndPhrase = playerLose;
//             computerScore += 1;
//         } 
//     } else if (playerSelection == "paper") {
//             if (computerSelection == "rock") {
//                 gameEndPhrase = playerWin;
//                 playerScore += 1;
//             } else { gameEndPhrase = playerLose;
//                 computerScore += 1;
//              }
//         } else if (playerSelection == "scissors") {
//             if (computerSelection == "paper") {
//                 gameEndPhrase = playerWin;
//                 playerScore += 1;
//             } else { gameEndPhrase = playerLose;
//                 computerScore += 1; }
//         } else { gameEndPhrase = "Something's wrong here."}
//         result_div.innerHTML=gameEndPhrase;
// }
// function updateScoreBoard(playerScore,computerScore){
//     userScore_span.textContent = playerScore;
//     computerScore_span.textContent = computerScore;
// }
// choice.forEach(button => button.addEventListener('click', buttonPlay));

function getComputerChoice() {
    const computerChoices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {return "Rock";}
    if (letter === "p") { return "Paper"};
    return "Scissors";
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ convertToWord(userChoice) }${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"),300)
}
function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${ convertToWord(computerChoice) }${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose.`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}
function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `It's a draw! ${ convertToWord(userChoice) }${smallUserWord} and ${convertToWord(computerChoice)}${smallCompWord} are the same.`
    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"),300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rp':
            win(userChoice,computerChoice);
            break;
        case 'pr':
            win(userChoice,computerChoice);
            break;
        case 'sp': 
            win(userChoice,computerChoice);
            break;
        case 'rp':
            lose(userChoice,computerChoice);
            break;
        case 'ps':
            lose(userChoice,computerChoice);
            break;
        case 'sr': 
            lose(userChoice,computerChoice);
            break;
        case 'rr':
            draw(userChoice,computerChoice);
            break;
        case 'pp':
            draw(userChoice,computerChoice);
            break;
        case 'ss':
            draw(userChoice,computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r") )
    paper_div.addEventListener("click", () => game("p") )
    scissors_div.addEventListener("click", () => game("s") )
}

main();