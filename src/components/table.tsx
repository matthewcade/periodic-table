import { useState } from 'react';
import elements from '../assets/elements.tsx';
import styles from '../styles/table.module.css';
import Footer from './footer.tsx';

const allElements = Object.values(elements);

function capitalizeWord(e: string) {
    const capital = e.slice(0, 1);
    const lower = e.slice(1);
    return capital.toUpperCase() + lower;
}

function subSpace(e: string) {
    let replacement = e.replaceAll(' ', '');
    return replacement.replaceAll('-', '');
}

const lanthanidesAndActinides = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102];

const PeriodicTable = () => {
    let topTable = [];
    let bottomTable = [];
    let nullCounter = 0;
    let buttonCounter = 0;

    function addLevels(stringArray: any) {
        const numberArray = stringArray.map(Number);
        const sum: any = numberArray.reduce((acc: number, val: number) => acc + val, 0);
        return sum;
    }

    //Switches the opacity of the button for each element
    for (let i = 0; i < 118; i++) {
        const handleClick = (e: any) => {
            if(e.target.classList.contains(styles.showButton)) {
                e.target.classList.replace(styles.showButton, styles.hideButton);
            } else {
                e.target.classList.replace(styles.hideButton, styles.showButton);
            }
        }

        if (i == 1) {
            for (let j = 0; j < 16; j++) {
                topTable.push(<div key={`null ${nullCounter}`}></div> );
                nullCounter++;
            }
            const getClass = subSpace(allElements[i].group);
            const getName = capitalizeWord(allElements[i].name);
            const getLevels = addLevels(allElements[i].energyLevels);
            const buttonId = 'button' + buttonCounter;
            topTable.push(
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]} ${styles.show}`}>
                    <div>
                        <div className={styles.energylevel}>{getLevels}</div>
                        <div className={styles.symbol}>{allElements[i].symbol}</div>
                        <div className={styles.name}>{getName}</div>
                        <div className={styles.weight}>{allElements[i].weight}</div>
                        <div className={styles.state}>{allElements[i].state}</div>
                    </div>
                    <button id={styles[buttonId]} className={`targetButton ${styles.hideButton} ${styles.elementbutton}`} onClick={handleClick}>{allElements[i].symbol}</button>
                </div>
            );
            buttonCounter++;
        } else if (i == 4 || i == 12) {
            for (let k = 0; k < 10; k++) {
                topTable.push(<div key={`null ${nullCounter}`}></div> );
                nullCounter++;
            }
            const getClass = subSpace(allElements[i].group);
            const getName = capitalizeWord(allElements[i].name);
            const getLevels = addLevels(allElements[i].energyLevels);
            const buttonId = 'button' + buttonCounter;
            topTable.push(
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]} ${styles.show}`}>
                    <div>
                        <div className={styles.energylevel}>{getLevels}</div>
                        <div className={styles.symbol}>{allElements[i].symbol}</div>
                        <div className={styles.name}>{getName}</div>
                        <div className={styles.weight}>{allElements[i].weight}</div>
                        <div className={styles.state}>{allElements[i].state}</div>
                    </div>
                    <button id={styles[buttonId]} className={`targetButton ${styles.hideButton} ${styles.elementbutton}`} onClick={handleClick}>{allElements[i].symbol}</button>
                </div>
            );
        } else if (lanthanidesAndActinides.includes(i)) {
            const getClass = subSpace(allElements[i].group);
            const getName = capitalizeWord(allElements[i].name);
            const getLevels = addLevels(allElements[i].energyLevels);
            const buttonId = 'button' + buttonCounter;
            bottomTable.push(
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]} ${styles.show}`}>
                    <div>
                        <div className={styles.energylevel}>{getLevels}</div>
                        <div className={styles.symbol}>{allElements[i].symbol}</div>
                        <div className={styles.name}>{getName}</div>
                        <div className={styles.weight}>{allElements[i].weight}</div>
                        <div className={styles.state}>{allElements[i].state}</div>
                    </div>
                    <button id={styles[buttonId]} className={`targetButton ${styles.hideButton} ${styles.elementbutton}`} onClick={handleClick}>{allElements[i].symbol}</button>
                </div>
            );
        } else {
            const getClass = subSpace(allElements[i].group);
            const getName = capitalizeWord(allElements[i].name);
            const getLevels = addLevels(allElements[i].energyLevels);
            const buttonId = 'button' + buttonCounter;
            topTable.push(
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]} ${styles.show}`}>
                    <div>
                        <div className={styles.energylevel}>{getLevels}</div>
                        <div className={styles.symbol}>{allElements[i].symbol}</div>
                        <div className={styles.name}>{getName}</div>
                        <div className={styles.weight}>{allElements[i].weight}</div>
                        <div className={styles.state}>{allElements[i].state}</div>
                    </div>
                    <button id={styles[buttonId]} className={`targetButton ${styles.hideButton} ${styles.elementbutton}`} onClick={handleClick}>{allElements[i].symbol}</button>
                </div>
            );
        }
    }

    function showAll() {
        const shown = document.querySelectorAll('.targetButton');

        shown.forEach((el) => {
            el.classList.replace(styles.showButton, styles.hideButton);
        });
    }

    function hideAll() {
        const shown = document.querySelectorAll('.targetButton');

        shown.forEach((el) => {
            el.classList.remove(styles.hideButton);
            el.classList.add(styles.showButton);
        });
    }

    const [alkMState, setAlkM] = useState('active');

    function toggleAlkaliMetals() {
        if (alkMState == 'active') {
            document.querySelector(`#${styles.alkalimetalsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setAlkM('inactive');
        } else {
            document.querySelector(`#${styles.alkalimetalsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setAlkM('active');
        }

        const group = document.querySelectorAll(`.${styles.alkalimetal}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [metallState, setMetall] = useState('active');

    function toggleMetalloids() {
        if (metallState == 'active') {
            document.querySelector(`#${styles.metalloidsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setMetall('inactive');
        } else {
            document.querySelector(`#${styles.metalloidsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setMetall('active');
        }

        const group = document.querySelectorAll(`.${styles.metalloid}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [actinState, setActin] = useState('active');

    function toggleActinides() {
        if (actinState == 'active') {
            document.querySelector(`#${styles.actinidesbutton}`)?.classList.replace(styles.active, styles.inactive);
            setActin('inactive');
        } else {
            document.querySelector(`#${styles.actinidesbutton}`)?.classList.replace(styles.inactive, styles.active);
            setActin('active');
        }

        const group = document.querySelectorAll(`.${styles.actinide}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [alkEMState, setALKEM] = useState('active');

    function toggleAlkalineEarthMetals() {
        if (alkEMState == 'active') {
            document.querySelector(`#${styles.alkalineearthmetalsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setALKEM('inactive');
        } else {
            document.querySelector(`#${styles.alkalineearthmetalsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setALKEM('active');
        }

        const group = document.querySelectorAll(`.${styles.alkalineearthmetal}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [reactiveState, setReactive] = useState('active');

    function toggleReactiveNonMetal() {
        if (reactiveState == 'active') {
            document.querySelector(`#${styles.reactivenonmetalsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setReactive('inactive');
        } else {
            document.querySelector(`#${styles.reactivenonmetalsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setReactive('active');
        }

        const group = document.querySelectorAll(`.${styles.reactivenonmetal}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [uCPState, setUCP] = useState('active');

    function toggleUnknownChemicalProperties() {
        if (uCPState == 'active') {
            document.querySelector(`#${styles.unknownchemicalpropertiesbutton}`)?.classList.replace(styles.active, styles.inactive);
            setUCP('inactive');
        } else {
            document.querySelector(`#${styles.unknownchemicalpropertiesbutton}`)?.classList.replace(styles.inactive, styles.active);
            setUCP('active');
        }

        const group = document.querySelectorAll(`.${styles.unknownchemicalproperties}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [transMState, setTransM] = useState('active');

    function toggleTransitionMetals() {
        if (transMState == 'active') {
            document.querySelector(`#${styles.transitionmetalsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setTransM('inactive');
        } else {
            document.querySelector(`#${styles.transitionmetalsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setTransM('active');
        }

        const group = document.querySelectorAll(`.${styles.transitionmetal}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [nGState, setNG] = useState('active');

    function toggleNobleGases() {
        if (nGState == 'active') {
            document.querySelector(`#${styles.noblegasesbutton}`)?.classList.replace(styles.active, styles.inactive);
            setNG('inactive');
        } else {
            document.querySelector(`#${styles.noblegasesbutton}`)?.classList.replace(styles.inactive, styles.active);
            setNG('active');
        }

        const group = document.querySelectorAll(`.${styles.noblegas}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [pTMState, setPTM] = useState('active');

    function togglePostTransitionMetals() {
        if (pTMState == 'active') {
            document.querySelector(`#${styles.posttransitionmetalsbutton}`)?.classList.replace(styles.active, styles.inactive);
            setPTM('inactive');
        } else {
            document.querySelector(`#${styles.posttransitionmetalsbutton}`)?.classList.replace(styles.inactive, styles.active);
            setPTM('active');
        }

        const group = document.querySelectorAll(`.${styles.posttransitionmetal}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const [lanthState, setLanth] = useState('active');

    function toggleLanthanides() {
        if (lanthState == 'active') {
            document.querySelector(`#${styles.lanthanidesbutton}`)?.classList.replace(styles.active, styles.inactive);
            setLanth('inactive');
        } else {
            document.querySelector(`#${styles.lanthanidesbutton}`)?.classList.replace(styles.inactive, styles.active);
            setLanth('active');
        }

        const group = document.querySelectorAll(`.${styles.lanthanide}`);
        
        group.forEach((el) => {
            if (el.classList.contains(styles.show)) {
                el.classList.replace(styles.show, styles.hide);
            } else {
                el.classList.replace(styles.hide, styles.show);
            }
        })
    }

    const showButton = <button key='showbutton' id={styles.showallbutton} onClick={() => {showAll()}}>Show All</button>
    const hideButton = <button key='hidebutton'id={styles.hideallbutton} onClick={() => {hideAll()}}>Hide All</button>

    const alkaliMetalsButton = <button key='alkalimetals' id={styles.alkalimetalsbutton} className={styles.active} onClick={() => {toggleAlkaliMetals()}}>Alkali Metals</button>
    const metalloidsButton = <button key='metalloids' id={styles.metalloidsbutton} className={styles.active} onClick={() => {toggleMetalloids()}}>Metalloids</button>
    const actinidesButton = <button key='actinides' id={styles.actinidesbutton} className={styles.active} onClick={() => {toggleActinides()}}>Actinides</button>
    const alkalineEarthMetalsButton = <button key='alkalineearthmetals' id={styles.alkalineearthmetalsbutton} className={styles.active} onClick={() => {toggleAlkalineEarthMetals()}}>Alkaline Earth Metals</button>
    const reactiveNonMetalsButton = <button key='reactivenonmetal' id={styles.reactivenonmetalsbutton} className={styles.active} onClick={() => {toggleReactiveNonMetal()}}>Reactive<br />Non-Metals</button>
    const unknownChemicalPropertiesButton = <button key='unknownchemicalproperties' id={styles.unknownchemicalpropertiesbutton} className={styles.active} onClick={() => {toggleUnknownChemicalProperties()}}>Unknown Chemical Properties</button>
    const transitionMetalsButton = <button key='transitionmetals' id={styles.transitionmetalsbutton} className={styles.active} onClick={() => {toggleTransitionMetals()}}>Transition Metals</button>
    const nobleGasesButton = <button key='noblegases' id={styles.noblegasesbutton} className={styles.active} onClick={() => {toggleNobleGases()}}>Noble Gases</button>
    const postTransitionMetalsButton = <button key='posttransitionmetals' id={styles.posttransitionmetalsbutton} className={styles.active} onClick={() => {togglePostTransitionMetals()}}>Post-Transition Metals</button>
    const lanthanidesButton = <button key='lanthanides' id={styles.lanthanidesbutton} className={styles.active} onClick={() => {toggleLanthanides()}}>Lanthanides</button>

    return (
        <div id={styles.container}>
            <div id={styles.revealbuttons}>
                <p>
                    &nbsp; &nbsp;The periodic table is made up of 118 elements! Don't let that number stop you from learning each one's unique properties and acing your exams.
                    <br /><br />
                    &nbsp; &nbsp;Study each element's properties and test your knowledge by hiding the element information with this interactive table.
                    <br /><br />
                    Try clicking on an element!
                </p>
                {showButton}
                {hideButton}
                <h2 style={{ fontSize: '16px', padding: '0.5em 0 0.5em 0' }}>Filter by Group:</h2>
                <div id={styles.groupbuttons}>
                    {alkaliMetalsButton}
                    {metalloidsButton}
                    {actinidesButton}
                    {alkalineEarthMetalsButton}
                    {reactiveNonMetalsButton}
                    {unknownChemicalPropertiesButton}
                    {transitionMetalsButton}
                    {nobleGasesButton}
                    {postTransitionMetalsButton}
                    {lanthanidesButton}
                </div>
            </div>
            <div id={styles.periodictable}>
                <div id={styles.toptable}>{topTable}</div>
                <div id={styles.bottomtable}>{bottomTable}</div>
            </div>
            <Footer />
        </div>
    );
}

export default PeriodicTable;