import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div key={user.id} className="bg-white rounded-lg shadow p-4 space-y-4">
      <div className="flex items-center space-x-4">
        <p className="text-sm font-medium p-4 pr-8 text-gray-900 truncate mb-max">
          {"Id: "}
          {user.id}
        </p>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-500 truncate">@{user.username}</p>
        </div>
        <span
          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
            user.role === "admin"
              ? "bg-purple-100 text-purple-800"
              : user.role === "moderator"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {user.role}
        </span>
      </div>

      <div className="pt-2 border-t border-gray-200">
        <button
          onClick={() => navigate(`user/${user.id}`)}
          className="w-full text-center text-blue-600 hover:text-blue-900 text-sm font-medium py-2"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default UserCard;
