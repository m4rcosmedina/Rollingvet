import React from "react";
import styleNavbar from "./CSS/styleNavbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";

const Navegador = () => {
  return (
    <>
      <Navbar className="navbarBg" expand="lg">
        <Container>
          <img src={LogoNavbar} className="imgLogoNavbar" alt="logoNavbar" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Quiénes Somos</Nav.Link>
              <Nav.Link href="#link">Contactanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegador;
