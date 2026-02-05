import { createRoot } from 'react-dom/client';
import '../styles/help.css';
import helpButton from '../images/help button.png';

const Tooltip = () => {
    return (
        <div id="tooltip">
            <div id="energy-level">Energy Level</div>
            <div id="symbol">Symbol</div>
            <div id="name">Name</div>
            <div id="weight">Weight</div>
            <div id="state-group">
                <div id="state">State</div>
                <div id="group">Group</div>
            </div>
        </div>
    )
}

const Help = () => {
    return (
        <footer>
            <div id="how-to-read">How To Read The Elements &nbsp; <img id="tooltip-image" src={helpButton} height="20vh" /></div>
        </footer>
    )
}

const Footer = () => {
    return (
        <>
            <Help />
            <Tooltip />
        </>
    )
}

createRoot(document.getElementById('footer')!).render(
  <Footer />
);