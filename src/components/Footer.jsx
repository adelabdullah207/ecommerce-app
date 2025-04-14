import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-gray-600 p-10 mt-6 w-full text-white grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 md:gap-5 gap-10">
        {/* our story */}
        <div className=" flex flex-col gap-4">
          <h1 className={customCss.headLine}>our story</h1>
          <p>
            vito market one of the best <br /> e-commerce website on the
            internet
          </p>
        </div>
        {/* end of our story */}
        {/* quick links */}
        <div>
          <h1 className={customCss.headLine}>quick links</h1>
          <ul>
            <li className={customCss.smallItem}>my account</li>
            <Link to="/cart" className={customCss.smallItem}>
              my cart
            </Link>
            <li className={customCss.smallItem}>wishlist</li>
            <li className={customCss.smallItem}>product compare</li>
          </ul>
        </div>
        {/* end of quick links */}
        {/* information */}
        <div>
          <h1 className={customCss.headLine}>information</h1>
          <ul>
            <li className={customCss.smallItem}>privacy policy</li>
            <li className={customCss.smallItem}>refund policy</li>
            <li className={customCss.smallItem}>shipping & return</li>
            <li className={customCss.smallItem}>terms & condition</li>
          </ul>
        </div>
        {/* end of information */}
        {/* lets get in touch */}
        <div>
          <h1 className={customCss.headLine}>lets get in touch</h1>
          <p className="capitalize">
            signup now to get 10% off
            <br /> for each payment action
          </p>
        </div>
      </div>
      {/* footer line */}
      <div className="p-1 flex justify-center capitalize w-full bg-cyan-600 text-white">
        <p>all copy &copy; right received {currentYear}</p>
      </div>
    </>
  );
}

const customCss = {
  headLine: "text-4xl capitalize",
  smallItem:
    "capitalize text-gray-400 hover:text-white cursor-pointer transition-all duration-150",
};
