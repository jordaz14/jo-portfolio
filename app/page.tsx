import LandingPage from "./landingPage/LandingPage";
import ContactPage from "./contactPage/ContactPage";
import ProjectsPage from "./projectsPage/ProjectsPage";
import AboutPage from "./aboutPage/AboutPage";

export default function Home() {
  return (
    <main className="h-screen w-screen carousel carousel-vertical">
      <section className="carousel-item h-full w-full relative">
        <LandingPage />
      </section>
      <section className="carousel-item h-full bg-[--theme-gray] relative">
        <AboutPage />
      </section>
      <section className="carousel-item h-full bg-[--theme-gray] relative">
        <ProjectsPage />
      </section>
      <section className="carousel-item h-full bg-[--theme-gray] relative">
        <ContactPage />
      </section>
    </main>
  );
}
