import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const EditarPaciente = ({ URL }) => {
  const [paciente, setPaciente] = useState({});

  const { id } = useParams();
  console.log(`${URL}/${id}`);

  useEffect(async () => {
    try {
      const res = await fetch(`${URL}/${id}`);
      const pacienteApi = await res.json();
      setPaciente(pacienteApi);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Editar datos del paciente</h1>
          <hr></hr>
        </div>

        <Form className="my-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido del Humano</Form.Label>
            <Form.Control
              type="text"
              defaultValue={paciente.nombreHum}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control defaultValue={paciente.email}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control defaultValue={paciente.tel}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control defaultValue={paciente.nombre}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Especie</Form.Label>
            <Form.Control defaultValue={paciente.especie}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Raza</Form.Label>
            <Form.Control defaultValue={paciente.raza}></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control defaultValue={paciente.edad}></Form.Control>
          </Form.Group>
          <div className="text-end py-3" variant="outline-primary">
            <Button>Guardar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditarPaciente;
