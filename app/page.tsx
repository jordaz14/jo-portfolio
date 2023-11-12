export default function Home() {
  return (
    <main className="h-screen w-screen carousel carousel-vertical">
      <section className="carousel-item h-full w-full">
        <div className="bg-purple-100 my-auto h-[95%] mx-auto w-[95%]"></div>
      </section>
      <section className="carousel-item h-full bg-[--theme-gray]">
        <p className="text-[--theme-snow] sm:text-[40px]">about</p>
      </section>
      <section className="carousel-item h-full bg-[--theme-gray]">
        <p className="text-[--theme-snow]">projects</p>
      </section>
      <section className="carousel-item h-full bg-[--theme-gray]">
        <p className="text-[--theme-snow]">contact</p>
      </section>
    </main>
  );
}
