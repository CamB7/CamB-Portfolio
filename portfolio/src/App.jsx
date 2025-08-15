import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
