import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SaveScore from './SaveScore';
import './styles/GameOver.css';

function GameOver({ time, restart }) {
  return (
    <div className="GameOver">
      <h2 className="GameOver-header">Good job!</h2>
      <p className="GameOver-text">
        You have found all the wizards in <b>{time}</b> seconds.
      </p>
      <SaveScore score={time} />
      <div className="GameOver-buttons">
        <Link to="/">
          <button className="GameOver-home" type="button">
            ↵ Go home
          </button>
        </Link>
        <button className="GameOver-restart" type="button" onClick={restart}>
          ↻ Play again
        </button>
      </div>
    </div>
  );
}

GameOver.propTypes = {
  time: PropTypes.number.isRequired,
  restart: PropTypes.func.isRequired,
};

export default GameOver;
