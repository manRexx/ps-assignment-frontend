import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUsersByRole } from "../api/data";
import { useNavigate } from "react-router-dom";
import RoleFilter from "../components/RoleFilter";
import Table from "../components/Table";
import UserCard from "../components/UserCard";

const UserList = () => {
  const [selectedRole, setSelectedRole] = useState("all");
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const data = await fetchUsers();
        const differentRoles = Array.from(new Set(data.map((d) => d.role)));
        setRoles(differentRoles);
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    };

    loadRoles();
  }, []);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data =
          selectedRole === "all"
            ? await fetchUsers()
            : await fetchUsersByRole(selectedRole);
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [selectedRole]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <RoleFilter
        selectedRole={selectedRole}
        roles={roles}
        onRoleChange={setSelectedRole}
      />
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <Table users={users} />
      </div>
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
