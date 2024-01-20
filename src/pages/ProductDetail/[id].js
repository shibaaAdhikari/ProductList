import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/Components/navbar';
import { useStore } from '@/Store/store';

const ProductDetails = () => {
  const { getFilteredProducts,fetchData } = useStore();
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
    <div>
      <Navbar />
      {selectedProduct ? (
        <div className="bg-white-300 rounded p-4 m-2 shadow-lg transition duration-300 ease-in-out"> 
          <div className=' flex-col justify-center items-center'>
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} className=" mb-4" />
            <h2 className="text-2xl font-bold mb-2 ">{selectedProduct.title}</h2>
            <p className="mb-2">{selectedProduct.description}</p>
            <p className="mb-2">{selectedProduct.category}</p>
            <p className="font-bold">Rs {selectedProduct.price}</p>
            <p> Discount Percentage{selectedProduct.discountPercentage}</p>
            <p> Total Stock:{selectedProduct.stock}</p>
            <p> Brand:{selectedProduct.brand}</p>
            
          </div>
          <button onClick={() => router.back()} className='text-blue-500 underline'>Go back to products</button>

        </div>
      ) : (
        <p className='text-2xl'>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
