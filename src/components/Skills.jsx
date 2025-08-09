import Navbar from './Navbar';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, aos: 'fade-up' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, aos: 'fade-up' },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, aos: 'fade-up' },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, aos: 'fade-up' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, aos: 'zoom-in' },
  { name: 'Vite', icon: <SiVite className="text-purple-500" />, aos: 'zoom-in' },
  { name: 'GitHub', icon: <FaGithub className="text-white" />, aos: 'zoom-in' },
];

export default function Skills() {
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-aos={skill.aos}
                data-aos-delay={index * 100}
                className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="mt-2 text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
