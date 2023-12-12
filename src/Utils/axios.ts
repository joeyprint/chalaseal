import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: apiUrl, // Your API's base URL
  timeout: 5000, // Timeout for requests (optional)
  headers: {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin (you can specify a specific origin instead of '*')
  },
});
