import React from "react";
import { ListGroup } from "react-bootstrap";
import Comentario from "./Comentario";

const ListaComentarios = (props) => {
  return (
    <div>
      <ListGroup>
          {
          props.arregloComentarios.map((valor,posicion) => <Comentario key={posicion} dato = {valor}></Comentario> )}  </ListGroup>
    </div>
  );
};

export default ListaComentarios;
