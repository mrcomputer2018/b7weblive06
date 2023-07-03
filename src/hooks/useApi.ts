import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

// criando hook
export const useApi = () => ({ 
    validateToken: async (token: string) => {

        // resposta fake
        return {
            user: { id: 3, name:'John', email:'john@john.com'},
    
        }

        //const response = await api.post('validate', { token });

        //return response.data;
    },
    signIn: async (email: string, password: string) => {
       // resposta fake
        return {
            user: { id: 3, name:'John', email:'john@john.com'},
            token: '123456789',
        }

        //const response = await api.post('/users/login', { email: email, password: password });

        //return response.data;
    },
    logout : async () => {
         // resposta fake
         return { status: true }
        
        // const response = await api.post('/users/logout');

        //return response.data;
    }
});