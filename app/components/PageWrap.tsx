import React from "react";

export default function PageWrap({ children, className }: any) {
  return (
    <>
      <div className={`${className} my-auto h-[90%] md:h-[99%] mx-auto w-[96%] md:w-[98%] relative`}>{children}</div>
    </>
  );
}
