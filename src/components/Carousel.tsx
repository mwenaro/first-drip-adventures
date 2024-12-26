"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
};

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlay = true,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  },[images.length])

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  },[images.length])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      return () => clearInterval(timer);
    }
  }, [currentIndex,  autoPlay, interval]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <Image
            width={100}
            height={100}
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
