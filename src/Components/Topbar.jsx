import React from 'react';
import './Topbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = ({ onToggle, darkMode }) => {
  return (
    <div className={`topbar ${darkMode ? 'dark' : 'light'}`}>
      <button className="menu-btn" onClick={onToggle}>
        <MenuIcon style={{ color: darkMode ? '#030302ff' : '#000000ff' }} />
      </button>
      <img 
        src={process.env.PUBLIC_URL + '/images/NayakLogo.png'} 
        alt="Nayak Enterprises Logo" 
        className="logo" 
      />
    </div>
  );
};

export default Topbar;