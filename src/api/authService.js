import axios from "./axiosInstance";

const BASE_URL = "http://localhost:8080";

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const registerUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, credentials);
    return response.data;
  } catch (e) {
    throw e.response?.data || e;
  }
};
