import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user";

export const AutnProvider = ( { children }: { children : JSX.Element } ) => {
    const [ user, setUser] = useState<User | null>(null);

    const signIn = (email: string, password: string) => {
        
        return false;
    }
    
    const signOut = () => {

    }

    return(
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
} 