import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    // chamando contexto
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async () => {
        // verificando se email e senha estao preenchidos
        if (email && password) {
            const isLogged = await auth.signIn(email, password);

            // se esta logado
            if (isLogged) { 
                navigate('/');
                return;
            }

            return alert('Email ou senha inválidos');
        }

        alert('Email e senha são obigatorios.');
    }

    return (
        <div>
            <h2> Pagina Privada</h2>

            <input 
                type="text" 
                value={ email }
                placeholder="Digite seu email"
                onChange={ (text) => setEmail(text.target.value) }
            />

            <input 
                type="password" 
                value={ password }
                placeholder="Digite sua senha"
                onChange={ (text) => setPassword(text.target.value) }
            />
            
            <button
                onClick={ handleLogin }>
                Login
            </button>
        </div>
    );
}