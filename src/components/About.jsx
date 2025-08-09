import Navbar from './Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="py-20 px-6 text-gray-800 dark:text-white"
        data-aos="fade"
        data-aos-duration="800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            About Me
          </h2>

          <p
            className="text-lg md:text-xl leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            I'm a self-taught web developer passionate about building intuitive,
            beautiful, and high-performing websites and applications. I love
            turning ideas into real-world solutions using modern technologies
            like React, Tailwind CSS, and JavaScript.
          </p>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            My goal is to help people and businesses create an online presence
            that stands out while continuously improving my skills through
            real-world projects.
          </p>
        </div>
      </section>
    </>
  );
}
