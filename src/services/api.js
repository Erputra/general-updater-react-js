// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://192.168.107.150:80/general-updater/public/api'; // Replace with your actual backend URL
const bearerToken = '2|WWmIijKBJQUSGPr3K1w8j06i2jMKGOxIxLqV4e0k'; // Replace with your actual Bearer token

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  },
});

export const fetchDataFromBackend = async () => {
  try {
    const response = await api.post('/updateModuleIndex');
    return response.data.data.headers;
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    return [];
  }
};
