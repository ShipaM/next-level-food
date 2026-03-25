"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "./constants";

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] ">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={`${index === currentImageIndex ? "z-1 opacity-100 scale-100 translate-x-0 rotate-0" : ""} w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-in-out opacity-0 scale-110 translate-x-4 rotate-6`}
          alt={image.alt}
          loading="eager"
        />
      ))}
    </div>
  );
}
