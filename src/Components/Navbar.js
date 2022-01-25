import React from "react";
import "../CSS/styleNavbar.css";
import { Navbar, Container, Nav,} from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";

const Navegador = () => {
  return (
    <>
      <Navbar className="navbarBg" expand="lg">
        <Container fluid >
                     <Nav.Link href="/" className="navbarInicio"> <img src={LogoNavbar} className="imgLogoNavbar" alt="logoNavbar" />  </Nav.Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto textoNavbar text-center">
              <Nav.Link href="/" className="navbarInicio">Inicio</Nav.Link>
              <Nav.Link href="" className="navbarQuienes">Quiénes Somos</Nav.Link>
              <Nav.Link href="/Contacto" className="navbarContacto">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
