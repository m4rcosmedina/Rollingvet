import React from 'react';
import {Carousel} from 'react-bootstrap'

const CarouselPrincipal = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://trello.com/1/cards/61e9b2f6c090901f1c530515/attachments/61e9b309f752fc0b630af37f/previews/61e9b30af752fc0b630af3f9/download/SLIDER_Mesa_de_trabajo_1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://trello.com/1/cards/61e9b2f6c090901f1c530515/attachments/61e9b306555cf0397e820fc6/previews/61e9b307555cf0397e821587/download/SLIDER_Mesa_de_trabajo_1_copia.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://trello.com/1/cards/61e9b2f6c090901f1c530515/attachments/61e9b302ac986a03e0eaf75f/previews/61e9b303ac986a03e0eaf792/download/SLIDER_Mesa_de_trabajo_1_copia_2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default CarouselPrincipal;