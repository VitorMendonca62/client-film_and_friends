import axios from 'axios';

const API_URL = 'http://localhost:5145/rooms';

export const api = axios.create({
  baseURL: API_URL,
});

export const getPageRooms = async (
  page: number,
  type: 'movie' | 'serie',
): Promise<TypeDataRoom[]> => {
  try {
    const response = await api.get(`/${type}/${page}`);
    const data: TypeDataRoom[] = response.data.data;
    return data;
  } catch (err) {
    const data = err.resposne.data;
    return data;
  }
};
