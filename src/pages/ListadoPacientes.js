import React from "react";
import { Container, Table, Nav, Button } from "react-bootstrap";
import Paciente from "./Pacientes/Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Listado de Pacientes</h1>
        </div>

        <Nav.Link href="/CrearPaciente">
          <Button
            type="submit"
            variant="outline-primary"
            className="botonEnviar"
          >
            Agregar nuevo paciente
          </Button>
        </Nav.Link>

        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th>NOMBRE Y APELLIDO</th>
              <th>EMAIL</th>
              <th>TELEFONO</th>
              <th>NOMBRE</th>
              <th>ESPECIE</th>
              <th>RAZA</th>
              <th>EDAD</th>
            </tr>
          </thead>
          <tbody>{pacientes.map(() => {
              <Paciente/>
          })} </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListadoPacientes;
