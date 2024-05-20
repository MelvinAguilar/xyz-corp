import axios from "axios";
import { CreatePostType } from "../types/Post";
import { CreateUserType } from "../types/User";

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

export const createPost = async (data: CreatePostType) => {
  try {
    console.log(`/public/v2/users/${data.user_id}/posts`);
    const response = await axios.post(`/public/v2/users/${data.user_id}/posts`, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createUser = async (data: CreateUserType) => {
  try {
    const response = await axios.post("/public/v2/users", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}