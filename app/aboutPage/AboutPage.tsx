import React from "react";

import PageWrap from "../components/PageWrap";
import PageTitle from "../components/PageTitle";
import PageFooter from "../components/PageFooter";
import TitleText from "../components/TitleText";

export default function AboutPage() {
  return (
    <>
      <PageWrap>
        <PageTitle>about</PageTitle>
        <div>
        <TitleText>self-taught developer</TitleText>
        </div>
      </PageWrap>
      <PageFooter className={""}/>
    </>
  );
}
