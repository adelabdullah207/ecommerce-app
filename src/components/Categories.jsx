import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "../utils/data.json";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Slider
        slidesToShow={5}
        slidesToScroll={1}
        speed={500}
        arrows={false}
        responsive={[
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              arrows: true,
              className: "text-center",
            },
          },
        ]}
      >
        {data.categories &&
          data.categories.map((category, idx) => (
            <Link key={idx} to={`/products/categories/${category.name}`}>
              <span className="text-md xl:hover:text-cyan-700 capitalize cursor-pointer p-1.5 duration-200 transition-all">
                {category.name}
              </span>
            </Link>
          ))}
      </Slider>
    </div>
  );
}
