import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import myphoto from '../assets/profile.jpg';
import { Download, ArrowRight } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaUserAlt, FaCode, FaFolderOpen } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

// TypingEffect component for looping typing & deleting
function TypingEffect({ texts, typingSpeed = 150, deletingSpeed = 100, pause = 1000 }) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentText = texts[textIndex];

    if (!isDeleting && displayText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText.length === currentText.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next text and start typing
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pause / 2);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return <span>{displayText}</span>;
}

export default function Hero() {
  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
    glowX: 50,
    glowY: 50,
  });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const cardX = e.clientX - rect.left;
    const cardY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((cardY - centerY) / centerY) * 20;
    const rotateY = ((cardX - centerX) / centerX) * 20;

    const glowX = (cardX / rect.width) * 100;
    const glowY = (cardY / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glowX, glowY });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
      >
        {/* Optional Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/abstract-bg.mp4" type="video/mp4" />
        </video>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-purple-400 opacity-60 blur-sm"
              style={{
                width: `${Math.random() * 20 + 8}px`,
                height: `${Math.random() * 20 + 8}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatParticle ${8 + Math.random() * 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Background Gradient Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 animate-gradient opacity-20 z-0"></div>

        {/* Main content */}
        <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          {/* Left */}
          <div data-aos="fade-right" className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Jerome</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-purple-500">
              <TypingEffect
                texts={[
                  'Creative Frontend Developer',
                  'React Enthusiast',
                  'UI/UX Lover',
                ]}
                typingSpeed={120}
                deletingSpeed={80}
                pause={1200}
              />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Building fast, elegant, and responsive websites using modern tools like React, Tailwind CSS, and more.
            </p>

            {/* Buttons with stronger neon glow hover */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-full bg-purple-500 opacity-70 blur-xl group-hover:opacity-100 group-hover:scale-110 transition duration-300"></span>
                <span className="relative flex items-center">
                  View My Work <ArrowRight className="ml-2" size={20} />
                </span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-full bg-blue-500 opacity-70 blur-xl group-hover:opacity-100 group-hover:scale-110 transition duration-300"></span>
                <span className="relative flex items-center">
                  Contact Me
                </span>
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center relative overflow-hidden group"
              >
                <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 blur-xl group-hover:opacity-100 group-hover:scale-110 transition duration-300"></span>
                <span className="relative flex items-center">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </span>
              </a>
            </div>
          </div>

          {/* Right - Tilt Card */}
          <div
            data-aos="fade-left"
            className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-4 border-purple-500 transition-transform duration-150 hover:scale-105"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)`,
              backgroundImage: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(168, 85, 247, 0.35), transparent 60%)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
          >
            <div className="relative w-64 h-64 mx-auto mb-6" style={{ transform: `translateZ(50px)` }}>
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: `${(tilt.glowX - 50) / 5}px ${(tilt.glowY - 50) / 5}px ${
                    Math.sqrt(Math.pow(tilt.glowX - 50, 2) + Math.pow(tilt.glowY - 50, 2)) / 2
                  }px rgba(0, 0, 0, 0.4)`,
                  transition: 'box-shadow 0.1s ease-out',
                }}
              ></div>

              <img
                src={myphoto}
                alt="Profile"
                className="w-64 h-64 object-cover rounded-full border-4 border-purple-400 relative z-10"
                style={{
                  transform: `rotateX(${-tilt.x / 2}deg) rotateY(${tilt.y / 2}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
              />
            </div>

            <p
              className="text-center text-gray-600 dark:text-gray-300"
              style={{
                transform: `translateZ(20px)`,
              }}
            >
              Let's bring your ideas to life with stunning and functional websites.
            </p>
          </div>
        </div>

        {/* Tech Icons */}
        <div data-aos="fade-up" className="mt-12 flex gap-8 text-4xl text-gray-500 dark:text-gray-300 justify-center">
          <FaHtml5 className="hover:text-orange-500 transition-colors duration-300" />
          <FaCss3Alt className="hover:text-blue-500 transition-colors duration-300" />
          <FaJsSquare className="hover:text-yellow-400 transition-colors duration-300" />
          <FaReact className="hover:text-cyan-400 transition-colors duration-300" />
          <SiTailwindcss className="hover:text-teal-400 transition-colors duration-300" />
        </div>

        {/* Mini-Cards Section with stronger glowing neon hover */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* About */}
          <a
            href="#about"
            data-aos="fade-up"
            className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300 cursor-pointer block relative overflow-visible group"
            style={{ zIndex: 0 }}
          >
            <span className="absolute -inset-2 rounded-xl bg-purple-600 opacity-50 blur-3xl group-hover:opacity-90 group-hover:scale-110 transition duration-300"></span>
            <FaUserAlt size={36} className="mb-4 relative z-10" />
            <h3 className="text-xl font-bold mb-2 relative z-10">About</h3>
            <p className="relative z-10">Learn more about me, my background, and my passion for creating digital experiences.</p>
          </a>

          {/* Skills */}
          <a
            href="#skills"
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:scale-105 transition-transform duration-300 cursor-pointer block relative overflow-visible group"
            style={{ zIndex: 0 }}
          >
            <span className="absolute -inset-2 rounded-xl bg-blue-600 opacity-50 blur-3xl group-hover:opacity-90 group-hover:scale-110 transition duration-300"></span>
            <FaCode size={36} className="mb-4 relative z-10" />
            <h3 className="text-xl font-bold mb-2 relative z-10">Skills</h3>
            <p className="relative z-10">Explore my technical toolkit including HTML, CSS, JavaScript, React, Tailwind, and more.</p>
          </a>

          {/* Projects */}
          <a
            href="#projects"
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-green-500 to-teal-500 text-white hover:scale-105 transition-transform duration-300 cursor-pointer block relative overflow-visible group"
            style={{ zIndex: 0 }}
          >
            <span className="absolute -inset-2 rounded-xl bg-green-600 opacity-50 blur-3xl group-hover:opacity-90 group-hover:scale-110 transition duration-300"></span>
            <FaFolderOpen size={36} className="mb-4 relative z-10" />
            <h3 className="text-xl font-bold mb-2 relative z-10">Projects</h3>
            <p className="relative z-10">Check out the creative and functional projects I’ve built for clients and personal growth.</p>
          </a>
        </div>

        {/* Animation keyframes */}
        <style>{`
          @keyframes floatParticle {
            0%, 100% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 10s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
}
