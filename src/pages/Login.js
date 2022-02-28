import React, { useState } from "react";
import {Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs/dist/bcrypt";

const Login = ({ user, sessionStorage }) => {
  const [logUser, setLogUser] = useState("");
  const [logPass, setLogPass] = useState("");

  let sesionUsuario = false;

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      bcrypt.compareSync(logUser, user[0].userName) &&
      bcrypt.compareSync(logPass, user[0].pass)
    ) {
      sesionUsuario = true;
      sessionStorage.setItem("stateSession", JSON.stringify(sesionUsuario));
      Swal.fire("Bienvenido!", "", "success");
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    } else {
      Swal.fire(
        "Usuario o Contraseña Incorrectos",
        "Vuelva a intentar",
        "error"
      );
    }
  };

  return (
    <Container className="py-5 fondoPacientes text-center">
      <h1 className="text-center">INICIE SESION</h1>
      <hr />
      <div className="my-5">
        <Form s={12} className="my-5  formulario" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicUser">
            <Form.Label>USUARIO</Form.Label>
            <Form.Control
              type="text"
              placeholder="ej:rbazan"
              onChange={({ target }) => {
                setLogUser(target.value.trimStart());
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPass">
            <Form.Label className="font-celeste-crud">CONTRASEÑA</Form.Label>
            <Form.Control
              type="password"
              placeholder="**********"
              onChange={({ target }) => setLogPass(target.value.trimStart())}
            ></Form.Control>
          </Form.Group>
          <div className="text-end">
            <button className="btn btn-outline-primary">ENTRAR</button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
