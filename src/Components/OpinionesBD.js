import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../CSS/App.css";
import { validarNombreHum } from "./helpers/ValidacionesPacientes";
import OpinionBD from "./OpinionBD";

const OpinionesBD = ({ comentarios, URLComent, getComentarios }) => {
  const [nombreCom, setNombreCom] = useState("");
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarNombreHum(texto) || !validarNombreHum(nombreCom)) {
      Swal.fire("Por favor, ingrese un texto valido");
      return;
    }
    const nuevoComentario = {
      texto,
      nombreCom,
    };

    Swal.fire({
      title: "¿Desea enviar este comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Enviar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URLComent, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoComentario),
          });
          if (res.status === 201) {
            Swal.fire("Su comentario ha sido enviado", "Muchas gracias!");
            getComentarios();
            e.target.reset();
            navigate("/Comentarios");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div >
      <Container className="py-5 fondoPacientes">
      <div className="d-flex align-items-center justify-content-between">
          <h1 className="text-center">¡AYUDANOS A MEJORAR!</h1>
          <hr></hr>
        </div>

        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">
              Los comentarios están sujetos a moderacion.
               Por favor, sea respetuoso.
            </Form.Label>
            <Form.Control
              className="py-2 my-2"
              type="text"
              placeholder="Ingrese su nombre"
              onChange={({ target }) => setNombreCom(target.value)}
            />

            <Form.Control
              className="py-2 my-2"
              type="text"
              placeholder="Ingrese sus comentarios"
              onChange={({ target }) => setTexto(target.value)}
            />
          </Form.Group>
          <hr></hr>
          <button className="btn btn-outline-primary">Enviar</button>
        </Form>
        <div>
          <ul>
            {comentarios.map((comentario) => (
              <OpinionBD
                comentario={comentario}
                key={comentario.id}
                URLComent={URLComent}
                getComentarios={getComentarios}
                borrarOpinion={comentario.borrarOpinion}
              ></OpinionBD>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default OpinionesBD;

{
  /* <div className="py-4 text-center fondoGeneral ">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dejanos tus comentarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form >
              <Form.Group className="mb-3">
                <Form.Label className="text-center">
                  Los comentarios están sujetos a moderacion. Por favor, sea
                  respetuoso.
                </Form.Label>
                <Form.Control
                  className="py-2"
                  type="text"
                  placeholder="ingrese un texto"
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
          <Card.Header>
            <Button variant="outline-success " onClick={handleShow}>
              Dejanos aqui tus comentarios!
            </Button>
          </Card.Header>
          <Card.Body>
            <Card.Text>
                <ListaComentariosBD>
            {comentarios.map((comentario)=> (<OpinionBD comentario={comentario}></OpinionBD>))}
            </ListaComentariosBD>
            </Card.Text>
          </Card.Body>
        </Card>
      </div> */
}
