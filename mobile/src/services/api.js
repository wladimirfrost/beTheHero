import axios from 'axios';

//Replace Your_IP with your IP (192.168.?.?)

const api = axios.create({
  baseURL: `http://${Your_IP}:3333`,
});

export default api;
