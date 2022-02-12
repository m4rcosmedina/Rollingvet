import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import "../CSS/App.css";
import ListaComentarios from "./ListaComentarios";

const OpinionesPrincipal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let comentariosLocalstorage =
    JSON.parse(localStorage.getItem("comentarios")) || [];
  const [listaComentarios, setListaComentarios] = useState(
    comentariosLocalstorage
  );
  const [comentario, setComentario] = useState("");

  useEffect(() => {
    console.log("esto es una prueba");
    localStorage.setItem("comentarios", JSON.stringify(listaComentarios));
  }, [listaComentarios]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaComentarios([...listaComentarios, comentario]);
    setComentario("");
  };

  return (
    <div className="py-4 text-center fondoGeneral ">
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dejanos tus comentarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Los comentarios están sujetos a moderacion, por favor, sea respetuoso.</Form.Label>
              <Form.Control
                className="py-2"
                type="text"
                placeholder="ingrese un texto"
                onChange={(e) => setComentario(e.target.value.trimStart())}
                value={comentario}
              />
              <hr></hr>
              <Button
                variant="outline-danger"
                className="text-center "
                onClick={handleClose}
              >
                Cerrar
              </Button>
              <Button
                variant="outline-primary"
                type="submit"
                className="text-center botonModal"
                onClick={handleClose}
              >
                Enviar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Card className="container mt-3 px-0">
        <Card.Header> <Button variant="outline-primary " onClick={handleShow}>
        Dejanos aqui tus comentarios!
      </Button></Card.Header>
        <Card.Body>
          <Card.Text>
            <ListaComentarios
              arregloComentarios={listaComentarios}
            ></ListaComentarios>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OpinionesPrincipal;
