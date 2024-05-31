import React from 'react';

export default function Card({ title, imagesrc, content }) {
  return (
    <div className="overflow-y-auto overflow-hidden shadow rounded-lg mx-5 w-[450px]  hover:bg-black p-4 custom-card bg-gradient-to-r from-green-200 to-green-100">
      <h1 className="text-center">{title}</h1>
      <div className="flex items-center justify-center">
        <img
          src={imagesrc}
          className="overflow-hidden w-[250px] h-[200px] flex items-center justify-center rounded-3xl"
          alt="Error"
        />
      </div>
      <p >{content}</p>
    </div>
  );
}
