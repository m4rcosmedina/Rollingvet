import React from "react";
import { Container, Row, Nav, Col } from "react-bootstrap";
import "../CSS/App.css";
import { Link } from "react-router-dom";


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
              <Link
                className="text-center py-3 mx-4 botonesPacientes"
                to="/Listadopacientes"
              >
                <button className="btn btn-outline-primary">
                  LISTADO DE PACIENTES
                </button>
              </Link>
              <Link
                className="text-center py-3 mx-4 botonesPacientes"
                to="/CrearPaciente"
              >
                <button className="btn btn-outline-success">
                  AGREGAR NUEVO PACIENTE
                </button>
              </Link>
            </Col>

            <Col>
              <h2 className="text-center py-3"> CONSOLA TURNOS</h2>

              <Link
                className="text-center py-3 mx-4 botonesPacientes"
                to="/ListadoTurnos"
              >
                <button className="btn btn-outline-primary">
                  LISTADO DE TURNOS
                </button>
              </Link>
              <Link
                className="text-center py-3 mx-4 botonesPacientes"
                to="/CrearTurno"
              >
                <button className="btn btn-outline-success">
                  AGREGAR NUEVO TURNO
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
