// console.log('Hello World');
// Algorithm
// 1- Assing Values to Rock Paper and Scissors
    // make a rock to beat the scissors
    // make a paper to beat the rock
    // make a scissors to beat the paper
// 2- Get Computer Choice
// 3- Get Player choice
// 4- 5 lives to win!
// 5- Winner greetings!
// 6- Loser courage
// 7- Start again

function getComputerChoice() {
    const gameChoice = ['rock', 'paper', 'scissor'];
    const randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
    // console.log(randomChoice);
    return randomChoice;
}
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            return console.log('Game Tie, please try again.');
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissor'):
            let greetingRock = `You Choose: ${playerSelection} and`;
            return console.log(`${greetingRock} You Win, Rock beats the scissor`);
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            let courageRock = `You Choose: ${playerSelection} and`;
            return console.log(`${courageRock} You Lose, Paper beats the Rock`);
            break;
        case (playerSelection === 'scissor' && computerSelection === 'rock'):
            let courageScissor = `You Choose: ${playerSelection} and`;
            return console.log(`${courageScissor} You Lose, Rock beats the scissor`);
            break;
        case (playerSelection === 'scissor' && computerSelection === 'paper'):
            let greetingScissor = `You Choose: ${playerSelection} and`;
            return console.log(`${greetingScissor} You Win, Scissor beats the Paper`);
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            let couragePaper = `You Choose: ${playerSelection} and`;
            return console.log(`${couragePaper} You Lose, Scissor beats the Paper`);
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            let greetingPaper = `You Choose: ${playerSelection} and`;
            return console.log(`${greetingPaper} You Win, Paper beats the Rock`);
            break;
    }
}
let userValue = prompt('Choose your Item:', '')
if( userValue == null || userValue == "") {
    prompt('Please Choose one of: Rock, Paper, scissor')
}
const playerSelection = userValue;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
