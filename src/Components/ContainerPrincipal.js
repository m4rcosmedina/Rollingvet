import {
  faCalendarCheck,
  faGraduationCap,
  faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Card,
  CardGroup,
  Container,
  Carousel,
  Button,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import "../CSS/App.css";

const ContainerPrincipal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="fondoGeneral">
      <Container>
        <h1 className="text-center mt-3  text-white fondotitulo">
          NUESTROS SERVICIOS
        </h1>
        <hr />
        <CardGroup>
          <Card>
            <Card.Title className="py-5 text-center text-muted">
              CONOCÉ NUESTROS ESPECIALISTAS
            </Card.Title>
            <Card.Body className="text-center px-0 py-0 ">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/620199608f45e1292455b4e8/previews/620199618f45e1292455b581/download/promociones-03.png"
                    alt="First slide"
                    className="d-block w-100"
                  />
                  <Button
                    variant="outline-primary"
                    className="botonEnviar mt-4"
                    onClick={handleShow}
                  >
                    Dr.Pablito Dominguez
                  </Button>
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Dr.Pablito Dominguez</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="text-muted">
                      <img
                        src="https://i.ibb.co/vkkZJjf/doctor1-01.jpg"
                        alt="First slide"
                        className="d-block w-100"
                      />
                      <FontAwesomeIcon
                        icon={faUserNurse}
                        size="1x"
                        className="text-danger"
                      />
                      Esp. en Anestesiología, Cardiología y Cirugía
                      <br />{" "}
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        size="1x"
                        className="text-info"
                      />
                      Universidad de Buenos Aires
                      <br />{" "}
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        size="1x"
                        className="text-success"
                      />
                      Atención de Lunes a Sábados
                    </Offcanvas.Body>
                  </Offcanvas>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/6201995e9356c864514a3f75/previews/6201995f9356c864514a3f9c/download/cvb-03.png"
                    alt="Second slide"
                    className="d-block w-100"
                  />
                  <Button
                    variant="outline-primary"
                    className="botonEnviar mt-4"
                    onClick={handleShow2}
                  >
                    Dra. Emilse Arias
                  </Button>
                  <Offcanvas show={show2} onHide={handleClose2}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Dra. Emilse Arias</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <img
                        src="https://i.ibb.co/1K4pNpN/doctora2-01.jpg"
                        alt="Second slide"
                        className="d-block w-100"
                      />
                      <FontAwesomeIcon
                        icon={faUserNurse}
                        size="1x"
                        className="text-danger"
                      />
                      Esp. en Fisioterapia, Oftalmología y Neurología
                      <br />{" "}
                      <FontAwesomeIcon
                        icon={faGraduationCap}
                        size="1x"
                        className="text-info"
                      />
                      Universidad de La Plata
                      <br />{" "}
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        size="1x"
                        className="text-success"
                      />
                      Atención de Martes a Domingos
                    </Offcanvas.Body>
                  </Offcanvas>
                </Carousel.Item>
              </Carousel>
            </Card.Body>
          </Card>
          <Card className="">
            <Card.Title className="py-5 text-center text-muted">
              CONOCÉ NUESTROS PLANES
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/61fec42abb43ab8aee460b6e/download/especialistas-01.png"
              className="movimiento "
            />
            <Card.Img
              variant="top"
              src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/61feba7aeb1f718730b8575e/previews/61feba7beb1f718730b85778/download/promo2-01.png"
              className="movimiento "
            />
            <Card.Img
              variant="top"
              src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/61feba7c8ef2097dc6e8f167/previews/61feba7d8ef2097dc6e8f17a/download/promo3-01.png"
              className="movimiento "
            />
            <Card.Body className="text-center py-4">
              <Nav.Link href="/Planes" className="navbarInicio">
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
          <Card className="">
            <Card.Title className="py-5 text-center text-muted">
              SOLICITÁ TU TURNO AQUÍ
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://trello.com/1/cards/61f2fe6cd74cc3228c316da2/attachments/6201995cfa9b5821f4335116/previews/6201995dfa9b5821f433524e/download/promociones-02.png"
            />
            <Card.Body className="text-center py-4">
              <Nav.Link href="/*" className="navbarInicio">
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
