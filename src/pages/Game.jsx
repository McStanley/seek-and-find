import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';
import { toast } from 'react-hot-toast';
import getWizardsData from '../utils/getWizardsData';
import isWizardFound from '../utils/isWizardFound';
import isGameOver from '../utils/isGameOver';
import Popup from '../components/Popup';
import Overlay from '../components/Overlay';
import GameOver from '../components/GameOver';
import Hogwarts from '../assets/hogwarts.png';
import Arrow from '../assets/arrow-up-right.svg';
import './styles/Game.css';

function Game() {
  const [isOver, setIsOver] = useState(false);
  const [wizardsData, setWizardsData] = useState(() => getWizardsData());
  const [clickPosition, setClickPosition] = useState(null);
  const boardRef = useRef(null);
  const {
    seconds,
    minutes,
    hours,
    pause: pauseStopwatch,
    reset: resetStopwatch,
  } = useStopwatch({ autoStart: true });

  useEffect(() => {
    if (isGameOver(wizardsData)) {
      pauseStopwatch();

      toast.dismiss();

      toast('You won!', {
        duration: 6000,
        icon: '🎉',
        style: {
          fontSize: '1.5rem',
        },
      });

      setIsOver(true);
    }
  }, [wizardsData]);

  const restart = () => {
    const newWizardsData = getWizardsData();
    setWizardsData(newWizardsData);
    resetStopwatch();
    setIsOver(false);
  };

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
      toast.error('Keep looking!');

      setClickPosition(null);
      return;
    }

    toast.success('Good job!');

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
          <p className="Game-timer">
            {hours.toString().padStart(2, '0')} :{' '}
            {minutes.toString().padStart(2, '0')} :{' '}
            {seconds.toString().padStart(2, '0')}
          </p>
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
          ref={boardRef}
        />
        {clickPosition && (
          <Popup
            position={clickPosition}
            wizardsData={wizardsData}
            checkSelection={checkSelection}
            boardRef={boardRef}
          />
        )}
      </main>
      <footer className="Game-footer">
        Artwork by{' '}
        <a
          href="https://www.behance.net/soumatheus"
          target="_blank"
          rel="noreferrer"
        >
          Matheus Souza
        </a>
        <img src={Arrow} alt="" />
      </footer>
      {isOver && (
        <Overlay>
          <GameOver
            time={hours * 3600 + minutes * 60 + seconds}
            restart={restart}
          />
        </Overlay>
      )}
    </div>
  );
}

export default Game;
