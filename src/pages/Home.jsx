import { React, lazy, useEffect, useState } from "react";
import data from "../utils/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { Link } from "react-router-dom";
const Categories = lazy(() => import("../components/Categories"));

const Best = lazy(() => import("./Best"));

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
                <li className="w-full h-full border-1 border-gray-200 hover:scale-95 transition-all duration-200 cursor-pointer">
                  <img loading="lazy" src={product.image} alt={product.title} />
                  <p>{product.title}</p>
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
