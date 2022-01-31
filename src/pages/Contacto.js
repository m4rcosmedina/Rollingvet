import React from "react";
import "../CSS/App.css";
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Ratio,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const Contacto = () => {
  return (
    <div className="fondoGeneral">
      <h1 className="text-center py-2">CONTACTO</h1> <hr/>
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
                <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
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
                <Form.Label>Indique el motivo de su consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Estoy de acuerdo con los términos y condiciones"
                />
              </Form.Group>
              <Button  type="submit" className="botonEnviar" variant="outline-primary" >
                Enviar
              </Button>
            </Form>
          </Col>
          <Col sm={6}>
            <Ratio aspectRatio={"4x3"}>
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370777519!2d-65.209390485296!3d-26.836696096500955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1638571420780!5m2!1ses-419!2sar "
              ></iframe>
            </Ratio>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
