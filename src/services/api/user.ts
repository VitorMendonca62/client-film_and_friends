import axios from 'axios';

const API_URL = 'http://localhost:5145/users';

export const api = axios.create({
  baseURL: API_URL,
});

export const singUP = async (dataForms: IUserBasicInputcSchema) => {
  try {
    const response = await api.post('/', dataForms);
    const { data } = response;
    return data;
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};

export const singIn = async (dataForms: IUserLoginSchema) => {
  try {
    const response = await api.post('/auth/login', dataForms);
    const { data } = response;
    return data;
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};

