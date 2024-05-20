import axios from 'axios';

const API_URL = 'http://localhost:5145/users';

export const api = axios.create({
  baseURL: API_URL,
});

export const singUP = async (dataForms: IUserBasicInputcSchema) => {
  try {
    const resposne = await api.post('/', dataForms);
    const { data } = resposne;
    return data;
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};
