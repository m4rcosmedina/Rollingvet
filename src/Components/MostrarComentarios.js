import React from "react";
import { Button, Container,Nav } from "react-bootstrap";

const MostrarComentarios = () => {
  return (
    <div>
      <Container className="text-center py-4 my-4">
          <h4>¿TE GUSTARIA DEJARNOS TU OPINION?</h4>

          <Nav.Link href="/comentarios">
        <button className="btn btn-outline-primary py-4 my-4">PRESIONÁ AQUI!</button></Nav.Link>
      </Container>
    </div>
  );
};

export default MostrarComentarios;
