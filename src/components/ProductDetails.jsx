import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setProductDetails } from "../store/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.productDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product || product.id !== Number(id)) {
      const fetchProduct = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          dispatch(setProductDetails(data));
        } catch (error) {
          console.error("Error fetching product:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id, product, dispatch]);

  if (loading) return <p className="text-center mt-10">Loading product details...</p>;

  if (!product) return <p className="text-center mt-10">No product found.</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <button onClick={() => navigate(-1)} className="mb-4 text-purple-400 border-4 px-3 rounded-md text-2xl">🔙</button>
      <div className="text-2xl font-bold bg-red-300 p-2 m-2">{product.title}</div>
      <div className="flex mt-10">
          <img src={product.image} alt={product.title} className="w-96 h-96 object-contain mx-4 my-0.5" />
          <div className="my-6 mx-4">
          <p className="text-lg "><strong>Price : </strong> ${product.price}</p>
          <p className="text-gray-800 max-w-96 mb-2"> <strong>Product Description : </strong>  {product.description}</p>

          <p className="text-gray-800 text-md"><strong>Category : </strong>{product.category}</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
