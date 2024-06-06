import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
    }, 4000); // Change slide every 4 seconds

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
    <div className="mt-12">
      {/* Left-Side */}
      <section className="bg-[#feeccd] bg-opacity-30 py-10 sm:py-16 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Welcome to Multi-Service Platform
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
              Your One-Stop Solution :<Typewriter 
                  options={{
                    strings: ['<span style="color: blue;">OldProducts</span>',
                      '<span style="color: blue;">NewProducts</span>',
                      '<span style="color: blue;">Vehicle Contacts</span>',
                      '<span style="color: blue;">Restaurant</span>',],
                    autoStart: true,
                    loop: true,
                  }}
                   wrapperClassName="typewriter-text"
                />
              </h1>
            
              <button className="bg-[#3BEA1E] hover:bg-blue-600 text-black hover:text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-xl mt-14">
                Get started
              </button>
            </div>
            {/* Right-Side */}
            <div className="carousel rounded-3xl relative ">
              <img
                src={slides[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                <button onClick={goToPrevSlide}>
                  <FaArrowAltCircleLeft size={30} />
                </button>
              </div>
              <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <button onClick={goToNextSlide}>
                  <FaArrowCircleRight size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}

      <div className="flex flex-col items-center text-center">
        <div className="text-center text-4xl font-bold pt-4">
          <h3>Our Facilities</h3>
        </div>
        <div className="w-60 h-1 border-b-4 border-green-400 my-3"></div>

        <div className="w-full bg-[#feeccd] bg-opacity-30 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 pb-12 ">
          <div className="flex flex-col justify-center items-center overflow-hidden pt-8">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.qGa4rZh-9Zof10CcbaIAfAHaF3?rs=1&pid=ImgDetMain"
              alt=""
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold mt-4">
              Uncover hidden gems in lightly used products!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden pt-8">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
              alt=""
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold mt-4">
              Find the newest top items at amazing deals!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden pt-8">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/623/004/original/auto-car-logo-template-vector-icon.jpg"
              alt=""
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold mt-4">
              Need a quick ride? Link up with a driver now!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden pt-8">
            <img
              src="https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
              alt=""
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
            />
            <p className="font-semibold mt-4">
              Indulge in a variety of tasty culinary treats!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
