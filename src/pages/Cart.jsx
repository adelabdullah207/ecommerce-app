import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, delFromCart } from "../app/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(cart);
    console.log(cart.finalPrice);
  }, []);

  return (
    <div className="w-[97%] m-auto mt-6 min-h-[100vh]">
      <h1 className="mb-7 text-center m-auto pb-2 capitalize text-4xl border-transparent border-2 border-b-cyan-600 w-96">
        my cart
      </h1>
      <ul className="w-full flex flex-col gap-3">
        {cart.product.map((product) => (
          <li
            key={product.id}
            className="grid gap-3 lg:grid-cols-2 grid-cols-1 justify-items-center items-center rounded-3xl  "
          >
            <img
              className="w-[50%] h-fit"
              src={product.image}
              title={product.title}
            />
            <span className="flex flex-col gap-1.5">
              <p className="text-xl font-bold capitalize">{product.title}</p>
              <hr className="text-gray-200 my-2" />
              <span className="flex justify-between items-center mb-2">
                <p className="text-xl font-bold capitalize">price</p>
                <p className="text-xl capitalize">{product.price}$</p>
              </span>
              <button
                onClick={() => dispatch(delFromCart(product))}
                className="bg-red-500 text-white p-2 lg:w-[50%] w-[100%] rounded-md hover:cursor-pointer"
              >
                delete
              </button>
            </span>
            <br className="text-gray-200 border-2 my-2" />
          </li>
        ))}
      </ul>
      {cart.product.length == 0 ? (
        <>
          <div className="flex gap-2 capitalize flex-col justify-center items-center w-full h-full">
            empty list ...
            <Link to="/">
              <button className="cursor-pointer bg-cyan-600  m-auto text-white p-2 rounded-md capitalize">
                go back shopping
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="w-full gap-3 flex flex-col items-center justify-center  p-5 rounded-md">
          <span className="flex items-center text-xl gap-3">
            <p className=" capitalize font-bold ">total amount</p>
            <p>{cart.totalAmount}</p>
          </span>
          <span className="flex items-center text-xl gap-3">
            <p className=" capitalize font-bold ">final price</p>
            <p>{cart.finalPrice}$</p>
          </span>
          <span className="flex flex-col justify-center items-center gap-3">
            <button className="bg-green-400 w-full  text-white p-2 rounded-md capitalize">
              proceed to pay
            </button>
            <Link to="/">
              <button className=" bg-cyan-600 w-full  text-white p-2 rounded-md capitalize">
                continue shopping
              </button>
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}
