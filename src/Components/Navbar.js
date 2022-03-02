import React from "react";
import "../CSS/styleNavbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Navegador = () => {
  let sesionUsuario =JSON.parse(sessionStorage.getItem("stateSession")) || false;
  const [mostrarLog, setMostrarLog] = useState(sesionUsuario);
  const handleClose = () => {
    if (sesionUsuario) {
      sesionUsuario = false;
      sessionStorage.setItem("stateSession", JSON.stringify(sesionUsuario));
      Swal.fire("Ha cerrado sesion!", "", "success");
      setTimeout(() => {
        window.location.href="/login"
      },
       2000);
       setMostrarLog()
    }
  };

  return (
    <>
      <Navbar className="navbarBg" expand="lg">
        <Container fluid>
          <Link to="/" className="navbarInicio">
            {" "}
            <img
              src={LogoNavbar}
              className="imgLogoNavbar"
              alt="logoNavbar"
            />{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto textoNavbar text-center">
              <Link to="/" className="navbarInicio text-white fs-5" style={{ marginLeft: 15 }}>
                Inicio
              </Link>
              <Link
                to="/QuienesSomos"
                className="navbarQuienes text-white fs-5" style={{ marginLeft: 15 }}
              >
                Quiénes Somos
              </Link>
              <Link
                to="/Comentarios"
                className="navbarContacto text-white fs-5" style={{ marginLeft: 15 }}
              >
                Opiniones
              </Link>
              <Link
                to="/Contacto"
                className="navbarContacto text-white fs-5" style={{ marginLeft: 15 }}
              >
                Contactanos
              </Link>
              
              {mostrarLog ? (
                <Link
                  to="/Admin"
                  className="navbarContacto text-white fs-5" style={{ marginLeft: 15 }}
                >
                  {" "}
                  Administración{" "}
                </Link>
              ) : undefined}
              {mostrarLog ? (
                <Link to="/Admin" className="text-info  fs-5" style={{ marginLeft: 15 }}>
                  {" "}
                  Sesión iniciada!{" "}
                </Link>
              ) : undefined}
              {mostrarLog ? (
                <Link
                  className="navbarLogin text-white fs-5" style={{ marginLeft: 15 }}
                  onClick={handleClose}
                >
                  {" "}
                  LogOut
                </Link>
              ) : (
                <Link to="/login" className="navbarLogin text-white fs-5" style={{ marginLeft: 15 }}>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
