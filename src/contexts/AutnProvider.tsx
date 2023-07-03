import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user";
import { useApi } from "../hooks/useApi";

export const AutnProvider = ( { children }: { children : JSX.Element } ) => {
    const [ user, setUser] = useState<User | null>(null);
    const api = useApi();

    const signIn = async (email: string, password: string) => {
        const data = await api.signIn(email, password);

        // valiodando dados
        if (data.user && data.token) {
            setUser(data.user);
            return true;
        }

       return false;
    }
    
    const signOut = async () => {
        await api.logout();

        // limpando user
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
} 