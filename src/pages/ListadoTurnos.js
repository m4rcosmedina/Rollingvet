import React from "react";
import { Container, Table } from "react-bootstrap";
import Turno from "./Turnos/Turno";

const TurnosTable = ({turnos}) => {
  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Listado Turnos Dr. Pablito Dominguez</h1>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th className="text-center">Fecha y Hora</th>
              <th className="text-center">Nombre Mascota</th>
              <th className="text-center">Motivo Consulta</th>
            </tr>
          </thead>
          <tbody>
            <Turno />
            {/* <Turno />
            <Turno />
            <Turno />
            <Turno /> */}
          </tbody>
        </Table>
      </Container>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla Turnos Dra. Emilse Arias</h1>
        </div>
        <hr />
        <Table bordered hover responsive className="align-middle mt-3">
          <thead>
            <tr>
              <th className="text-center">Fecha y Hora</th>
              <th className="text-center">Nombre Mascota</th>
              <th className="text-center">Motivo Consulta</th>
            </tr>
          </thead>
          <tbody>
            <Turno />
            {/* <Turno />
            <Turno />
            <Turno />
            <Turno /> */}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TurnosTable;
