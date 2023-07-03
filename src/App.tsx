import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Private } from './pages/Private';
import { Home } from './pages/Home';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Header do site</h1>
                <nav>
                    Links
                </nav>
            </header>
            <hr />
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/private" element={ <Private/> }/>
            </Routes>
        </div>
    );
}

export default App;
