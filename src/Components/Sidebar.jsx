import React from 'react';
import './Sidebar.css';
import { Home, FileText, Upload, Settings, Moon, Sun } from 'lucide-react';

const Sidebar = ({ isVisible, darkMode, toggleMode }) => {
  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <ul>
        <li><Home size={16} style={{ marginRight: 8 }} /> Dashboard</li>
        <li><FileText size={16} style={{ marginRight: 8 }} /> My Files</li>
        <li><Upload size={16} style={{ marginRight: 8 }} /> Upload</li>
        <li><Settings size={16} style={{ marginRight: 8 }} /> Settings</li>
        
        {/* Theme Toggle Button */}
        <li 
          onClick={toggleMode} 
          
          
        >
          {darkMode ? 
            <Sun size={16} style={{ marginRight: 8, color: '#FFD700' }} /> : 
            <Moon size={16} style={{ marginRight: 8, color: '#5D4037' }} />
          }
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </div>
    </div>
  );
};

export default Sidebar;