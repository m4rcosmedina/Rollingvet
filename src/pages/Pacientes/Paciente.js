import React from "react";

const Paciente = ({ paciente}) => {
  return (
      <tr>
        <td>{paciente.id}</td>
        <td>{paciente.NombreHum}</td>
        <td>{paciente.Email}</td>
        <td>{paciente.tel}</td>
        <td>{paciente.Nombre}</td>
        <td>{paciente.Especie}</td>
        <td>{paciente.Raza}</td>
        <td>{paciente.Edad}</td>
        </tr>
  );
};

export default Paciente;
