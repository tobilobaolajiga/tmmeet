import { useState, useEffect, useRef } from 'react';

export default function ImageSlide() {
  const images = ['/slide1.svg', '/slide2.svg'];
  const imageWidth = ['800px', '700px'];
  const delay = 3000;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div
      id="slideshow"
      className="relative bottom-[100px] overflow-hidden h-[400px] max-h-[700px]"
    >
      <div
        id="slideshowSlider"
        style={{
          transform: `translate(${index * 100}%)`,
          transition: 'ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div id="slide" key={index}>
            <img
              src={images[index]}
              alt=""
              className="delay-3000"
              width={imageWidth[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
