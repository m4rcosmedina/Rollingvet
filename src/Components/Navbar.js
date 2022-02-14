import React from "react";
import "../CSS/styleNavbar.css";
import { Navbar, Container, Nav, Modal, Button,Form } from "react-bootstrap";
import LogoNavbar from "../assets/img/logoNavbar.png";
import { useState } from "react";

const Navegador = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inLogin=()=>{window.location.href="/login"}
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
              <Nav.Link href="/QuienesSomos" className="navbarQuienes text-white fs-5">
                Quiénes Somos
              </Nav.Link>
              <Nav.Link href="/Contacto" className="navbarContacto text-white fs-5">
                Contactanos
              </Nav.Link>
              <Nav.Link className="navbarLogin text-white fs-5" onClick={inLogin}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingrese su email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger"onClick={handleClose}>
            Atrás
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Ingresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navegador;
