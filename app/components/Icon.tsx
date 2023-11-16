import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Icon({ img }: any) {
  return (
    <>
      {/*Desktop Version*/}
      <motion.div className="hidden bg-[--theme-snow] border-solid rounded-full h-[80px] w-[80px] md:flex justify-center items-center" whileHover={{ scale: 1.1 }}>
        <Image src={`/${img}.png`} width={50} height={50} alt={`${img} icon`} />
      </motion.div>
      {/*Mobile Version*/}
      <div className="md:hidden bg-[--theme-snow] border-solid rounded-full h-[65px] w-[65px] flex justify-center items-center">
        <Image src={`/${img}.png`} width={40} height={40} alt={`${img} icon`} />
      </div>
    </>
  );
}
