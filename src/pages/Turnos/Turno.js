//import { tr } from "date-fns/locale";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Turno = ({ getTurnos, turno, URLTurnos }) => {
  const date = new Date(turno.startDate);
  const fecha = date.toLocaleString();
  console.log(getTurnos, "pasoturnoss");
  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro de eliminar ?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Turno eliminado!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URLTurnos}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (res.status === 200) {
            Swal.fire("Eliminado", "success");
            getTurnos();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <>
      <tr>
        {/* <td>{turno.profesional}</td> */}
        <td>{fecha}</td>
        <td>{turno.nombreMascota}</td>
        <td>{turno.motivoConsulta}</td>
        <td className="d-flex justify-content-center">
          <Link
            to={`/EditarTurno/${turno._id}`}
            className="btn btn-outline-primary mx-1 text-center text-decoration-none"
          >
            Modificar
          </Link>
          <button
            className="btn btn-outline-danger mx-1 text-center"
            onClick={() => handleDelete(turno._id)}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default Turno;
