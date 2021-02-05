import axios_default from 'axios';

const axios = axios_default.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 60000,
});

const ClientsApi = {
  get: {
    clients: async () => {
      const { data } = await axios.get('/users');
      return data;
    },
    client: async (id) => {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    },
  },
  delete: {
    client: async (id) => await axios.delete(`/users/${id}`),
  },
  put: {
    client: async (id, data) => await axios.put(`/users/${id}`, data),
  },
};

export default ClientsApi;
