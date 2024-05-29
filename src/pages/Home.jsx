import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const slides = [
  "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
  "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
  "https://images.pexels.com/photos/60006/spring-tree-flowers-meadow-60006.jpeg?cs=srgb&dl=nature-flowers-sun-60006.jpg&fm=jpg",
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#90EE90]">
      {/* Left-Side */}
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A social media for learners
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Connect & learn from the experts
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Grow your career fast with the right mentor.
              </p>
            </div>
            {/* Right-Side */}
            <div className="carousel rounded-3xl relative">
              <img
                src={slides[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <button onClick={goToPrevSlide}>
                  <FaArrowAltCircleLeft />
                </button>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <button onClick={goToNextSlide}>
                  <FaArrowCircleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}

      

 
    </div>
  );
}
