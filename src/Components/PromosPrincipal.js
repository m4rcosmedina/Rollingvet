import React from "react";
import "../CSS/App.css";
import { Card, CardGroup, Carousel, Container } from "react-bootstrap";
import perrito from "../assets/img/perrito.jpg";


const PromosPrincipal = () => {
  return (
    <div>
 <Container className="my-5">
      <Carousel>
  <Carousel.Item>
      <CardGroup>
  <Card className="movimiento" >
    <Card.Img variant="top" src="https://i.ibb.co/rfjwRZs/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-5.jpg" />
   
    <Card.Footer>
      <small className="">Giuliano </small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/BcQbd19/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-4.jpg" />
    
    <Card.Footer>
      <small className="">Marcos</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/S0sPw69/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-6.jpg" />
    
    <Card.Footer>
      <small className="">Natalia</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/y5gQVtm/Sin-t-tulo-1-Mesa-de-trabajo-1.jpg" />
    
    <Card.Footer>
      <small className="">Diego</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Carousel.Item>   
<Carousel.Item>
      <CardGroup>
  <Card  className="movimiento"> 
    <Card.Img variant="top" src="https://i.ibb.co/jz0LWM9/Sin-t-tulo-1-Mesa-de-trabajo-1-copia.jpg" />
    
    <Card.Footer>
      <small className="">Rodrigo</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/2tJcnXk/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-2.jpg" />
    
    <Card.Footer>
      <small className="">Julieta</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/41mMtwz/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-3.jpg" />
    
    <Card.Footer>
      <small className="">Alfredo</small>
    </Card.Footer>
  </Card>
  <Card className="movimiento">
    <Card.Img variant="top" src="https://i.ibb.co/8s8N7P6/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-7.jpg" />
    
    <Card.Footer>
      <small className="">Alfredo</small>
    </Card.Footer>
  </Card>
  
  
</CardGroup>
</Carousel.Item>
</Carousel>
</Container>
    </div>
  );
};

export default PromosPrincipal;
