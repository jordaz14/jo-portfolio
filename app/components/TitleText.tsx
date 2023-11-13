import React from "react";

export default function TitleText({ children }: any) {
  return (
    <h1 className="text-[80px] md:text-[120px] text-[--theme-snow] select-none">
      {children}
    </h1>
  );
}
