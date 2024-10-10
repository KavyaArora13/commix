import React from 'react';
import '../../Assets/Css/Profile/ProfileBanner.scss';

const ProfileBanner = ({ name, profilePicture, reviews, photos, orders, onEditClick }) => {
  return (
    <div className="profile-banner">
      <div 
        className="banner-background"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/profile-banner.png)`}}
      ></div>
      <div className="container-fluid">
        <div className="row align-items-center h-100">
          <div className="col-md-6 d-flex align-items-center">
            <img src={profilePicture} alt={name} className="avatar rounded-circle" />
            <h1 className="name">{name}</h1>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-column align-items-end h-100 justify-content-between">
              <button className="edit-button btn" onClick={onEditClick}>EDIT PROFILE</button>
              <div className="user-stats">
                <div className="stat">
                  <div className="stat-value">{reviews}</div>
                  <div className="stat-label">REVIEWS</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{photos}</div>
                  <div className="stat-label">PHOTOS</div>
                </div>
                <div className="stat">
                  <div className="stat-value">{orders}</div>
                  <div className="stat-label">Orders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;