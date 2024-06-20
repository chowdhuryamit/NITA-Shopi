import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="text-center pt-10">
                    <h1 className="text-4xl font-bold mb-6">We Are Your <b>अपना</b> Multiservice Hub</h1>
                </div>
            </div>
            <div className="container mx-auto pt-10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {AboutUs.map((item, index) => (
                        <div key={index} className="bg-[#feeccd] border-b-4 border-green-500 bg-opacity-30 hover:bg-[#FFCAA5] transition duration-300 ease-in-out shadow-2xl rounded-lg p-6 transform hover:scale-105">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                                {item.isItalic ? (
                                    <>
                                        <p className="text-lg italic">{item.content.split('"')[1]}</p>
                                        <p className="text-lg mt-2">{item.content.split('"')[2]}</p>
                                    </>
                                ) : (
                                    <p className="text-lg">{item.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* OUR TEAM SECTION */}

                <div className="flex flex-col items-center text-center pt-10">
                    <div className="text-center text-4xl font-bold">
                        <h3>Our Team</h3>
                    </div>
                    <div className="w-60 h-1 border-b-4 border-green-400 my-3"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Team Member Cards */}
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-[#feeccd] bg-opacity-30 border-b-4 border-green-500 hover:bg-[#FFCAA5] transition duration-300 ease-in-out shadow-2xl rounded-xl p-6 transform hover:scale-105">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-green-500 transform transition-transform duration-300 hover:scale-110 mb-2"
                                />
                                <div className="text-lg font-bold mb-2"><h6>{member.name}</h6></div>
                                <div className="text-lg mb-2"><h6>{member.role}</h6></div>
                                <div className="flex space-x-4">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl transform transition-transform duration-300 hover:scale-125">
                                        <FaLinkedinIn />
                                    </a>

                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-2xl transform transition-transform duration-300 hover:scale-125">
                                        <TbBrandGithubFilled />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

const AboutUs = [
    {
        title: "Our Goals",
        content: "We aim to provide the best services and products to our customers, ensuring high quality and satisfaction. Our goal is to continuously improve and innovate to meet and exceed customer expectations."
    },
    {
        title: "What We Provide",
        content: "We offer a wide range of products and services, including old product buy and sell service, new product buy and sell service, urgent auto driver phone number service, and restaurant menu service. Our offerings are designed to meet diverse needs and provide value to our customers."
    },
    {
        title: "What Makes Us Different",
        content: "Our commitment to quality, customer satisfaction, and continuous improvement sets us apart. We focus on delivering exceptional service and value, ensuring that our customers have a seamless and enjoyable experience."
    },
    {
        title: "Our Vision",
        content: "\"Now we are an option but we want to be a choice.\" We aspire to become the preferred choice for our customers by consistently delivering high-quality services and exceeding their expectations.",
        isItalic: true
    }
];

const teamMembers = [
    {
        name: "Sudip Karmakar",
        role: "Founder",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/sudip-karmakar-675629249/",
        github: "https://github.com/Sudipkarmakar25"
    },
    {
        name: "RAJAT DEBNATH",
        role: "Founder",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/rajat-debnath/",
        github: "https://github.com/Rajat22UEE"
    },
    {
        name: "Ratnadip Das",
        role: "Founder",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/ratnadip-das-321659258/",
        github: "https://github.com/sudipkarmakar"
    },
    {
        name: "Samiran Chakraborty",
        role: "Founder",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        linkedin: "https://www.linkedin.com/in/samiran-chakraborty247/",
        github: "https://github.com/sudipkarmakar"
    }
];

export default About;
