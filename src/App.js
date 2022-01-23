import "./CSS/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./pages/Error404";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaTurnos from "./pages/ListaTurnos";
import Footer from "../src/Components/Footer";
import Navbar from './Components/Navbar';
import Contacto from './pages/Contacto';

  

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route exact path="/Contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/ListaTurnos" element={<ListaTurnos></ListaTurnos>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
