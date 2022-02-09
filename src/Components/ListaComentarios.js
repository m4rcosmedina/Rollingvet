import React from "react";
import { ListGroup } from "react-bootstrap";
import Opinion from "./Opinion";

const ListaComentarios = (props) => {
  return (
    <div>
     <ListGroup>
          {props.arregloComentarios.map((valor, posicion)=> <Opinion key={posicion} dato={valor}></Opinion>) } </ListGroup> 
    </div>
  );
};

export default ListaComentarios;
