import axios from 'axios';

//Replace the variable Your_IP with your IP

const api = axios.create({
  baseURL: `http://${Your_IP}:3333`,
});

export default api;
