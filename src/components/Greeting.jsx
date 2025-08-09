import Navbar from "./Navbar";

const Greeting = () => {
  return (
    <>
      <Navbar />
      <section id="greeting" className="min-h-screen flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
            Hello, I'm Jerome 👋
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            An aspiring front-end web developer on a journey to create meaningful, elegant, and responsive web experiences.
          </p>
        </div>
      </section>
    </>
  );
};

export default Greeting;
