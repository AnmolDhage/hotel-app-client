import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://anmol-hotel-app-api.herokuapp.com/api/'
});

export default axiosInstance;
