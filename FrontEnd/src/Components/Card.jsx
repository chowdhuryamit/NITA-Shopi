import React from 'react';

const Card = ({ product_name, product_price, product_Owner, product_image }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="h-[350px] w-[300px] border border-gray-300 shadow-lg bg-white rounded-lg overflow-hidden">
        <img
          src={product_image}
          alt={product_name}
          className="h-1/2 w-full object-cover"
        />
        
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-lg font-bold text-gray-800">{product_name}</h1>
          <p className="text-sm text-gray-600">Price: <span className="font-semibold text-green-600">${product_price}</span></p>
          <p className="text-sm text-gray-600">Owner: <span className="font-medium">{product_Owner}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
