import { useState } from "react";

export const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

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
            
            <button>Fazer Login</button>
        </div>
    );
}