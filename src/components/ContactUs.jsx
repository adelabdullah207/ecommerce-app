import React from "react";

export default function ContactUs() {
  return (
    <section className="w-[97%] m-auto my-10 min-h-[100vh]">
      <div className=" w-full flex justify-center flex-col items-center">
        <h1 className="capitalize mb-5 text-2xl">contact form</h1>
        <input
          className={`${customStyle.inputStyle}`}
          type="text"
          placeholder="enter your email"
        />
        <textarea
          className={`${customStyle.inputStyle}`}
          type="text"
          placeholder="enter your message"
          maxLength={200}
          rows={10}
        />
        <input
          type="button"
          value="submit"
          className="bg-cyan-700 hover:bg-cyan-800 transition-all duration-200 cursor-pointer text-white p-2 rounded-md w-full lg:w-[50%]"
        />
      </div>
    </section>
  );
}

const customStyle = {
  inputStyle:
    "bg-gray-100 p-2 rounded-md lg:w-[50%] w-full mb-5 outline-0 border-b-2 border-transparent focus:border-cyan-700 transition-all duration-200",
};
