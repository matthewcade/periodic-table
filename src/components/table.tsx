import elements from '../assets/elements.tsx';
import styles from '../styles/table.module.css';

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
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]}`}>
                    <div style={{padding: "0 0.5vh"}}>
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
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]}`}>
                    <div style={{padding: "0 0.5vh"}}>
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
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]}`}>
                    <div style={{padding: "0 0.5vh"}}>
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
                <div key={allElements[i].name} className={`${styles.elementinfo} ${styles[getClass]}`}>
                    <div style={{padding: "0 0.5vh"}}>
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

    const showButton = <button key='showbutton' id={styles.showallbutton} onClick={() => {showAll()}}>Show All</button>
    const hideButton = <button key='hidebutton'id={styles.hideallbutton} onClick={() => {hideAll()}}>Hide All</button>

    return (
        <div id={styles.container}>
            <div id={styles.periodictable}>
                <div id={styles.toptable}>{topTable}</div>
                <div id={styles.bottomtable}>{bottomTable}</div>
            </div>
            <div id={styles.revealbuttons}>
                {showButton}
                {hideButton}
            </div>
        </div>
    );
}

export default PeriodicTable;