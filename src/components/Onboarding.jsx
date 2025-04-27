import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Onboarding.css';

const Onboarding = ({ onComplete }) => {
  const [destination, setDestination] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <motion.div 
      className="onboarding-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Plan Your Journey, Your Way!</h1>
          <p>Let's create your personalised travel experience</p>
        </div>

        <div className="onboarding-form">
          <div className="form-group">
            <label>Where would you like to go?</label>
            <div className="input-container">
              <i className="location-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#666666"/>
                </svg>
              </i>
              <input 
                type="text" 
                placeholder="Enter Destination" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>How long will you stay?</label>
            <div className="input-container dropdown">
              <i className="calendar-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="#666666"/>
                </svg>
              </i>
              <select defaultValue="">
                <option value="" disabled>Select Duration</option>
                <option value="weekend">Weekend (2-3 days)</option>
                <option value="week">Week (4-7 days)</option>
                <option value="fortnight">Fortnight (10-14 days)</option>
                <option value="month">Month (15-30 days)</option>
              </select>
              <i className="dropdown-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10H7Z" fill="#666666"/>
                </svg>
              </i>
            </div>
          </div>

          <div className="form-group">
            <label>Who are you traveling with?</label>
            <div className="options-grid">
              <motion.div 
                className={`option-card ${selectedOption === 'solo' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('solo')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="option-icon solo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#000000"/>
                  </svg>
                </div>
                <p>Solo</p>
              </motion.div>

              <motion.div 
                className={`option-card ${selectedOption === 'couple' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('couple')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="option-icon couple-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#000000"/>
                  </svg>
                </div>
                <p>Couple</p>
              </motion.div>

              <motion.div 
                className={`option-card ${selectedOption === 'family' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('family')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="option-icon family-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H16V4ZM19 11C19 9.9 18.1 9 17 9C15.9 9 15 9.9 15 11V13H19V11ZM5 11C5 9.9 4.1 9 3 9C1.9 9 1 9.9 1 11V13H5V11ZM15.63 14.4L12.13 18.39C12.06 18.47 11.96 18.54 11.86 18.56C11.76 18.59 11.65 18.57 11.56 18.52L8.46 16.57C8.25 16.43 8.21 16.14 8.35 15.93C8.5 15.72 8.78 15.68 8.99 15.82L11.4 17.37L14.22 14.04C14.38 13.85 14.67 13.82 14.86 13.97C15.05 14.13 15.08 14.42 14.93 14.61L14.63 14.4H15.63ZM7 7C5.9 7 5 7.9 5 9C5 10.1 5.9 11 7 11C8.1 11 9 10.1 9 9C9 7.9 8.1 7 7 7ZM17 7C15.9 7 15 7.9 15 9C15 10.1 15.9 11 17 11C18.1 11 19 10.1 19 9C19 7.9 18.1 7 17 7ZM12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4Z" fill="#000000"/>
                  </svg>
                </div>
                <p>Family</p>
              </motion.div>

              <motion.div 
                className={`option-card ${selectedOption === 'friends' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('friends')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="option-icon friends-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#000000"/>
                  </svg>
                </div>
                <p>Friends</p>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.button 
          className="continue-button"
          onClick={handleContinue}
          whileHover={{ scale: 1.05, backgroundColor: '#2341c7' }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Onboarding;