// console.log('Hello World');
// Algorithm
// 1- Assing Values to Rock Paper and Scissors
    // make a rock to beat the scissors
    // make a paper to beat the rock
    // make a scissors to beat the paper
// 2- Get Computer Choice
// 3- Get Player choice
// 4- Winner greetings!
// 5- Loser courage
// 6- 5 lives!
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
            console.log('Game Tie, please try again.');
            break;
        case (playerSelection === 'rock' && computerSelection === 'scissor'):
            let greetingRock = `You Choose: ${playerSelection} and`;
            console.log(`${greetingRock} You Win, Rock beats the scissor`);
            break;
        case (playerSelection === 'rock' && computerSelection === 'paper'):
            let courageRock = `You Choose: ${playerSelection} and`;
            console.log(`${courageRock} You Lose, Paper beats the Rock`);
            break;
        case (playerSelection === 'scissor' && computerSelection === 'rock'):
            let courageScissor = `You Choose: ${playerSelection} and`;
            console.log(`${courageScissor} You Lose, Rock beats the scissor`);
            break;
        case (playerSelection === 'scissor' && computerSelection === 'paper'):
            let greetingScissor = `You Choose: ${playerSelection} and`;
            console.log(`${greetingScissor} You Win, Scissor beats the Paper`);
            break;
        case (playerSelection === 'paper' && computerSelection === 'scissors'):
            let couragePaper = `You Choose: ${playerSelection} and`;
            console.log(`${couragePaper} You Lose, Scissor beats the Paper`);
            break;
        case (playerSelection === 'paper' && computerSelection === 'rock'):
            let greetingPaper = `You Choose: ${playerSelection} and`;
            console.log(`${greetingPaper} You Win, Paper beats the Rock`);
            break;
    }
}

function getPlayerChoice() {
    const userValue = prompt('Choose your Item:', '').toLowerCase();
    if (userValue == null || userValue == '') {
        prompt('Please choose one of: Rock, Paper, Scissor');
    }
    const playerSelection = userValue;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

function game() {
    let playAgain;
    for (let i = 0; i < 5; i++) {
        playAgain = getPlayerChoice();
    }
}
game()

// function game() {
//     const userValue = prompt('Choose your Item:', '').toLowerCase();
//     if (userValue == null || userValue == '') {
//         prompt('Please choose one of: Rock, Paper, Scissor');
//     }
//     const playerSelection = userValue;
//     const computerSelection = getComputerChoice();
//     for (let i = 0; i < 5; i++) {
//         this.userValue;
//     }
// }
// let userValue = prompt('Choose your Item:', '').toLowerCase();
// if( userValue == null || userValue == "") {
//     prompt('Please Choose one of: Rock, Paper, scissor')
// }
// const playerSelection = userValue;
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection))


// function game() {
//     for ( let i = 0; i < 5; i++ ) {
//     }
// }
// console.log(game());