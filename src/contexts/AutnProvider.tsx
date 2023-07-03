import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user";
import { useApi } from "../hooks/useApi";

export const AutnProvider = ( { children }: { children : JSX.Element } ) => {
    const [ user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => { 
            const storageData = localStorage.getItem('authToken');

            // verificando se tem dados no storageData
            if (storageData) {
                const data = await api.validateToken(storageData);

                //vaçida usuario
                if (data.user) {
                    setUser(data.user);
                }
            }
        }

        validateToken();
    }, [api]);

    const signIn = async (email: string, password: string) => {
        const data = await api.signIn(email, password);

        // valiodando dados
        if (data.user && data.token) {
            setUser(data.user);

            // salvando o token
            setToken(data.token);
            return true;
        }

       return false;
    }
    
    const signOut = async () => {
        await api.logout();

        // limpando user
        setUser(null);
        setToken('');
    }

    const setToken = async (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return(
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
} 