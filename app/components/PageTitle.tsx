import React from "react";

import TitleText from "./TitleText";

export default function PageTitle({ children }) {
  return (
    <>
      <div className="flex -mt-6">
        <TitleText>{children}</TitleText>
        <div className="flex items-center ml-6">
          <hr className="border-[--theme-snow] border-2 w-screen"></hr>
        </div>
      </div>
    </>
  );
}
