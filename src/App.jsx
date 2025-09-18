// src/App.js
import React, { useState, useEffect } from 'react';
import Topbar from './Components/Topbar';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Set theme class on body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);
  const toggleMode = () => setDarkMode(prev => !prev);

  return (
    
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <MainPage darkMode={darkMode} setDarkMode={setDarkMode} />
      <Topbar darkMode={darkMode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;