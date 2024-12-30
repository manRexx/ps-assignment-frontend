import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_BACKEND_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Fetch Users Error:", error);
    throw error;
  }
};

export const fetchUsersByRole = async (role) => {
  try {
    const response = await api.get("/users/role", {
      params: { role },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch Users by Role Error:", error);
    throw error;
  }
};

export const fetchUserById = async (id) => {
  try {
    const response = await api.get("/users/search", {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch User by ID Error:", error);
    throw error;
  }
};
