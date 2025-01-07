import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const NewProduct = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);


  async function fetchProducts() {
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/product/getAllProduct?page=1`
      );
      const result = await response.json(); 
      console.log(result); 
      setProducts(result); 
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {/* {products.map((product) => (
        <Card
          key={product.id}
          product_name={product.name}
          product_price={product.price}
          product_Owner="Default Owner" 
          product_image={`https://th.bing.com/th/id/R.2436bfd57f8da9d3352be6d9c69f7d0d?rik=9ZCsDkOmNhWhyQ&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fbest-scenery-wallpaper-scenery-images.jpg&ehk=QhEgBXlBIdu4NBBKeTvxOQncAMHrLokkC8ustgaeB9c%3d&risl=&pid=ImgRaw&r=0`} 
        />
      ))} */}

      <div className="w-full flex justify-around mt-6">
        
        {count>0?<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        onClick={()=>setCount(count-1)}
        >Previous</button>:null}
        { 
        count<10?<button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>:null
        }

        
      </div>
    </div>
  );
};

export default NewProduct;
