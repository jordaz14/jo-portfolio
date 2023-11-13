"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

import PageWrap from "../components/PageWrap";
import PageTitle from "../components/PageTitle";
import BodyText from "../components/BodyText";

export default function AboutPage() {
  return (
    <>
      <PageWrap>
        <PageTitle>about</PageTitle>
        <div className="absolute my-auto [top:26%]">
          <div className="hidden md:block">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                "self-taught developer",
                1000,
                "self-taught javascript",
                1000,
                "self-taught html",
                1000,
                "self-taught css",
                1000,
              ]}
              speed={40}
              cursor={false}
              style={{ fontSize: "120px", color: "white" }}
              repeat={Infinity}
            />
          </div>
          <div className="block md:hidden">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1000,
                "self-taught developer",
                1000,
                "self-taught javascript",
                1000,
                "self-taught html",
                1000,
                "self-taught css",
                1000,
              ]}
              speed={40}
              cursor={false}
              style={{ fontSize: "80px", color: "white" }}
              repeat={Infinity}
            />
          </div>
          <BodyText>
            exploring the intersection of design, technology, and purpose
          </BodyText>
        </div>
      </PageWrap>
    </>
  );
}
