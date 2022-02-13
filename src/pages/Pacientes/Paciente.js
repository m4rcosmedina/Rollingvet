import React from "react";
import { Link } from "react-router-dom";

const Paciente = ({ paciente}) => {
  return (
      <tr>
        <td>{paciente.id}</td>
        <td>{paciente.nombreHum}</td>
        <td>{paciente.email}</td>
        <td>{paciente.tel}</td>
        <td>{paciente.nombre}</td>
        <td>{paciente.especie}</td>
        <td>{paciente.raza}</td>
        <td>{paciente.edad}</td>
        <Link
            to={`/EditarPaciente/${paciente.id}`}
            className="btn-orange mx-1 text-decoration-none text-center"
          >
            EDITAR
          </Link>
          <button
            className="btn-red mx-1"
           // onClick={() => handleDelete(paciente.id)}
          >
            BORRAR
          </button>
        </tr>
  );
};

export default Paciente;
