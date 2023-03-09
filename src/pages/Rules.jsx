import { Link } from 'react-router-dom';
import './styles/Rules.css';

function Rules() {
  return (
    <div className="Rules">
      <header className="Rules-header">
        <h1 className="Rules-title">Rules</h1>
      </header>
      <main className="Rules-main">
        <p className="Rules-text">
          Welcome to &quot;Seek and Find&quot; game! Your task is to locate and
          click on the specified targets hidden somewhere in the illustration as
          quickly as possible. Once you click on a target, a pop-up list of
          possible targets will appear, and you will need to choose the correct
          target from the list. To win the game, you need to correctly find all
          of the specified targets.
        </p>
        <p className="Rules-message">⚡ Good luck and have fun! ⚡</p>
        <Link to="/">
          <button className="Rules-button" type="button">
            Back
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Rules;
