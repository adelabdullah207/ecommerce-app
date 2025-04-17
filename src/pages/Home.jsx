import { React, lazy, useEffect, useState } from "react";

// react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

// lazy loading components
const Best = lazy(() => import("./Best"));
const Categories = lazy(() => import("../components/Categories"));

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <section className="w-[97%] m-auto">
        <div className="bg-gray-700">
          <div className="w-[97%] m-auto">
            <div className="w-full text-white xl:p-0 px-10 py-2">
              <Categories />
            </div>
          </div>
        </div>

        {/* products area */}
        {data.isLoading ? (
          <div className="flex justify-center items-center flex-col gap-3 min-h-[100vh] mt-5">
            <span className="w-40 h-40 bg-transparent border-b-0 animate-spin border-2 text-cyan-700 rounded-full"></span>
            <p className="capitalize">loading...</p>
          </div>
        ) : data.isSuccess ? (
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 mt-5">
            {data.products.products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <li className="w-fit h-full border-1 border-gray-200 hover:scale-95 transition-all duration-200 cursor-pointer">
                  <div className="group relative w-full h-full rounded-md">
                    <img
                      loading="lazy"
                      src={product.image}
                      alt={product.title}
                      className="group-hover:opacity-90 z-10 w-full h-full"
                    />
                    <span className="text-white font-bold text-center absolute top-0 left-0 flex flex-col  justify-center items-center -z-50 group-hover:z-20 bg-black/30 w-full h-full rounded-md">
                      <p>{product.title}</p>
                      <hr  />
                      <span className="w-[90%] mt-3 flex justify-between items-center">
                        <p className=" capitalize">price</p>
                        <p className="text-xl">{product.price}$</p>
                      </span>
                    </span>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="w-full min-h-[100vh] flex justify-center items-center capitalize text-4xl">
            error while fetching the data !
          </div>
        )}
        {/* end of products area */}
        <Best />
      </section>
    </>
  );
}
