import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./pages/Error404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaTurnos from "./pages/ListaTurnos";
import FormTurnos from "./pages/ListaTurnos";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Contacto from './pages/Contacto';
import Planes from './pages/Planes';

function App() {
  // state
  const [turnos, setTurnos] = useState ([])

  // funcion que trae los datos
  const getApi = async () => {
    try {
      const respuesta = await fetch(http://localhost:3001/turnos)
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
          <Route exact path="/FormTurnos" element={<FormTurnos></FormTurnos>}></Route>
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
