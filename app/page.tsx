"use client";
import { redirect } from "next/navigation";

import LandingPage from "./pageComponents/LandingPage";
import ContactPage from "./pageComponents/ContactPage";
import ProjectsPage from "./pageComponents/ProjectsPage";
import AboutPage from "./pageComponents/AboutPage";
import LoadingPage from "./pageComponents/LoadingPage";

export default function Home() {
  return (
    <>
      <main
        className="h-[100svh] w-screen carousel carousel-vertical overflow-x-hidden"
        onLoad={() => {
          history.replaceState({}, document.title, ".");;
        }}
      >
        <LoadingPage />
        <section id="landing" className="carousel-item h-full w-full relative">
          <LandingPage />
        </section>
        <section
          id="about"
          className="carousel-item h-full bg-[--theme-gray] relative"
        >
          <AboutPage />
        </section>
        <section
          id="projects"
          className="carousel-item h-full bg-[--theme-gray] relative"
        >
          <ProjectsPage />
        </section>
        <section
          id="contact"
          className="carousel-item h-full bg-[--theme-gray] relative"
        >
          <ContactPage />
        </section>
      </main>
    </>
  );
}
