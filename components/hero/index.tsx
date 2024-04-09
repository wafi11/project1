"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { AiOutlineSearch } from "react-icons/ai";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-screen relative" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center text-center text-gray-100 p-4 gap-5">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-100/75">Welcome to NextTravel</motion.h1>
            <motion.h2 className="text-xl sm:text2xl md:text-3xl lg:text-5xl py-3">Enjoy your Journey with Us.</motion.h2>
            <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border border-gray-100/10
            p-1 rounded-md text-neutral-100 bg-gray-100/10 relative">
                <div>
                  <input type="text " className="bg-transparent p-1 w-[300px] sm:w-[400px] focus:outline-none px-2 text-emerald-500/75" placeholder="Search for Destination"/>
                </div>
                <div>
                  <button className="absolute top-1 right-2 "> 
                    <AiOutlineSearch size={30} className="icon" style={{color : '#ffffff'}}/>
                  </button>
                </div>
            </form>
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>More Info →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
