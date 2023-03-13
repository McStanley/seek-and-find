import { useState } from 'react';
import { Link } from 'react-router-dom';
import getWizardsData from '../utils/getWizardsData';
import Hogwarts from '../assets/hogwarts.png';
import './styles/Game.css';

function Game() {
  const [wizardsData, setWizardsData] = useState(() => getWizardsData());

  const headerWizards = wizardsData.map((wizard) => (
    <img src={wizard.img} alt="" key={wizard.id} />
  ));

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
        <div className="Game-headerMain">{headerWizards}</div>
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
