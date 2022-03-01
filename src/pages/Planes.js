import React, { useRef } from "react";
import "../CSS/App.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { validarNombre } from "../Components/helpers/ValidacionesPacientes";

const Planes = () => {
  const nombre = document.getElementById("nombre");
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    nombre.addEventListener("input", function (event) {
      if (!validarNombre(nombre)) {
        Swal.fire("Por favor, ingrese un texto valido");
        return;
      }
    });
    emailjs
      .sendForm(
        "vet_rolling",
        "template_vtx6zyn",
        form.current,
        "user_Hiy1gJ7qKOh9XjvEmgoUe"
      )
      .then(
        (result) => {
          e.target.reset();
          {
            Swal.fire(
              "Su consulta ha sido enviada",
              "Recibirá un correo.Muchas gracias!"
            );
            setTimeout(() => {
              navigate("/");
            }, 3000);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="fondoGeneral">
        <h1 className="text-center py-3"> PLANES</h1>
        <hr />
        <Container>
          <Row>
            <Col sm={6}>
              <Form ref={form} onSubmit={sendEmail}>
                {" "}
                <Form.Label className="py-3">
                  <h4>Ingrese su nombre y apellido </h4>
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Ej:Cosme Fulanito"
                    aria-label="Nombre y Apellido"
                    id="nombre"
                    type="text"
                    required
                    minLength={3}
                    maxLength={35}
                  />
                </InputGroup>
                <Form.Group className="mb-3">
                  <Form.Label className="py-3">
                    <h4>Ingrese su correo electronico </h4>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    id="email"
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                  />
                  <Form.Text className="text-muted">
                    Jamás compartiremos su correo con nadie mas.
                  </Form.Text>
                </Form.Group>
                <Form.Label className="py-3">
                  {" "}
                  <h4>Teléfono</h4>
                </Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Ej:(381)6719988"
                    aria-label="Nombre y Apellido"
                    id="tel"
                    type="number"
                    required
                    minLength={6}
                    maxLength={10}
                  />
                </InputGroup>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="py-3">
                    <h4> Indique el plan sobre el cual desea información.</h4>
                  </Form.Label>
                  <Form.Control as="textarea" rows={7} id="texto" />
                </Form.Group>
                <Form.Group
                  className="mb-3 py-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="botonEnviar"
                  value="Send"
                >
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col sm={6}>
              <Card>
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
                <Card.Body className="text-center py-2"></Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Planes;
