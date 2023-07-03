import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../pages/Login";

export const RequireAuth = ({ children } : { children: JSX.Element }) => {
    // acessar contexto e ver se tem usuario validado
    const auth = useContext(AuthContext);

    // se nao tenho um usuario salvo no contexto(nao logado)
    if(!auth.user) {
        return <Login />;
    }

    return children;
}