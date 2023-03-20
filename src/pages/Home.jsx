import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow-up-right.svg';
import './styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-author">
          <a
            href="https://github.com/McStanley"
            target="_blank"
            rel="noreferrer"
          >
            Stanisław Olejniczak
          </a>
          <img src={Arrow} alt="" />
        </div>
        <nav className="Home-nav">
          <Link to="/rules">Rules</Link> ·
          <Link to="/leaderboard">Leaderboard</Link>
        </nav>
      </header>
      <main className="Home-main">
        <h1 className="Home-title">Seek and Find</h1>
        <Link to="/game">
          <button className="Home-button" type="button">
            Start
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Home;
