import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSchedule() {
  return (
    <Carousel fade>
        <Carousel.Item>
            <span className="btn-list-klausa mr-1">1</span>
            <Carousel.Caption>
              <p className="btn-list-klausa-describe">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <span className="btn-list-klausa mr-1">2</span>
            <Carousel.Caption>
              <p className="btn-list-klausa-describe">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSchedule;