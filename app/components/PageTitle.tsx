import React from "react";

import TitleText from "./TitleText";

export default function PageTitle({ children }: any) {
  return (
    <>
      <div className="flex -mt-6">
        <TitleText>{children}</TitleText>
        <div className="flex items-center ml-6">
          <hr className="border-[--theme-snow] border-[1px] w-screen"></hr>
        </div>
      </div>
    </>
  );
}
