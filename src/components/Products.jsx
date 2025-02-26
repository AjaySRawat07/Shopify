import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../store/productSlice";
import useFetchData from "../hooks/useFetchData";

const Product = () => {
  const [category, setCategory] = useState("electronics");
  const dispatch = useDispatch();
  const { data, isLoading, error } = useFetchData(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return (
    <div className="flex gap-2 border-b-blue-300 shadow-lg shadow-black m-10 min-w-1/6 min-h-96 mt-20 ">
      {/* Sidebar */}
      <div className="bg-black text-white font-bold p-3 grid gap-y-8">
        <div className="cursor-pointer" onClick={() => setCategory("electronics")}>Electronics</div>
        <div className="cursor-pointer" onClick={() => setCategory("jewelery")}>Jewelry</div>
        <div className="cursor-pointer" onClick={() => setCategory("men's clothing")}>Men's Clothing</div>
        <div className="cursor-pointer" onClick={() => setCategory("women's clothing")}>Women's Clothing</div>
      </div>

      {/* Product List */}
      <div className="p-4">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!isLoading && !error && (
          <ul className="list-disc pl-5 grid gap-6">
            {data.map((item) => (
              <li key={item.id} className="cursor-pointer">
                <Link
                  to={`/products/${item.id}`}
                  onClick={() => dispatch(setProductDetails(item))}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Product;
