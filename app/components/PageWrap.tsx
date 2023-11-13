import React from "react";

export default function PageWrap({ children }: any) {
  return (
    <>
      <div className="my-auto h-[98%] md:h-[99%] mx-auto w-[96%] md:w-[98%] relative">{children}</div>
    </>
  );
}
