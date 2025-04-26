// src/components/ProfileDropdown.js
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import '../styles/ProfileDropdown.css';

const ProfileDropdown = ({ isOpen, onClose, user }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onClose();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      ref={dropdownRef}
      className="profile-dropdown"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="user-info">
        {user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="user-avatar" />
        ) : (
          <div className="user-avatar-placeholder">
            {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
          </div>
        )}
        <div className="user-details">
          <h4>{user.displayName || 'User'}</h4>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="dropdown-divider"></div>
      <ul className="dropdown-menu">
        <li>Profile Settings</li>
        <li>My Trips</li>
        <li>Help & Support</li>
        <li className="logout-item" onClick={handleLogout}>Sign Out</li>
      </ul>
    </motion.div>
  );
};

export default ProfileDropdown;