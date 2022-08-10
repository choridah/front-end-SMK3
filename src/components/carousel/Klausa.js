import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselSchedule() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="box-color">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <input type="checkbox" name="list-klausa" value="0" height="44px" className="checkbox mt-2" />
        <h4 className="text-center text-bold mt-2">1.3.2</h4>
        <p className="text-smaller box-desc">Prosedur yang terdokumentasi harus mampu mengidentifikasi bahaya dan menilai risiko K3 bagi tenaga kerja, lingkungan dan masyarakat, dimana prosedur tersebut digunakan pada saat memasok barang dan jasa dalam suatu kontrak. Prosedur yang terdokumentasi harus mampu mengidentifikasi bahaya dan menilai risiko K3 bagi tenaga kerja, lingkungan dan masyarakat, dimana prosedur tersebut digunakan pada saat memasok barang dan jasa dalam suatu kontrak.</p>
      </Carousel.Item>
      <Carousel.Item>
        <input type="checkbox" name="list-klausa" value="0" height="44px" className="checkbox mt-2" />
        <h4 className="text-center text-bold mt-2">1.3.3</h4>
        <p className="text-smaller box-desc">Prosedur yang terdokumentasi harus mampu mengidentifikasi bahaya dan menilai risiko K3 bagi tenaga kerja, lingkungan dan masyarakat, dimana prosedur tersebut digunakan pada saat memasok barang dan jasa dalam suatu kontrak</p>
      </Carousel.Item>
      <Carousel.Item>
        <input type="checkbox" name="list-klausa" value="0" height="44px" className="checkbox mt-2" />
        <h4 className="text-center text-bold mt-2">1.3.4</h4>
        <p className="text-smaller box-desc">Empty</p>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// render(<ControlledCarousel />);
export default CarouselSchedule;
