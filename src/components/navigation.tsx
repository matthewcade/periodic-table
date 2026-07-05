import { useState } from 'react';
import Welcome from './welcome.tsx';
import PeriodicTable from "./table";
import GridGame from "./gridgame";
import MatchGame from './matchgame.tsx';
import styles from '../styles/navigation.module.css';
import Logo from '../images/logo.png';

const Navigation = () => {
    const [app, setApp] = useState(<Welcome />);

    function chooseApp(arr: string) {
        if (arr == 'periodictableapp') {
            setApp(<PeriodicTable />);
        } else if (arr == 'gridgameapp') {
            setApp(<GridGame />);
        } else if (arr == 'matchgameapp') {
            setApp(<MatchGame />);
        }
    }

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <a href="."><img id={styles.logo} src={Logo} /></a>
                <div id={styles.links}>
                    <div id={styles.study} className={styles.dropdowncontainer}>
                        <button className={styles.links}>study</button>
                        <div className={styles.dropdown}>
                            <button id={styles.periodictable} className={styles.dropdownlink} onClick={() => {chooseApp('periodictableapp')}}>periodic table</button>
                        </div>
                    </div>
                    <div id={styles.games} className={styles.dropdowncontainer}>
                        <button className={styles.links}>games</button>
                        <div className={styles.dropdown}>
                            <button id={styles.gridgame} className={styles.dropdownlink} onClick={() => {chooseApp('gridgameapp')}}>grid game</button>
                            <button id={styles.matchgame} className={styles.dropdownlink} onClick={() => {chooseApp('matchgameapp')}}>match game</button>
                        </div>
                    </div>
                    <div id={styles.tests} className={styles.dropdowncontainer}>
                        <button className={styles.links}>tests</button>
                        <div className={styles.dropdown}>
                            <button id={styles.comingsoon} className={styles.dropdownlink} disabled>COMING SOON</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.chosenapp}>{app}</div>
        </div>
    )
}

export default Navigation;