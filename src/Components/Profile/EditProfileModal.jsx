import React, { useState } from 'react';
import '../../Assets/Css/Profile/EditProfileModal.scss';
import profileBanner from '../../Assets/Image/main-image.png';

const EditProfileModal = ({ isOpen, onClose, onUpdate, profileImage }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    address: '',
    houseNo: '',
    pincode: '',
    country: '',
    state: '',
    city: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="edit-profile-modal">
      <div className="modal-content">
        <h2>Edit profile<span className="close-button" onClick={onClose}>×</span></h2>
        <div className="modal-header">
          <div className="background-image" style={{backgroundImage: `url(${profileBanner})`}}></div>
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
              <input type="text" name="surname" placeholder="Surname" onChange={handleChange} value={formData.surname} />
            </div>
            <input type="tel" name="phoneNumber" placeholder="Phone number" onChange={handleChange} value={formData.phoneNumber} />
            <div className="email-row">
              <input type="email" name="email" placeholder="Email address" onChange={handleChange} value={formData.email} />
            </div>
            <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
            <div className="form-row">
              <input type="text" name="houseNo" placeholder="House No." onChange={handleChange} value={formData.houseNo} />
              <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} value={formData.pincode} />
            </div>
            <div className="form-row">
              <input type="text" name="country" placeholder="Country" onChange={handleChange} value={formData.country} />
              <input type="text" name="state" placeholder="State" onChange={handleChange} value={formData.state} />
              <input type="text" name="city" placeholder="City" onChange={handleChange} value={formData.city} />
            </div>
            <div className="button-row">
              <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
              <button type="submit" className="update-button">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;