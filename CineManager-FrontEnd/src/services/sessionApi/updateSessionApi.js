import axios from "axios";

const API_URL = 'http://localhost:3000/api/seance/updateSeance/';
const token = localStorage.getItem('token');

export const updateSession = async (sessionId,sessiondata) => { 
    try {

        const response = await axios.put(API_URL+`${sessionId}`, sessiondata, {
            headers: {
                'Authorization': `Bearer ${token}`,
               
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching update session:', error);
        throw error;
    }
};