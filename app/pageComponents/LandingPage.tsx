import React from "react";
import Image from "next/image";

import PageWrap from "../components/PageWrap";
import PageFooter from "../components/PageFooter";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

export default function LandingPage() {
  return (
    <>
      <PageWrap>
        <div className="absolute top-[18%] md:top-1/3 left-1/2 -translate-x-1/2">
          <div>
            <TitleText className={"text-black text-center"}>
              Julian Ordaz
            </TitleText>
            <div className="bg-black h-[2px] w-[400%] absolute top-[25%] md:top-[40%] -left-[150%]"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <a href="#item2">
              <BodyText className="text-black hover:underline">about</BodyText>
            </a>
            <a href="#item3">
              <BodyText className="text-black hover:underline">
                projects
              </BodyText>
            </a>
            <a href="#item4">
              <BodyText className="text-black hover:underline">
                contact
              </BodyText>
            </a>
          </div>
        </div>
      </PageWrap>
      <div className="flex flex-col justify-center items-center absolute -bottom-2 left-1/2 -translate-x-1/2">
        <Image src="/star.png" width={50} height={50} alt="Star Icon" />
        <Image
          src="/mountain.svg"
          width={100}
          height={100}
          alt="Mountain Icon"
        />
      </div>
      <PageFooter className={"bg-black"} />
    </>
  );
}
