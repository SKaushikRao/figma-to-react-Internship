// src/components/LoginModal.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import '../styles/LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSigningUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="modal-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{isSigningUp ? 'Create an Account' : 'Sign In'}</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleEmailAuth}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="auth-button" 
            disabled={loading}
          >
            {loading ? 'Processing...' : (isSigningUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <button 
          className="google-button" 
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          Continue with Google
        </button>
        
        <p className="switch-mode">
          {isSigningUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
            type="button" 
            className="switch-button"
            onClick={() => setIsSigningUp(!isSigningUp)}
          >
            {isSigningUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;