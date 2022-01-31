import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/App.css";
import logoNavbar from '../assets/img/logoNavbar.png';
import { Container, Row, Col,Nav,Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={6} className="ladoIzq text-center">
            <img
              src={logoNavbar}
              className="logoHorizontal"
              alt="logoHorizontal" />

               <Nav.Link href="/" className="boton404">
                <Button
                  type="submit"
                  variant="outline-light"
                  className="botonEnviar"
                >
                 Volver al Home
                </Button>
                </Nav.Link>
          </Col >
          <Col sm={6} className="ladoDer py-4">
            <p className="text-center numero404"> 404</p>
            <p className="text-center texto404">Página no encontrada</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error404;
