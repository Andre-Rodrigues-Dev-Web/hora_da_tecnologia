import React, { useState, useEffect } from 'react';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import * as Styled from './style'; // Importando estilos de style.js

const Carousel = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('/publicidades.json')
      .then(response => response.json())
      .then(data => {
        setAdvertisements(data);
      })
      .catch(error => {
        console.error('Error fetching advertisements:', error);
      });
  }, []);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === advertisements.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? advertisements.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    if (advertisements.length > 1) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, advertisements]);

  const goToLink = (link) => {
    window.open(link, '_blank');
  };

  if (advertisements.length === 0) {
    return null;
  }

  return (
    <Styled.CarouselContainer>
      <Styled.ArrowButton direction="left" onClick={prevSlide}>
        <MdArrowBack />
      </Styled.ArrowButton>
      <Styled.CarouselSlide style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {advertisements.map((ad, index) => (
          <Styled.CarouselImage
            key={index}
            src={ad.imageUrl}
            alt={`Advertisement ${index + 1}`}
            onClick={() => goToLink(ad.link)}
          />
        ))}
      </Styled.CarouselSlide>
      <Styled.ArrowButton direction="right" onClick={nextSlide}>
        <MdArrowForward />
      </Styled.ArrowButton>
    </Styled.CarouselContainer>
  );
};

export default Carousel;
