import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import pizza from "../assets/img/pizza.jpg";
import "../CSS/App.css";

const PromosPrincipal = () => {
  return (
    <div>
      <Container fluid className="my-4 ">
      <CardGroup className="fondoGeneral">
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>PROMO 1</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>PROMO 2</Card.Title>
            <Card.Text>
              lorem10
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card >
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>PROMO 3</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card >
        <Card className="cardsPromo mx-4">
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>PROMO 4</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
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
