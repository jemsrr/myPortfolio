"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  MdEmail,
  MdOutlineTextRotationAngledown,
  MdPhone,
} from "react-icons/md";
const Contact = () => {
  return (
    <div className="min-h-screen px-[5%] sm:px-[10%] grid justify-items-center">
      <div className="h-screen text-slate-500 font-extrabold text-5xl sm:text-9xl grid place-content-center justify-items-center animate-[fadeUp_2s_ease-out]">
        contact
        <FaAngleDown
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
          className=" text-slate-300 text-4xl font-extrabold absolute bottom-[20%] animate-bounce"
        />
      </div>
      <div className="border-solid w-[90%] md:w-[80%] border-slate-800 border-2 pb-20 ">
        <h1 className="text-3xl text-white font-bold w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10">
          Contacts Info
        </h1>
        <div className="grid md:flex md:justify-between items-center py-32 text-slate-500">
          <div className="p-2 sm:p-10 border-solid border-slate-800 border-y-2 border-r-2 w-[100%] md:w-[48%] flex flex-col items-center gap-6">
            <MdEmail className=" text-5xl" />
            <h1 className="text-sm sm:text-xl">jemsrakholiya4949@gmail.com</h1>
          </div>
          <div className="p-2 sm:p-10 border-solid border-slate-800 border-y-2 border-l-2 w-[100%] md:w-[48%] flex flex-col items-center gap-6">
            <MdPhone className=" text-5xl" />
            <h1 className=" text-sm sm:text-xl">+91 63544-51462</h1>
          </div>
        </div>
        <h1 className="text-white font-extralight w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10 text-right">
          Powered By © JRR
        </h1>
      </div>
    </div>
  );
};

export default Contact;
