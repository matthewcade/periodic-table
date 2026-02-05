import { useState } from 'react';
import '../styles/gridgame.css';
import elements from '../assets/elements.tsx';

const allElements = Object.values(elements);
let choices: any = [];
let questionElement: string = '';
let answer: string = '';

let winCheck = false;

function capitalizeWord(e: string) {
    const capital = e.slice(0, 1);
    const lower = e.slice(1);
    return capital.toUpperCase() + lower;
}

function subSpace(e: string) {
    return e.replaceAll(' ', '-');
}

function setAnswer(e: number) {
    const index = Math.floor(Math.random() * 6);
    questionElement = capitalizeWord(allElements[choices[index]].name);
    answer = allElements[choices[index]].symbol;
    return e;
}

function randomizer(e: any) {
    winCheck = false;

    e = allElements;
    choices = [];
    let num: number = e.length;
    
    for (let i = 0; i < 6; i++) {
        let choiceIndex: number = Math.floor(Math.random() * num);

        if (choices.includes(choiceIndex)) {
            console.log('Duplicate found! Re-running...');
            i--;
        } else {
            choices.push(choiceIndex);
        }
    }

    setAnswer(e);
}

randomizer(allElements);

const GridGame = () => {
    function addLevels(stringArray: any) {
        const numberArray = stringArray.map(Number);
        const sum: any = numberArray.reduce((acc: number, val: number) => acc + val, 0);
        return sum;
    }

    const [buttonDisplay, setButtonDisplay] = useState('show');
    const [infoDisplay, setInfoDisplay] = useState('hide');

    const [symbolOne, setOne] = useState(allElements[choices[0]].symbol);
    const [nameOne, setNameOne] = useState(capitalizeWord(allElements[choices[0]].name));
    const [eLOne, setELOne] = useState(addLevels(allElements[choices[0]].energyLevels));
    const [weightOne, setWeightOne] = useState(allElements[choices[0]].weight);
    const [stateOne, setStateOne] = useState(capitalizeWord(allElements[choices[0]].state));
    const [groupOne, setGroupOne] = useState(allElements[choices[0]].group);
    const [oneStyle, setOneStyle] = useState(subSpace(allElements[choices[0]].group));
    const [oneDisabled, setOneDisabled] = useState(false);

    const [symbolTwo, setTwo] = useState(allElements[choices[1]].symbol);
    const [nameTwo, setNameTwo] = useState(capitalizeWord(allElements[choices[1]].name));
    const [eLTwo, setELTwo] = useState(addLevels(allElements[choices[1]].energyLevels));
    const [weightTwo, setWeightTwo] = useState(allElements[choices[1]].weight);
    const [stateTwo, setStateTwo] = useState(capitalizeWord(allElements[choices[1]].state));
    const [groupTwo, setGroupTwo] = useState(allElements[choices[1]].group);
    const [twoStyle, setTwoStyle] = useState(subSpace(allElements[choices[1]].group));
    const [twoDisabled, setTwoDisabled] = useState(false);

    const [symbolThree, setThree] = useState(allElements[choices[2]].symbol);
    const [nameThree, setNameThree] = useState(capitalizeWord(allElements[choices[2]].name));
    const [eLThree, setELThree] = useState(addLevels(allElements[choices[2]].energyLevels));
    const [weightThree, setWeightThree] = useState(allElements[choices[2]].weight);
    const [stateThree, setStateThree] = useState(capitalizeWord(allElements[choices[2]].state));
    const [groupThree, setGroupThree] = useState(allElements[choices[2]].group);
    const [threeStyle, setThreeStyle] = useState(subSpace(allElements[choices[2]].group));
    const [threeDisabled, setThreeDisabled] = useState(false);

    const [symbolFour, setFour] = useState(allElements[choices[3]].symbol);
    const [nameFour, setNameFour] = useState(capitalizeWord(allElements[choices[3]].name));
    const [eLFour, setELFour] = useState(addLevels(allElements[choices[3]].energyLevels));
    const [weightFour, setWeightFour] = useState(allElements[choices[3]].weight);
    const [stateFour, setStateFour] = useState(capitalizeWord(allElements[choices[3]].state));
    const [groupFour, setGroupFour] = useState(allElements[choices[3]].group);
    const [fourStyle, setFourStyle] = useState(subSpace(allElements[choices[3]].group));
    const [fourDisabled, setFourDisabled] = useState(false);

    const [symbolFive, setFive] = useState(allElements[choices[4]].symbol);
    const [nameFive, setNameFive] = useState(capitalizeWord(allElements[choices[4]].name));
    const [eLFive, setELFive] = useState(addLevels(allElements[choices[4]].energyLevels));
    const [weightFive, setWeightFive] = useState(allElements[choices[4]].weight);
    const [stateFive, setStateFive] = useState(capitalizeWord(allElements[choices[4]].state));
    const [groupFive, setGroupFive] = useState(allElements[choices[4]].group);
    const [fiveStyle, setFiveStyle] = useState(subSpace(allElements[choices[4]].group));
    const [fiveDisabled, setFiveDisabled] = useState(false);

    const [symbolSix, setSix] = useState(allElements[choices[5]].symbol);
    const [nameSix, setNameSix] = useState(capitalizeWord(allElements[choices[5]].name));
    const [eLSix, setELSix] = useState(addLevels(allElements[choices[5]].energyLevels));
    const [weightSix, setWeightSix] = useState(allElements[choices[5]].weight);
    const [stateSix, setStateSix] = useState(capitalizeWord(allElements[choices[5]].state));
    const [groupSix, setGroupSix] = useState(allElements[choices[5]].group);
    const [sixStyle, setSixStyle] = useState(subSpace(allElements[choices[5]].group));
    const [sixDisabled, setSixDisabled] = useState(false);

    function setElements() {
        randomizer(allElements);
            setOne(allElements[choices[0]].symbol);
            setTwo(allElements[choices[1]].symbol);
            setThree(allElements[choices[2]].symbol);
            setFour(allElements[choices[3]].symbol);
            setFive(allElements[choices[4]].symbol);
            setSix(allElements[choices[5]].symbol);

            setNameOne(capitalizeWord(allElements[choices[0]].name));
            setNameTwo(capitalizeWord(allElements[choices[1]].name));
            setNameThree(capitalizeWord(allElements[choices[2]].name));
            setNameFour(capitalizeWord(allElements[choices[3]].name));
            setNameFive(capitalizeWord(allElements[choices[4]].name));
            setNameSix(capitalizeWord(allElements[choices[5]].name));

            setELOne(addLevels(allElements[choices[0]].energyLevels));
            setELTwo(addLevels(allElements[choices[1]].energyLevels));
            setELThree(addLevels(allElements[choices[2]].energyLevels));
            setELFour(addLevels(allElements[choices[3]].energyLevels));
            setELFive(addLevels(allElements[choices[4]].energyLevels));
            setELSix(addLevels(allElements[choices[5]].energyLevels));

            setWeightOne(allElements[choices[0]].weight);
            setWeightTwo(allElements[choices[1]].weight);
            setWeightThree(allElements[choices[2]].weight);
            setWeightFour(allElements[choices[3]].weight);
            setWeightFive(allElements[choices[4]].weight);
            setWeightSix(allElements[choices[5]].weight);

            setStateOne(capitalizeWord(allElements[choices[0]].state));
            setStateTwo(capitalizeWord(allElements[choices[1]].state));
            setStateThree(capitalizeWord(allElements[choices[2]].state));
            setStateFour(capitalizeWord(allElements[choices[3]].state));
            setStateFive(capitalizeWord(allElements[choices[4]].state));
            setStateSix(capitalizeWord(allElements[choices[5]].state));

            setGroupOne(allElements[choices[0]].group);
            setGroupTwo(allElements[choices[1]].group);
            setGroupThree(allElements[choices[2]].group);
            setGroupFour(allElements[choices[3]].group);
            setGroupFive(allElements[choices[4]].group);
            setGroupSix(allElements[choices[5]].group);

            setOneStyle(subSpace(allElements[choices[0]].group));
            setTwoStyle(subSpace(allElements[choices[1]].group));
            setThreeStyle(subSpace(allElements[choices[2]].group));
            setFourStyle(subSpace(allElements[choices[3]].group));
            setFiveStyle(subSpace(allElements[choices[4]].group));
            setSixStyle(subSpace(allElements[choices[5]].group));

            setButtonDisplay('show');
            setInfoDisplay('hide');
            setOneDisabled(false);
            setTwoDisabled(false);
            setThreeDisabled(false);
            setFourDisabled(false);
            setFiveDisabled(false);
            setSixDisabled(false);

            console.log(answer);
    }

    function checkAnswer(e: any, id: string) {
        switch(id) {
            case 'button-one':
                setOneDisabled(true);
                break;
            case 'button-two':
                setTwoDisabled(true);
                break;
            case 'button-three':
                setThreeDisabled(true);
                break;
            case 'button-four':
                setFourDisabled(true);
                break;
            case 'button-five':
                setFiveDisabled(true);
                break;
            case 'button-six':
                setSixDisabled(true);
                break;
        }

        if (e == answer) {
            winCheck = true;
            setButtonDisplay('hide');
            setInfoDisplay('show');
        }
    }

    return (
        <>
            <div id="question">Which symbol belongs to the element <span style={{fontWeight: 'bold', color: 'yellow'}}>{questionElement}</span>?</div>
            <div id="elements">
                <div className={`element-container ${oneStyle} ${infoDisplay}`}>
                    <div className='element-info'>
                        <div className="energy-level">{eLOne}</div>
                        <div className="symbol">{symbolOne}</div>
                        <div className="name">{nameOne}</div>
                        <div className="weight">{weightOne}</div>
                        <div className="state-group">
                            <div className="state">{stateOne}</div>
                            <div className="group">{groupOne}</div>
                        </div>
                    </div>
                    <button id="button-one" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolOne, 'button-one')}} disabled={oneDisabled}>{symbolOne}</button>
                </div>
                <div className={`element-container ${twoStyle} ${infoDisplay}`}>
                    <div className="element-info">
                        <div className="energy-level">{eLTwo}</div>
                        <div className="symbol">{symbolTwo}</div>
                        <div className="name">{nameTwo}</div>
                        <div className="weight">{weightTwo}</div>
                        <div className="state-group">
                            <div className="state">{stateTwo}</div>
                            <div className="group">{groupTwo}</div>
                        </div>
                    </div>
                    <button id="button-two" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolTwo, 'button-two')}} disabled={twoDisabled}>{symbolTwo}</button>
                </div>
                <div className={`element-container ${threeStyle} ${infoDisplay}`}>
                    <div className="element-info">
                        <div className="energy-level">{eLThree}</div>
                        <div className="symbol">{symbolThree}</div>
                        <div className="name">{nameThree}</div>
                        <div className="weight">{weightThree}</div>
                        <div className="state-group">
                            <div className="state">{stateThree}</div>
                            <div className="group">{groupThree}</div>
                        </div>
                    </div>
                    <button id="button-three" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolThree, 'button-three')}} disabled={threeDisabled}>{symbolThree}</button>
                </div>
                <div className={`element-container ${fourStyle} ${infoDisplay}`}>
                    <div className="element-info">
                        <div className="energy-level">{eLFour}</div>
                        <div className="symbol">{symbolFour}</div>
                        <div className="name">{nameFour}</div>
                        <div className="weight">{weightFour}</div>
                        <div className="state-group">
                            <div className="state">{stateFour}</div>
                            <div className="group">{groupFour}</div>
                        </div>
                    </div>
                    <button id="button-four" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolFour, 'button-four')}} disabled={fourDisabled}>{symbolFour}</button>
                </div>
                <div className={`element-container ${fiveStyle} ${infoDisplay}`}>
                    <div className="element-info">
                        <div className="energy-level">{eLFive}</div>
                        <div className="symbol">{symbolFive}</div>
                        <div className="name">{nameFive}</div>
                        <div className="weight">{weightFive}</div>
                        <div className="state-group">
                            <div className="state">{stateFive}</div>
                            <div className="group">{groupFive}</div>
                        </div>
                    </div>
                    <button id="button-five" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolFive, 'button-five')}} disabled={fiveDisabled}>{symbolFive}</button>
                </div>
                <div className={`element-container ${sixStyle} ${infoDisplay}`}>
                    <div className="element-info">
                        <div className="energy-level">{eLSix}</div>
                        <div className="symbol">{symbolSix}</div>
                        <div className="name">{nameSix}</div>
                        <div className="weight">{weightSix}</div>
                        <div className="state-group">
                            <div className="state">{stateSix}</div>
                            <div className="group">{groupSix}</div>
                        </div>
                    </div>
                    <button id="button-six" className={`element-button ${buttonDisplay}`} onClick={() => {checkAnswer(symbolSix, 'button-six')}} disabled={sixDisabled}>{symbolSix}</button>
                </div>               
            </div>
            <button id="generate-button" style={ winCheck ? { visibility: 'visible' } : { visibility: 'hidden' } } onClick={setElements}>Play Again</button>
        </>
    )
}

export default GridGame;