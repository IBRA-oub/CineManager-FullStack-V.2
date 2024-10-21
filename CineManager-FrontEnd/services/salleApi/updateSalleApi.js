import axios from "axios";

const API_URL = 'http://localhost:3000/api/salle/updateSalle/';
const token = localStorage.getItem('token');

export const updateSalle = async (sallId,salledata) => {

    try {

        const response = await axios.put(API_URL+`${sallId}`, salledata, {
            headers: {
                'Authorization': `Bearer ${token}`,
             
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching update salle:', error);
        throw error;
    }
};