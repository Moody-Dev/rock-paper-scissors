const startGame = document.querySelector('#subBtn');
startGame.addEventListener('click', (e) => {
  e.target.setAttribute('id', 'hidden');
  //const subBtn = document.querySelector('#subBtn');
  //subBtn.setAttribute('id', 'hidden');

  //Create & Get Buttons
  const buttons = ['Rock', 'Paper', 'Scissor']
  const container = document.querySelector('#container');
  const btnContainer = document.createElement('div');
  const answersContainer = document.createElement('div');
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
      const buttons = ['Rock', 'Paper', 'Scissor']
      const computerSelection = buttons[Math.floor(Math.random() * buttons.length)];

      //Comparison for both Values
      const answer = document.createElement('p');
      const gameTie = `Game Tie: Your Selection: ${playerSelection}, Computer Selection: ${computerSelection}`
      const youWin = `You Win: Your Selection: ${playerSelection}, Computer Selection: ${computerSelection}`;
      const youLose = `You Lose: Your Selection: ${playerSelection}, Computer Selection: ${computerSelection}`;
      answer.setAttribute('id', 'answer')

      switch (true) {
        case (playerSelection === computerSelection):
          answer.textContent = gameTie;
          break;
        case (playerSelection === 'Rock' && computerSelection === 'Scissor'):
          answer.textContent = youWin;
          break;
        case (playerSelection === 'Rock' && computerSelection === 'Paper'):
          answer.textContent = youLose;
          break;
        case (playerSelection === 'Scissor' && computerSelection === 'Paper'):
          answer.textContent = youWin;
          break;
        case (playerSelection === 'Scissor' && computerSelection === 'Rock'):
          answer.textContent = youLose;
          break;
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
          answer.textContent = youWin;
          break;
        case (playerSelection === 'Paper' && computerSelection === 'Scissor'):
          answer.textContent = youLose;
          break;
      }

      //Set Comparison Answer
      answersContainer.appendChild(answer);
      container.appendChild(answersContainer);


    })
  }

})