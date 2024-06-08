"use client";
import React from "react";
import { DiJavascript } from "react-icons/di";
import { FaAngleDown, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FaC, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandReact, TbBrandRedux } from "react-icons/tb";

const Expertise = () => {
  return (
    <div className="min-h-screen px-[5%] sm:px-[10%] grid justify-items-center">
      <div className=" bg-no-repeat bg-cover bg-[url('../../public/e1.png')] md:bg-[url('../../public/e2.png')] lg:bg-[url('../../public/e3.png')] fixed h-screen w-full -z-20 opacity-50">
        <div className="w-full h-screen bg-slate-900 bg-opacity-20"></div>
      </div>
      <div className="h-screen text-slate-500 font-extrabold text-5xl sm:text-9xl grid place-content-center justify-items-center animate-[fadeUp_2s_ease-out]">
        Expertise
        <FaAngleDown
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
          className=" text-slate-300 text-4xl font-extrabold absolute bottom-[20%] animate-bounce"
        />
      </div>
      <div className="border-solid bg-slate-900 bg-opacity-80 w-[90%] md:w-[80%] border-slate-800 border-2 my-20 ">
        <h1 className="text-3xl text-white font-bold w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10">
          Coding Skills
        </h1>
        <div className="text-2xl flex justify-center text-white font-medium w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10">
          Web Development
        </div>
        <div className="font-black text-7xl md:text-8xl lg:text-9xl grid grid-cols-2 sm:grid-cols-4 gap-6 place-content-center justify-items-center py-10">
          <FaHtml5 className="text-[#e34c26]" />
          <FaCss3Alt className="text-[#264de4]" />
          <SiJavascript className="text-[#f0db4f]" />
          <SiTypescript className="text-[#007acc]" />
          <FaReact className="text-[#61dbfb]" />
          <TbBrandRedux className="text-[#764abc]" />
          <TbBrandNextjs className="text-[#05427c]" />
          <SiTailwindcss className="text-[#06b6d4]" />
        </div>
        <div className="text-2xl flex justify-center text-white font-medium w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10">
          coding language
        </div>
        <div className="font-black text-7xl md:text-8xl lg:text-9xl grid grid-cols-2 sm:grid-cols-3 gap-6 place-content-center justify-items-center py-10">
          <FaC className="text-[#264de4]" />
          <FaJava className="text-[#e34c26]" />
          <FaPython className="text-[#f0db4f]" />
        </div>
        <h1 className="text-white font-extralight w-full border-solid border-slate-800 border-y-2 py-6 px-2 sm:px-10 text-right">
          Powered By © JRR
        </h1>
      </div>
    </div>
  );
};

export default Expertise;
