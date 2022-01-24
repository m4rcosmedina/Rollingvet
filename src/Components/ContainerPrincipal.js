import React from "react";
import { Card, CardGroup, Container, Carousel, Button } from "react-bootstrap";
import perrito from "../assets/img/perrito.jpg";
import doctor1 from "../assets/img/doctor1.jpg";
import doctor2 from "../assets/img/doctor2.jpg";
import doctor3 from "../assets/img/doctor3.jpg";

import "../CSS/App.css";

const ContainerPrincipal = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center py-2">NUESTROS SERVICIOS</h1>
        <hr />
        <CardGroup className="fondoGeneral my-4">
          <Card className="mx-4">
            <Card.Body className="text-center">
              <Carousel>
                <Card.Title className="py-3">
                  CONOCÉ A NUESTROS ESPECIALISTAS
                </Card.Title>

                <Carousel.Item>
                  <img
                    src={doctor1}
                    alt="First slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={doctor2}
                    alt="Second slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    src={doctor3}
                    alt="Third slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Title className="py-4 text-center">
              REGISTRATE Y RECIBI TU CUPON 15% OFF EN TU PRIMERA COMPRA!{" "}
            </Card.Title>
            <Card.Img variant="top" src={perrito} />
            <Card.Body className="text-center">
              <Card.Text></Card.Text>
              <Button
                type="submit"
                variant="outline-primary"
                className="botonEnviar"
              >
                QUIERO MI CUPÓN!
              </Button>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Title className="py-4 text-center">
              SOLICITÁ TU TURNO AQUÍ
            </Card.Title>

            <Card.Img variant="top" src={perrito} />
            <Card.Body className="text-center">
              <Button
                type="submit"
                variant="outline-primary"
                className="botonEnviar"
              >
                RESERVAR TURNO
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default ContainerPrincipal;
