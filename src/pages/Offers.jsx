import React, { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { addToCart } from "../app/cartSlice";
export default function Offers() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <section className="w-full">
      <div className="flex justify-around items-center p-10">
        <ul className="grid grid-cols-4 justify-items-center gap-3">
          {products.products &&
            products.products.map((item) => (
              <Link key={item.id} to={`products/${item.id}`}>
                <li className="relative z-20 hover:-z-20 flex flex-col gap-3 border-1 border-gray-200 rounded-2xl">
                  <img
                    width={400}
                    height={400}
                    className=" rounded-3xl "
                    src={item.image}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                  <p className="text-center">{item.price}$</p>
                  <span className="absolute z-10">
                    <FaHeart size={30} />
                    <MdAddShoppingCart
                      size={30}
                      onClick={() => dispatch(addToCart(item))}
                    />
                  </span>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
}
