import { elements } from './elements.js';
const question = document.querySelector('#question');
const board = document.querySelector('#board');
const playAgain = document.querySelector('#play-again');

let answer = "";

function refresh(e) {
    e = elements;
}

function choices(e) {
    let property = Object.keys(elements)[e];

    let elementChoice = document.createElement('div');
    elementChoice.id = property;
    elementChoice.classList.add('element-choice');
    elementChoice.style.fontSize = '36px';
    elementChoice.style.fontWeight = 'bold';
    elementChoice.style.alignItems = 'center';
    elementChoice.style.textAlign = 'center';

    let playAgainButton = document.createElement('button');
    playAgainButton.style.backgroundColor = 'blue';
    playAgainButton.style.color = 'white';
    playAgainButton.textContent = 'Play Again?';
    playAgainButton.id = 'play-again-button';
    playAgainButton.addEventListener('click', generateChoices());

    let button = document.createElement('button');
    button.textContent = elements[property].symbol;
    button.style.fontSize = '36px';
    button.style.fontWeight = 'bold';
    button.style.background = 'rgb(197,197,197)';
    button.addEventListener('click', function(e) {
        if (elementChoice.id == answer) {
            console.log('Correct!');
            button.style.backgroundColor = '#5f5';
            button.style.borderColor = '#5f5';
            playAgain.appendChild(playAgainButton);
        } else {
            console.log('Try again...');
            button.style.backgroundColor = '#f55';
            button.style.borderColor = '#f55';
        }
    })

    elementChoice.append(button);

    board.appendChild(elementChoice);
}

function generateChoices() {
    let dupeElements = elements;
    let pickElements = [];

    for (let i = 0; i < 6; i++) {
        let arr = Math.floor((Math.random() * Object.keys(dupeElements).length));
        const thisChoice = Object.keys(dupeElements);
        pickElements.push(thisChoice[arr]);
        choices(arr);
        const propertyToDelete = thisChoice[arr];
        delete dupeElements[propertyToDelete];
    }

    refresh(dupeElements);

    let setAnswer = Math.floor(Math.random() * 6);
    answer = pickElements[setAnswer];
    const q = `Which element's energy level is ${answer}?`
    question.append(q);
    console.log(answer);
}

generateChoices();
