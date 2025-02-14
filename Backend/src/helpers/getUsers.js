import axios from 'axios';

export async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;  // Los datos ya están en formato JSON
    } catch (error) {
        console.error("Error fetching users", error);
        throw error;  // Lanza el error si ocurre un problema
    }
}