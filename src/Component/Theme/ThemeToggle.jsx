import React, { useState } from 'react';
import './ThemeToggle.css'; 
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h1>Theme change</h1>
        
        <div className="toggle-container">
          <div className="toggle-button" onClick={toggleTheme}>
            <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
              <div className="toggle-circle">
                {isDarkMode ? '🌙' : '☀️'}
              </div>
            </div>
            <span className="toggle-label">
              {isDarkMode ? 'DARK MODE' : 'LIGHT MODE'}
            </span>
          </div>
        </div>
      </div>
      
      </div>
  )}
