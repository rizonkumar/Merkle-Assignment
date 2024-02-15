import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import "./custom-styles.css";

const UserProfile = ({ user }) => {
  return (
    // Use Bootstrap's flex and margin utilities
    <div className="d-flex align-items-center ms-4">
      <UserIcon
        className="h-6 w-6 text-white me-2"
        style={{ height: "24px", width: "24px" }}
      />
      {/* For responsive display, use Bootstrap's d-none and d-sm-block for small devices and up */}
      <span className="d-none d-sm-block">{user?.name}</span>
    </div>
  );
};

export default UserProfile;
