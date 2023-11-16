import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PageTitle from "../components/PageTitle";
import PageWrap from "../components/PageWrap";
import Icon from "../components/Icon";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

export default function ProjectsPage() {
  const projectObject = {
    mahjong: {
      name: "mahjong social",
      desc: "a booking app",
      image: "/mahjong.png",
      github: "https://github.com/jordaz14/Ecom_Mahjong",
    },
    corner: {
      name: "corner hair salon",
      desc: "an ecom app",
      image: "/scissor.png",
      github: "https://github.com/jordaz14/BookingApp_Salon",
    },
  };

  const [project, setProject] = useState(projectObject.mahjong);

  const toggleProject = () => {
    if (project.name == projectObject.mahjong.name) {
      setProject(projectObject.corner);
    } else {
      setProject(projectObject.mahjong);
    }
  };

  return (
    <>
      <PageWrap>
        <PageTitle>projects</PageTitle>
        <div className="flex flex-col items-center justify-center rounded-full mx-auto">
          <div className="w-screen flex justify-around items-center relative">
            <TitleText
              className={
                "hidden 2xl:block absolute left-[12%] top-3 -translate-x-1/4 text-center"
              }
            >
              {project.name}
            </TitleText>
            <motion.div
              className="bg-[--theme-snow] rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] flex justify-center items-center"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={project.image}
                width={150}
                height={150}
                alt={`${project.name} logo`}
                onDragStart={(event) => event.preventDefault()}
              ></Image>
            </motion.div>
            <TitleText
              className={
                "hidden 2xl:block absolute right-[15%] bottom-3 translate-x-1/4 text-center"
              }
            >
              {project.desc}
            </TitleText>
            <div className="bg-[--theme-snow] h-[2px] w-[500%] absolute top-[50%] -left-[200%] -z-50"></div>
          </div>
          {/*Desktop View */}
          <div className="hidden md:block h-[30px] w-[2px] bg-[--theme-snow] mx-auto"></div>
          {/*Mobile View */}
          <div className="2xl:hidden">
            <div className="h-[10px] w-[2px] bg-[--theme-snow] mx-auto"></div>
            <BodyText>{project.name} </BodyText>
            <div className="h-[0px] w-[2px] bg-[--theme-snow] mx-auto mt-3"></div>
          </div>
          <div className=" w-[300px] flex justify-around items-center">
            <Icon img="left" onClick={toggleProject} />
            <a href={project.github} target="_blank">
            <Icon img="github" />
            </a>
            <Icon img="right" onClick={toggleProject} />
          </div>
        </div>
      </PageWrap>
    </>
  );
}
