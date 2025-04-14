import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <div className="w-[97%] m-auto flex flex-col items-center  mt-6 min-h-[100vh]">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:w-[40%] w-full h-full "
          src="https://img.freepik.com/free-vector/office-people-discuss-about-business-growth-described-showing-graph_1150-40338.jpg?t=st=1743615610~exp=1743619210~hmac=e86330e0cfe0f43210065c39e82868202b05d3357c1cfadf997d9b10581306d3&w=1380"
          title="about image"
          loading="lazy"
        />
        <p className="capitalize">
          this market was founded in 1999,
          <br />
          we hope that you find what you want here
        </p>
      </div>
    </>
  );
}
