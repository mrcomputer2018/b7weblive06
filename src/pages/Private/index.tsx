import { useContext } from'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Private = () => {
    const auth = useContext(AuthContext);

    return(
        <div>
            <h2>Pagina Private</h2>
            Usuario: { auth.user?.name }
        </div>
    );
}