// src/App.js
import React, { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Set theme class on body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  return (
    
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <MainPage darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;