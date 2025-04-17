import React, { useRef } from "react";
import data from "../utils/data.json";
import { useDispatch } from "react-redux";

// react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// icons
import { FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export default function Best() {
  const ref = useRef();
  const dispatch = useDispatch();

  return (
    <div className="w-[97%] m-auto overflow-hidden">
      <div className="w-full my-10">
        <hr className="opacity-5 mb-10" />
        <h1 className="text-start xl:text-4xl text-2xl capitalize">
          best selling
        </h1>
        <span className="flex w-full justify-end mb-10">
          <MdNavigateNext
            size={35}
            className="rotate-180 cursor-pointer text-cyan-600"
            onClick={(e) => ref.current.slickPrev()}
          />
          <MdNavigateNext
            size={35}
            className="cursor-pointer text-cyan-600"
            onClick={(e) => ref.current.slickNext()}
          />
        </span>
        <Slider
          ref={ref}
          dots
          autoplay
          autoplaySpeed={2000}
          slidesToShow={3}
          slidesToScroll={1}
          speed={500}
          responsive={[
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              },
            },

            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {data.best.map((item, idx) => (
            <div
              className="relative p-1 hover:scale-95 transition-all duration-150"
              key={idx}
            >
              <img
                width={500}
                height={500}
                src={item.image}
                loading="lazy"
                className=" rounded-md duration-150 transition-all cursor-pointer"
              />
              <span className="p-5 absolute top-0 right-0 flex flex-col gap-1.5 ">
                <button className="bg-white p-2 rounded-full">
                  <FaHeart
                    size={25}
                    className="  text-gray-500 hover:text-red-600 transition-all duration-200 cursor-pointer"
                  />
                </button>
                <button className="bg-white p-2 rounded-full">
                  <MdAddShoppingCart
                    onClick={() => dispatch(add_to_cart(item))}
                    size={25}
                    className=" text-gray-500 hover:text-cyan-600 transition-all duration-200 cursor-pointer"
                  />
                </button>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
