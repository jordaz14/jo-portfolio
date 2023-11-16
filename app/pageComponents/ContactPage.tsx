import React from "react";

import { motion } from "framer-motion";

import PageWrap from "../components/PageWrap";
import PageTitle from "../components/PageTitle";
import PageFooter from "../components/PageFooter";
import TitleText from "../components/TitleText";
import Icon from "../components/Icon";

export default function ContactPage() {
  return (
    <>
      <PageWrap>
        <PageTitle>contact</PageTitle>
        <div className="absolute my-auto top-[18%] md:top-[22%]">
          <TitleText>
            by my window in <br /> harlem, nyc <br /> wondering...
          </TitleText>
        </div>
      </PageWrap>
      {/* Icon Footer */}
      <div className="w-[350px] absolute bottom-3 left-1/2 -translate-x-1/2 md:left-[85%] flex justify-around">
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
