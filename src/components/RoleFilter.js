import React from "react";

const RoleFilter = ({ selectedRole, roles, onRoleChange }) => {
  return (
    <div className="flex justify-end mb-6">
      <select
        value={selectedRole}
        onChange={(e) => onRoleChange(e.target.value)}
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Roles</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoleFilter;
