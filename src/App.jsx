import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
