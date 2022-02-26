import React from "react";
import { Container, Row, Nav, Col } from "react-bootstrap";
import "../CSS/App.css";

const Admin = () => {
  return (
    <div>
      <div className="fondoGeneral">
        <h1 className="text-center py-3">ADMINISTRACIÓN</h1>
        <hr />
        <Container className="fondoPacientes">
          <Row sm={12} m={6}>
            <Col>
              <h2 className="text-center py-3">CONSOLA PACIENTES</h2>
              <Nav.Link
                className="text-center py-3 mx-4 botonesPacientes"
                href="/Listadopacientes"
              >
                <button className="btn btn-outline-primary">
                  LISTADO DE PACIENTES
                </button>
              </Nav.Link>
              <Nav.Link
                className="text-center py-3 mx-4 botonesPacientes"
                href="/CrearPaciente"
              >
                <button className="btn btn-outline-success">
                  AGREGAR NUEVO PACIENTE
                </button>
              </Nav.Link>
            </Col>

            <Col>
              <h2 className="text-center py-3"> CONSOLA TURNOS</h2>

              <Nav.Link
                className="text-center py-3 mx-4 botonesPacientes"
                href="/ListadoTurnos"
              >
                <button className="btn btn-outline-primary">
                  LISTADO DE TURNOS
                </button>
              </Nav.Link>
              <Nav.Link
                className="text-center py-3 mx-4 botonesPacientes"
                href="/CrearTurno"
              >
                <button className="btn btn-outline-success">
                  AGREGAR NUEVO TURNO
                </button>
              </Nav.Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
