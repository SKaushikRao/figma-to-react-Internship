import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css'; //  CSS file for styling
// I have used the image export from Figma as the styling for onboarding Page, the given code for cenet is all not visible
function Onboarding() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="onboarding-container">
      <header className="onboarding-header">
        <button className="back-button" onClick={handleBackClick}>Back</button>
        <h1>Tokyo Trip Details</h1>
      </header>
      
      <section className="onboarding-content">
        <h2>Welcome to your Tokyo adventure!</h2>
        <p>Here you can find all the detailed information about your upcoming trip to Tokyo.</p>
        
        {/* Add your onboarding content here */}
        <div className="trip-overview">
          <h3>Trip Overview</h3>
          <p>Duration: 8 Days (27.01.2025 - 04.02.2025)</p>
          <p>Group Size: 4 People</p>
          <p>Planned Activities: 14</p>
        </div>
        
        {/* More sections as needed */}
      </section>
    </div>
  );
}

export default Onboarding;