import React from "react";
import Image from "next/image";

import PageTitle from "../components/PageTitle";
import PageWrap from "../components/PageWrap";
import Icon from "../components/Icon";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

export default function ProjectsPage() {
  return (
    <>
      <PageWrap>
        <PageTitle>projects</PageTitle>
        <div className=" flex flex-col items-center rounded-full absolute left-[50%] top-[55%] md:top-[60%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-screen flex justify-around items-center relative">
            <TitleText
              className={
                "hidden md:block absolute left-[15%] -translate-x-1/4 text-center"
              }
            >
              mahjong <br></br>social
            </TitleText>
            <div className="bg-[--theme-snow] rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] flex justify-center items-center">
              <Image
                src={"/mahjong.png"}
                width={150}
                height={150}
                alt="Mahjong Icon"
              ></Image>
              <div className="bg-[--theme-snow] h-[2px] w-[500%] absolute top-[50%] -left-[200%] -z-50"></div>
            </div>
          </div>
          {/*Desktop View */}
          <div className="hidden md:block h-[200px] w-[2px] bg-[--theme-snow] mx-auto"></div>
          {/*Mobile View */}
          <div className="md:hidden">
            <div className="h-[50px] w-[2px] bg-[--theme-snow] mx-auto"></div>
            <BodyText>mahjong social </BodyText>
            <div className="h-[50px] w-[2px] bg-[--theme-snow] mx-auto"></div>
          </div>
          <div className=" w-[300px] flex justify-around items-center">
            <Icon img="left" />
            <Icon img="github" />
            <Icon img="right" />
          </div>
        </div>
      </PageWrap>
    </>
  );
}
