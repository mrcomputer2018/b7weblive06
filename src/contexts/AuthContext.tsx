import { createContext } from 'react';
import { User } from '../types/user';

export type AuthContextType = {
    // se nao tiver usuario logado nulo
    user: User| null;
    // retorna uma promise por que estou fazendo uma requisição
    signIn: (email: string, passowrd: string ) => Promise<boolean>;
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);