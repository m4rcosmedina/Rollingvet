import React from 'react';
import {Carousel} from 'react-bootstrap'
import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'
import slider3 from '../assets/img/slider3.jpg'


const CarouselPrincipal = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slider3}
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