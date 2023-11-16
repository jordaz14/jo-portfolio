import React from "react";

import { motion } from "framer-motion";

import PageWrap from "../components/PageWrap";
import PageTitle from "../components/PageTitle";
import TitleText from "../components/TitleText";
import Icon from "../components/Icon";

export default function ContactPage() {
  return (
    <>
      <PageWrap>
        <PageTitle>contact</PageTitle>
        <div className="mt-3 md:mt-6">
          <TitleText>
            by my window, <br /> harlem, nyc, <br /> wondering
          </TitleText>
        </div>
      </PageWrap>
      {/* Icon Footer */}
      <div className="w-[350px] absolute bottom-6 -left-4 md:-translate-x-1/2 md:left-[85%] flex justify-around">
        <a href="mailto:1julianordaz@gmail.com">
          <Icon img="email" />
        </a>
        <a href="https://www.linkedin.com/in/julianordaz/" target="_blank">
          <Icon img="linkedin" />
        </a>
        <a href="https://github.com/jordaz14" target="_blank">
          <Icon img="github" />
        </a>
      </div>
    </>
  );
}
