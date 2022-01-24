import React from "react";
import { Button, Modal, Form, Container } from "react-bootstrap";
import "../CSS/App.css";
import { useState } from "react";

const OpinionesPrincipal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="py-4 text-center fondoGeneral">
      <Button variant="outline-primary" onClick={handleShow}>
        Dejanos aqui tus comentarios!
      </Button>

      <Container className="py-4 text-center bg-outline-primary cuadroComentarios">
        <h5 className="nombreComentarios">Natalia Acevedo</h5>
        <h5 className="textoComentarios">
          "Me encanto la atencion, los profesionales son tan buenos que me
          cortaron el pelo a mi tambien!"
        </h5>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dejanos tus comentarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="ej:Cosme Fulanito" />
            </Form.Group>
                     <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Tus comentarios</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OpinionesPrincipal;
