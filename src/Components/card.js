// Card.jsx
import React, { useState, useEffect } from 'react';
import { useStore } from '@/Store/store';
import FilterByCategoryComponent from './category';

const Card = () => {
  const { fetchData: fetchProducts, getFilteredProducts } = useStore();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Wrap the getFilteredProducts call inside a function to ensure correct timing
    const updateFilteredData = () => {
      const filteredProducts = getFilteredProducts();
      console.log('Filtered Products:', filteredProducts);
      setFilteredData(filteredProducts);
    };

    // Call the function initially
    updateFilteredData();

    // Subscribe to changes in selectedCategory and call the function whenever it changes
    const unsubscribe = useStore.subscribe(updateFilteredData, (state) => state.selectedCategory);

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, [getFilteredProducts]);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center p-5">
      <FilterByCategoryComponent />
      <div className="flex flex-wrap justify-center items-center">
        {filteredData.map((product) => (
          <div
            key={product.id}
            className="w-80 h-80 bg-white-300 rounded p-4 m-2 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center cursor-pointer"
          >
            <img src={product.thumbnail} alt={product.title} className="w-40 h-40 mb-4" />
            <h2 className="text-2xl font-bold mb-2 text-center">{product.title}</h2>
            <p className="mb-2">{product.category}</p>
            <p className="font-bold">Rs {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
