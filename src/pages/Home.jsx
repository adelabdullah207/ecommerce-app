import { React, lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

// icons
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../app/productSlice";

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
      <section className="w-full min-h-screen  overflow-hidden">
        <div className="bg-gray-700 p-2">
          <div className="w-[97%] m-auto">
            <div className="w-full text-white xl:p-0 px-10 py-2">
              <Categories />
            </div>
          </div>
        </div>

        <section className=" flex items-center justify-center w-[100%] m-auto lg:flex-row flex-col">
          <div className="w-full flex justify-center flex-col items-start h-screen bg-fixed bg-cover bg-center   bg-[url('https://img.freepik.com/free-photo/flat-lay-desk-with-phone-laptop-5g-text_23-2148291132.jpg?t=st=1744892876~exp=1744896476~hmac=0b960f77743b79aae14425a018033e8f0d6bb64bca3e51be2509f14d4c1a3ab7&w=1380')]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="w-[90%] m-auto capitalize lg:text-6xl font-extralight text-3xl text-gray-500"
            >
              a store that is designed<br></br> for your{" "}
              <ReactTyped
                strings={["budget", "style"]}
                typeSpeed={60}
                backSpeed={70}
                loop
                className="text-cyan-500 font-light"
              ></ReactTyped>
            </motion.div>
          </div>
        </section>

        <section className="w-[97%] m-auto mt-5">
          <h1 className="text-cyan-500 capitalize font-bold text-2xl">
            all products
          </h1>
          <hr className="my-5 opacity-10" />
          <span className="flex gap-2 mt-1">
            <Link to={"/products/categories/mobile"}>
              <button className={customStyle.customCategoryButtons}>
                mobile
              </button>
            </Link>
            <Link to={"/products/categories/gaming"}>
              <button className={customStyle.customCategoryButtons}>
                gaming
              </button>
            </Link>
            <Link to={"/products/categories/laptop"}>
              <button className={customStyle.customCategoryButtons}>
                laptops
              </button>
            </Link>
            <Link to={"/products/categories/tv"}>
              <button className={customStyle.customCategoryButtons}>tv</button>
            </Link>
            <Link to={"/products/categories/appliance"}>
              <button className={customStyle.customCategoryButtons}>
                appliance
              </button>
            </Link>
          </span>
        </section>

        {/* products area */}
        {data.isLoading ? (
          <div className="flex justify-center items-center flex-col gap-3 min-h-[100vh] mt-5">
            <span className="w-40 h-40 bg-transparent border-b-0 animate-spin border-2 text-cyan-700 rounded-full"></span>
            <p className="capitalize">loading...</p>
          </div>
        ) : data.isSuccess ? (
          <ul className="w-[97%] m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1 mt-5">
            {data.products.products.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`}>
                <li className="w-fit h-full border-1 border-gray-200 hover:scale-95 transition-all duration-200 cursor-pointer">
                  <div className="group relative w-full h-full rounded-md">
                    <img
                      loading="lazy"
                      src={product.image}
                      alt={product.title}
                      className="group-hover:opacity-90 z-10 w-full h-full group-hover:blur-sm"
                    />
                    <span className="text-gray-950 font-bold text-center absolute top-0 left-0 flex flex-col  justify-center items-center -z-50 group-hover:z-20 bg-black/5 w-full h-full rounded-md">
                      <p className="">{product.title}</p>
                      <hr />
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

const customStyle = {
  customCategoryButtons:
    "outline outline-2 outline-gray-300 border-none cursor-pointer rounded-full hover:bg-cyan-500 p-2 hover:text-white transition-all duration-150 hover:outline-cyan-300",
};
