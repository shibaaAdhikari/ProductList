// FilterByCategoryComponent.jsx
import React, { useState, useEffect } from 'react';
import { useStore } from '@/Store/store';

const FilterByCategoryComponent = () => {
  const { setCategory, selectedCategory } = useStore();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      await useStore.getState().fetchData(); 
      const uniqueCategories = Array.from(
        new Set(useStore.getState().data.map((product) => product.category))
      );
      setCategories(uniqueCategories);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  return (
    <div className="mb-4">
      <p className="font-bold">Filter by Category:</p>
      <button
        className={`mr-2 ${selectedCategory === null ? "bg-customColor text-white" : "bg-gray-300"} px-4 py-2 rounded`}
        onClick={() => handleCategoryClick(null)}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`mr-2 ${selectedCategory === category ? "bg-customColor text-white" : "bg-gray-300"} px-4 py-2 rounded`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterByCategoryComponent;
