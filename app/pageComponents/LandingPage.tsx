import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PageWrap from "../components/PageWrap";
import PageFooter from "../components/PageFooter";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

export default function LandingPage() {
  return (
    <>
      <PageWrap>
        <div className="flex flex-col bg-purple-100 mt-[15%]">
          <div>
            <TitleText className={"text-black text-center"}>
              Julian Ordaz
            </TitleText>
            <motion.div
              className="bg-black h-[2px] w-[500%] absolute top-[25%] md:top-[40%] -left-[200%]"
              animate={{ x: [-5000, 0] }}
              transition={{ delay: 5, duration: 2 }}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <motion.a href="#about" whileHover={{ scale: 1.1 }}>
              <BodyText className="text-black hover:underline">about</BodyText>
            </motion.a>
            <motion.a href="#projects" whileHover={{ scale: 1.1 }}>
              <BodyText className="text-black hover:underline">
                projects
              </BodyText>
            </motion.a>
            <motion.a href="#contact" whileHover={{ scale: 1.1 }}>
              <BodyText className="text-black hover:underline">
                contact
              </BodyText>
            </motion.a>
          </div>
        </div>
      </PageWrap>
      <div className="flex flex-col justify-center items-center absolute -bottom-2 left-1/2 -translate-x-1/2" onDragStart={(event)=> event.preventDefault()}>
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
