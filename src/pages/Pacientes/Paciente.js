import React from "react";

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
        </tr>
  );
};

export default Paciente;
