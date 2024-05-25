import axios from 'axios';
import Cookies from 'js-cookie';

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
    const data = err.response.data;
    return data;
  }
};

export const createRoom = async (dataForms: IRoomInput): Promise<any> => {
  try {
    const token = Cookies.get('USER_TOKEN');

    const response = await api.post(`/`, dataForms, {
      headers: {
        Authorization: token,
      },
    });
    const data = response.data;
    return data;
  } catch (err) {
    const data = err.response.data;
    return data;
  }
};
