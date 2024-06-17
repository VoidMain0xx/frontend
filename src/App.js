import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'; // Placeholder for Home component
import About from './Components/About'; // Placeholder for About component
import NoteState from './Context/NoteState';

function App() {
  return (
    <NoteState >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
