import axios from 'axios';

//For Android set -> baseURL: `http://${your_IP}:3333`

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
