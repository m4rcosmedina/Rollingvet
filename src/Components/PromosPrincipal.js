import React from "react";
import "../CSS/App.css";
import {
  Card,
  CardGroup,
  Carousel,
  Container,
  Nav,
  Button,
} from "react-bootstrap";

const PromosPrincipal = () => {
  return (
    <div className="fondoGeneral">
      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
            <CardGroup>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/rfjwRZs/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-5.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Performance Weight Control x 15 kg.{" "}
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/BcQbd19/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-4.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Performance Adulto x 20 kg.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/S0sPw69/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-6.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Performance Cachorro x 15 kg.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/y5gQVtm/Sin-t-tulo-1-Mesa-de-trabajo-1.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Bocaditos para Perro x 130 grs.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/jz0LWM9/Sin-t-tulo-1-Mesa-de-trabajo-1-copia.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Bocaditos para Gato x 130 grs.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/2tJcnXk/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-2.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Gooster Adultos Razas Pequeñas x 15 Kg.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/41mMtwz/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-3.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    Gooster Adultos Razas Medianas x 20 Kg.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
              <Card className="movimiento">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/8s8N7P6/Sin-t-tulo-1-Mesa-de-trabajo-1-copia-7.jpg"
                />
                <Card.Footer>
                  <small className="d-flex justify-content-md-center text-muted">
                    PellCat Piedras Sanitarias x 1.7 kg.
                  </small>
                </Card.Footer>
                <Card.Text className="text-center">$550</Card.Text>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
        <Nav.Link href="/*" className="text-center my-5">
          {" "}
          <Button
            type="submit"
            variant="outline-primary"
            className="botonEnviar"
          >
            IR A LA TIENDA!
          </Button>
        </Nav.Link>
      </Container>
    </div>
  );
};

export default PromosPrincipal;
