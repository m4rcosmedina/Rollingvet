import React from "react";
import Paciente from "./Pacientes/Paciente";
import { Container, Table, Nav, Button } from "react-bootstrap";

const ListadoPacientes = ({ pacientes, getApi, URL }) => {
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
              <th className="text-center">ID</th>
              <th className="text-center">NOMBRE Y APELLIDO</th>
              <th className="text-center">EMAIL</th>
              <th className="text-center">TELEFONO</th>
              <th className="text-center">NOMBRE</th>
              <th className="text-center">ESPECIE</th>
              <th className="text-center">RAZA</th>
              <th className="text-center">EDAD</th>
              <th className="text-center">OPCIONES</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente,
            ) => (
              <Paciente
              key={paciente.id}
              paciente={paciente}
              getApi={getApi}
              URL={URL} />
            ))}{" "}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ListadoPacientes;
