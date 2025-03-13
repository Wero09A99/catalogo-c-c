'use client';
import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative h-96 overflow-hidden">
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-transform duration-1000 ${
            index === current ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
    </div>
  );
}