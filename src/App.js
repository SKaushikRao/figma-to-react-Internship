import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import TokyoImage from './assets/Tokyo.png';
import FlightDetailsImage from './assets/Flight details.png';
import AccommodationImage from './assets/Frame 45.png';
import ActivitiesImage from './assets/Activities details.png';
import DaysImage from './assets/acts.png';
import ProfileIcon from './assets/profile.png';
import OnboardingImage from './assets/Onboarding.png';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  
  // Function to handle image clicks that redirect to onboarding
  const handleRedirectClick = () => {
    setCurrentPage('onboarding');
  };

  // Function to go back to main dashboard
  const handleBackClick = () => {
    setCurrentPage('main');
  };

  // Animation variants
  const hoverScale = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  const tapScale = {
    scale: 0.98,
    transition: { duration: 0.1 }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Hotel data for accommodation section
  const hotels = [
    {
      name: "Shinagawa Prince Hotel",
      checkIn: "26.01.2025, 11:15 pm",
      checkOut: "28.01.2025, 11:15 am",
      nights: 2,
      status: "Confirmed",
      rating: "4.2 Very Good"
    },
    {
      name: "Mercure Tokyo Hotel",
      checkIn: "28.01.2025, 6:00 pm",
      checkOut: "30.01.2025, 11:15 am",
      nights: 2,
      status: "Pending",
      rating: "4.1 Very Good"
    }
  ];

  // Activities data
  const activities = [
    {
      name: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      timing: "8:15 am Morning",
      duration: "3 hours",
      pickUp: "From Hotel",
      image: require('./assets/senso-ji.jpg')
    },
    {
      name: "Tokyo Sky Tree",
      timing: "1:00 pm Afternoon",
      duration: "3 hours",
      pickUp: "From Nakamise Street",
      image: require('./assets/sky-tree.jpg')
    },
    {
      name: "Kimono Wearing",
      timing: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickUp: "From Hotel",
      image: require('./assets/kimono.jpg')
    }
  ];

  // Days for the calendar
  const days = [
    { day: "MON", date: "27" },
    { day: "TUE", date: "28" },
    { day: "WED", date: "29" },
    { day: "THU", date: "30" },
    { day: "FRI", date: "31" },
    { day: "SAT", date: "1" }
  ];

  // Main Dashboard content
  const renderMainDashboard = () => {
    return (
      <div className="app-container">
        <header className="header">
          <div className="header-text">
            <h1>Hello Kaushik!</h1>
            <p>Ready for the trip?</p>
          </div>
          <motion.img 
            src={ProfileIcon} 
            alt="Profile" 
            className="profile-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        </header>
        
        <h2>Your Next Destination?</h2>
        <section className="trip-section">
          <motion.img 
            src={TokyoImage} 
            alt="Tokyo" 
            className="trip-banner" 
            onClick={handleRedirectClick}
            whileHover={hoverScale}
            whileTap={tapScale}
            style={{ cursor: 'pointer' }}
          />
        </section>

        <section className="flight-section">
          <motion.div
            {...fadeInUp}
            className="section-header"
          >
            <h2>Flight Details</h2>
            <span className="see-all">See all</span>
          </motion.div>
          <motion.img 
            src={FlightDetailsImage} 
            alt="Flight Details" 
            className="flight-banner" 
            whileHover={hoverScale}
            whileTap={tapScale}
            onClick={handleRedirectClick}
            style={{ cursor: 'pointer' }}
          />
        </section>

        <section className="accommodation-section">
          <motion.div
            {...fadeInUp}
            className="section-header"
          >
            <h2>Accommodation</h2>
            <span className="see-all">See all</span>
          </motion.div>
          <div className="accommodation-scroll">
            {hotels.map((hotel, index) => (
              <motion.div 
                key={index}
                className={`hotel-card ${hotel.status.toLowerCase()}`}
                whileHover={hoverScale}
                whileTap={tapScale}
                onClick={handleRedirectClick}
              >
                <div className="hotel-rating">{hotel.rating}</div>
                <h3>{hotel.name}</h3>
                <p>Check in: {hotel.checkIn}</p>
                <p>Check out: {hotel.checkOut}</p>
                <div className="hotel-footer">
                  <span>{hotel.nights} Nights</span>
                  <span className={`status ${hotel.status.toLowerCase()}`}>
                    {hotel.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="activities-section">
          <motion.div
            {...fadeInUp}
            className="activity-cards"
          >
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                className="activity-card"
                whileHover={hoverScale}
                whileTap={tapScale}
                onClick={handleRedirectClick}
              >
                <div className="activity-content">
                  <h3>{activity.name}</h3>
                  <p><strong>Timing:</strong> {activity.timing}</p>
                  <p><strong>Duration:</strong> {activity.duration}</p>
                  <p><strong>Pick up:</strong> {activity.pickUp}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="day-plan-section">
          <motion.div
            {...fadeInUp}
            className="day-plan-header"
          >
            <div className="day-plan-buttons">
              <motion.button 
                className="day-plan-button active"
                whileHover={{ backgroundColor: '#3651d3' }}
                whileTap={{ scale: 0.95 }}
              >
                Day Plan
              </motion.button>
              <motion.button 
                className="day-plan-button"
                whileHover={{ backgroundColor: '#e8eaf6' }}
                whileTap={{ scale: 0.95 }}
              >
                14 Activities
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="calendar-days"
          >
            {days.map((day, index) => (
              <motion.div 
                key={index}
                className={`calendar-day ${index === 0 ? 'active' : ''}`}
                whileHover={{ backgroundColor: '#e8eaf6' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRedirectClick}
              >
                <div className="day-name">{day.day}</div>
                <div className="day-number">{day.date}</div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            className="day-selected"
          >
            <span>Day 1: 27.01.2025</span>
            <span className="day-tag">4 ACTIVITIES</span>
          </motion.div>
          
          <motion.img 
            src={DaysImage} 
            alt="Activities Details" 
            className="activities-banner" 
            whileHover={hoverScale}
            whileTap={tapScale}
            onClick={handleRedirectClick}
            style={{ cursor: 'pointer' }}
          />
        </section>
      </div>
    );
  };

  // Onboarding content
  const renderOnboarding = () => {
    return (
      <div className="onboarding-view">
        <motion.button 
          className="back-button"
          onClick={handleBackClick}
          whileHover={{ backgroundColor: '#3651d3', scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Back
        </motion.button>
        <motion.img 
          src={OnboardingImage} 
          alt="Onboarding" 
          className="onboarding-image"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  };

  // Render the current page based on state
  return currentPage === 'main' ? renderMainDashboard() : renderOnboarding();
}

export default App;