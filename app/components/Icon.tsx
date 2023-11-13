import React from "react";
import Image from "next/image";

export default function Icon({ img }: any) {
  return (
    <>
      <div className="bg-white border-solid hover:border-4 border-[--theme-gray] rounded-full h-[90px] w-[90px] flex justify-center items-center">
        <Image src={`/${img}.png`} width={65} height={65} alt={`${img} icon`} />
      </div>
    </>
  );
}
