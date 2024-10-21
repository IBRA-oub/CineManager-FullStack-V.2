import axios from "axios";

const API_URL = 'http://localhost:3000/api/seance/deleteSeance/';
const token = localStorage.getItem('token');

export const deleteSessionApi = async (sessionId) => {

    try {
        const response = await axios.delete(API_URL + `${sessionId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching delete session:', error);
        throw error;
    }
};