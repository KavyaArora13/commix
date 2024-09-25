import React from 'react';
import SocialIcon from '../Components/SocialIcon.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons'; // Import FontAwesome icons
import '../Assets/Css/SignUp/SignUp.scss';

const SignUp = () => {
  return (
    <div className="signup-page">
      {/* Top Bar */}
      <div className="top-bar py-3 px-1">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Section - Address and Phone */}
            <div className="contact-info col-md-6 col-sm-6 text-md-start text-center mb-2 mb-md-0">
              <i className='fas fa-map-marker-alt me-3'></i>
              5630 Stephanie St, Las Vegas
              <i className="fas fa-phone ms-5 me-3"></i>
              +1 702 418 0420
            </div>

            {/* Right Section - Social Media Links */}
            <div className='social-links col-md-6 col-sm-6 text-md-end text-center'>
              <SocialIcon icon={faFacebookF} link="https://www.facebook.com" />
              <SocialIcon icon={faTwitter} link="https://www.twitter.com" />
              <SocialIcon icon={faInstagram} link="https://www.instagram.com" />
              <SocialIcon icon={faYoutube} link="https://www.youtube.com" />
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form and Image Section */}
      <div className="container-fluid">
        <div className="row">
          {/* Left Section - Signup Form */}
          <div className="col-md-6 col-sm-12">
            <div className="signup-container">
              <h2>Get Started Now</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="terms" />
                  <label className="form-check-label" htmlFor="terms">
                    I agree to the <a href="#">terms & policy</a>
                  </label>
                </div>

                <button type="submit" className="btn mt-3">Signup</button>
              </form>

              <hr />

              {/* OR Divider */}
              <div className="signup-divider">
                <span>OR</span>
              </div>

              {/* Google Sign-In Button */}
              <div className='google-divider'>
              <button className="btn btn-light btn-block mt-3">
                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '10px' }} /> Sign in with Google
              </button>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6 d-none d-md-block signup-image-container">
            <img
              src="/images/sign-up.png"
              alt="Signup Visual"
              className="img-fluid signup-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
