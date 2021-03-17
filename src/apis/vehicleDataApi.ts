import axios from 'axios';

export const vehicleDataApi = axios.create({
  baseURL: 'http://localhost:8080/api',
});
