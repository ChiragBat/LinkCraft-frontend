import axios from "./axiosInstance";

const BASE_URL = "http://localhost:8080";

export const shorten = async (originalUrl) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/shorten`, {
      originalUrl,
    });
    return response.data;
  } catch (error) {
    return error.response?.data || error;
  }
};
