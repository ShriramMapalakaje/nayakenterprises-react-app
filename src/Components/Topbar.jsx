import React from 'react';
import './Topbar.css';
import { Moon, Sun } from 'lucide-react';

const Topbar = ({ darkMode, toggleMode }) => {
  return (
    <div className={`topbar ${darkMode ? 'dark' : 'light'}`}>
      <img 
        src={process.env.PUBLIC_URL + '/images/NayakLogo.png'} 
        alt="Nayak Enterprises Logo" 
        className="logo" 
      />

      {/* Theme Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleMode}>
        {darkMode ? (
          <Sun size={20} className="theme-icon sun" />
        ) : (
          <Moon size={20} className="theme-icon moon" />
        )}
        <span><strong>{darkMode ? 'Light' : 'Dark'}</strong></span>

      </button>
    </div>
  );
};

export default Topbar;
