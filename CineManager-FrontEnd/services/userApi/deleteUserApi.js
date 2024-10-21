import axios from "axios";

const API_URL = 'http://localhost:3000/api/user/deletUser/';

export const deleteUserApi = async (userId) => {

    try { 
        const response = await axios.delete(API_URL+ `${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching delete user:', error);
        throw error;
    }
};