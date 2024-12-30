import React from "react";

const RoleFilter = ({ selectedRole, roles, onRoleChange }) => {
  return (
    <div className="flex justify-end mb-6">
      <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-md shadow-md">
        <h3 className="text-md font-semibold text-gray-700">Select Role</h3>
        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">all</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RoleFilter;
