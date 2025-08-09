import Navbar from './Navbar'; // Make sure this import is added
import myphoto from '../assets/myphoto.jpg';
import { Download } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <img
          src={myphoto}
          alt="My profile"
          className="w-40 h-40 rounded-full border-4 border-blue-500 mb-6 animate-fade-in"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">
          Hi, I'm <span className="text-blue-500">Jerome</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-600 dark:text-gray-300 animate-fade-in">
          A passionate Web Developer building fast, elegant, and responsive websites using modern tools like React and Tailwind CSS.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 glow-purple"
          data-aos="fade-up"
          data-aos-delay="500"
          >
          <Download className="mr-2" size={20} />
          Download Resume
        </a>
      </section>
    </>
  );
}
