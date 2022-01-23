import React from "react";
import "../CSS/styleNavbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";

const Navegador = () => {
  return (
    <>
      <Navbar className="navbarBg" expand="lg">
        <Container fluid >
        <img src={LogoNavbar} className="imgLogoNavbar" alt="logoNavbar" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto textoNavbar text-center">
              <Nav.Link href="#home" className="navbarInicio">Inicio</Nav.Link>
              <Nav.Link href="#link" className="navbarQuienes">Quiénes Somos</Nav.Link>
              <Nav.Link href="" className="navbarContacto">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
