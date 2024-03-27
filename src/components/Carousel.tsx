import React, { useState } from "react";
import "./Carousel.scss";

type Props = {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
};

export const Carousel: React.FC<Props> = ({
  images,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const [next, setNext] = useState(0);

  return (
    <div className="carousel">
      <ul
        className="carousel__list"
        style={{ transform: `translateX(-${next}px)` }}
      >
        {images.map((image, index) => (
          <li key={image}>
            <img className="carousel__image" src={image} alt={index + 1 + ""} />
          </li>
        ))}
      </ul>

      <button type="button" className="button--prev">
        Prev
      </button>
      <button
        type="button"
        className="button--next"
        data-cy="next"
        onClick={() => {
          setNext((currentNext) => currentNext + itemWidth * step);
        }}
      >
        Next
      </button>
    </div>
  );
};

// export default Carousel;
