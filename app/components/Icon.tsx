import React from "react";
import Image from "next/image";

export default function Icon({ img }: any) {
  return (
    <>
      {/*Desktop Version*/}
      <div className="hidden bg-white border-solid hover:border-4 border-[--theme-gray] rounded-full h-[80px] w-[80px] md:flex justify-center items-center">
        <Image src={`/${img}.png`} width={60} height={60} alt={`${img} icon`} />
      </div>
      {/*Mobile Version*/}
      <div className="md:hidden bg-white border-solid hover:border-4 border-[--theme-gray] rounded-full h-[65px] w-[65px] flex justify-center items-center">
        <Image src={`/${img}.png`} width={40} height={40} alt={`${img} icon`} />
      </div>
    </>
  );
}
