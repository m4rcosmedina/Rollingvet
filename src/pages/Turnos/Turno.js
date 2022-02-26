import React from "react";
import { Link } from "react-router-dom";

const Turno = () => {
  return (
    <tr>
      <td>Fecha y Hora</td>
      <td>Nombre Mascota</td>
      <td>Motivo Consulta</td>
      <div className="d-flex justify-content-center">
        <Link
          to="/EditarTurno"
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
