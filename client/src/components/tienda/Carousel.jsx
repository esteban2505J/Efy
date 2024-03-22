import React from "react";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carousel() {
  const slides = [
    {
      url: "https://as2.ftcdn.net/v2/jpg/06/37/26/93/1000_F_637269392_bGR6V9D0918O5QI1fMLzA1Ywgn3O0DUQ.jpg",
    },
    {
      url: "https://media.istockphoto.com/id/1219514596/es/foto/la-clienta-femenina-est%C3%A1-comprando-perfume-en-una-tienda.jpg?s=1024x1024&w=is&k=20&c=CHk1IwfFyzVr_TbOsvKEG-uI__mxSDO8skCj9qZr5KI=",
    },
    {
      url: "https://media.istockphoto.com/id/656972128/es/foto/tratar-de-perfume.jpg?s=1024x1024&w=is&k=20&c=jyuddwLOu2MWfJj4lxDfxV7OYeCakRYXqQATtqcpbOI=",
    },

    {
      url: "https://images.unsplash.com/photo-1624876994604-327210baf835?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1624876993462-633ce1f6e677?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcmZ1bWVzJTJDZXNjZW5jaWFzfGVufDB8MHwwfHx8MA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <>
      <div className="h-screen">
        <div className="h-4/5 w-full m-auto relative group ">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full  bg-center bg-cover duration-500"
          ></div>

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
