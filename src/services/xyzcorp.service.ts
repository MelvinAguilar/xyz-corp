import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("/public/v2/users");
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUser = async (id: number) => {
  try {
    const response = await axios.get(`/public/v2/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const getPosts = async (userId: number) => {
  try {
    const response = await axios.get(`/public/v2/users/${userId}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};