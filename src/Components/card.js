// Card.jsx
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useStore } from "@/Store/store";
import FilterByCategoryComponent from "./category";
import Link from "next/link";

const Card = () => {
  const store = useStore();
  const data = store.data;
  const selectedCategory = store.selectedCategory;
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = data.filter(
    (el) => el.category === selectedCategory || selectedCategory === null
  );
  const productsPerPage = 10;
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = filteredProducts.slice(
    offset,
    offset + productsPerPage
  );

  return (
    <div className="flex flex-col flex-wrap justify-center items-center p-5">
      <FilterByCategoryComponent />
      <div className="flex flex-wrap justify-center items-center">
        {currentProducts.map((product) => (
          <Link key={product.id} href={`/ProductDetail/${product.id}`}>
            <div className="w-80 h-80 bg-white-300 rounded p-4 m-2 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex flex-col items-center cursor-pointer ">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-40 h-40 mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-center">
                {product.title}
              </h2>
              <p className="mb-2">{product.category}</p>
              <p className="font-bold">Rs {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <ReactPaginate
        // ...
        previousLabel={"previous"}
        nextLabel={currentPage < pageCount - 1 ? "next" : ""}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center gap-3 mt-5"}
        activeClassName={"bg-customColor text-white"}
        previousLinkClassName={
          "pagination-link hover:bg-customColor hover:text-white px-3 py-1 rounded bg-customColor text-white"
        }
        nextLinkClassName={`pagination-link ${
          currentPage < pageCount - 1
            ? "hover:bg-customColor hover:text-white bg-customColor"
            : ""
        } px-3 py-1 rounded text-white`}
        pageLinkClassName={
          "pagination-link hover:bg-gray-400 text-gray-700 px-3 py-1 rounded"
        }
      />
    </div>
  );
};

export default Card;
