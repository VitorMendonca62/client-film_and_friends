import axios from 'axios';

const API_URL = 'https://film-and-filmds.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const indexFilms = async () => {
  try {
    const response = await api.get(`/room`);
    const data = await response.data;

    return data;
  } catch (erro) {
    console.log(erro);
  }
};
export const showFilm = async (id) => {
  try {
    const response = await api.get(`/room/${id}`);
    const data = await response.data;

    return data;
  } catch (erro) {
    console.log(erro);
  }
};
