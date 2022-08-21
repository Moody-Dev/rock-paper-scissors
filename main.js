const startGame = document.querySelector('#subBtn');
startGame.addEventListener('click', (e) => {
  e.target.setAttribute('class', 'hidden');
  //const subBtn = document.querySelector('#subBtn');
  //subBtn.setAttribute('id', 'hidden');


  // Variables
  const buttons = ['Rock', 'Paper', 'Scissor']
  const container = document.querySelector('#container');
  const btnContainer = document.createElement('div');
  const answersContainer = document.createElement('div');
  answersContainer.setAttribute('id', 'ansDiv')


  //Create & Get Buttons
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
      answer.setAttribute('class', 'answer')

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


      // Get Comparison Answer
      answersContainer.appendChild(answer);
      container.appendChild(answersContainer);


      // Set The Answers
      const setAnswers = answersContainer.childNodes;
      if (6 <= setAnswers.length) {
        const resultContainer = document.createElement('div');
        resultContainer.setAttribute('id', 'resultContainer');
        container.removeChild(answersContainer);
        container.removeChild(btnContainer);
        container.appendChild(resultContainer);
        startGame.removeAttribute('class', 'hidden');
        startGame.textContent = 'Start Again';
      }



        const greetings = 'You Win The Game!';
        const farewell = 'You Lose, You May Try Again!';
        const tieGame = 'Thats Awful, Game Has Tie, Try Again!';


        //if (setAnswers[tieGame] > setAnswers[youWin] || setAnswers[tieGame] > setAnswers[youWin]) {
        //  resultContainer.textContent = gameTie;
        //} else if (setAnswers[youWin] > setAnswers[youLose] || setAnswers[youWin] > setAnswers[tieGame]) {
        //  resultContainer.textContent = greetings;
        //} else if (setAnswers[youLose] > setAnswers[youWin] || setAnswers[youLose] > setAnswers[tieGame]) {
        //  resultContainer.textContent = farewell;
        //}


        //answersContainer.removeChild(answer);
        //answer.textContent = ' ';
        //startGame.textContent = 'Start Again';
        //answer.append('Hooray! You Win The Game');
        //answersContainer.appendChild(answer)
      //const getAnsValues = answersContainer.childNodes;
      //const values = getAnsValues;
      //for (let i = 1; i < values.length; i++) {
      //  if (i === 5) {
      //    const result = ''
      //    const removeAnswersContainer = document.replaceChild(answer,)

      //    answersContainer.removeChild(answer);
      //    answer.textContent = '';
      //    startGame.textContent = 'Start Again';
      //    answer.append = 'You Win'
      //  }
      //}
      //const answerValue = document.querySelector('#ansDiv').nodeValue;
      ////const firstChild = answerValue.firstChild.p;
      //console.log(firstChild)


      //Round Selection

    })
  }

})