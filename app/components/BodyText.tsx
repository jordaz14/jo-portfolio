import React from "react";

export default function BodyText({ className, children }: any) {
  return (
    <p className={`${className} text-[40px] text-[--theme-snow] select-none`}>{children}</p>
  );
}
