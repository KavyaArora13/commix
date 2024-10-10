import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import '../Assets/Css/Login/Login.scss';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <img src='/images/logo.png' alt="COMIX" className="brand-logo" />
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="welcome-text">Sigin to Teamworks</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control1"
                placeholder="Miguel Kimasarl"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control1"
                placeholder="miguel.kima@gmail.com"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control1"
                  placeholder="••••••••••"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="eye-icon" />
                </button>
              </div>
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="remember-me" className="form-check-label">
                  Remember me
                </label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">
              Signup
            </button>
            <div className="or-divider">
              <span>or</span>
            </div>
            <button type="button" className="google-signin-btn">
              <img src="google-icon.png" alt="Google" />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
      <div className="login-image-container">
        <img
          src="/images/commix-gif.gif"
          alt="Cartoon woman illustration"
          className="login-image"
        />
      </div>
    </div>
  );
}