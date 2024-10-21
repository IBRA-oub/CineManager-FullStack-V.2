import axios from "axios";

const API_URL = 'http://localhost:3000/api/salle/deleteSalle/';
const token = localStorage.getItem('token');

export const deleteSalleApi = async (salleId) => {

    try {
        const response = await axios.delete(API_URL + `${salleId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching delete salle:', error);
        throw error;
    }
};