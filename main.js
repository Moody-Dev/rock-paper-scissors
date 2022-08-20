const startGame = document.querySelector('#container');
startGame.addEventListener('click', playRound)


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
// const playerScore = document.querySelector('#playerScore');
// const computerScore = document.querySelector('#computerScore');
const computerChoice = document.querySelector('#computerChoice');



const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  // Get Player Choice
  button.addEventListener('click', () => {
    const playerValue = button.getAttribute('name');
    const playerChoice = document.createElement('div');
    // playerChoice.textContent = `You Choose The: ${playerValue}`;
    // result.appendChild(playerChoice);

    const playerSelection = playerValue;
    return playerSelection;
  });

  // Get Computer Choice
  button.addEventListener('click', () => {
    const gameChoice = ['rock', 'paper', 'scissor'];
    const randomChoice = gameChoice[Math.floor(Math.random() * gameChoice.length)];
    const computerSelection = randomChoice;
    return computerSelection;

    // return randomChoice;
  });

  function playRound(playerSelection, computerSelection) {
    // answers.setAttribute('id', 'answers');
    // answers.textContent = [];
    switch (true) {
      case (playerSelection === computerSelection):
        // const answers = document.createElement('div');
        const p = document.createElement('p');
        p.textContent = 'Game Tie, Plese try again.';
        answers.appendChild('p')
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
  playRound();
});
// function playRound(playerSelection, computerSelection) {
//     switch (true) {
//         case (playerSelection === computerSelection):
//             console.log('Game Tie, please try again.');
//             break;
//         case (playerSelection === 'rock' && computerSelection === 'scissor'):
//             let greetingRock = `You Choose: ${playerSelection} and`;
//             console.log(`${greetingRock} You Win, Rock beats the scissor`);
//             break;
//         case (playerSelection === 'rock' && computerSelection === 'paper'):
//             let courageRock = `You Choose: ${playerSelection} and`;
//             console.log(`${courageRock} You Lose, Paper beats the Rock`);
//             break;
//         case (playerSelection === 'scissor' && computerSelection === 'rock'):
//             let courageScissor = `You Choose: ${playerSelection} and`;
//             console.log(`${courageScissor} You Lose, Rock beats the scissor`);
//             break;
//         case (playerSelection === 'scissor' && computerSelection === 'paper'):
//             let greetingScissor = `You Choose: ${playerSelection} and`;
//             console.log(`${greetingScissor} You Win, Scissor beats the Paper`);
//             break;
//         case (playerSelection === 'paper' && computerSelection === 'scissors'):
//             let couragePaper = `You Choose: ${playerSelection} and`;
//             console.log(`${couragePaper} You Lose, Scissor beats the Paper`);
//             break;
//         case (playerSelection === 'paper' && computerSelection === 'rock'):
//             let greetingPaper = `You Choose: ${playerSelection} and`;
//             console.log(`${greetingPaper} You Win, Paper beats the Rock`);
//             break;
//     }
// }

// function getPlayerChoice() {
//     const userValue = prompt('Choose your Item:', '').toLowerCase();
//     if (userValue == null || userValue == '') {
//         prompt('Please choose one of: Rock, Paper, Scissor');
//     }
//     const playerSelection = userValue;
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
// }

// function game() {
//     let playAgain;
//     for (let i = 0; i < 5; i++) {
//         playAgain = getPlayerChoice();
//     }
// }
// game()

