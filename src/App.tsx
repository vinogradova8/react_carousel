import React, { useState } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel';

// interface State {
//   images: string[];
// }

export const App: React.FC = () => {

  const [itemWidth, setItemWidth] = useState(130);
  const [frameSize, setFrameSize] = useState(3);
  const [step, setStep] = useState(3);
  const [animationDuration, setAnimationDuration] = useState(1000);

  const images = [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ];

    return (
      <div className="app">
        <h1 data-cy="title">Carousel with {images.length} images</h1>
        <form>
          <label>
            item width
            <input
              type="text"
              value={itemWidth}
              onChange={(event) => setItemWidth(+event.target.value)}
            />
          </label>
          <label>
            frame size
            <input
              type="text"
              value={frameSize}
              onChange={(event) => setFrameSize(+event.target.value)}
            />
          </label>
          <label>
            step
            <input
              type="text"
              value={step}
              onChange={(event) => setStep(+event.target.value)}
            />
          </label>
          <label>
            animation duration
            <input
              type="text"
              value={animationDuration}
              onChange={(event) => setAnimationDuration(+event.target.value)}
            />
          </label>
        </form>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={false}
        />
      </div>
    );
  }

// export default App;
