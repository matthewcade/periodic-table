import { useState } from 'react';
import PeriodicTable from "./table";
import GridGame from "./gridgame";
import MatchGame from './matchgame.tsx';
import Footer from '../components/footer.tsx';
import styles from '../styles/navigation.module.css';
import Logo from '../images/logo.png';

const Navigation = () => {
    const [app, setApp] = useState(<PeriodicTable />);

    function chooseApp(arr: string) {
        if (arr == 'periodictableapp') {
            setApp(<PeriodicTable />);
        } else if (arr == 'gridgameapp') {
            setApp(<GridGame />);
        } else if (arr == 'matchgameapp') {
            setApp(<MatchGame />);
        }
    }

    const periodicTableApp = <button key='periodictableapp' id={styles.periodictablebutton} onClick={() => {chooseApp('periodictableapp')}}>Periodic Table</button>
    const gridGameApp = <button key='gridgameapp' id={styles.gridgamebutton} onClick={() => {chooseApp('gridgameapp')}}>Grid Game</button>
    const matchGameApp = <button key='matchgameapp' id={styles.matchgamebutton} onClick={() => {chooseApp('matchgameapp')}}>Match Game</button>

    return (
        <div id={styles.container}>
            <div id={styles.content}>
                <div id={styles.navbar}>
                    <a href="."><img id={styles.logo} src={Logo} /></a>
                    {periodicTableApp}
                    {gridGameApp}
                    {matchGameApp}
                </div>
                <div id={styles.chosenapp}>{app}</div>
            </div>
            <Footer />
        </div>
    )
}

export default Navigation;