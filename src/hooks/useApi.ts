import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

// criando hook
export const useApi = () => ({ 
    validateToken: async (token: string) => {
        const response = await api.post('validate', { token });

        return response.data;
    },
    signIn: async (email: string, password: string) => {
        const response = await api.post('/users/login', { email: email, password: password });

        return response.data;
    },
    logout : async () => {
        const response = await api.post('/users/logout');

        return response.data;
    }
});