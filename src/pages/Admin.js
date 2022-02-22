import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Admin = () => {
  const sesionUsuario =
    JSON.parse(sessionStorage.getItem("stateSession")) || false;
  console.log(sesionUsuario);

  const [click,setCLick ] = useState(false)

  const handleClick = () => {
      setCLick(true)

  }

  return (
      <div>

    <button
        className="btn btn-outline-primary mx-2"
        onClick={handleClick}
      >
        Cerrar Sesión
      </button>

      {click ? <h2>BIENVENIDO Admin</h2> : undefined}

    
    </div>
  );
};

export default Admin;
