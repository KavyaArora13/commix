import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ProfileBanner from '../Components/Profile/ProfileBanner.jsx'
import Sidebar from '../Components/Profile/Sidebar.jsx'
import OrderedProduct from '../Components/Profile/OrderedProduct.jsx'
import EditProfileModal from '../Components/Profile/EditProfileModal.jsx'
import '../Assets/Css/Profile/Profile.scss'

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    if (isEditModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isEditModalOpen]);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Add logic to update profile
    console.log('Profile updated');
    setIsEditModalOpen(false);
  };

  // Profile photo URL
  const profilePhotoUrl = "/images/profile.png";

  return (
    <div>
      <Header/>
      <main className="profile-page">
        <ProfileBanner 
          name="Name Surname"
          profilePicture={profilePhotoUrl}
          reviews={0}
          photos={0}
          orders={0}
          onEditClick={handleOpenEditModal}
        />
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <OrderedProduct 
                image="/images/order.png"
                title="Neque porro quisquam est qui dolorem ipsum quia"
                seller="Wellden"
                price="261.00"
                originalPrice="349.00"
              />
              <OrderedProduct 
                image="/images/order.png"
                title="Neque porro quisquam est qui dolorem ipsum quia"
                seller="Wellden"
                price="261.00"
                originalPrice="349.00"
              />
              <OrderedProduct 
                image="/images/order.png"
                title="Neque porro quisquam est qui dolorem ipsum quia"
                seller="Wellden"
                price="261.00"
                originalPrice="349.00"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer/>
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onUpdate={handleUpdateProfile}
        profileImage={"/images/profile.png"}
      />
    </div>
  )
}

export default Profile