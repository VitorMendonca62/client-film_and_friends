import axios from 'axios';

export const showUser = async (id) => {
  const API_URL = 'http://localhost:4004';
  try {
    const response = await axios.get(`${API_URL}/auth/users/${id}`);
    const data = await response.data;

    const user = data.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};
