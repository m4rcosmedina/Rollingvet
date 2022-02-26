import React from "react";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import {
  validarEdad,
  validarEmail,
  validarEspecie,
  validarNombre,
  validarNombreHum,
  validarRaza,
  validarTel,
} from "../../Components/helpers/ValidacionesPacientes";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CrearPaciente = ({ URL, getApi }) => {
  const [nombreHum, setNombreHum] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validarNombreHum(nombreHum) ||
      !validarEmail(email) ||
      !validarTel(tel) ||
      !validarNombre(nombre) ||
      !validarEspecie(especie) ||
      !validarRaza(raza) ||
      !validarEdad(edad)
    ) {
      Swal.fire("Error", "Algún dato es erroneo", "error");
      return;
    }
    const nuevoPaciente = {
      nombreHum,
      email,
      tel,
      nombre,
      especie,
      raza,
      edad,
    };
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Estas por crear un nuevo paciente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Guardar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(nuevoPaciente),
          });

          if (res.status === 201) {
            Swal.fire(
              "Creado!",
              "El nuevo paciente se ha agregado a la base de datos",
              "success"
            );
            getApi();
            navigate("/ListadoPacientes");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Agregar un nuevo paciente</h1>
          <hr />
        </div>

        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido del Humano</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Natalia Acevedo"
              onChange={(e) => setNombreHum(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Ej:naty@obantamail.com"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="444-555"
              onChange={(e) => setTel(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej:Uma"
              onChange={(e) => setNombre(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej:Gato"
              onChange={(e) => setEspecie(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej:Mestizo"
              onChange={(e) => setRaza(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="3"
              onChange={(e) => setEdad(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-outline-primary"> GUARDAR</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CrearPaciente;
