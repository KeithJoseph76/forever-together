import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PoemsPage from './pages/PoemsPage';
import LettersPage from './pages/LettersPage';
import SongsPage from './pages/SongsPage';
import BibleVersesPage from './pages/BibleVersesPage';
import ClockPage from './pages/ClockPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/poems" element={<PoemsPage />} />
            <Route path="/letter" element={<LettersPage />} />
            <Route path="/songs" element={<SongsPage />} />
            <Route path="/verses" element={<BibleVersesPage />} />
            <Route path="/clock" element={<ClockPage />} />
            <Route path="*" element={<Navigate to="/poems" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
