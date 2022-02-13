import React from "react";
import {  Button, Container, Form, } from "react-bootstrap";
import { useState } from "react";


const CrearPaciente = () => {
  const [NombreHum, setNombreHum] = useState("")
  const [Email, setEmail] = useState("")
  const [Tel, setTel] = useState("")
  const [Nombre, setNombre] = useState("")
  const [Especie, setEspecie] = useState("")
  const [Raza, setRaza] = useState("")
  const [Edad, setEdad] = useState("")



  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Agregar un nuevo paciente</h1>
          <hr></hr>
        </div>

        <Form className="my-5" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido del Humano</Form.Label>
                <Form.Control type="text" placeholder="Ej: Natalia Acevedo" onChange={(e)=>setNombreHum(e.target.value) } ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="Email" placeholder="Ej:naty@obantamail.com" onChange={(e)=>setEmail(e.target.value) }></Form.Control>
            </Form.Group  >
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="444-555" onChange={(e)=>setTel(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ej:Uma" onChange={(e)=>setNombre(e.target.value) } ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Especie</Form.Label>
                <Form.Control type="text" placeholder="Ej:Gato" onChange={(e)=>setEspecie(e.target.value) } ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Raza</Form.Label>
                <Form.Control type="text" placeholder="Ej:Mestizo" onChange={(e)=>setRaza(e.target.value) } ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" placeholder="3" onChange={(e)=>setEdad(e.target.value)}></Form.Control>
            </Form.Group>
            <div className="text-end py-3" variant="outline-primary">
                <Button >Guardar</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CrearPaciente;
