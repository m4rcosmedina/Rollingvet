import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./pages/Error404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaTurnos from "./pages/ListaTurnos";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contacto from './pages/Contacto';
import Planes from './pages/Planes';
import { useState } from "react";

function App() {
  //state
  const [turnos, setTurnos] = useState([])
  // variable de entorno
  const URL = process.env.REACT_APP_API_ROLLINGVET;
  console.log(URL);

  const getApi = async () => {
    try {
      const respuesta = await fetch(URL);
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route exact path="/Contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/Planes" element={<Planes></Planes>}></Route>
          <Route exact path="/ListaTurnos" element={<ListaTurnos></ListaTurnos>}></Route>
          <Route exact path="turnos/CrearTurnos"></Route>
          <Route exact path="turnos/EditarTurnos"></Route>
        </Routes>
      </Router>
      <Footer></Footer>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&family=VT323&display=swap');
      </style>
    </div>

  );
}

export default App;
