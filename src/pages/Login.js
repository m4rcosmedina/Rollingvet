import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bcrypt from "bcryptjs/dist/bcrypt";

const Login = ({ user }) => {
  const [logUser, setLogUser] = useState("");
  const [logPass, setLogPass] = useState("");

  let session = false;

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      bcrypt.compareSync(logUser, user[0].userName) &&
      bcrypt.compareSync(logPass, user[0].pass)
    ) {
      session = true;
      sessionStorage.setItem("stateSession", JSON.stringify(session));
      Swal.fire("Correctamente logueado!", "", "success");
      setTimeout(() => {
        navigate("/");
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
      <Container className="py-5 text-center">
        <h1 className="font-celeste-crud ">INICIE SESION</h1>
        <hr />
        <div className="my-5">
          <Form className="my-5" onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={6} className="my-2">
                <Form.Group className="mb-3" controlId="formBasicUser">
                  <Form.Label >
                    USUARIO
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="USUARIO"
                    onChange={({ target }) => {
                      setLogUser(target.value.trimStart());
                    }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPass">
                  <Form.Label className="font-celeste-crud">
                    Contraseña
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="PASSWORD"
                    onChange={({ target }) =>
                      setLogPass(target.value.trimStart())
                    }
                  ></Form.Control>
                </Form.Group>
                <div className="text-end">
                  <button className="btn-btn" >ENTRAR</button>
                </div>
              </Col>
              <Col xs={12} md={6} className="my-2"></Col>
            </Row>
          </Form>
        </div>
      </Container>
  );
};

export default Login;

// import React, { Component } from "react";
// import "../CSS/Login.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import md5 from "md5";
// import Cookies from "universal-cookie";
// import Swal from "sweetalert2";

// const baseUrl = "http://localhost:3001/usuarios";
// const cookies = new Cookies();

// class Login extends Component {
//   state = {
//     form: {
//       username: "",
//       password: "",
//     },
//   };

//   handleChange = async (e) => {
//     await this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   iniciarSesion = async () => {
//     await axios
//       .get(baseUrl, {
//         params: {
//           username: this.state.form.username,
//           password: md5(this.state.form.password),
//         },
//       })
//       .then((response) => {
//         return response.data;
//       })
//       .then((response) => {
//         if (response.length > 0) {
//           let respuesta = response[0];
//           cookies.set("id", respuesta.id, { path: "/Login" });
//           cookies.set("apellido_paterno", respuesta.apellido_paterno, {
//             path: "/Login",
//           });
//           cookies.set("nombre", respuesta.nombre, { path: "/Login" });
//           cookies.set("username", respuesta.username, { path: "/Login" });

//           Swal.fire({
//             position: "top-center",
//             icon: "success",
//             title: `Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`,
//             showConfirmButton: false,
//             timer: 10000,
//           });

//           window.location.href = "/";
//         } else {
//           alert("El usuario o la contraseña no son correctos");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   componentDidMount() {
//     if (cookies.get("username")) {
//       window.location.href = "/";
//     }
//   }
//   render() {
//     return (
//       <div className="containerPrincipal">
//         <div className="containerSecundario">
//           <div className="form-group">
//             <label>Usuario: </label>
//             <br />
//             <input
//               type="text"
//               className="form-control"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <br />
//             <label>Contraseña: </label>
//             <br />
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <br />
//             <button
//               className="btn btn-primary"
//               onClick={() => this.iniciarSesion()}
//             >
//               Iniciar Sesión
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
