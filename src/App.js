import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import NavRouter from './Components/HeaderNavigations/NavRouter';
import Navigation from './Components/HeaderNavigations/Navigation';

function App() {
  return (
    <div>
      <Router>
        <Navigation/>
        <NavRouter/>
      </Router>
      <div class="content-image-overlay" />
    </div>
  );
}

export default App;
