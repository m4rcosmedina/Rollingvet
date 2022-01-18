import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&display=swap');
      </style>
      <h1>prueba</h1>
      <FontAwesomeIcon icon={faBell}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
