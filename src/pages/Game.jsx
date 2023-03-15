import { useState } from 'react';
import { Link } from 'react-router-dom';
import getWizardsData from '../utils/getWizardsData';
import isWizardFound from '../utils/isWizardFound';
import Popup from '../components/Popup';
import Hogwarts from '../assets/hogwarts.png';
import './styles/Game.css';

function Game() {
  const [wizardsData, setWizardsData] = useState(() => getWizardsData());
  const [clickPosition, setClickPosition] = useState(null);

  const handleClick = (e) => {
    if (clickPosition) {
      setClickPosition(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();

    const position = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };

    setClickPosition(position);
  };

  const checkSelection = (id) => {
    const wizard = wizardsData.find((entry) => entry.id === id);
    const isFound = isWizardFound(clickPosition, wizard.position);

    if (!isFound) {
      alert('Keep looking!');

      setClickPosition(null);
      return;
    }

    alert('Good job!');

    setWizardsData((prevWizardsData) =>
      prevWizardsData.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            active: false,
          };
        }

        return entry;
      })
    );

    setClickPosition(null);
  };

  const headerWizards = wizardsData.map((wizard) => (
    <img
      src={wizard.img}
      alt=""
      style={wizard.active ? {} : { filter: 'grayscale(1)' }}
      key={wizard.id}
    />
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
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
         jsx-a11y/no-noninteractive-element-interactions */}
        <img
          className="Game-board"
          src={Hogwarts}
          alt=""
          onClick={handleClick}
        />
        {clickPosition && (
          <Popup
            position={clickPosition}
            wizardsData={wizardsData}
            checkSelection={checkSelection}
          />
        )}
      </main>
    </div>
  );
}

export default Game;
