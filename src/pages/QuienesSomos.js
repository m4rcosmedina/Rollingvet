import React from "react";
import "../CSS/App.css";
import doctor1 from "../assets/img/doctor1.jpg";
import {
  Card,
  CardGroup,
  Container,
  Carousel, 
} from "react-bootstrap";

const QuienesSomos = () => {
    return (
      <div className="fondoGeneral">
      <h1 className="text-center pt-3">Nosotros</h1> <hr></hr>
      <Container className="my-5">
      <Carousel>
  <Carousel.Item>
      <CardGroup>
  <Card className="movimiento" >
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    <Card.Footer className="text-center">
      <small className="text-muted">Giuliano </small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    <Card.Footer className="text-center">
      <small className="text-muted">Marcos</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    <Card.Footer className="text-center"r>
      <small className="text-muted">Natalia</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Diego</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Carousel.Item>   
<Carousel.Item>
      <CardGroup>
  <Card  className="movimiento"> 
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Rodrigo</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Julieta</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/27Z7JkX/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Alfredo</small>
    </Card.Footer>
  </Card>
  <Card>
  </Card>
</CardGroup>
</Carousel.Item>
</Carousel>
</Container>
    </div>
      );
    };

export default QuienesSomos;