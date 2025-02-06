// artist-hub/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ArtPieces from './pages/ArtPieces';
import Login from './components/Login';
import Register from './components/Register';

// artist-hub/src/App.js
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h2>Loading...</h2> {/* Temporary fallback */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-pieces" element={<ArtPieces />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
