import React from "react";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

export default function _404_() {
  return (
    <div className="absolute top-0 left-0 z-40 font-bold flex flex-col justify-center items-center h-screen w-full bg-white">
      <h2 className="md:p-2 p-1 lg:text-6xl text-3xl ">404</h2>
      <h1 className="md:p-2 p-1 font-bold capitalize text-center md:text-xl text-sm">
        we are sorry the page you are looking for was not founded !
      </h1>
      <Link to="/ecommerce-app/">
        <button className=" transition-all duration-200 md:p-2 p-1 hover:cursor-pointer hover:text-white hover:bg-red-700 md:text-2xl text-xl rounded-md flex items-center justify-center gap-0.5">
          <IoArrowBackCircle size={30} />
          <p className=" capitalize font-bold"> back home</p>
        </button>
      </Link>
    </div>
  );
}
