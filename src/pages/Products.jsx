import React, { useEffect, useState } from "react";
import { fetchCategory } from "../app/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";

export default function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);
  const parameter = useParams();

  useEffect(() => {
    dispatch(fetchCategory(parameter.cat_name));
  }, []);

  return (
    <div className="w-[97%] m-auto min-h-[100vh]">
      <h1 className="text-center capitalize font-bold p-2 text-2xl mt-5 border-2 border-transparent w-96 m-auto border-b-cyan-300">
        {parameter.cat_name} section
      </h1>
      <Link to="/ecommerce-app/">
        <span className="flex items-center gap-1 hover:translate-x-1.5 duration-200 transition-all">
          <IoReturnUpBackSharp size={30} />
          <p className="capitalize text-xl">back to main</p>
        </span>
      </Link>

      {data.isLoading ? (
        <div className="flex justify-center items-center flex-col gap-3 min-h-[100vh] mt-5">
          <span className="w-40 h-40 bg-transparent border-b-0 animate-spin border-2 text-cyan-700 rounded-full"></span>
          <p className="capitalize">loading...</p>
        </div>
      ) : data.isSuccess ? (
        <ul className="grid grid-cols-4 gap-1 mt-5">
          {data.products.products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <li className="p-5 flex justify-between items-center flex-col w-full h-full border-1 border-gray-200 hover:scale-95 transition-all duration-200 cursor-pointer">
                <img loading="lazy" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <hr/>
                <span className="w-full flex justify-between items-center">
                  <p className=" capitalize font-bold text-xl">price</p>
                  <p className=" font-bold">{product.price}</p>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <div className="w-full min-h-[100vh] flex justify-center items-center capitalize text-4xl">
          error while fetching the data !
        </div>
      )}
    </div>
  );
}
