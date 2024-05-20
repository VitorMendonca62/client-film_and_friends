import axios from 'axios';

const API_URL = 'http://localhost:5145/rooms';

export const api = axios.create({
  baseURL: API_URL,
});

export const getPageRooms = async (page: number, type: 'movie' | 'serie') => {
  try {
    console.log("a")
    const resposne = await api.get(`/${type}/${page}`);
    const { data } = resposne;
    return data;
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};
