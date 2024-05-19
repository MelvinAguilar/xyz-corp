import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("/public/v2/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await axios.get(`/public/v2/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};