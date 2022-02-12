import React from "react";
import {  Button, Container, Form, } from "react-bootstrap";

const CrearPaciente = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Agregar un nuevo paciente</h1>
          <hr></hr>
        </div>

        <Form>
            <Form.Group>
                <Form.Label>Nombre y Apellido del Humano</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Especie</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Raza</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <div className="text-end py-3" variant="outline-primary">
                <Button >Guardar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CrearPaciente;
