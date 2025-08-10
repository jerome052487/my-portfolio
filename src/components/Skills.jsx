import { useState } from 'react';
import Navbar from './Navbar';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';
import { MdAnimation } from 'react-icons/md';

const skills = [
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-600" />,
    aos: 'fade-up',
    description: 'The standard markup language for creating modern, accessible web pages.',
    tools: ['Semantic HTML', 'Forms', 'SEO Best Practices'],
    level: 'Expert'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-500" />,
    aos: 'fade-up',
    description: 'Used for designing and styling beautiful web pages.',
    tools: ['Flexbox', 'Grid', 'Animations'],
    level: 'Advanced'
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare className="text-yellow-400" />,
    aos: 'fade-up',
    description: 'Programming language to make websites interactive and dynamic.',
    tools: ['ES6+', 'DOM Manipulation', 'Fetch API'],
    level: 'Advanced'
  },
  {
    name: 'React',
    icon: <FaReact className="text-cyan-400" />,
    aos: 'fade-up',
    description: 'JavaScript library for building fast and reusable UI components.',
    tools: ['React Router', 'Hooks', 'State Management'],
    level: 'Advanced'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-teal-400" />,
    aos: 'zoom-in',
    description: 'Utility-first CSS framework for building custom designs quickly.',
    tools: ['Responsive Design', 'Dark Mode', 'Custom Themes'],
    level: 'Advanced'
  },
  {
    name: 'Vite',
    icon: <SiVite className="text-purple-500" />,
    aos: 'zoom-in',
    description: 'Next generation frontend tooling for faster builds.',
    tools: ['Hot Module Replacement', 'Plugins', 'Optimized Builds'],
    level: 'Intermediate'
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="text-white" />,
    aos: 'zoom-in',
    description: 'Platform for version control and code collaboration.',
    tools: ['Repositories', 'Pull Requests', 'Issues'],
    level: 'Advanced'
  },
  {
    name: 'AOS Animations',
    icon: <MdAnimation className="text-purple-400" />,
    aos: 'fade-up',
    description: 'Animate on scroll library for adding smooth animations.',
    tools: ['Fade Effects', 'Zoom Effects', 'Scroll Triggers'],
    level: 'Intermediate'
  }
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      <Navbar />
      <section
        id="skills"
        className="py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10" data-aos="fade-down">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos={skill.aos}
                data-aos-delay={index * 120}
                className="relative flex flex-col items-center justify-center p-6
                  bg-gray-100 dark:bg-gray-800 rounded-xl
                  shadow-md border-2 border-transparent cursor-pointer
                  transition-transform duration-300
                  hover:scale-105 hover:rotate-1 group"
                onClick={() => setSelectedSkill(skill)}
              >
                {/* Glow effect */}
                <span className="absolute -inset-1 rounded-xl opacity-0 bg-purple-400 transition-opacity duration-300 group-hover:opacity-80"></span>
                <span className="absolute -inset-2 rounded-xl opacity-0 bg-purple-400 blur-3xl transition-opacity duration-300 delay-100 group-hover:opacity-60"></span>

                <div className="relative text-5xl mb-3">{skill.icon}</div>
                <p className="relative mt-2 text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedSkill(null)}
            >
              ✕
            </button>
            <div className="text-5xl mb-3">{selectedSkill.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
            <p className="mb-3">{selectedSkill.description}</p>
            <p className="text-sm mb-2"><strong>Tools:</strong> {selectedSkill.tools.join(', ')}</p>
            <p className="text-sm"><strong>Level:</strong> {selectedSkill.level}</p>
          </div>
        </div>
      )}
    </>
  );
}
