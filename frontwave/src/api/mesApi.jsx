import axios from 'axios';

const API_URL = 'http://localhost:3000/api/wavewallet';
const token = localStorage.getItem('token');


// inscription definitive
export const InscriptionDefinitive = async (donneesInscriptions) => {

    const response = await axios.post(`${API_URL}/inscription/definitive`, donneesInscriptions, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};
