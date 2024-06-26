
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import React from 'react'
import {Menu} from "./components/Menu"
import Inicio from './components/Inicio'
import Articulos from "./components/Articulos"
function App() {
  

  return (
    <div>
      <Router>
        <Menu/>
        <div>
          <Routes>
            <Route path ='/' element= {<Inicio/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App


{/*<BrowserRouter>
<Menu/>
  <div className="divBody">
    <Routes>
      <Route path="/Inicio" element={<Inicio/>}/>
     
      <Route path="/Articulos" element={<Articulos/>}/>
      <Route path="*" element={<Navigate to="/Inicio" replace />}/>      
    </Routes>
  </div>
<Footer/>
</BrowserRouter>*/}