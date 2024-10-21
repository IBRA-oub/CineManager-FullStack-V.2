import axios from "axios";

const API_URL = 'http://localhost:3000/api/film/updateFilm/';
const token = localStorage.getItem('token');

export const updateFilm = async (filmId,filmdata) => {

    try {

        const response = await axios.put(API_URL+`${filmId}`, filmdata, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching update film:', error);
        throw error;
    }
};