import LandingPage from "./pageComponents/LandingPage";
import ContactPage from "./pageComponents/ContactPage";
import ProjectsPage from "./pageComponents/ProjectsPage";
import AboutPage from "./pageComponents/AboutPage";

export default function Home() {
  return (
    <main className="h-screen w-screen carousel carousel-vertical overflow-x-hidden">
      <section id="item1" className="carousel-item h-full w-full relative">
        <LandingPage />
      </section>
      <section id="item2" className="carousel-item h-full bg-[--theme-gray] relative">
        <AboutPage />
      </section>
      <section id="item3" className="carousel-item h-full bg-[--theme-gray] relative">
        <ProjectsPage />
      </section>
      <section id="item4" className="carousel-item h-full bg-[--theme-gray] relative">
        <ContactPage />
      </section>
    </main>
  );
}
