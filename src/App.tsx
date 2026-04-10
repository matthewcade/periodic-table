import './App.css'
import GridGame from './components/gridgame.tsx';
import Logo from './images/logo.png';

function App() {
  return (
    <>
      <header>
        <img src={Logo} width="200px" />
      </header>
      <GridGame />
    </>
  )
}

export default App