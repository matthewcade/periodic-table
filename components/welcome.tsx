import styles from '../styles/welcome.module.css';
import elements from '../assets/elements.tsx';
import Footer from './footer.tsx';

const allElements = Object.values(elements);

let elementList = [];

for (let i = 0; i < allElements.length; i++) {
    elementList.push(" " + allElements[i].name);
}

const Welcome = () => {
    return (
        <div id={styles.welcome}>
            <h1>Welcome</h1>
            <p></p>
            <div id={styles.marqueecontainer}>    
                <div className={styles.marqueecontainer}>
                    <div className={styles.marqueetrackleft}>
                        <div className={styles.marquee}>
                            <span>Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Flourine Neon Sodium Magnesium Aluminium Silicon Phosphorus Sulfer Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron&nbsp;</span>
                        </div>
                        <div className={styles.marquee}>    
                            <span>Hydrogen Helium Lithium Beryllium Boron Carbon Nitrogen Oxygen Flourine Neon Sodium Magnesium Aluminium Silicon Phosphorus Sulfer Chlorine Argon Potassium Calcium Scandium Titanium Vanadium Chromium Manganese Iron&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className={styles.marqueecontainer}>
                    <div className={styles.marqueetrackright}>
                        <div className={styles.marquee}>
                            <span>Cobalt Nickel CopperZinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium&nbsp;</span>
                        </div>
                        <div className={styles.marquee}>    
                            <span>Cobalt Nickel CopperZinc Gallium Germanium Arsenic Selenium Bromine Krypton Rubidium Strontium Yttrium Zirconium Niobium Molybdenum Technetium Ruthenium Rhodium Palladium Silver Cadmium Indium Tin Antimony Tellurium&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className={styles.marqueecontainer}>
                    <div className={styles.marqueetrackleft}>
                        <div className={styles.marquee}>
                            <span>Iodine Xenon Caesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten&nbsp;</span>
                        </div>
                        <div className={styles.marquee}>    
                            <span>Iodine Xenon Caesium Barium Lanthanum Cerium Praseodymium Neodymium Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantalum Tungsten&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className={styles.marqueecontainer}>
                    <div className={styles.marqueetrackright}>
                        <div className={styles.marquee}>
                            <span>Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium&nbsp;</span>
                        </div>
                        <div className={styles.marquee}>    
                            <span>Rhenium Osmium Iridium Platinum Gold Mercury Thallium Lead Bismuth Polonium Astatine Radon Francium Radium Actinium Thorium Protactinium Uranium Neptunium Plutonium Americium Curium Berkelium Californium&nbsp;</span>
                        </div>
                    </div>
                </div>
                <div className={styles.marqueecontainer}>
                    <div className={styles.marqueetrackleft}>
                        <div className={styles.marquee}>
                            <span>Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicium Nihonium Flerovium Moscovium Livermorium Tennessine Oganesson&nbsp;</span>
                        </div>
                        <div className={styles.marquee}>    
                            <span>Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Roentgenium Copernicium Nihonium Flerovium Moscovium Livermorium Tennessine Oganesson&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Welcome;