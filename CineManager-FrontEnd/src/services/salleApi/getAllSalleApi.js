
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/salle/allSalle';
const token = localStorage.getItem('token');
export const getAllSalle = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching Salle:', error);
        throw error; 
    }
};
