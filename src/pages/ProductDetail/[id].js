import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/navbar';
import { useStore } from '@/Store/store';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon from React Icons

const ProductDetails = () => {
  const { getFilteredProducts, fetchData } = useStore();
  const router = useRouter();
  const productId = router.query.id;

  useEffect(() => {
    if (!getFilteredProducts().length) {
      fetchData();
    }
  }, [getFilteredProducts, fetchData]);

  const filteredProducts = getFilteredProducts();
  const selectedProduct = filteredProducts.find(
    (product) => product.id === parseInt(productId)
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {selectedProduct ? (
        <div className="max-w-2xl mx-auto bg-white rounded p-4 m-2 shadow-lg">
          <div className='flex flex-col justify-center items-center'>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className="w-full mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">
              <span className="flex items-center">
                {/* <FaArrowLeft className="h-6 w-6 mr-2 text-gray-500" /> */}
                {selectedProduct.title}
              </span>
            </h2>
            <p className="mb-2">{selectedProduct.description}</p>
            <p className="mb-2">{selectedProduct.category}</p>
            <p className="font-bold">Rs {selectedProduct.price}</p>
            <p>Discount Percentage: {selectedProduct.discountPercentage}</p>
            <p>Total Stock: {selectedProduct.stock}</p>
            <p>Brand: {selectedProduct.brand}</p>
          </div>

          <button
            onClick={() => router.back()}
            className='text-blue-500 underline mt-4 block mx-auto flex items-center'
          >
            <FaArrowLeft className="h-5 w-5 mr-2" />
            Go back to products
          </button>
        </div>
      ) : (
        <p className='text-2xl text-center mt-8'>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
