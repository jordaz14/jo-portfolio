import React from "react";

export default function PageWrap({ children }) {
  return (
    <>
      <div className="bg-black my-auto h-[99%] mx-auto w-[98%]">
        {children}
      </div>
    </>
  );
}
