import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { FaHeart, FaLaptopCode, FaBullseye } from 'react-icons/fa';

function TypingText({ text, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setDisplayedText(text.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed]);

  return <span>{displayedText}</span>;
}

export default function About() {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-purple-600 dark:text-purple-400"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            About Me
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Card 1 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-purple-400 hover:shadow-purple-500/50 transition-shadow duration-500"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <FaHeart
                  className="text-red-500 text-3xl mr-4 animate-pulse"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                />
                <FaLaptopCode
                  className="text-purple-600 dark:text-purple-400 text-3xl"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                Passion & Skills
              </h3>
              <p className="text-lg leading-relaxed">
                <TypingText 
                  text="I'm a self-taught web developer passionate about building intuitive, beautiful, and high-performing websites and applications. I love turning ideas into real-world solutions using modern technologies like React, Tailwind CSS, and JavaScript." 
                  speed={30} 
                />
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-purple-400 hover:shadow-purple-500/50 transition-shadow duration-500"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <FaBullseye
                  className="text-green-500 text-3xl mr-4 animate-bounce"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1200"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
                My Mission
              </h3>
              <p className="text-lg leading-relaxed">
                <TypingText 
                  text="My goal is to help people and businesses create an online presence that stands out, while continuously improving my skills through real-world projects and collaborations. I strive to deliver quality work that brings value and growth to my clients and community." 
                  speed={30} 
                />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
