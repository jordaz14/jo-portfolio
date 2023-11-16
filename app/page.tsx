"use client";

import LandingPage from "./pageComponents/LandingPage";
import ContactPage from "./pageComponents/ContactPage";
import ProjectsPage from "./pageComponents/ProjectsPage";
import AboutPage from "./pageComponents/AboutPage";
import LoadingPage from "./pageComponents/LoadingPage";

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen carousel carousel-vertical overflow-hidden">
        <LoadingPage />
        <section id="item1" className="carousel-item h-full w-full relative">
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
