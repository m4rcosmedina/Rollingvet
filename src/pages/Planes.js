import React, { useRef } from "react";
import "../CSS/App.css";
import {
  Form,
  FormLabel,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Planes = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "vet_rolling",
        "template_vtx6zyn",
        form.current,
        "user_Hiy1gJ7qKOh9XjvEmgoUe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="fondoGeneral">
        <h1 className="text-center py-4"> PLANES</h1>
        <hr />
        <Container>
          <Row>
            <Col sm={6}>
              <Form ref={form} onSubmit={sendEmail}>
                {" "}
                <Form.Label>Ingrese su nombre y apellido</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Ej:Cosme Fulanito"
                    aria-label="Nombre y Apellido"
                    type="text"
                    required
                    minLength={3}
                    maxLength={35}
                  />
                </InputGroup>
                <Form.Group className="mb-3">
                  <Form.Label>Ingrese su correo electronico</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="ejemplo@ejemplo.com"
                  />
                  <Form.Text className="text-muted">
                    Jamás compartiremos su correo con nadie mas.
                  </Form.Text>
                </Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Ej:(381)6719988"
                    aria-label="Nombre y Apellido"
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
                  <Form.Label>
                    Indique el plan sobre el cual desea información.
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Button type="submit" className="botonEnviar" value="Send">
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Planes;
