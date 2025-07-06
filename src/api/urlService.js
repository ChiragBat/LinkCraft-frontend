import axios from "./axiosInstance";

export const fetchUrls = async () => {
  try {
    const response = await axios.post("/api/myUrls");
    return response.data;
  } catch (e) {
    return e.data;
  }
};
