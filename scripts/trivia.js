import { elements } from './elements.js';
const question = document.querySelector('#question');
const board = document.querySelector('#board');

//Capitalize the first letter of a word
function capitalize(e) {
    const firstLetter = e.charAt(0);
    const upper = firstLetter.toUpperCase();
    const lower = e.slice(1);
    const word = upper + lower;
    return word;
}

let answer = "";

//Display the full element information
function elementInfo(e) {
    let property = Object.keys(elements)[e];

    let elementName = document.createElement('div');
    elementName.textContent = capitalize(property);

    let elementChoice = document.createElement('div');
    elementChoice.id = e + 1;
    elementChoice.classList.add('element-choice');
    elementChoice.style.fontSize = '18px';

    let elementSymbol = document.createElement('div');
    elementSymbol.textContent = elements[property].symbol;
    elementSymbol.style.fontSize = '24px';
    elementSymbol.style.fontWeight = 'bold';

    let elementState = elements[property].state;
    if (elementState == 'liquid') {
        elementChoice.classList.add('liquid');
    } else if (elementState == 'solid') {
        elementChoice.classList.add('solid');
    } else {
        elementChoice.classList.add('gas');
    }

    let elementWeight = document.createElement('div');
    elementWeight.textContent = elements[property].weight;
    elementWeight.style.fontSize = '14px';

    let elementEnergyLevel = document.createElement('div');
    let stringEnergyLevels = elements[property].energyLevels;
    let addLevels = 0;
    for (let i = 0; i < stringEnergyLevels.length; i++) {
        addLevels = addLevels + Number(stringEnergyLevels[i]);
    }
    elementEnergyLevel.textContent = addLevels;

    let button = document.createElement('button');
    button.addEventListener('click', function(e) {
        if (elementChoice.id == answer) {
            console.log('Correct!');
        } else {
            console.log('Try again...');
        }
    })

    elementChoice.append(elementEnergyLevel, elementSymbol, elementName, elementWeight, button);

    board.appendChild(elementChoice);
}

function generateChoices() {
    let dupeElements = elements;
    let choices = [];

    for (let i = 0; i < 6; i++) {
        let arr = Math.floor((Math.random() * Object.keys(dupeElements).length));
        let thisElement = Object.keys(dupeElements)[arr];
        
        if (choices.includes(thisElement)) {
            i--;
        } else {
            choices.push(arr + 1);
            elementInfo(arr);
        }
    }

    let setAnswer = Math.floor(Math.random() * 6);
    answer = choices[setAnswer].toString();
    const q = `Which element's energy level is ${answer}?`
    question.append(q);
    console.log(answer);
}

generateChoices();
