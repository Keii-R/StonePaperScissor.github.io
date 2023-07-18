const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let computerChoice;
let userChoice;
let result;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => 
{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    console.log(randomNumber);

    if(randomNumber === 1)
    {
        computerChoice = 'ROCK';
    }
    if (randomNumber === 2)
    {
        computerChoice = 'PAPER';
    }
    if(randomNumber === 3)
    {
        computerChoice = 'SCISSOR';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
      result = "It's a draw!";
    } else if (
      (computerChoice === "ROCK" && userChoice === "PAPER") ||
      (computerChoice === "PAPER" && userChoice === "SCISSOR") ||
      (computerChoice === "SCISSOR" && userChoice === "ROCK")
    ) {
      result = "You Win!";
    } else {
      result = "You Lose!";
    }
    resultDisplay.innerHTML = result;
  }
  