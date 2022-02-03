import React from "react";
import {
  Card,
  CardGroup,
  Container,
  Carousel,
  Button,
  Nav,
} from "react-bootstrap";
import perrito from "../assets/img/perrito.jpg";
import doctor1 from "../assets/img/doctor1.jpg";
import doctor2 from "../assets/img/doctor2.jpg";
import doctor3 from "../assets/img/doctor3.jpg";

import "../CSS/App.css";

const ContainerPrincipal = () => {
  return (
    <div className="">
      <Container>
        <h1 className="text-center py-2">NUESTROS SERVICIOS</h1>
        <hr />
        <CardGroup className=" my-4">
          <Card className="mx-4">
            <Card.Body className="text-center">
                <Card.Title className="py-5">
                  CONOCÉ A NUESTROS ESPECIALISTAS
                </Card.Title>
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://i.ibb.co/vkkZJjf/doctor1-01.jpg"
                    alt="First slide"
                    className="d-block w-100"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://i.ibb.co/1K4pNpN/doctora2-01.jpg"
                    alt="Second slide"
                    className="d-block w-100"
                  />
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Title className="py-5 text-center">
            CONOCÉ NUESTROS PLANES
            </Card.Title>

            <Card.Img variant="top" src="https://i.ibb.co/j3CW9g6/Sin-t-tulo-2-Mesa-de-trabajo-1-copia-01.jpg" />
            <Card.Body className="text-center py-4">
              <Nav.Link href="/ListaTurnos" className="navbarInicio">
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="botonEnviar"
                >
                  QUIERO SABER MÁS
                </Button>
              </Nav.Link>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Title className="py-5 text-center">
              SOLICITÁ TU TURNO AQUÍ
            </Card.Title>

            <Card.Img variant="top" src="https://i.ibb.co/j3CW9g6/Sin-t-tulo-2-Mesa-de-trabajo-1-copia-01.jpg" />
            <Card.Body className="text-center py-4">
              <Nav.Link href="/ListaTurnos" className="navbarInicio">
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="botonEnviar"
                >
                  RESERVAR TURNO
                </Button>
              </Nav.Link>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default ContainerPrincipal;
