import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import PaginaInicio from './componentes/PaginaInicio';
import Blog from './componentes/Blog';
import Acerca from './componentes/Acercade';

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <header>
            <h1>Bienvenido a mi Blog</h1>
            <nav>
            <NavLink to="/"> Inicio</NavLink>
            <NavLink to="/Blog"> Blog</NavLink>
            <NavLink to="/Acerca-de"> Acerca de</NavLink>
            </nav>
          </header>

          <main>
            <Routes>
            <Route path='/' element={<PaginaInicio/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Acerca' element={<Acerca/>}/>
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  );
  
}

export default App;