import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselSchedule() {
  return (
    <Carousel fade>
        <Carousel.Item>
          <span className="btn-list-klausa">
            <input type="checkbox" name="list-klausa" value="0" placeholder="0" height="44px" className="btn-klausa mr-1" />1  
          </span>
          <Carousel.Caption>
            <p className="btn-list-klausa-describe">
            Prosedur yang terdokumentasi harus mampu mengidentifikasi bahaya dan menilai risiko K3 bagi tenaga kerja, lingkungan dan masyarakat, dimana prosedur tersebut digunakan pada saat memasok barang dan jasa dalam suatu kontrak
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <span className="btn-list-klausa">
            <input type="checkbox" name="list-klausa" value="0" placeholder="0" height="44px" className="btn-klausa mr-1" />2
          </span>
          <Carousel.Caption>
            <p className="btn-list-klausa-describe">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSchedule;