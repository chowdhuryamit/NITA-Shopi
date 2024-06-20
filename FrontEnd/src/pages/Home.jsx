import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const slides = [
  "https://wallpapers.com/images/featured/food-delivery-uzm1ss89qzgz2qtu.jpg",
  "https://t4.ftcdn.net/jpg/04/68/58/83/360_F_468588320_98M7a6EtlzP7xKHkVZFDctrymnF03K1Y.jpg",
  "https://www.shutterstock.com/shutterstock/videos/1101286991/thumb/12.jpg?ip=x480",
  "https://cdni.iconscout.com/illustration/premium/thumb/girl-doing-online-shopping-with-consumer-rights-5255956-4394675.png",
];

const services = [
  {
    image: "https://cdn.dribbble.com/users/1118376/screenshots/4349141/rentbow.gif",
    heading: "Old Product",
    description: "Welcome to our treasure trove of lightly used products, where each item holds a story and awaits its new journey with you. Discover hidden gems today!",
    link: "/OldProduct",
    banner: "https://cdni.iconscout.com/illustration/premium/thumb/online-sell-and-buy-4863222-4050758.png",
  },
  {
    image: "https://cdni.iconscout.com/illustration/premium/thumb/man-doing-online-grocery-shopping-6542183-5445154.png?f=webp",
    heading: "New Product",
    description: "Explore our collection of the latest top-notch items, offering incredible deals that you won't want to miss. Discover quality and savings combined in every purchase!",
    link: "/NewProduct",
    banner: "https://cdni.iconscout.com/illustration/premium/thumb/man-shopping-for-groceries-online-6756673-5628030.png?f=webp",
  },
  {
    image: "https://img.freepik.com/free-vector/flat-design-indian-man-driving-van_23-2149757883.jpg",
    heading: "Auto Service",
    description: "Ready for a swift journey? Connect instantly with our reliable drivers for a seamless ride experience. Get moving effortlessly with just a tap!",
    link: "/AutoService",
    banner: "https://cdni.iconscout.com/illustration/premium/thumb/auto-rickshaw-service-5066967-4246744.png?f=webp",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJNXphMd92iYHzTfJZLsxkvgUS_iTANwFjQ&s",
    heading: "Restaurants",
    description: "Savor a diverse range of mouthwatering culinary delights that cater to every palate. From delectable desserts to savory dishes, indulge in a culinary journey like no other!",
    link: "/RestaurantService",
    banner: "https://static.vecteezy.com/system/resources/previews/007/240/072/non_2x/a-skillfully-crafted-flat-illustration-of-food-app-vector.jpg",
  },
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
    <div>
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

        <div className="w-full bg-[#feeccd] bg-opacity-30 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 pb-12">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <div className="flex p-4 flex-col justify-center items-center overflow-hidden pt-8">
                <img
                  src={service.image}
                  alt=""
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-full px-4 lg:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              } items-center justify-center py-6`}
            >
              <div
                className={`w-full lg:w-1/2 flex justify-center px-4 ${
                  index % 2 === 0 ? "right-banner" : "left-banner"
                }`}
              >
                <img
                  src={service.banner}
                  alt={service.heading}
                  className="rounded-b-2xl max-w-full h-auto"
                />
              </div>
              <div
                className={`w-full lg:w-1/2 flex flex-col items-start p-4 max-w-xs ${
                  index % 2 === 0 ? "lg:items-end" : "lg:items-start"
                }`}
              >
                <h3 className="text-2xl font-bold">{service.heading}</h3>
                <p className="mt-4 text-xl">{service.description}</p>
                <Link to={service.link}>
                  <button className="bg-[#3BEA1E] hover:bg-blue-600 text-black hover:text-white font-bold py-2 px-4 rounded-xl mt-6">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
