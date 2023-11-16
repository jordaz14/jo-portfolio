"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LoadingPage() {
  const [display, setDisplay] = useState("block");

  return (
    <>
      <motion.div
        className={`${display} h-screen w-screen bg-[--theme-snow] absolute z-10`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 5,
          duration: 2,
        }}
        onAnimationComplete={() => setDisplay("hidden")}
      >
        <motion.div
          className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1, duration: 4 }}
        >
          <motion.span
            animate={{ y: [-500, 0] }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Image src="/star.png" width={50} height={50} alt="Star Icon" onDragStart={(event)=> event.preventDefault()} />
          </motion.span>
          <Image
            src="/mountain.svg"
            width={100}
            height={100}
            alt="Mountain Icon"
            onDragStart={(event)=> event.preventDefault()}
          />
          <p className="text-black select-none">hi, how are you</p>
        </motion.div>
      </motion.div>
    </>
  );
}
