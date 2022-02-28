import React from "react";
import "../CSS/styleNavbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";
import { useState } from "react";
import Swal from "sweetalert2";


const Navegador = () => {
  let sesionUsuario =JSON.parse(sessionStorage.getItem("stateSession")) || false;
  const [mostrarLog, setMostrarLog] = useState(sesionUsuario);
  const handleClose = () => {
    if (sesionUsuario) {
      sesionUsuario = false;
      sessionStorage.setItem("stateSession", JSON.stringify(sesionUsuario));
      Swal.fire("Ha cerrado sesion!", "", "success");
      setTimeout(() => {
      },
       2000);
       setMostrarLog()
    }
  };

  return (
    <>
      <Navbar className="navbarBg" expand="lg">
        <Container fluid>
          <Nav.Link href="/" className="navbarInicio">
            {" "}
            <img
              src={LogoNavbar}
              className="imgLogoNavbar"
              alt="logoNavbar"
            />{" "}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto textoNavbar text-center">
              <Nav.Link href="/" className="navbarInicio text-white fs-5">
                Inicio
              </Nav.Link>
              <Nav.Link
                href="/QuienesSomos"
                className="navbarQuienes text-white fs-5"
              >
                Quiénes Somos
              </Nav.Link>
              <Nav.Link
                href="/Comentarios"
                className="navbarContacto text-white fs-5"
              >
                Opiniones
              </Nav.Link>
              <Nav.Link
                href="/Contacto"
                className="navbarContacto text-white fs-5"
              >
                Contactanos
              </Nav.Link>
              {mostrarLog ? (
                <Nav.Link
                  className="navbarLogin text-white fs-5"
                  onClick={handleClose}
                >
                  {" "}
                  LogOut
                </Nav.Link>
              ) : (
                <Nav.Link href="/login" className="navbarLogin text-white fs-5">
                  Login
                </Nav.Link>
              )}
              {mostrarLog ? (
                <Nav.Link
                  href="/Admin"
                  className="navbarContacto text-white fs-5"
                >
                  {" "}
                  Administración{" "}
                </Nav.Link>
              ) : undefined}
              {mostrarLog ? (
                <Nav.Link href="/Admin" className="text-info  fs-5">
                  {" "}
                  Sesión iniciada!{" "}
                </Nav.Link>
              ) : undefined}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
