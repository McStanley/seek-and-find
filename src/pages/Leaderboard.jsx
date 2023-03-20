import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import './styles/Leaderboard.css';

function Leaderboard() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    (async () => {
      const leaderboardRef = collection(db, 'leaderboard');
      const top20Query = query(leaderboardRef, orderBy('score'), limit(20));
      const querySnapshot = await getDocs(top20Query);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setHighScores(data);
    })();
  }, []);

  const elements = highScores.map((entry, index) => {
    const borderColors = ['goldenrod', 'silver', 'saddlebrown'];
    const styles = {
      borderColor: borderColors[index],
    };

    return (
      <article className="Leaderboard-entry" style={styles} key={entry.id}>
        <div className="Leaderboard-entryUser">
          <img
            className="Leaderboard-entryImg"
            src={entry.user.photoURL}
            alt="User"
          />
          <p className="Leaderboard-entryName">{entry.user.displayName}</p>
        </div>
        <p className="Leaderboard-entryScore">
          {entry.score}{' '}
          <span className="Leaderboard-secondsLabel">seconds</span>
        </p>
      </article>
    );
  });

  return (
    <div className="Leaderboard">
      <header className="Leaderboard-header">
        <h1 className="Leaderboard-title">Leaderboard</h1>
      </header>
      <main className="Leaderboard-main">
        <Link to="/">
          <button className="Leaderboard-button" type="button">
            Back
          </button>
        </Link>
        {highScores.length ? elements : 'Loading...'}
        <Link to="/">
          <button className="Leaderboard-button" type="button">
            Back
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Leaderboard;
