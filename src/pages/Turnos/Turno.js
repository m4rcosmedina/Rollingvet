import React from "react";

const Turno = () => {
  return (
    <tr>
      <td>Fecha y Hora</td>
      <td>Nombre Mascota</td>
      <td>Motivo Consulta</td>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-primary mx-1 text-center">
          Modificar
        </button>
        <button className="btn btn-outline-danger mx-1 text-center">
          Eliminar
        </button>
      </div>
    </tr>
  );
};

export default Turno;
