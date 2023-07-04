import { useContext } from 'react';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Private } from './pages/Private';
import { Home } from './pages/Home';
import { RequireAuth } from './contexts/RequireAuth';
import { AuthContext } from './contexts/AuthContext';

function App() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
   
    const handleLogOut = async () => { 
        await auth.signOut();
        navigate('/');
    }

    return (
        <div className="App">
            <header>
                <h1>Header do site</h1>
                <nav>
                    <Link to="/" >Home</Link>
                    <Link to="/private" >Private</Link>
                    { auth.user &&  <button onClick={handleLogOut}>Sair</button>}
                </nav>
            </header>
            <hr />
            <Routes>

                <Route 
                    path="/" 
                    element={ <Home/> }/>

                <Route 
                    path="/private" 
                    element={ <RequireAuth>
                                <Private />
                            </RequireAuth> }/>

            </Routes>
        </div>
    );
}

export default App;
