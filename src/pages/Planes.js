import React from "react";
import "../CSS/App.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import{ init } from '@emailjs/browser';
init("user_omZYswHoCCoMtPCirUyVj");


const Planes = () => {
  return (
    <div>
      <div className="fondoGeneral">
        <h1 className="text-center py-4"> PLANES</h1>
        <hr />
        <Container>
          <Row>
            <Col sm={6}>
              <Form>
                {" "}
                <Form.Label>Ingrese su nombre y apellido</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Ej:Cosme Fulanito"
                    aria-label="Nombre y Apellido"
                    type="text"
                    required
                    minlength="3"
                    maxlength="35"
                  />
                </InputGroup>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Ingrese su correo electronico</Form.Label>
                  <Form.Control
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
                    minlength="6"
                    maxlength="10"
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
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Estoy de acuerdo con los términos y condiciones"
                  />
                </Form.Group>
                <Button type="submit" className="botonEnviar" variant="info" >
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
