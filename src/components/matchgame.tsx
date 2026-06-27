import { useState } from 'react';
import styles from '../styles/matchgame.module.css';
import elements from '../assets/elements.tsx';

const allElements = Object.values(elements);
let choices: any = [];
let randomizeSymbols: any = [];
let randomizeNames: any = [];
let randomizedElements = randomizeSymbols.concat([...randomizeNames]);
let selection: any = [];
let firstChoice = '';
let firstChoiceId = '';

function generateElements(e: any) {
    choices = [];
    randomizeSymbols = [];
    randomizeNames = [];
    let randomSymbols: any = [];
    let randomNames: any = [];
    let num: number = e.length;
    
    for (let i = 0; i < 8; i++) {
        let choiceIndex: number = Math.floor(Math.random() * num);

        if (choices.includes(choiceIndex)) {
            i--;
        } else {
            choices.push(choiceIndex);
        }
    }

    for (let r = 0; r < 2; r++) {
        if (r == 0) {
            for (let c = 0; c < choices.length; c++) {
                randomSymbols.push([choices[c], 's']);
            }
        } else if (r == 1) {
                for (let c = 0; c < choices.length; c++) {
                    randomNames.push([choices[c], 'n']);
                }
        }
    }

    for (let s = 0; s < 8; s++) {
        let randomIndex: number = Math.floor(Math.random() * randomSymbols.length);
        let randomElement: number = randomSymbols[randomIndex];
        randomizeSymbols.push(randomElement);
        randomSymbols.splice(randomIndex, 1);
    }

    for (let n = 0; n < 8; n++) {
        let randomIndex: number = Math.floor(Math.random() * randomNames.length);
        let randomElement: number = randomNames[randomIndex];
        randomizeNames.push(randomElement);
        randomNames.splice(randomIndex, 1);
    }

    randomizedElements = randomizeSymbols.concat([...randomizeNames]);
}

function handleSelection(e: any, id: any) {
    if (firstChoice == '') {
        firstChoice = e;
        firstChoiceId = id;
    } else if (firstChoice == e) {
        console.log('Correct!');
        document.getElementById(id)?.classList.add(styles.correctanswer);
        document.getElementById(firstChoiceId)?.classList.add(styles.correctanswer);
        firstChoice = '';
        firstChoiceId = '';
    } else {
        console.log('Incorrect...');
        console.log(firstChoice, e);
        firstChoice = '';
        firstChoiceId = '';
    }
}

const MatchGame = () => {
    generateElements(allElements);
    
    const [blockOne, setBlockOne] = useState(allElements[randomizedElements[0][0]].symbol);
    const [valueOne, setValueOne] = useState(allElements[randomizedElements[0][0]].symbol);
    const [blockTwo, setBlockTwo] = useState(allElements[randomizedElements[1][0]].symbol);
    const [valueTwo, setValueTwo] = useState(allElements[randomizedElements[1][0]].symbol);
    const [blockThree, setBlockThree] = useState(allElements[randomizedElements[2][0]].symbol);
    const [valueThree, setValueThree] = useState(allElements[randomizedElements[2][0]].symbol);
    const [blockFour, setBlockFour] = useState(allElements[randomizedElements[3][0]].symbol);
    const [valueFour, setValueFour] = useState(allElements[randomizedElements[3][0]].symbol);
    const [blockFive, setBlockFive] = useState(allElements[randomizedElements[4][0]].symbol);
    const [valueFive, setValueFive] = useState(allElements[randomizedElements[4][0]].symbol);
    const [blockSix, setBlockSix] = useState(allElements[randomizedElements[5][0]].symbol);
    const [valueSix, setValueSix] = useState(allElements[randomizedElements[5][0]].symbol);
    const [blockSeven, setBlockSeven] = useState(allElements[randomizedElements[6][0]].symbol);
    const [valueSeven, setValueSeven] = useState(allElements[randomizedElements[6][0]].symbol);
    const [blockEight, setBlockEight] = useState(allElements[randomizedElements[7][0]].symbol);
    const [valueEight, setValueEight] = useState(allElements[randomizedElements[7][0]].symbol);
    const [blockNine, setBlockNine] = useState(allElements[randomizedElements[8][0]].name);
    const [valueNine, setValueNine] = useState(allElements[randomizedElements[8][0]].symbol);
    const [blockTen, setBlockTen] = useState(allElements[randomizedElements[9][0]].name);
    const [valueTen, setValueTen] = useState(allElements[randomizedElements[9][0]].symbol);
    const [blockEleven, setBlockEleven] = useState(allElements[randomizedElements[10][0]].name);
    const [valueEleven, setValueEleven] = useState(allElements[randomizedElements[10][0]].symbol);
    const [blockTwelve, setBlockTwelve] = useState(allElements[randomizedElements[11][0]].name);
    const [valueTwelve, setValueTwelve] = useState(allElements[randomizedElements[11][0]].symbol);
    const [blockThirteen, setBlockThirteen] = useState(allElements[randomizedElements[12][0]].name);
    const [valueThirteen, setValueThirteen] = useState(allElements[randomizedElements[12][0]].symbol);
    const [blockFourteen, setBlockFourteen] = useState(allElements[randomizedElements[13][0]].name);
    const [valueFourteen, setValueFourteen] = useState(allElements[randomizedElements[13][0]].symbol);
    const [blockFifteen, setBlockFifteen] = useState(allElements[randomizedElements[14][0]].name);
    const [valueFifteen, setValueFifteen] = useState(allElements[randomizedElements[14][0]].symbol);
    const [blockSixteen, setBlockSixteen] = useState(allElements[randomizedElements[15][0]].name);
    const [valueSixteen, setValueSixteen] = useState(allElements[randomizedElements[15][0]].symbol);

    function shuffle(e: any) {
        generateElements(allElements);

        selection = [];
        
        for (let i = 0; i < 16; i++) {
            let randomIndex: number = Math.floor(Math.random() * e.length);

            if (e[randomIndex][1] == 's') {
                selection.push([allElements[e[randomIndex][0]].symbol, allElements[e[randomIndex][0]].symbol]);
                e.splice(randomIndex, 1);
            } else {
                selection.push([allElements[e[randomIndex][0]].name, allElements[e[randomIndex][0]].symbol]);
                e.splice(randomIndex, 1);
            }
        }
    }

    function resetClasses() {
        const correctAnswers = document.querySelectorAll(`.${styles.correctanswer}`);

        correctAnswers.forEach(correctAnswer => {
            correctAnswer.classList.remove(`${styles.correctanswer}`);
        })
    }

    function setElements() {
        shuffle(randomizedElements);
        
        setBlockOne(selection[0][0]);
        setValueOne(selection[0][1]);
        setBlockTwo(selection[1][0]);
        setValueTwo(selection[1][1]);
        setBlockThree(selection[2][0]);
        setValueThree(selection[2][1]);
        setBlockFour(selection[3][0]);
        setValueFour(selection[3][1]);
        setBlockFive(selection[4][0]);
        setValueFive(selection[4][1]);
        setBlockSix(selection[5][0]);
        setValueSix(selection[5][1]);
        setBlockSeven(selection[6][0]);
        setValueSeven(selection[6][1]);
        setBlockEight(selection[7][0]);
        setValueEight(selection[7][1]);
        setBlockNine(selection[8][0]);
        setValueNine(selection[8][1]);
        setBlockTen(selection[9][0]);
        setValueTen(selection[9][1]);
        setBlockEleven(selection[10][0]);
        setValueEleven(selection[10][1]);
        setBlockTwelve(selection[11][0]);
        setValueTwelve(selection[11][1]);
        setBlockThirteen(selection[12][0]);
        setValueThirteen(selection[12][1]);
        setBlockFourteen(selection[13][0]);
        setValueFourteen(selection[13][1]);
        setBlockFifteen(selection[14][0]);
        setValueFifteen(selection[14][1]);
        setBlockSixteen(selection[15][0]);
        setValueSixteen(selection[15][1]);
    }

    return (
        <div id={styles.container}>
            <h1 id={styles.instructions}>Match the element to the symbol</h1>
            <div id={styles.gamegrid}>
                <button id={`${blockOne}`} className={styles.gamebutton} value={valueOne} onClick={() => handleSelection(`${valueOne}`, `${blockOne}`)}>{blockOne}</button>
                <button id={`${blockTwo}`} className={styles.gamebutton} value={valueTwo} onClick={() => handleSelection(`${valueTwo}`, `${blockTwo}`)}>{blockTwo}</button>
                <button id={`${blockThree}`} className={styles.gamebutton} value={valueThree} onClick={() => handleSelection(`${valueThree}`, `${blockThree}`)}>{blockThree}</button>
                <button id={`${blockFour}`} className={styles.gamebutton} value={valueFour} onClick={() => handleSelection(`${valueFour}`, `${blockFour}`)}>{blockFour}</button>
                <button id={`${blockFive}`} className={styles.gamebutton} value={valueFive} onClick={() => handleSelection(`${valueFive}`, `${blockFive}`)}>{blockFive}</button>
                <button id={`${blockSix}`} className={styles.gamebutton} value={valueSix} onClick={() => handleSelection(`${valueSix}`, `${blockSix}`)}>{blockSix}</button>
                <button id={`${blockSeven}`} className={styles.gamebutton} value={valueSeven} onClick={() => handleSelection(`${valueSeven}`, `${blockSeven}`)}>{blockSeven}</button>
                <button id={`${blockEight}`} className={styles.gamebutton} value={valueEight} onClick={() => handleSelection(`${valueEight}`, `${blockEight}`)}>{blockEight}</button>
                <button id={`${blockNine}`} className={styles.gamebutton} value={valueNine} onClick={() => handleSelection(`${valueNine}`, `${blockNine}`)}>{blockNine}</button>
                <button id={`${blockTen}`} className={styles.gamebutton} value={valueTen} onClick={() => handleSelection(`${valueTen}`, `${blockTen}`)}>{blockTen}</button>
                <button id={`${blockEleven}`} className={styles.gamebutton} value={valueEleven} onClick={() => handleSelection(`${valueEleven}`, `${blockEleven}`)}>{blockEleven}</button>
                <button id={`${blockTwelve}`} className={styles.gamebutton} value={valueTwelve} onClick={() => handleSelection(`${valueTwelve}`, `${blockTwelve}`)}>{blockTwelve}</button>
                <button id={`${blockThirteen}`} className={styles.gamebutton} value={valueThirteen} onClick={() => handleSelection(`${valueThirteen}`, `${blockThirteen}`)}>{blockThirteen}</button>
                <button id={`${blockFourteen}`} className={styles.gamebutton} value={valueFourteen} onClick={() => handleSelection(`${valueFourteen}`, `${blockFourteen}`)}>{blockFourteen}</button>
                <button id={`${blockFifteen}`} className={styles.gamebutton} value={valueFifteen} onClick={() => handleSelection(`${valueFifteen}`, `${blockFifteen}`)}>{blockFifteen}</button>
                <button id={`${blockSixteen}`} className={styles.gamebutton} value={valueSixteen} onClick={() => handleSelection(`${valueSixteen}`, `${blockSixteen}`)}>{blockSixteen}</button>
            </div>
            <button id={styles.reshuffle} onClick={() => { setElements(); resetClasses(); }}>Reshuffle</button>       
        </div>
    )
}

export default MatchGame;