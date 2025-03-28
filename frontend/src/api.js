import axios from 'axios';
const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default API;




const API_URL = 'http://localhost:5000'; // Change this if your backend is on a different port

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/portfolio`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
