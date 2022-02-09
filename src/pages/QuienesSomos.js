import React from "react";
import "../CSS/App.css";
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
    <Card.Img variant="top" src="https://trello.com/1/cards/620407c0afe9a532f3054122/attachments/620408500bdc781bffb94ee6/previews/620408510bdc781bffb94f36/download/Naty-01-01.jpg" />
    <Card.Footer className="text-center">
      <small className="text-muted">Natalia </small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://trello.com/1/cards/620407c0afe9a532f3054122/attachments/620407d73f058f7085f63b81/previews/620407d83f058f7085f63cce/download/marcos-01.jpg" />
    <Card.Footer className="text-center">
      <small className="text-muted">Marcos</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://trello.com/1/cards/620407c0afe9a532f3054122/attachments/620407e46ff17449d125c869/previews/620407e46ff17449d125c8ab/download/especialistas-01.jpg" />
    <Card.Footer className="text-center"r>
      <small className="text-muted">Giuliano</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/pfkWfHQ/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Julieta</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Carousel.Item>   
<Carousel.Item>
      <CardGroup>
  <Card  className="movimiento"> 
    <Card.Img variant="top" src="https://i.ibb.co/pfkWfHQ/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Rodrigo</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/pfkWfHQ/especialistas-01.jpg" />
    
    <Card.Footer className="text-center">
      <small className="text-muted">Diego</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/pfkWfHQ/especialistas-01.jpg" />
    
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