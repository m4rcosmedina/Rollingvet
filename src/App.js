import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Error404 from "./Components/Error404";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
      </Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&display=swap');
      </style>

    </div>
  );
}

export default App;
