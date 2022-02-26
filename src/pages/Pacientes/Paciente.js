import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Paciente = ({ paciente, URL, getApi }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "No se puede revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            header: {
              "Content-Type": "application/json",
            },
          });
          if (res.status === 200) {
            Swal.fire(
              "Eliminado!",
              "Su base de datos ha sido actualizada.",
              "success"
            );
            getApi();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
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
        className="btn btn-outline-warning mx-1 text-center"
      >
        EDITAR
      </Link>
      <button
        className="btn btn-outline-danger mx-1 text-center"
        onClick={() => handleDelete(paciente.id)}
      >
        BORRAR
      </button>
    </tr>
  );
};

export default Paciente;
