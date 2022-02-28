import React from "react";
import { Container,Nav } from "react-bootstrap";

const MostrarComentarios = () => {
  return (
    <div>
      <Container className="text-center py-4 my-4">
          <h3>TU OPINION NOS AYUDA A MEJORAR</h3>
          <hr></hr>

          <Nav.Link href="/comentarios">
        <button className="btn btn-outline-primary py-4 my-4">LEER Y AGREGÁR COMENTARIOS </button></Nav.Link>
      </Container>
    </div>
  );
};

export default MostrarComentarios;
