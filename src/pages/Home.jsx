import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signin from "./Signin";

const slides = [
  "https://wallpapers.com/images/featured/food-delivery-uzm1ss89qzgz2qtu.jpg",
  "https://t4.ftcdn.net/jpg/04/68/58/83/360_F_468588320_98M7a6EtlzP7xKHkVZFDctrymnF03K1Y.jpg",
  "https://www.shutterstock.com/shutterstock/videos/1101286991/thumb/12.jpg?ip=x480",
  "https://cdni.iconscout.com/illustration/premium/thumb/girl-doing-online-shopping-with-consumer-rights-5255956-4394675.png",
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

  const services = [
    {
      image: "https://tse3.mm.bing.net/th/id/OIP.qGa4rZh-9Zof10CcbaIAfAHaF3?rs=1&pid=ImgDetMain",
      description: "Uncover hidden gems in lightly used products!",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg",
      description: "Find the newest top items at amazing deals!",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/000/623/004/original/auto-car-logo-template-vector-icon.jpg",
      description: "Need a quick ride? Link up with a driver now!",
    },
    {
      image: "https://png.pngtree.com/template/20200704/ourlarge/pngtree-restaurant-logo-design-vector-template-image_388753.jpg",
      description: "Indulge in a variety of tasty culinary treats!",
    },
  ];

  return (
    <div className="">
      {/* Left-Side */}
      <section className="bg-[#FEECCD] bg-opacity-30 py-10 sm:py-16 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                Welcome to Multi-Service Platform
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
                Your One-Stop Solution :
                <Typewriter
                  options={{
                    strings: [
                      '<span style="color: blue;">OldProducts</span>',
                      '<span style="color: blue;">NewProducts</span>',
                      '<span style="color: blue;">Vehicle Contacts</span>',
                      '<span style="color: blue;">Restaurant</span>',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  wrapperClassName="typewriter-text"
                />
              </h1>
              
              <Link to="/Signin">
              <button className="bg-[#3BEA1E] hover:bg-blue-600 text-black hover:text-white font-bold py-1 md:py-2 px-2 md:px-4 rounded-xl mt-14">
                Get started
              </button>
              </Link>
              
            </div>
            {/* Right-Side */}
            <div className="carousel rounded-3xl relative overflow-hidden">
              <div
                className="w-full h-[400px] object-cover rounded-3xl"
                style={{
                  transition: "transform 0.5s ease",
                  transform: `translateX(-${currentSlideIndex * 100}%)`,
                  display: "flex",
                }}
              >
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ))}
              </div>
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
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center overflow-hidden pt-8">
              <img
                src={service.image}
                alt=""
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
              />
              <p className="font-semibold mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
