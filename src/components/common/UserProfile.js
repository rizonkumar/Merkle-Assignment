import React from "react";

const UserProfile = ({ user }) => {
  // Placeholder for user image logic or default image
  const profilePicUrl = "/path/to/default/profile/pic.png"; // Update this path

  return (
    <div className="flex items-center">
      {/* Uncomment and update src attribute when you have user profile images */}
      {/* <img src={profilePicUrl} alt={user.name} className="h-8 w-8 rounded-full mr-2" /> */}
      <span>{user.name}</span>
    </div>
  );
};

export default UserProfile;
