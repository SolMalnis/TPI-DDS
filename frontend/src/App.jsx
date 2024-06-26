import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';
import Menu from "./components/Menu"; // Asegúrate de importar el componente correctamente
import Inicio from './components/Inicio';
import Articulos from "./components/Articulos";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <div>
          <Routes>
            <Route path ='/' element={<Inicio />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/articulos' element={<Articulos />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
