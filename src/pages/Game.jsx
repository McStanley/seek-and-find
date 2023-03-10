import { Link } from 'react-router-dom';
import Hogwarts from '../assets/hogwarts.png';
import Wizard1 from '../assets/wizard1.png';
import Wizard2 from '../assets/wizard2.png';
import Wizard3 from '../assets/wizard3.png';
import './styles/Game.css';

function Game() {
  return (
    <div className="Game">
      <header className="Game-header">
        <div className="Game-headerSide">
          <Link to="/">
            <button className="Game-button" type="button">
              ↵ Home
            </button>
          </Link>
        </div>
        <div className="Game-headerMain">
          <img src={Wizard1} alt="" />
          <img src={Wizard2} alt="" />
          <img src={Wizard3} alt="" />
        </div>
        <div className="Game-headerSide">
          <p className="Game-timer">00:12:34.567</p>
        </div>
      </header>
      <main className="Game-main">
        <img className="Game-board" src={Hogwarts} alt="" />
      </main>
    </div>
  );
}

export default Game;
