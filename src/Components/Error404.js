import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../Error404.css";
import logoHorizontal from "../Components/img/logoHorizontal.png";
import { Container, Row, Col } from "react-bootstrap";

const Error404 = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={6} className="ladoIzq text-center">
            
              <img
                src={logoHorizontal}
                className="logoHorizontal"
                alt="logoHorizontal"/>
            
          </Col >
          <Col sm={6} className="ladoDer py-4">
            <p className="text-center numero404"> 404</p>
            <p className="text-center texto404">Página no encontrada</p>
          </Col>
        </Row>
      </Container>

      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Mono&family=VT323&display=swap');
      </style>
    </div>
  );
};

export default Error404;
