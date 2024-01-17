// components/Card.js
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center p-5">
      {data.map((product) => (
        <div key={product.id} className="w-80 h-80 bg-white-300 rounded p-4 m-2 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center">
          <img src={product.thumbnail} alt={product.title} className='w-40 h-40 mb-4' />
          <h4 className="text-xl font-bold mb-2 text-center">{product.title}</h4>
          <p className="mb-2">{product.category}</p>
          <p >Rs{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
