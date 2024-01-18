import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CustomCarousel.css";

function CustomCarousel({ imagePaths }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imagePaths.map((imagePath, i) => (
          <Carousel.Item key={i} className="item-carousel">
            <img src={imagePath} alt={`image-${i}`} />
            <Carousel.Caption>
              <h3>{`Slide ${i + 1} label`}</h3>
              <p>{`Content for slide ${i + 1}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
