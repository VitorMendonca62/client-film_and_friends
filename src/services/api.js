import axios from 'axios';

const API_URL = 'https://film-and-filmds.onrender.com';

export const api = axios.create({
  baseURL: API_URL,
});

export const showUser = async (id) => {
  try {
    const response = await api.get(`/auth/users/${id}`);
    const data = await response.data;
    return data;
  } catch (erro) {
    console.log(erro);
  }
};

export const singIn = async (dataForm) => {
  try {
    const response = await api.post(`/auth/login`, dataForm);
    const data = await response.data;

    return { response, data };
  } catch (erro) {
    console.log(erro);
  }
};

export const singUp = async (dataForm) => {
  try {
    const response = await api.post(`/auth/users`, dataForm);
    const data = await response.data;

    return { response, data };
  } catch (erro) {
    console.log(erro);
  }
};
