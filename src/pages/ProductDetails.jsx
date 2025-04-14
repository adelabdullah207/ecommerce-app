import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../app/singleProductSlice";
import { addToCart } from "../app/cartSlice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const parameter = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(parameter.id));
  }, []);

  return (
    <div className="lg:w-[97%] w-[90%] m-auto min-h-[100vh] flex justify-center flex-col items-center">
      {data.isLoading ? (
        <div className="flex justify-center items-center flex-col gap-3 min-h-[100vh] mt-5">
          <span className="w-40 h-40 bg-transparent border-b-0 animate-spin border-2 text-cyan-700 rounded-full"></span>
          <p className="capitalize">loading...</p>
        </div>
      ) : data.isSuccess ? (
        <div className="w-[97%] flex lg:flex-row flex-col justify-center items-center gap-3">
          <span className="lg:w-[50%] w-full">
            <img
              src={data.product.product.image}
              alt={data.product.product.title}
              className="w-full h-fit hover:scale-95  transition-all duration-200 cursor-pointer"
            />
          </span>
          <span className="lg:w-[50%] w-full">
            <h1 className="font-bold">{data.product.product.title}</h1>
            <hr className="my-5 text-gray-200" />
            <span className="flex flex-col gap-3 mb-5">
              <h1 className=" capitalize font-bold text-xl">description</h1>
              {data.product.product.description}
            </span>
            <span className="mb-5 flex lg:justify-between justify-center lg:gap-0 gap-3 font-bold text-xl">
              <h1 className=" capitalize">price</h1>
              <p className="">{data.product.product.price}$</p>
            </span>
            <button
              onClick={() => dispatch(addToCart(data.product.product))}
              className="bg-cyan-700 text-white p-3 rounded-md"
            >
              add to cart
            </button>
          </span>
        </div>
      ) : (
        <div className="w-full min-h-[100vh] flex justify-center items-center capitalize text-4xl">
          error while fetching the data !
        </div>
      )}
    </div>
  );
}
