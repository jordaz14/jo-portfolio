"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import PageWrap from "../components/PageWrap";
import PageTitle from "../components/PageTitle";
import BodyText from "../components/BodyText";

export default function AboutPage() {
  const aboutList = ["developer", "javascript", "html / css"];
  const [about, setAbout] = useState(aboutList[0]);

  const changeAbout = () => {
    aboutList.forEach((el, index) => {
      if (about == aboutList[index]) {
        setAbout(aboutList[index + 1]);
      }
      if (about == aboutList[aboutList.length - 1]) {
        setAbout(aboutList[0]);
      }
    });
  };

  return (
    <>
      <PageWrap>
        <PageTitle>about</PageTitle>
        <div className="mt-2 md:mt-16">
          <div className="flex flex-col md:flex-row h-fit w-fit">
            <h1 className="text-[--theme-snow] select-none text-[65px] md:text-[100px]">
              self-taught&nbsp;
            </h1>
            <motion.h1
              className="underline text-[--theme-snow] select-none text-[65px] md:text-[100px]"
              onClick={changeAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {about}
            </motion.h1>
          </div>
          <BodyText>
            exploring the intersection of design, technology, and purpose
          </BodyText>
        </div>
      </PageWrap>
    </>
  );
}
