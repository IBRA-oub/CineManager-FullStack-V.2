import axios from "axios";

const API_URL = 'http://localhost:3000/api/film/deleteFilm/';
const token = localStorage.getItem('token');

export const deleteFilmApi = async (filmId) => {

    try {
        const response = await axios.delete(API_URL + `${filmId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching delete film:', error);
        throw error;
    }
};