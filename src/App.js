import React from "react";
import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./pages/Error404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaTurnos from "./pages/ListaTurnos";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contacto from "./pages/Contacto";
import Planes from "./pages/Planes";
import QuienesSomos from "./pages/QuienesSomos";
import ListadoPacientes from "./pages/ListadoPacientes";
import CrearPaciente from "./pages/Pacientes/CrearPaciente";
import EditarPaciente from "./pages/Pacientes/EditarPaciente";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const URL = process.env.REACT_APP_API_ROLLINGVET;
  console.log(URL);

  useEffect(() => {
    getApi();
   },[]);

  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const pacientesApi = await res.json();
      console.log(pacientesApi);
      setPacientes(pacientesApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route exact path="/Contacto" element={<Contacto></Contacto>}></Route>
          <Route
            exact
            path="/QuienesSomos"
            element={<QuienesSomos></QuienesSomos>}
          ></Route>
          <Route exact path="/Planes" element={<Planes></Planes>}></Route>
          <Route
            exact
            path="/ListaTurnos"
            element={<ListaTurnos></ListaTurnos>}
          ></Route>
          <Route
            exact
            path="/ListadoPacientes"
            element={<ListadoPacientes pacientes={pacientes}></ListadoPacientes>}
          ></Route>
          <Route
            exact
            path="/CrearPaciente"
            element={<CrearPaciente URL={URL} getApi ={getApi}></CrearPaciente>}
          ></Route>
          <Route
            exact
            path="/EditarPaciente/:id"
            element={<EditarPaciente URL={URL}></EditarPaciente>}
          ></Route>
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
