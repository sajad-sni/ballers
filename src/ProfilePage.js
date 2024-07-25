import React from 'react';
import ProfileNavBar from './ProfileNavBar'; 
import FooterOne from './FooterOne'; 

const ProfilePage = () => {
  return (
    <div>
      <ProfileNavBar />
      <div className="profile-content">
        <h1>Welcome to Your Profile</h1>
        
      </div>
      <FooterOne />
    </div>
  );
};

export default ProfilePage;
