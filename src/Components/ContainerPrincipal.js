import React from "react";
import { Card, CardGroup, Container, Carousel, Button } from "react-bootstrap";
import pizza from "../assets/img/pizza.jpg";
import "../CSS/App.css";


const ContainerPrincipal = () => {
  return (
    <div>
      <Container>
        <CardGroup className="fondoGeneral my-4">
          <Card className="mx-4">
            <Card.Body className="text-center">
              <Carousel>
                <Carousel.Item>
                  <img
                    src={pizza}
                    alt="First slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={pizza}
                    alt="Second slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={pizza}
                    alt="Third slide"
                    className="d-block w-100"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <Card.Title>CONOCÉ A NUESTROS ESPECIALISTAS</Card.Title>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Img variant="top" src={pizza} />
            <Card.Body className="text-center">
              <Card.Title>
                REGISTRATE Y RECIBI TU CUPON 15% OFF EN TU PRIMERA COMPRA!{" "}
              </Card.Title>
              <Card.Text></Card.Text>
              <Button type="submit" className="botonEnviar">
                QUIERO MI CUPÓN!
              </Button>
            </Card.Body>
          </Card>
          <Card className="mx-4">
            <Card.Img variant="top" src={pizza} />
            <Card.Body className="text-center">
              <Card.Title>SOLICITÁ TU TURNO AQUÍ</Card.Title>
              <Button type="submit" className="botonEnviar">
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
