const startGame = document.querySelector('#subBtn');
startGame.addEventListener('click', (e) => {
  e.target.setAttribute('id', 'hidden');
  //const subBtn = document.querySelector('#subBtn');
  //subBtn.setAttribute('id', 'hidden');

  //Create Buttons
  const buttons = ['Rock', 'Paper', 'Scissor']
  const container = document.querySelector('#container');
  const btnContainer = document.createElement('div');
  for (const button of buttons) {
    const createBtn = document.createElement('button');
    createBtn.textContent = button;
    createBtn.setAttribute('name', `${button}`);
    btnContainer.setAttribute('class', 'btnContainer');
    btnContainer.append(createBtn);
    container.appendChild(btnContainer);

    //Get Value form Player and Computer
    createBtn.addEventListener('click', (e) => {
      const playerSelection = e.target.getAttribute('name');
      const computerSelection = () => {
        for (const value of buttons) {
          console.log(value);
        }
      }
      console.log(computerSelection);
      console.log(playerSelection);


      //Comparison for both Values
      const answersContainer = document.createElement('div');
      const answer = document.createElement('p');
      answer.setAttribute('id', 'answer')
      answer.textContent = [`You Selection: ${playerSelection}, Computer Selection: ${computerSelection}`];
      answersContainer.appendChild(answer);
      container.appendChild(answersContainer);
      switch (true) {
        case (playerSelection === computerSelection):
          //answer.textContent = ['']
          const tie = 'Game Tie, try again.'
      }
    })
  }

})



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

