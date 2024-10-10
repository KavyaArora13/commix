import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Assets/Css/SignUp/SignUp.scss';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-page">
      <div className="signup-scroll-container">
        <img src='/images/logo.png' alt="COMIX" className="signup-brand-logo" />
        <div className="signup-container">
          <div className="signup-form-container">
            <h2 className="signup-welcome-text">Sign up to Teamworks</h2>
            <form className="signup-form">
              <div className="signup-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="signup-form-control"
                  placeholder="Miguel Kimasarl"
                />
              </div>
              <div className="signup-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="signup-form-control"
                  placeholder="miguel.kima@gmail.com"
                />
              </div>
              <div className="signup-form-group">
                <label>Password</label>
                <div className="signup-password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="signup-form-control"
                    placeholder="••••••••••"
                  />
                  <button
                    type="button"
                    className="signup-password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="signup-eye-icon" />
                  </button>
                </div>
              </div>
              <div className="signup-form-options">
                <div className="signup-remember-me">
                  <input
                    id="signup-remember-me"
                    type="checkbox"
                    className="signup-form-check-input"
                  />
                  <label htmlFor="signup-remember-me" className="signup-form-check-label">
                    Remember me
                  </label>
                </div>
                <a href="#" className="signup-forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" className="signup-btn">
                Sign up
              </button>
              <div className="signup-or-divider">
                <span>or</span>
              </div>
              <button type="button" className="signup-google-btn">
                <img src="google-icon.png" alt="Google" />
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
        <div className="signup-image-container">
          <img
            src="/images/commix-gif.gif"
            alt="Cartoon woman illustration"
            className="signup-image"
          />
        </div>
      </div>
    </div>
  );
}