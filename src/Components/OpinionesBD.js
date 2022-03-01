import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../CSS/App.css";
import { validarNombreHum,validarTexto } from "./helpers/ValidacionesPacientes";
import OpinionBD from "./OpinionBD";

const OpinionesBD = ({ comentarios, URLComent, getComentarios }) => {
  const [nombreCom, setNombreCom] = useState("");
  const [texto, setTexto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !validarNombreHum(nombreCom) || !validarTexto(texto) ) {
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
            navigate("/comentarios");
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
      <div>
          <h1 className="text-center">¡AYUDANOS A MEJORAR!</h1>
          <hr></hr>
        </div>

        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-center">
             <h5>Los comentarios están sujetos a moderacion.
               Por favor, sea respetuoso.</h5> 
            </Form.Label>
            <Form.Control
              className="py-2 my-2"
              type="text"
              placeholder="Ingrese su nombre.Será mostrado públicamente."
              onChange={({ target }) => setNombreCom(target.value)}
            />

            <Form.Control
              className="py-2 my-2"
              type="text"
              placeholder="Ingrese sus comentarios.Los mismos serán públicos."
              onChange={({ target }) => setTexto(target.value)}
            />
          </Form.Group>
          <button className="btn btn-outline-primary">Enviar</button>
        </Form>
        <h4 className="text-center">OPINIONES,RECOMENDACIONES Y SUGERENCIAS DE NUESTROS CLIENTES</h4>
        <hr></hr>

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

