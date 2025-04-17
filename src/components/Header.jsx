import React, { useEffect, useState } from "react";

import { ReactTyped } from "react-typed";

// icons
import { IoCloseOutline } from "react-icons/io5";
import { FaShuttleVan } from "react-icons/fa";
import { MdRecycling } from "react-icons/md";
import { RiShieldStarFill } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { motion, useAnimationControls } from "framer-motion";
import { IoLogoWebComponent } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const containerVariants = {
    close: {
      width: "0%",
      left: -200,
      color: "white",
      opacity: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    open: {
      width: "75%",
      left: 0,
      color: "black",
      opacity: 1,
      transition: {
        type: "linear",
        duration: 0.3,
      },
    },
  };
  const containerControls = useAnimationControls();
  const cart = useSelector((state) => state.cart);
  const [headerNewsLine, setHeaderNewsLine] = useState(true);
  const [mobileNavStatus, setMobileNavStatus] = useState(false);
  const handelMobileNavStatus = () => {
    setMobileNavStatus(!mobileNavStatus);
  };
  useEffect(() => {
    if (mobileNavStatus) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [mobileNavStatus]);

  return (
    <header>
      {/* header news line */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-fit bg-violet-700 text-white text-center py-2 relative  ${
          headerNewsLine ? "block" : "hidden"
        } flex justify-center items-center gap-3`}
      >
        <h1 className="capitalize  lg:text-xl md:text-md text-xs ">
          legendary bosch buys - hurry, Limited time only
        </h1>
        {headerNewsLine && (
          <IoCloseOutline
            onClick={() => setHeaderNewsLine(!headerNewsLine)}
            className=" cursor-pointer lg:text-2xl text-xl "
          />
        )}
      </motion.div>
      {/* end of header news line */}
      {/* container start */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[97%]  m-auto"
      >
        {/* first section */}
        <div className="xl:flex items-center justify-between xl:mt-3 text-sm hidden">
          {/* left-side */}
          <div className="flex gap-12">
            {/* start */}
            <div className="flex items-center gap-1.5">
              <FaShuttleVan size={20} className="text-cyan-600" />
              <p className="capitalize text-gray-600">free next day delivery</p>
            </div>
            {/* end */}
            {/* start */}
            <div className="flex items-center gap-1.5">
              <MdRecycling size={20} className="text-cyan-600" />
              <p className="capitalize text-gray-600">
                free removal & recycling of old products
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="flex items-center gap-1.5">
              <RiShieldStarFill size={20} className="text-cyan-600" />
              <p className="capitalize text-gray-600">
                legendary value promise
              </p>
            </div>
            {/* end */}
            {/* start */}
            <div className="flex items-center gap-1.5">
              <MdCall size={20} className="text-cyan-600" />
              <p className="capitalize text-gray-600">24/7 customer support</p>
            </div>
            {/* end */}
          </div>
          {/* left-side */}
          {/* right side start */}
          <div className="flex justify-between items-center gap-3 text-gray-600 text-sm">
            <Link to="/about" className="capitalize font-bold">
              about us
            </Link>
            <span className="flex items-center gap-0.5">
              <IoMdContact size={20} />
              <Link to="/contact">
                <p className="capitalize font-bold">contact us</p>
              </Link>
            </span>
          </div>
          {/* right side end */}
        </div>
        {/* end of first section */}
        <hr className="xl:opacity-10 xl:my-2 opacity-0" />
        {/* second section */}
        <div className="xl:mt-3 py-2 flex  justify-between items-center gap-5 w-full">
          <span className="flex items-center  gap-0.5">
            <IoLogoWebComponent
              size={30}
              className="hover:rotate-x-180 cursor-pointer transition-all duration-300"
            />
            <Link
              to="/ecommerce-app/"
              className="capitalize text-2xl font-light"
            >
              <span className="text-cyan-600 font-bold">E-commerce</span>
            </Link>
          </span>
          <span className="relative xl:flex items-center hidden">
            <ReactTyped
              strings={[
                "Search for a product",
                "Search for a category",
                "Search for a brand",
              ]}
              typeSpeed={40}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input
                id="search"
                type="search"
                placeholder="search for a product"
                className="bg-gray-50 p-1 w-[400px] max-w-[500px] rounded-md lg:max-w-[600px] outline-none border-2 border-transparent focus:border-cyan-600 transition-all duration-150"
              />
            </ReactTyped>
            <label htmlFor="search" className=" rounded-md">
              <IoSearchCircleSharp size={30} className="text-cyan-600" />
            </label>
          </span>
          <span className="xl:flex hidden items-center gap-1 cursor-pointer ">
            <FaLocationArrow size={20} className="text-cyan-600" />
            <p className="capitalize text-cyan-600 text-sm font-bold">
              click to set your location
            </p>
          </span>
          <span className="xl:flex hidden items-center gap-1 text-gray-600">
            <MdManageAccounts size={25} />
            <p className="capitalize text-sm font-semibold">my account</p>
          </span>
          <span className="xl:flex hidden items-center gap-1 text-gray-600">
            <FaClipboardList size={20} />
            <p className="capitalize text-sm font-semibold">wish list</p>
          </span>

          <span className="relative xl:flex hidden gap-1 items-center text-gray-600">
            <Link to="/cart" className="capitalize font-semibold flex gap-1.5">
              <FaCartPlus size={20} />
              cart
              <p className="absolute -top-5 -z-10 -left-5 text-sm text-red-400 bg-white  p-2 rounded-full">
                {cart.totalAmount}
              </p>
            </Link>
          </span>
          {/* mobile */}
          <span className="block xl:hidden">
            <CgMenuRight
              className="cursor-pointer"
              size={40}
              onClick={handelMobileNavStatus}
            />
            <motion.ul
              variants={containerVariants}
              initial="close"
              animate={containerControls}
              className={`fixed -left-200 top-0 bg-white h-screen p-3 text-nowrap z-50`}
            >
              <li className="flex items-center gap-1.5 capitalize">
                <img
                  loading="lazy"
                  width={50}
                  height={50}
                  className="rounded-full"
                  src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
                  alt="user image"
                />
                <p>user-name</p>
              </li>
              <hr className=" opacity-10 my-5" />
              <span className="flex flex-col">
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">cart</Link>
              </span>
            </motion.ul>
          </span>
          {/* end of mobile */}
        </div>
        {/* end of second section */}
      </motion.div>
      {/* container end */}
    </header>
  );
}
