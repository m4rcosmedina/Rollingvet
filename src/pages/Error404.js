import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/App.css";
import { Nav,Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div className="text-center">
    
 <img src="https://trello.com/1/cards/6201d621ff0c9870cae245f8/attachments/6201d897743c3c66389d1fa5/previews/6201d898743c3c66389d1fce/download/ultima-01.png" alt="" width="35%"  className="movimiento media" />
 <div className="pt-2 py-5">
    <Nav.Link href="/" className="navbarInicio">
    <Button
    type="submit"
    variant="outline-primary"
    className="ms-3">
VOLVER AL INICIO
    </Button>
    </Nav.Link>
    </div>
  </div>
  );
};

export default Error404;
