import React from "react";
import { UserIcon } from "@heroicons/react/24/outline"; // Import UserIcon

const UserProfile = ({ user }) => {
  return (
    <div className="flex items-center ml-4">
      {" "}
      {/* Add margin-left to create space between the dropdown and user profile */}
      <UserIcon className="h-6 w-6 text-white mr-2" />{" "}
      {/* User icon with margin-right */}
      <span>{user?.name}</span>
    </div>
  );
};

export default UserProfile;
