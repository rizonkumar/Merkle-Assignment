import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const UserProfile = ({ user }) => {
  return (
    <div className="flex items-center ml-4">
      {" "}
      <UserIcon className="h-6 w-6 text-white mr-2" />{" "}
      <span className="hidden sm:block">{user?.name}</span>
    </div>
  );
};

export default UserProfile;
