import React, { Component } from "react";
import Cookies from "universal-cookie";
import { Container} from "react-bootstrap";

const coockies = new Cookies();

class Admin extends Component {
    cerrarSesion =()=>{
        coockies.remove("id", {path: "/login"});
        coockies.remove("apellido_paterno", {path: "/login"});
        coockies.remove("nombre", {path: "/login"});
        coockies.remove("username", {path: "/login"});
        window.location.href="./";
    }
    render = ()=>{
        console.log ("id " + coockies.get("id"));
        console.log ("apellido_paterno " + coockies.get("apellido_paterno"));
        console.log ("nombre " + coockies.get("nombre"));
        console.log ("username " + coockies.get("username"));
        return(
            <Container fluid className="text-end my-2">
                Bienvenido Administrador
                
                <button className="btn btn-outline-primary mx-2" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </Container>

                
        );
    }
}

export default Admin;