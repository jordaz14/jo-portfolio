import React from "react";

export default function TitleText({ className, children }: any) {
  return (
    <h1 className={`${className} text-[65px] md:text-[100px] text-[--theme-snow] select-none`}>
      {children}
    </h1>
  );
}
