import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const ListaComentarios = (props) => {
  return (
    <div>
      <ListGroup>{props.arregloComentarios}</ListGroup>
    </div>
  );
};

export default ListaComentarios;
