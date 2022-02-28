import React from "react";
import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Error404 from "./pages/Error404";
import Contacto from "./pages/Contacto";
import Planes from "./pages/Planes";
import QuienesSomos from "./pages/QuienesSomos";
import Login from "./pages/Login";
import ListadoPacientes from "./pages/ListadoPacientes";
import CrearPaciente from "./pages/Pacientes/CrearPaciente";
import EditarPaciente from "./pages/Pacientes/EditarPaciente";
import CrearTurno from "./pages/Turnos/CrearTurno";
import EditarTurno from "./pages/Turnos/EditarTurno";
import ListadoTurnos from "./pages/ListadoTurnos";
import Admin from "./pages/Admin";
import { useState, useEffect } from "react";
import OpinionesBD from "./Components/OpinionesBD";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [weather, setWeather] = useState({});
  const URL = process.env.REACT_APP_API_ROLLINGVET;
  const [user, setUser] = useState([]);
  const URLUser = process.env.REACT_APP_API_USER;
  const [turnos, setTurnos] = useState([]);
  const URLTurnos = process.env.REACT_APP_API_CRUDTURNOS;
  const key = process.env.REACT_APP_KEY;
  const [comentarios, setComentarios] = useState([]);
  const URLComent = process.env.REACT_APP_API_COMENTARIOS;

  useEffect(() => {
    getApi();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getWeather();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getApiUser();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTurnos();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getComentarios();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const getApiUser = async () => {
    try {
      const res = await fetch(URLUser);
      const userApi = await res.json();
      setUser(userApi);
    } catch (error) {
      console.log(error);
    }
  };
  //crudTurnos
  const getTurnos = async () => {
    try {
      const res = await fetch(URLTurnos);
      const turnosApi = await res.json();
      setTurnos(turnosApi);
    } catch (error) {
      console.log(error);
    }
  };
  //weather
  const getWeather = async () => {
    try {
      const ipify = require("ipify2");
      const resIp = await ipify.ipv4();
      const location = await fetch(`http://ip-api.com/json/${resIp}`);
      const locJson = await location.json();
      const openWeather = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${locJson.lat}&lon=${locJson.lon}&lang=es&units=metric&appid=${key}`
      );
      const openWthJson = await openWeather.json();
      const weather = {
        city: `${openWthJson.name}`,
        temp: `${openWthJson.main.temp}`,
        sky: `${openWthJson.weather[0].description}`,
        wind: `${openWthJson.wind.speed}`,
      };
      setWeather(weather);
      console.log(weather.city);
      console.log(weather.temp);
    } catch (error) {
      console.log(error);
    }
  };
  window.setInterval(getWeather, 300000);

  const getComentarios = async () => {
    try {
      const res = await fetch(URLComent);
      const comentariosApi = await res.json();
      setComentarios(comentariosApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Inicio weather={weather}></Inicio>}
          ></Route>
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
            path="/Login"
            element={<Login user={user} sessionStorage={sessionStorage}></Login>}
          ></Route>
          <Route
            exact
            path="/ListadoPacientes"
            element={
              <ListadoPacientes
                pacientes={pacientes}
                URL={URL}
                getApi={getApi}
              ></ListadoPacientes>
            }
          ></Route>
          <Route
            exact
            path="/CrearPaciente"
            element={<CrearPaciente URL={URL} getApi={getApi}></CrearPaciente>}
          ></Route>
          <Route
            exact
            path="/EditarPaciente/:id"
            element={
              <EditarPaciente URL={URL} getApi={getApi}></EditarPaciente>
            }
          ></Route>
          <Route
            exact
            path="/CrearTurno"
            element={<CrearTurno></CrearTurno>}
          ></Route>
          <Route
            exact
            path="/EditarTurno"
            element={<EditarTurno></EditarTurno>}
          ></Route>
          {/* <Route
            exact
            path="/TablaTurnos"
            element={<TablaTurnos></TablaTurnos>}
          ></Route>  */}
          <Route
            exact
            path="/ListadoTurnos"
            element={<ListadoTurnos turnos={turnos}></ListadoTurnos>}
          ></Route>
          <Route exact path="/admin" element={<Admin></Admin>}></Route>
          <Route
            exact
            path="/Comentarios"
            element={
              <OpinionesBD
                comentarios={comentarios}
                URLComent={URLComent}
                getComentarios={getComentarios}
              ></OpinionesBD>
            }
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
