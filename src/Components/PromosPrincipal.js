import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import perrito from "../assets/img/perrito.jpg";
import "../CSS/App.css";

const PromosPrincipal = () => {
  return (
    <div>
      <Container fluid className="my-4 fondoGeneral">
      <h1 className="text-center py-2">NUESTRAS PROMOS</h1><hr/>

      <CardGroup >
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={perrito} />
          <Card.Body>
            <Card.Title>PROMO 1</Card.Title>
            <Card.Text>
              BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={perrito} />
          <Card.Body>
            <Card.Title>PROMO 2</Card.Title>
            <Card.Text>
            BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card >
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={perrito} />
          <Card.Body>
            <Card.Title>PROMO 3</Card.Title>
            <Card.Text>
            BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card >
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={perrito} />
          <Card.Body>
            <Card.Title>PROMO 4</Card.Title>
            <Card.Text>
            BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </Container>
    </div>
  );
};

export default PromosPrincipal;
