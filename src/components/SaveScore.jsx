import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import PropTypes from 'prop-types';
import { auth, db } from '../firebase';
import './styles/SaveScore.css';

function SaveScore({ score }) {
  const [wasSaved, setWasSaved] = useState(false);
  const [isTop20, setIsTop20] = useState(null);

  useEffect(() => {
    (async () => {
      const leaderboardRef = collection(db, 'leaderboard');
      const leaderboardQuery = query(
        leaderboardRef,
        orderBy('score', 'desc'),
        limit(20)
      );
      const leaderboardSnapshot = await getDocs(leaderboardQuery);
      const top20 = leaderboardSnapshot.docs.map((doc) => doc.data.score);
      setIsTop20(top20.length < 20 || score < top20[0]);
    })();
  }, []);

  const handleSaveScore = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    const { displayName, photoURL } = user;

    const leaderboardRef = collection(db, 'leaderboard');

    await addDoc(leaderboardRef, {
      user: {
        displayName,
        photoURL,
      },
      score,
      timeStamp: serverTimestamp(),
    });

    setWasSaved(true);
  };

  return (
    <div className="SaveScore">
      {isTop20 === null && (
        <p className="SaveScore-text">Loading top scores...</p>
      )}
      {!wasSaved && isTop20 === false && (
        <p className="SaveScore-text">
          Try again to fight for a spot on the leaderboard!
        </p>
      )}
      {!wasSaved && isTop20 === true && (
        <button
          className="SaveScore-button"
          onClick={handleSaveScore}
          type="button"
        >
          Save your score
        </button>
      )}
      {wasSaved && (
        <p className="SaveScore-text">
          Score has been submitted to the leaderboard.
        </p>
      )}
    </div>
  );
}

SaveScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default SaveScore;
