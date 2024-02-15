import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import "../../custom-styles.css";

const UserProfile = ({ user }) => {
  return (
    <div className="col-6 d-flex align-items-center">
      <UserIcon
        className="h-6 w-6 text-white me-2"
        style={{ height: "24px", width: "24px" }}
      />
      <span className="d-none d-sm-block">{user?.name}</span>
    </div>
  );
};

export default UserProfile;
