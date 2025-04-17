import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { delFromCart } from "../app/cartSlice";
// icons
import { MdDelete } from "react-icons/md";

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
      <ul className="">
        {cart.product.map((product) => (
          <li
            key={product.id}
            className="flex justify-center items-center lg:flex-row flex-col "
          >
            <span className="lg:w-[50%] w-full h-fit">
              <img
                src={product.image}
                title={product.title}
                className="lg:w-[50%] w-full m-auto hover:scale-95 duration-150 transition-all"
              />
            </span>
            <span className="lg:w-[50%] w-full">
              <p className="text-xl font-bold capitalize">{product.title}</p>
              <hr className="text-gray-200 my-2" />
              <span className="flex justify-between items-center mb-2">
                <p className="text-xl font-bold capitalize">price</p>
                <p className="text-xl capitalize">{product.price}$</p>
              </span>
              <button
                onClick={() => dispatch(delFromCart(product))}
                className="bg-red-500 flex gap-1 hover:bg-red-600 transition-all duration-200 text-white p-2  rounded-md hover:cursor-pointer"
              >
                <MdDelete size={25} />
                delete
              </button>
            </span>
          </li>
        ))}
      </ul>
      {cart.product.length == 0 ? (
        <>
          <div className="flex gap-2 capitalize flex-col justify-center items-center w-full h-screen">
            empty list ...
            <Link to="/ecommerce-app/">
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
