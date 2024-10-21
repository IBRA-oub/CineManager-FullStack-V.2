import axios from "axios";

const API_URL = 'http://localhost:3000/api/seance/createSeance';
const token = localStorage.getItem('token');

export const creatSession = async (data) => {
    try {
        
        const response = await axios.post(API_URL,data,{
            headers: {
                'Authorization': `Bearer ${token}`, 
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching post Session:', error);
        throw error;
    }
};