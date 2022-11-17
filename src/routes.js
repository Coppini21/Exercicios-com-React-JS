import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Rotas(){
    const { repositorio }  = useParams()
    
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path={`/repositorio/:repositorio`} element={<Repositorio />} />
            </Routes>
        </BrowserRouter>
    )

}