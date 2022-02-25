import React from "react";
import { useState } from "react";

import { Form, Container, Nav, Button, Row, Col, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const ListaTurnos = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 8)
  );

  // states
  const [profesional, setProfesional] = useState();
  const [fechahora, setFechaHora] = useState(0);
  const [animal, setAnimal] = useState("");
  const [consulta, setConsulta] = useState("");

  // // funciones
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // validar los campos
  // };

  // funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    // validar los campos
  };

  return (
    <div className="fondoGeneral">
      <Form onSubmit={handleSubmit}>
        <Modal.Dialog>
          <Modal.Body>
            <h1 className="text-center py-4">TURNOS</h1>
            <Container>
              <Row>
                <Col sm={6}>
                  <Form.Select
                    onChange={(e) => setProfesional(e.target.value)}
                    className="mb-3"
                    required
                  >
                    <option value="0">Seleccione profesional</option>
                    <option value="Dr. Milagro">Dr.Pablito</option>
                    <option value="Dr. Robazan">Dra.Emilse</option>
                  </Form.Select>
                  <Form.Group>
                    <Form.Label>Seleccione fecha y hora</Form.Label>
                    <DatePicker
                      locale={es}
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      minDate={new Date()}
                      filterDate={(date) =>
                        date.getDay() !== 6 && date.getDay() !== 0
                      }
                      showTimeSelect
                      filterTime={(date) =>
                        (date.getHours() >= 8 && date.getHours() <= 12) ||
                        (date.getHours() >= 17 && date.getHours() <= 21)
                      }
                      minTime={setHours(setMinutes(new Date(), 0), 8)}
                      maxTime={setHours(setMinutes(new Date(), 0), 21)}
                      dateFormat="dd/MM/yyyy hh:mm"
                    ></DatePicker>
                  </Form.Group>
                  <Form.Check value="0" type="check">
                    Seleccione animal
                    <Form.Check
                      value="Perro"
                      type="radio"
                      label="Perro"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      value="Gato"
                      type="radio"
                      label="Gato"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      value="Otro"
                      type="radio"
                      label="Otro"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Form.Check>
                  <Form.Group
                    type="text"
                    value="0"
                    className="mb-3"
                    onChange={(e) => setConsulta(e.target.value)}
                  >
                    <Form.Label>Seleccione el motivo de su consulta</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Nav.Link href="/*">
              <Button variant="outline-primary">Reservar</Button>
            </Nav.Link>
            <Nav.Link href="/*">
              <Button variant="outline-warning">Modificar</Button>
            </Nav.Link>
            <Nav.Link href="/*">
              <Button variant="outline-danger">Eliminar</Button>
            </Nav.Link>
          </Modal.Footer>
        </Modal.Dialog>
      </Form>
    </div>
  );
};

export default ListaTurnos;
