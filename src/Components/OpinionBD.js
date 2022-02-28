import React, { useState } from "react";
import { ListGroup, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";





const OpinionBD = ({comentario, getComentarios,URLComent}) => {
    let sesionUsuario =
    JSON.parse(sessionStorage.getItem("stateSession")) || false;
  const [mostrarBoton, setMostrarBoton] = useState(sesionUsuario);
  const navigate = useNavigate()
const handleDelete = (id) => {
    Swal.fire({
        title: "¿Está seguro?",
        text: "No podrá recuperar este comentario",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await fetch(`${URLComent}/${id}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (res.status === 200) {
              Swal.fire("Eliminado", "El comentario ha sido borrado", "success");
              getComentarios();
              navigate("/comentarios");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
}
  return (
    <Container>
      <ListGroup.Item className="my-1 d-flex justify-content-between ">
         <h5 >  {comentario.nombreCom} : </h5>
         "{comentario.texto}"
          <>
          {" "}
          {mostrarBoton ? (
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(comentario.id)}
            >
              BORRAR
            </button>
          ) : undefined}{" "}
        </>
      </ListGroup.Item>
    </Container>
  );
};

export default OpinionBD;
