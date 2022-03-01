import React from "react";
import { Link } from "react-router-dom";

const Turno = ({turno, getTurnos, URLTurnos}) => {
  return (
    <tr>
      {/* <td>{turno.profesional}</td> */}
      <td>{turno.startDate}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.motivoConsulta}</td>
      <div className="d-flex justify-content-center">
        <Link
          to={`/EditarTurno/${turno.id}`}
          className="btn btn-outline-primary mx-1 text-center text-decoration-none"
        >
          Modificar
        </Link>
        <button className="btn btn-outline-danger mx-1 text-center">
          Eliminar
        </button>
      </div>
    </tr>
  );
};

export default Turno;
