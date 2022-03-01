import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  validarEdad,
  validarEmail,
  validarEspecie,
  validarNombre,
  validarNombreHum,
  validarRaza,
  validarTel,
} from "../../Components/helpers/ValidacionesPacientes";

const EditarPaciente = ({ URL, getApi }) => {
  const [paciente, setPaciente] = useState({});

  const { id } = useParams();

  const nombreHumRef = useRef("");
  const emailRef = useRef("");
  const telRef = useRef("");
  const nombreRef = useRef("");
  const especieRef = useRef("");
  const razaRef = useRef("");
  const edadRef = useRef("");

  const navigate = useNavigate();

  useEffect( async () => { 
    try {
      const res = await fetch(`${URL}/${id}`);
      const pacienteApi = await res.json();
      setPaciente(pacienteApi);
    } catch (error) {
      console.log(error);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !validarNombreHum(nombreHumRef.current.value) ||
      !validarEmail(emailRef.current.value) ||
      !validarTel(telRef.current.value) ||
      !validarNombre(nombreRef.current.value) ||
      !validarEspecie(especieRef.current.value) ||
      !validarRaza(razaRef.current.value) ||
      !validarEdad(edadRef.current.value)
    ) {
      Swal.fire("Error", "Algún dato es erroneo", "error");
      return;
    }

    const pacienteEditado = {
      nombreHum: nombreHumRef.current.value,
      email: emailRef.current.value,
      tel: telRef.current.value,
      nombre: nombreRef.current.value,
      especie: especieRef.current.value,
      raza: razaRef.current.value,
      edad: edadRef.current.value,
    };
    Swal.fire({
      title: "Estas seguro?",
      text: "No se podrá revertir esta acción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Editar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pacienteEditado),
          });
          if (res.status === 200) {
            Swal.fire("Listo!", "El paciente fue editado!", "success");
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
          <h1>Editar datos del paciente</h1>
          <hr />
        </div>

        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre y Apellido del Humano</Form.Label>
            <Form.Control
              type="text"
              defaultValue={paciente.nombreHum}
              ref={nombreHumRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              defaultValue={paciente.email}
              ref={emailRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              defaultValue={paciente.tel}
              ref={telRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              defaultValue={paciente.nombre}
              ref={nombreRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Especie</Form.Label>
            <Form.Control
              defaultValue={paciente.especie}
              ref={especieRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Raza</Form.Label>
            <Form.Control
              defaultValue={paciente.raza}
              ref={razaRef}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              defaultValue={paciente.edad}
              ref={edadRef}
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

export default EditarPaciente;
