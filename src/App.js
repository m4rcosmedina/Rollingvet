import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Error404 from "./Components/Error404";
import ListaTurnos from "./Components/ListaTurnos";
import Footer from "../src/Components/Footer";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
          <Route
            exact
            path="/ListaTurnos"
            element={<ListaTurnos></ListaTurnos>}
          ></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
