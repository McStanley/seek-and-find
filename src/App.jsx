import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Leaderboard from './pages/Leaderboard';
import Game from './pages/Game';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Toaster
        position="bottom-center"
        reverseOrder
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: '1.1rem',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
