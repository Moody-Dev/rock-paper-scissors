const startGame = document.querySelector('#startGame');
const container = document.querySelector('#container');
let getPlayerPoints = 0;
let getComputerPoints = 0;
let gameTie = '';

//Start The Game
startGame.addEventListener('click', (e) => {
  e.target.setAttribute('class', 'hidden');

  const buttons = ['Rock', 'Paper', 'Scissor'];
  const buttonContainer = document.createElement('div');
  buttonContainer.setAttribute('class', 'buttonContainer');
  const resultContainer = document.createElement('div');
  resultContainer.setAttribute('id', 'resultContainer');
  const playerScoreContainer = document.createElement('div');
  playerScoreContainer.setAttribute('id', 'playerScoreContainer');
  const computerScoreContainer = document.createElement('div');
  computerScoreContainer.setAttribute('id', 'computerScoreContainer');
  const tieContainer = document.createElement('div');
  tieContainer.setAttribute('id', 'tieContainer');

  for (const button of buttons) {
    const createButton = document.createElement('button');
    createButton.textContent = button;
    createButton.setAttribute('name', `${button}`);
    buttonContainer.appendChild(createButton);
    container.appendChild(buttonContainer);


    createButton.addEventListener('click', (e) => {
      const playerSelection = e.target.getAttribute('name');
      const computerSelection = buttons[Math.floor(Math.random() * buttons.length)];

      switch (true) {
        case (playerSelection === computerSelection):
          tieContainer.textContent = gameTie = 'Tie';
          break;
        case (
          (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
          (playerSelection === 'Scissor' && computerSelection === 'Paper') ||
          (playerSelection === 'Paper' && computerSelection === 'Rock')
        ):
          playerScoreContainer.textContent = getPlayerPoints++;
          break;
        case (
          (computerSelection === 'Rock' && playerSelection === 'Scissor') ||
          (computerSelection === 'Scissor' && playerSelection === 'Paper') ||
          (computerSelection === 'Paper' && playerSelection === 'Rock')
        ):
          computerScoreContainer.textContent = getComputerPoints++;
          break;
      }

      resultContainer.append(playerScoreContainer, tieContainer, computerScoreContainer);
      container.appendChild(resultContainer);

      if (getPlayerPoints === 6 || getComputerPoints === 6) {
        container.removeChild(buttonContainer);
        if (getPlayerPoints > getComputerPoints) {
          container.append('You Won The Game, Let\'s Play Again');
        } else
          container.append('You Lose, Play Again, Don\'t Let The Machine Beats You')
      }
    })
  }
});