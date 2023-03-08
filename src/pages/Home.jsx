import './styles/Home.css';
import Arrow from '../assets/arrow-up-right.svg';

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
          <span>Rules</span> · <span>Leaderboard</span>
        </nav>
      </header>
      <main className="Home-main">
        <h1 className="Home-title">Seek and Find</h1>
        <button className="Home-button" type="button">
          Start
        </button>
      </main>
    </div>
  );
}

export default Home;
