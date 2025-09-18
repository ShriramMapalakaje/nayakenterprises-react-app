// src/pages/MainPage.js
import React, { useState, useEffect } from 'react';
import Topbar from '../Components/Topbar';

import './MainPage.css';

const MainPage = ({ darkMode, setDarkMode }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
  
  // Files data with comprehensive metadata
  

  // Auto-close file animation after 3 seconds
  

  return (
    <div className="main-page">
      <Topbar 
        onToggle={() => setSidebarVisible(!sidebarVisible)} 
        darkMode={darkMode} 
      />
      <Topbar 
        isVisible={sidebarVisible} 
        darkMode={darkMode} 
        toggleMode={() => setDarkMode(!darkMode)} 
      />
      
      <div className="intro-fullwidth">
  <div className="intro-columns">
    <div className="intro-text">
      <h2>Welcome to Nayak Enterprises</h2>
      <p>
        We specialize in high-quality file printing for corporates and hospitals.
        From procurement to delivery, we ensure excellence at every step.
      </p>
    </div>
    <div className="intro-visual">
      <img 
                    src={process.env.PUBLIC_URL + '/images/fileimage2.png'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
    </div>
  </div>
</div>
    
        {/* File grid section */}
        <div className="content-section">

          {/* Custom Ordering Section */}
          <div className="custom-order">
            <div className="order-header">
              <h2>File Samples</h2>
              <p>Create bespoke files tailored to your needs</p>


            </div>

            
            
            <div className="order-options">
              <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/1683.jpg'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>
              
                            <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/image2.jpg'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>

              
                            <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/02.jpg'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>

                            <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/fileimage4.jpg'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>

              <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/16354.jpg'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>

              <div className="order-card">
                <div className="intro-visual">
                  <img 
                    src={process.env.PUBLIC_URL + '/images/image1.png'} 
                    alt="Nayak Enterprises Logo" 
                     
                  />
                </div>
              </div>


            </div>
            
            {/* <button className="order-btn">Start Custom Order</button> */}
          </div>
          
          {/* Company Information */}
          <div className="company-info">
            <div className="info-section">
              <h3>Why Choose Our Files?</h3>
              <ul>
                <li>Durable materials that withstand daily use</li>
                <li>Customizable sizes and GSM options</li>
                <li>Excellent design based on requirement  </li>
                <li>Eco-friendly production process</li>
                <li>Fast turnaround times</li>
              </ul>
            </div>
            
            <div className="info-section">
              <h3>File Specifications</h3>
              <div className="spec-grid">
                <div className="spec-item">
                  <div className="spec-value">Required GSM or Quality</div>
                  <div className="spec-label">Paper Weight</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">A4, Legal, Custom</div>
                  <div className="spec-label">Sizes</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">Plastic/Paper</div>
                  <div className="spec-label">Materials</div>
                </div>
                <div className="spec-item">
                  <div className="spec-value">12 - 15 days</div>
                  <div className="spec-label">Production Time</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <footer className="site-footer">
            <div className="footer-content">
              <div className="footer-brand">
                
                  <img 
                    src={process.env.PUBLIC_URL + '/images/NayakLogo.png'} 
                    alt="Nayak Enterprises Logo" 
                    className="footer-logo" 
                  />
                
                <div className="footer-name">Nayak Enterprises</div>
                <div className="footer-tagline">Premium Folding Files Solutions</div>
              </div>
              
              <div className="footer-links">
  {/* WhatsApp contact */}
  <a
    href="https://wa.me/9741872299" // international format without + sign
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-link"
  >
    <img
      src={process.env.PUBLIC_URL + '/images/logo.png'}
      alt="WhatsApp"
      className="whatsapp-icon"
    />
    Chat with us on WhatsApp
  </a>

  {/* QR code */}
  <div className="qr-section">
    <img
      src={process.env.PUBLIC_URL + '/images/Nayak_Enterprises-1024.svg'} // QR code image
      alt="Nayak Enterprises location QR"
      className="qr-code"
    />
    <a
      href="https://share.google/3AViq6rGdlabTfRWo" // the same link encoded in the QR
      target="_blank"
      rel="noopener noreferrer"
      className="qr-button"
    >
      View Location
    </a>
  </div>
</div>

              
              <div className="footer-contact">
                <p>#6, 6th cross, Magadi Main Rd, Pete
                  Channappa Industrial Estate,
                  Kamakshipalya, Bengaluru,
                  Karnataka 560079</p>
                <p>nayakfiles@gmail.com</p>
                <p>+91 97418 72299</p>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Nayak Enterprises. All rights reserved.</p>
              
            </div>
          </footer>
        </div>
      </div>
    
  );
};

export default MainPage;